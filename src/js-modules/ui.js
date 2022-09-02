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
  unit,
) {
  changeCurrentDisplay(description, city, time, temperature, icon, unit);
  changeAccessoryDisplay(feels, humidity, rain, wind, unit);
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
