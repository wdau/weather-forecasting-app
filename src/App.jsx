import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { lightTheme, darkTheme } from "./theme";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import ThreeHourForecast from "./components/ThreeHourForecast";
import FiveDayForecast from "./components/FiveDayForecast";
import WelcomePanel from "./components/WelcomePanel";
import useWeather from "./hooks/useWeather";

const App = () => {
  const [unit, setUnit] = useState("C");
  const [darkMode, setDarkMode] = useState(false);

  const { location, weather, forecast, loading, error, searchWeather } = useWeather();

  useEffect(() => {
    document.title = location
      ? `${location.name} Weather`
      : "Weather Forecast";

    const iconCode = weather?.weather?.[0]?.icon;

    if (!iconCode) {
      return;
    }

    const favicon = document.querySelector("link[rel~='icon']");

    if (favicon) {
      favicon.href = `https://openweathermap.org/img/wn/${iconCode}.png`;
      favicon.type = "image/png";
    }
  }, [location, weather]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* Full-page background */}
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        {/* Centered app content */}
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              textAlign: "center",
            }}
          >
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
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
          </Box>

          {loading && <Loading />}

          {error && <ErrorMessage message={error} />}

          {!weather && !loading && !error && <WelcomePanel />}

          {weather && forecast && (
            <Grid container spacing={2} sx={{ mt: 4 }}>

              <Grid size={{ xs: 12, md: 4 }}>
                <CurrentWeather
                  key={weather.id}
                  weather={weather}
                  location={location}
                  unit={unit}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 8 }}>
                <ThreeHourForecast
                  key={`three-hour-${forecast.city.id}`}
                  forecast={forecast}
                  unit={unit}
                />
              </Grid>

            </Grid>
          )}

          {forecast && (
            <FiveDayForecast
              key={`five-day-${forecast.city.id}`}
              forecast={forecast}
              unit={unit}
            />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;