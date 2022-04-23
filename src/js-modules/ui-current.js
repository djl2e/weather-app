import createWeatherCard from './card';

import feelsIconImg from '../img/feels-like.png';
import humidityIconImg from '../img/humidity.png';
import chanceRainIconImg from '../img/chance-of-rain.png';
import windIconImg from '../img/wind.png';
import searchIconImg from '../img/search.png';

import sunIcon from '../img/sun.png';
import moonIcon from '../img/moon.png';
import cloudDayIcon from '../img/cloud-day.png';
import cloudNightIcon from '../img/cloud-night.png';
import cloudIcon from '../img/cloud.png';
import heavyCloudIcon from '../img/heavy-cloud.png';
import showerRainIcon from '../img/shower-rain.png';
import rainIcon from '../img/rain.png';
import thunderstormIcon from '../img/thunderstorm.png';
import snowIcon from '../img/snow.png';
import mistIcon from '../img/mist.png';

// selectors for current weather display
const currentWeatherDescription = document.querySelector('#current-weather-description');
const currentCity = document.querySelector('#current-city');
const currentDate = document.querySelector('#current-date');
const currenTime = document.querySelector('#current-time');
const currentTemperature = document.querySelector('#current-temperature');
const currentIcon = document.querySelector('#current-icon');

const searchCityBar = document.querySelector('#search-city');

// selectors for accessory display
const feelsTemperature = document.querySelector('#feels-container .temperature');
const humidityLevel = document.querySelector('#humidity-container .temperature');
const chanceOfRain = document.querySelector('#rain-container .temperature');
const windSpeed = document.querySelector('#wind-container .temperature');

function getIconImage(iconName) {
  switch (iconName) {
    case 'sun':
      return sunIcon;
    case 'moon':
      return moonIcon;
    case 'cloud-day':
      return cloudDayIcon;
    case 'cloud-night':
      return cloudNightIcon;
    case 'cloud':
      return cloudIcon;
    case 'heavy-cloud':
      return heavyCloudIcon;
    case 'shower-rain':
      return showerRainIcon;
    case 'rain':
      return rainIcon;
    case 'thunderstorm':
      return thunderstormIcon;
    case 'snow':
      return snowIcon;
    default:
      return mistIcon;
  }
}

function capitalizeString(description) {
  let words = description.split(' ');
  words = words.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
  return words.join(' ');
}

function changeCurrentDisplay(description, city, dateTime, temperature, iconId) {
  const currentWeatherCard = createWeatherCard(dateTime, temperature, iconId);

  currentWeatherDescription.textContent = capitalizeString(description);
  currentCity.textContent = capitalizeString(city);
  currentDate.textContent = currentWeatherCard.getFullDate();
  currenTime.textContent = currentWeatherCard.getTime();
  currentTemperature.textContent = currentWeatherCard.getTemperature();
  currentIcon.src = getIconImage(currentWeatherCard.getIconName());
}

function setAccessoryIcons() {
  const feelsIcon = document.querySelector('#feels-container img');
  const humidityIcon = document.querySelector('#humidity-container img');
  const chanceRainIcon = document.querySelector('#rain-container img');
  const windIcon = document.querySelector('#wind-container img');
  const searchIcon = document.querySelector('#search-button');

  feelsIcon.src = feelsIconImg;
  humidityIcon.src = humidityIconImg;
  chanceRainIcon.src = chanceRainIconImg;
  windIcon.src = windIconImg;
  searchIcon.src = searchIconImg;
}

function changeAccessoryDisplay(feels, humidity, rain, wind) {
  feelsTemperature.textContent = `${feels.toFixed(0).toString()} °C`;
  humidityLevel.textContent = `${humidity} %`;
  chanceOfRain.textContent = `${rain} %`;
  windSpeed.textContent = `${wind} km/h`;
}

function changeTopDisplay(
  description,
  city,
  dateTime,
  temperature,
  iconId,
  feels,
  humidity,
  rain,
  wind,
) {
}

export {
  changeCurrentDisplay, changeAccessoryDisplay, setAccessoryIcons, getIconImage,
};
