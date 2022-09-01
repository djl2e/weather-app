import './style.css';
import getWeather from './js-modules/weather';
import {
  setup, changeTopDisplay, changeBottomDisplay, changeModeDisplay, changeSlider,
} from './js-modules/ui';

const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-city');
const dailyButton = document.querySelector('#daily');
const hourlyButton = document.querySelector('#hourly');
const slideLeft = document.querySelector('#slide-left');
const slideRight = document.querySelector('#slide-right');
let city = 'Seoul';

async function main() {
  const weatherInfo = await getWeather(city);
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
