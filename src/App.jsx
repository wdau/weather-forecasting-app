import { Box, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import useWeather from "./hooks/useWeather";

const App = () => {
  const { weather, loading, error, searchWeather } = useWeather();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Weather Forecast
      </Typography>

      <SearchBar onSearch={searchWeather} />

      {loading && (
        <Typography sx={{ mt: 4 }}>
          Loading weather...
        </Typography>
      )}

      {error && (
        <Typography color="error" sx={{ mt: 4 }}>
          {error}
        </Typography>
      )}

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