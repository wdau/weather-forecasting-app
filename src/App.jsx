import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  CssBaseline,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
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

  // Use the saved theme, or follow the system preference on first visit
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("weather-theme");

    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const { location, weather, forecast, loading, error, searchWeather } = useWeather();

  // Update the browser tab title and favicon based on the current weather and location
  useEffect(() => {
    document.title = location
      ? `${location.name} Weather`
      : "Weather Forecast";

    const favicon = document.querySelector("link[rel~='icon']");

    if (!favicon) return;

    const iconCode = weather?.weather?.[0]?.icon;

    if (!iconCode) {
      favicon.href = "/favicon.svg";
      favicon.type = "image/svg+xml";
      return;
    }

    favicon.href = `https://openweathermap.org/img/wn/${iconCode}.png`;
    favicon.type = "image/png";
  }, [location, weather]);

  // Save the user's theme choice
  const handleThemeToggle = () => {
    const nextMode = !darkMode;

    setDarkMode(nextMode);
    localStorage.setItem(
      "weather-theme",
      nextMode ? "dark" : "light"
    );
  };

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

          {/* Temperature unit and theme controls */}
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
                onClick={handleThemeToggle}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
          </Box>

          {loading && <Loading />}

          {error && <ErrorMessage message={error} />}

          {/* Welcome panel */}
          {!weather && !loading && !error && <WelcomePanel />}

          {/* Current conditions and three-hour forecast */}
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

          {/* Five-day forecast */}
          {forecast && (
            <FiveDayForecast
              key={`five-day-${forecast.city.id}`}
              forecast={forecast}
              unit={unit}
            />
          )}

          {/* Footer and weather data attribution */}
          <Box
            component="footer"
            sx={{
              mt: 5,
              pt: 2,
              pb: 1,
              borderTop: "1px solid",
              borderColor: "divider",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              textAlign: "center",
            }}
          >
            <Typography variant="body2" color="primary">
              © {new Date().getFullYear()} Weather Forecast App
            </Typography>

            <Typography variant="body2" color="primary">
              Weather data provided by{" "}
              <Box
                component="a"
                href="https://openweathermap.org/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "secondary.main",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                OpenWeather
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;