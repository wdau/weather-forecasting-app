import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { convertTemperature } from "../utils/temperature";

const CurrentWeather = ({ weather, unit }) => {
  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>

        {/* City */}
        <Typography variant="h4">
          {weather.name}
        </Typography>

        {/* Current Temperature */}
        <Typography variant="h2" sx={{ mt: 2 }}>
          {Math.round(
            convertTemperature(weather.main.temp, unit)
          )}°{unit}
        </Typography>

        {/* Weather Icon and Description */}
        <Box sx={{ mt: 1, ml: 1 }}>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            width="60"
            height="60"
          />

          <Typography variant="body1">
            {weather.weather[0].description}
          </Typography>

          {/* High / Low */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Typography variant="body2">
              H: {Math.round(
                convertTemperature(weather.main.temp_max, unit)
              )}°{unit}
            </Typography>

            <Typography variant="body2">
              L: {Math.round(
                convertTemperature(weather.main.temp_min, unit)
              )}°{unit}
            </Typography>
          </Box>
        </Box>

        {/* Weather Details */}
        <Grid container spacing={2} sx={{ mt: 2 }}>

          <Grid item xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body2">
                  Feels Like
                </Typography>

                <Typography variant="h6">
                  {Math.round(
                    convertTemperature(weather.main.feels_like, unit)
                  )}°{unit}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body2">
                  Humidity
                </Typography>

                <Typography variant="h6">
                  {weather.main.humidity}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body2">
                  Wind Speed
                </Typography>

                <Typography variant="h6">
                  {weather.wind.speed} m/s
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;