import './style.css';
import getWeather from './js-modules/weather';
import {
  setup, changeTopDisplay, changeBottomDisplay, changeModeDisplay, changeSlider, changeUnitDisplay,
} from './js-modules/ui';

const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-city');
const dailyButton = document.querySelector('#daily');
const hourlyButton = document.querySelector('#hourly');
const slideLeft = document.querySelector('#slide-left');
const slideRight = document.querySelector('#slide-right');
const celButton = document.querySelector('#celsius');
const fahrButton = document.querySelector('#fahrenheit');
let city = 'Seoul';
let unit = 'metric';

async function main() {
  const weatherInfo = await getWeather(city, unit);
  const currentWeather = weatherInfo[0];
  const dailyForecast = weatherInfo[1];
  const hourlyForecast = weatherInfo[2];

  changeTopDisplay(
    currentWeather.currentWeatherDescription,
    city,
    currentWeather.currentTime,
    currentWeather.currentTemperature,
    currentWeather.currentWeatherIcon,
    currentWeather.currentFeelsLike,
    currentWeather.currentHumidity,
    currentWeather.currentChanceOfRain,
    currentWeather.currentWindSpeed,
    unit,
  );

  changeBottomDisplay(dailyForecast, hourlyForecast);
}

function changeToNewCity(newCity) {
  if (newCity.length !== 0) {
    city = newCity;
    searchInput.value = '';
    main();
    changeModeDisplay('daily');
  }
}

function changeCity() {
  searchButton.addEventListener('click', () => {
    changeToNewCity(searchInput.value);
  });
  document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      changeToNewCity(searchInput.value);
    }
  });
}

function changeMode() {
  dailyButton.addEventListener('click', () => {
    changeModeDisplay('daily');
  });
  hourlyButton.addEventListener('click', () => {
    changeModeDisplay('hourly');
  });
}

function changeUnit() {
  celButton.addEventListener('click', () => {
    if (unit === 'imperial') {
      unit = 'metric';
      main();
    }
  });
  fahrButton.addEventListener('click', () => {
    if (unit === 'metric') {
      unit = 'imperial';
      main();
    }
  });
}

function slide() {
  slideLeft.addEventListener('click', () => {
    changeSlider('left');
  });
  slideRight.addEventListener('click', () => {
    changeSlider('right');
  });
}

setup();
main();
changeCity();
changeMode();
slide();
changeUnit();
