import { useState } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import ThreeHourForecast from "./components/ThreeHourForecast";
import FiveDayForecast from "./components/FiveDayForecast";
import useWeather from "./hooks/useWeather";

const App = () => {
  const [unit, setUnit] = useState("C");

  const { weather, forecast, loading, error, searchWeather } = useWeather();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Weather Forecast
      </Typography>

      <SearchBar onSearch={searchWeather} />

      <Box sx={{ mt: 2 }}>
        <ToggleButtonGroup
          value={unit}
          exclusive
          onChange={(event, newUnit) => {
            if (newUnit !== null) {
              setUnit(newUnit);
            }
          }}
        >
          <ToggleButton value="C">
            °C
          </ToggleButton>

          <ToggleButton value="F">
            °F
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {weather && (
        <>
          <CurrentWeather weather={weather} unit={unit} />
          <WeatherDetails weather={weather} unit={unit} />
        </>
      )}

      {forecast && <ThreeHourForecast forecast={forecast} unit={unit} />}

      {forecast && <FiveDayForecast forecast={forecast} unit={unit} />}
    </Box>
  );
};

export default App;