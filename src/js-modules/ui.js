import { changeCurrentDisplay, changeAccessoryDisplay, setAccessoryIcons } from './ui-current';
import {
  sliderDotSetup, getForecast, changeMode, moveSlider,
} from './ui-forecast';

function setup() {
  setAccessoryIcons();
  sliderDotSetup();
}

function changeTopDisplay(
  description,
  city,
  time,
  temperature,
  icon,
  feels,
  humidity,
  rain,
  wind,
) {
  changeCurrentDisplay(description, city, time, temperature, icon);
  changeAccessoryDisplay(feels, humidity, rain, wind);
}

function changeBottomDisplay(dailyForecast, hourlyForecast) {
  getForecast(dailyForecast, hourlyForecast);
}

function changeModeDisplay(newMode) {
  changeMode(newMode);
}

function changeSlider(direction) {
  moveSlider(direction);
}

export {
  setup, changeTopDisplay, changeBottomDisplay, changeModeDisplay, changeSlider,
};
