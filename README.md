# Weather App
> A weather app that displays current weather information and forecast from all over the world.

[Link to Deployed Project](https://djl2e.github.io/weather-app/)

## Pictures

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
<details>
 <summary>Daily Forecast</summary>
 <img src="https://github.com/djl2e/weather-app/blob/fd802371d9870c5c180fd051d0fd40fc5ea758c3/readme_pictures/Daily.png" name="login page">
</details>
<details>
 <summary>Hourly Forecast</summary>
 <img src="https://github.com/djl2e/weather-app/blob/fd802371d9870c5c180fd051d0fd40fc5ea758c3/readme_pictures/Hourly.png" name="login page">
</details>
<details>
 <summary>Imperial Units</summary>
 <img src="https://github.com/djl2e/weather-app/blob/fd802371d9870c5c180fd051d0fd40fc5ea758c3/readme_pictures/Imperial.png" name="login page">
</details>
<details>
 <summary>Location Search</summary>
 <img src="https://github.com/djl2e/weather-app/blob/fd802371d9870c5c180fd051d0fd40fc5ea758c3/readme_pictures/Search.png" name="login page">
</details>

### Clone repository
```
git clone git@github.com:djl2e/weather-app.git
cd weather-app
```

### Set up environment variables
```
WEATHER_API_KEY = '&' + <OpenWeather API Key>
GEO_API_KEY = <Google Geolocation API Key>
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
- OpenWeather API
- Google Geolocation API

## Authors
- [Daniel Joseph Lee](https://github.com/djl2e)

API Creds:
- [OpenWeather](https://openweathermap.org/)
- [Google API](https://developers.google.com/maps/documentation/timezone/overview)

Image/Icon Creds:
- [Nathan Anderson](https://unsplash.com/photos/L95xDkSSuWw)
- [Icons DB](https://www.iconsdb.com/)
- [Google Fonts](https://fonts.google.com/)