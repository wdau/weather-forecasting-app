export const getWeather = async (lat, lon) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );

  const data = await response.json();

  return data;
};

export const getForecast = async (lat, lon) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );

  const data = await response.json();

  return data;
};

export const getCitySuggestions = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
      city
    )}&limit=5&appid=${apiKey}`
  );

  const data = await response.json();

  return data;
};