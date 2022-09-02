class WeatherCard {
  constructor(time, temperature, iconId, unit) {
    this.time = time;
    this.temperature = temperature;
    this.iconId = iconId;
    this.hour = this.time.getHours();
    this.unit = unit === 'metric' ? '°C' : '°F';
  }

  getMeridiem() {
    if (this.hour < 12) {
      return 'am';
    }
    return 'pm';
  }

  getShortHour() {
    if (this.hour === 0) {
      return 12;
    } if (this.hour > 12) {
      return this.hour - 12;
    }
    return this.hour.toString();
  }

  getTime() {
    const minutes = this.time.getMinutes();
    let minutesString = '';
    minutesString = minutes < 10 ? `0${minutes}` : minutes.toString();
    return `${this.getShortHour()}:${minutesString} ${this.getMeridiem()}`;
  }

  getHour() {
    return `${this.getShortHour()} ${this.getMeridiem()}`;
  }

  getDayName() {
    const dayNum = this.time.getDay();
    switch (dayNum) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      default:
        return 'Saturday';
    }
  }

  getDay() {
    const day = this.time.getDate();
    const j = day % 10;
    const k = day % 100;
    if (j === 1 && k !== 11) {
      return `${day}st`;
    }
    if (j === 2 && k !== 12) {
      return `${day}nd`;
    }
    if (j === 3 && k !== 13) {
      return `${day}rd`;
    }
    return `${day}th`;
  }

  getMonth() {
    return this.time.toLocaleString('default', { month: 'short' });
  }

  getYear() {
    return this.time.getFullYear().toString().substr(-2);
  }

  getFullDate() {
    return `${this.getDayName()}, ${this.getMonth()} ${this.getDay()} '${this.getYear()}`;
  }

  getTemperature() {
    return `${this.temperature.toFixed(0).toString()} ${this.unit}`;
  }

  getIconName() {
    switch (this.iconId) {
      case '01d':
        return 'sun';
      case '01n':
        return 'moon';
      case '02d':
        return 'cloud-day';
      case '02n':
        return 'cloud-night';
      case '03d':
      case '03n':
        return 'cloud';
      case '04d':
      case '04n':
        return 'heavy-cloud';
      case '09d':
      case '09n':
        return 'shower-rain';
      case '10d':
      case '10n':
        return 'rain';
      case '11d':
      case '11n':
        return 'thunderstorm';
      case '13d':
      case '13n':
        return 'snow';
      default:
        return 'mist';
    }
  }
}

function createWeatherCard(time, temperature, iconId, unit) {
  return new WeatherCard(time, temperature, iconId, unit);
}

export default createWeatherCard;
