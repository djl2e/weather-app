# MyWeather
> A weather app that displays current weather information and forecast from all over the world.

![](weather_app_gif.gif)

[Link to Deployed Project](https://djl2e.github.io/weather-app/)

## Features

### Controls
- Search bar for location
- Options for daily vs hourly forecast
- Options for metric vs imperial unit

### View
- Upper left-hand panel shows local time and basic weather information (current temperature and weather description)
- Upper right-hand panel displays accessory weather information (feels like temp, humidity, chance of rain, wind speed) and control buttons for units
- Bottom of the screen gives weather forecast that is either in intervals of daily or hourly, with options to change in between

## Getting Started

### Clone repository
```
git clone git@github.com:djl2e/weather-app.git
cd weather-app
```

### Set up environment variables
```
WEATHER_API_KEY = '&' + <OpenWeather API Key>
GEO_API_KEY = <Google Time Zone API Key>
```

### Install packages and run start
```
npm i // install npm dependencies
npx webpack // build bundle with webpack
cd dist & open index.html // run locally
```

## Deployment (Github Pages)
```
git subtree push --prefix dist origin gh-pages
```

## Built With
- Webpack
- [OpenWeather API](https://openweathermap.org/)
- [Google Time Zone API](https://developers.google.com/maps/documentation/timezone/overview)

## Authors
- [Daniel Joseph Lee](https://github.com/djl2e)

## Image/Icon Creds
- [Nathan Anderson](https://unsplash.com/photos/L95xDkSSuWw)
- [Icons DB](https://www.iconsdb.com/)
- [Google Fonts](https://fonts.google.com/)