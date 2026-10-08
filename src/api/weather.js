export const getWeather = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  const data = await response.json();

  return data;
};

export const getForecast = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
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