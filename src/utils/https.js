export const getData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts
          &units=metric&appid=911ccc29d926a3c397e879ac5148feea`
    );

    if (!res.ok) {
      throw new Error('Something went wrong');
    }
    const data = await res.json();

    return data;
  } catch (error) {
    return error.message;
  }
};
