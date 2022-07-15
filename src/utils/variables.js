import { format } from 'date-fns';

export const getCurrentVariables = data => {
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const time = format(new Date(data.dt * 1000), 'EEE, LLLL d p');
  const weather = data.weather[0].main;
  const feelsLike = data.feels_like.toFixed();
  const temperature = data.temp.toFixed();

  return {
    icon,
    time,
    weather,
    feelsLike,
    temperature,
  };
};

export const getHourlyVariables = data => {
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const time = format(new Date(data.dt * 1000), 'p');
  const temperature = data.temp.toFixed();

  return {
    icon,
    time,
    temperature,
  };
};

export const getDailyVariables = data => {
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const weather = data.weather[0].main;
  const description =
    data.weather[0].description.charAt(0).toUpperCase() +
    data.weather[0].description.slice(1);
  const min = data.temp.min.toFixed();
  const max = data.temp.max.toFixed();
  const morning = data.temp.morn.toFixed();
  const evening = data.temp.eve.toFixed();
  const day = data.temp.day.toFixed();
  const night = data.temp.night.toFixed();
  const sunrise = format(new Date(data.sunrise * 1000), 'p');
  const sunset = format(new Date(data.sunset * 1000), 'p');
  const wind = data.wind_speed.toFixed();
  const humidity = data.humidity.toFixed();

  return {
    icon,
    description,
    weather,
    min,
    max,
    morning,
    evening,
    day,
    night,
    sunrise,
    sunset,
    wind,
    humidity,
  };
};
