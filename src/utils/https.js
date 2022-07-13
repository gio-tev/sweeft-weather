import { API_KEY } from '@env';

export const getData = async (coords, exclude) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${
        coords.lon
      }&exclude=${exclude.join()}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) throw new Error('Error');

    return await res.json();
  } catch (error) {
    return error.message;
  }
};
