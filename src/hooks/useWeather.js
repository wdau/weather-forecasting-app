import { useEffect, useState } from "react";
import { getWeather } from "../api/weather";

const useWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
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
          return;
        }

        setWeather(data);
      } catch (err) {
        setError("Unable to fetch weather data.");
        setWeather(null);
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
    loading,
    error,
    searchWeather,
  };
};

export default useWeather;