import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { convertTemperature } from "../utils/temperature";

const CurrentWeather = ({ weather, location, unit }) => {
  return (
    <Card
      sx={{
        height: "100%",
        animation: "fadeIn 0.5s ease-out",
        "@keyframes fadeIn": {
          from: {
            opacity: 0,
            transform: "translateY(10px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      <CardContent>

        {/* City */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography variant="h4">
              {location.name}
            </Typography>

            <Typography variant="body3">
              {location.state ? `${location.state}, ` : ""}
              {location.country}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
          >
            {new Date(
              (weather.dt + weather.timezone) * 1000
            ).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              timeZone: "UTC",
            })}
          </Typography>
        </Box>

        {/* Current Temperature, Icon, Description, High / Low */}
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h2">
            {Math.round(
              convertTemperature(weather.main.temp, unit)
            )}°{unit}
          </Typography>

          <Box sx={{ mt: 1 }}>
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
                justifyContent: "center",
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
        </Box>

        {/* Weather Details */}
        <Grid container spacing={2} sx={{ mt: 2 }}>

          <Grid xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: "center" }}>
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

          <Grid xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="body2">
                  Humidity
                </Typography>

                <Typography variant="h6">
                  {weather.main.humidity}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} sm={4}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: "center" }}>
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