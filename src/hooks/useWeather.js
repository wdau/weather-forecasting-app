import { useEffect, useState } from "react";
import { getWeather, getForecast } from "../api/weather";

const useWeather = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!location) {
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await getWeather(
          location.lat,
          location.lon
        );

        if (data.cod !== 200) {
          setError(data.message || "Unable to find weather for this city.");
          setWeather(null);
          setForecast(null);
          return;
        }

        const forecastData = await getForecast(
          location.lat,
          location.lon
        );

        if (forecastData.cod !== "200") {
          setError("Unable to fetch the weather forecast.");
          setWeather(null);
          setForecast(null);
          return;
        }

        setWeather(data);
        setForecast(forecastData);

      } catch {
        setError("Unable to fetch weather data.");
        setWeather(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  const searchWeather = (searchedLocation) => {
    setLocation(searchedLocation);
  };

  return {
    location,
    weather,
    forecast,
    loading,
    error,
    searchWeather,
  };
};

export default useWeather;