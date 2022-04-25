import { utcToZonedTime } from 'date-fns-tz';
import createWeatherCard from './card';

const weatherCall = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/onecall?';
const geoCall = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=';
const timeZoneCall = 'https://maps.googleapis.com/maps/api/timezone/json?key=AIzaSyBXB5H5NVNml9c98Psjn781ujufoyb5Th8&timestamp=1331161200&location=';
const apiKey = '&appid=f6fe573217fdba1db21f1000d71591e2';

let city = '';
let timeZoneId = '';

function getGeoInfo() {
  const call = geoCall + city + apiKey;
  return fetch(call, { mode: 'cors' })
    .then((response) => response.json());
}

function getWeatherInfo(lat, lon) {
  const call = `${weatherCall}lat=${lat}&lon=${lon}&units=metric${apiKey}`;
  return fetch(call, { mode: 'cors' })
    .then((response) => response.json());
}

function getTimeZone(lat, lon) {
  const call = `${timeZoneCall + lat},${lon}`;
  return fetch(call, { mode: 'cors' })
    .then((response) => response.json());
}

function convertToLocalTime(unixDateTime) {
  const utcDateTime = new Date(unixDateTime * 1000).toISOString();
  return utcToZonedTime(utcDateTime, timeZoneId);
}

function getCurrentWeather(currentWeather) {
  const currentWeatherInfo = currentWeather.weather[0];
  const currentWeatherDescription = currentWeatherInfo.description;
  const currentWeatherIcon = currentWeatherInfo.icon;

  const currentTemperature = currentWeather.temp;
  const currentTime = convertToLocalTime(currentWeather.dt);

  const currentFeelsLike = currentWeather.feels_like;
  const currentHumidity = currentWeather.humidity;
  const currentWindSpeed = currentWeather.wind_speed;
  let currentChanceOfRain = 0;
  if ('rain' in currentWeather) {
    currentChanceOfRain = currentWeather.rain['1h'] * 100;
  }

  return {
    currentWeatherDescription,
    currentWeatherIcon,
    currentTemperature,
    currentTime,
    currentFeelsLike,
    currentHumidity,
    currentWindSpeed,
    currentChanceOfRain,
  };
}

function getForecast(forecast, arrayLength, type) {
  const forecastArray = [];

  for (let i = 1; i < arrayLength; i++) {
    const forecastItem = forecast[i];
    let forecastTemp = '';
    if (type === 'daily') {
      forecastTemp = forecastItem.temp.day;
    } else {
      forecastTemp = forecastItem.temp;
    }
    const forecastCard = createWeatherCard(
      convertToLocalTime(forecastItem.dt),
      forecastTemp,
      forecastItem.weather[0].icon,
    );
    forecastArray.push(forecastCard);
  }
  return forecastArray;
}

async function getWeather(citySearched) {
  try {
    city = citySearched;
    const geoInfo = await getGeoInfo();
    const { lat } = geoInfo[0];
    const { lon } = geoInfo[0];
    const timeZoneInfo = await getTimeZone(lat, lon);
    timeZoneId = timeZoneInfo.timeZoneId;
    const weatherInfo = await getWeatherInfo(lat, lon);
    console.log(weatherInfo);
    const dailyForecast = getForecast(weatherInfo.daily, 8, 'daily');
    const hourlyForecast = getForecast(weatherInfo.hourly, 25, 'hourly');
    const currentWeather = getCurrentWeather(weatherInfo.current);
    return [currentWeather, dailyForecast, hourlyForecast];
  } catch (error) {
    console.log(error);
  }
}

export { getWeather };
