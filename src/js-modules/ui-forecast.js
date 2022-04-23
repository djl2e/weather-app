import filledCircleIcon from '../img/filled-circle.png';
import emptyCircleIcon from '../img/empty-circle.png';
import leftArrowIcon from '../img/left-arrow.png';
import rightArrowIcon from '../img/right-arrow.png';

import { getIconImage } from './ui-current';

const forecastContainer = document.querySelector('#forecast-container');
const dailyButton = document.querySelector('#daily');
const hourlyButton = document.querySelector('#hourly');

const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');

let mode = '';
let dailyForecast;
let hourlyForecast;
let dotPosition;

function displayForecast(array, i) {
  const forecastCardContainers = document.querySelectorAll('.forecast-card-container');
  forecastCardContainers.forEach((container) => {
    const card = array[i];
    i++;

    let dateName;
    if (mode === 'daily') {
      dateName = card.getDayName();
    } else {
      dateName = card.getHour();
    }

    const temperature = card.getTemperature();
    const iconSrc = getIconImage(card.getIconName());

    container.children[0].textContent = dateName;
    container.children[1].textContent = temperature;
    container.children[2].src = iconSrc;
  });
}

function getDotId() {
  if (dotPosition === 1) {
    return 'dot-one';
  } if (dotPosition === 2) {
    return 'dot-two';
  }
  return 'dot-three';
}

function sliderDotDisplay() {
  const dotPositionId = getDotId();
  dots.forEach((dot) => {
    if (dot.getAttribute('id') === dotPositionId) {
      dot.src = filledCircleIcon;
    } else {
      dot.src = emptyCircleIcon;
    }
  });
}

function sliderDotSetup() {
  const leftArrow = document.querySelector('#slide-left img');
  const rightArrow = document.querySelector('#slide-right img');

  dotPosition = 1;
  sliderDotDisplay();

  leftArrow.src = leftArrowIcon;
  rightArrow.src = rightArrowIcon;
}

function slideHourlyForecast() {
  const i = 8 * (dotPosition - 1);
  displayForecast(hourlyForecast, i);
}

function moveSlider(direction) {
  if (mode !== 'hourly') return;
  if (direction === 'left') {
    if (dotPosition === 1) return;
    dotPosition -= 1;
  }
  if (direction === 'right') {
    if (dotPosition === 3) return;
    dotPosition += 1;
  }
  sliderDotDisplay();
  slideHourlyForecast();
}

function forecastSetup() {
  let numCards = 0;
  if (mode === 'daily') {
    numCards = 7;
  } else {
    numCards = 8;
  }

  forecastContainer.innerHTML = '';

  for (let i = 0; i < numCards; i++) {
    const forecastCardContainer = document.createElement('div');
    const dateTime = document.createElement('p');
    const temperature = document.createElement('p');
    const icon = document.createElement('img');

    forecastCardContainer.appendChild(dateTime);
    forecastCardContainer.appendChild(temperature);
    forecastCardContainer.appendChild(icon);

    forecastCardContainer.setAttribute('class', 'forecast-card-container');

    forecastContainer.appendChild(forecastCardContainer);
  }
}

function changeMode(newMode) {
  if (mode !== '' && newMode !== mode) {
    dailyButton.classList.toggle('chosen');
    hourlyButton.classList.toggle('chosen');
    slider.classList.toggle('hidden');

    if (newMode === 'hourly') {
      dotPosition = 1;
      sliderDotDisplay();
    }
  }

  mode = newMode;
  forecastSetup();

  if (mode === 'daily') {
    displayForecast(dailyForecast, 0);
  } else {
    displayForecast(hourlyForecast, 0);
  }
}

function getForecast(dailyForecastArray, hourlyForecastArray) {
  dailyForecast = dailyForecastArray;
  hourlyForecast = hourlyForecastArray;
  changeMode('daily');
}

export {
  sliderDotSetup, getForecast, changeMode, moveSlider,
};
