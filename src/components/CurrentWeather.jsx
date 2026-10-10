import {
  Box,
  Card,
  CardContent,
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

        {/* City name, country, and local time */}
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

            <Typography variant="body2">
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
        <Box
          sx={{
            mt: 3,
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 1,
          }}
        >
          {[
            {
              label: "Feels Like",
              value: `${Math.round(
                convertTemperature(weather.main.feels_like, unit)
              )}°${unit}`,
            },
            {
              label: "Humidity",
              value: `${weather.main.humidity}%`,
            },
            {
              label: "Wind Speed",
              value: `${weather.wind.speed} m/s`,
            },
          ].map((item) => (
            <Box
              key={item.label}
              sx={{
                minWidth: 0,
                minHeight: 80,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                p: 1,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 0.5,
                backgroundColor: "background.paper",
                boxSizing: "border-box",
              }}
            >
              <Typography variant="body2" sx={{ overflowWrap: "anywhere" }}>
                {item.label}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  fontWeight: 600,
                  overflowWrap: "anywhere",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;