import { useEffect, useState } from "react";
import { getWeather, getForecast } from "../api/weather";

const useWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) {
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await getWeather(city);

        if (data.cod !== 200) {
          setError(data.message || "Unable to find weather for this city.");
          setWeather(null);
          setForecast(null);
          return;
        }

        const forecastData = await getForecast(city);

        if (forecastData.cod !== "200") {
          setError("Unable to fetch the weather forecast.");
          setWeather(null);
          setForecast(null);
          return;
        }

        setWeather(data);
        setForecast(forecastData);

      } catch (err) {
        setError("Unable to fetch weather data.");
        setWeather(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const searchWeather = (searchedCity) => {
    setCity(searchedCity);
  };

  return {
    weather,
    forecast,
    loading,
    error,
    searchWeather,
  };
};

export default useWeather;