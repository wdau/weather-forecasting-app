import { Box, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import useWeather from "./hooks/useWeather";

const App = () => {
  const { weather, loading, error, searchWeather } = useWeather();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Weather Forecast
      </Typography>

      <SearchBar onSearch={searchWeather} />

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {weather && (
        <>
          <CurrentWeather weather={weather} />
          <WeatherDetails weather={weather} />
        </>
      )}
    </Box>
  );
};

export default App;