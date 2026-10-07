import { useState } from "react";
import {
  Box,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import ThreeHourForecast from "./components/ThreeHourForecast";
import FiveDayForecast from "./components/FiveDayForecast";
import useWeather from "./hooks/useWeather";

const App = () => {
  const [unit, setUnit] = useState("C");
  const [darkMode, setDarkMode] = useState(false);

  const { weather, forecast, loading, error, searchWeather } = useWeather();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box sx={{
        maxWidth: 1000,
        mx: "auto",
        p: 4,
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}>
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            color: "text.primary",
          }}>
          Weather Forecast
        </Typography>

        <SearchBar onSearch={searchWeather} />

        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ToggleButtonGroup
            value={unit}
            exclusive
            onChange={(event, newUnit) => {
              if (newUnit !== null) {
                setUnit(newUnit);
              }
            }}
          >
            <Tooltip title="Celsius">
              <ToggleButton value="C">
                °C
              </ToggleButton>
            </Tooltip>

            <Tooltip title="Fahrenheit">
              <ToggleButton value="F">
                °F
              </ToggleButton>
            </Tooltip>
          </ToggleButtonGroup>

          <Tooltip
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </IconButton>
          </Tooltip>
        </Box>

        {loading && <Loading />}

        {error && <ErrorMessage message={error} />}

        {weather && (
          <>
            <CurrentWeather weather={weather} unit={unit} />
          </>
        )}

        {forecast && <ThreeHourForecast forecast={forecast} unit={unit} />}

        {forecast && <FiveDayForecast forecast={forecast} unit={unit} />}
      </Box>
    </ThemeProvider>
  );
};

export default App;