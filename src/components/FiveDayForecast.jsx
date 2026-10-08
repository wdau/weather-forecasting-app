import { Box, Card, Typography } from "@mui/material";
import { convertTemperature } from "../utils/temperature";

const FiveDayForecast = ({ forecast, unit }) => {
  // Group forecast entries by local date
  const dailyForecast = {};

  forecast.list.forEach((item) => {
    const date = new Date(
      (item.dt + forecast.city.timezone) * 1000
    ).toLocaleDateString("en-CA", {
      timeZone: "UTC",
    });

    if (!dailyForecast[date]) {
      dailyForecast[date] = [];
    }

    dailyForecast[date].push(item);
  });

  const dailyData = Object.entries(dailyForecast).map(
    ([date, items]) => {
      const temperatures = items.map(
        (item) => item.main.temp
      );

      return {
        date,
        minTemp: Math.min(...temperatures),
        maxTemp: Math.max(...temperatures),
        icon: items[items.length - 1].weather[0].icon,
        description: items[items.length - 1].weather[0].description,
      };
    }
  );

  return (
    <Card
      sx={{
        mt: 4,
        p: 2,
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
      <Typography variant="h5" sx={{ mb: 2 }}>
        5-Day Forecast
      </Typography>

      {dailyData.map((day, index) => {
        let dayName;

        if (index === 0) {
          dayName = "Today";
        } else if (index === 1) {
          dayName = "Tomorrow";
        } else {
          dayName = new Date(`${day.date}T00:00:00`).toLocaleDateString(
            "en-US",
            {
              weekday: "long",
            }
          );
        }

        return (
          <Box
            key={day.date}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              py: 1,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography sx={{ width: 100 }}>
              {dayName}
            </Typography>

            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.description}
              width="50"
              height="50"
            />

            <Typography>
              Low {Math.round(convertTemperature(day.minTemp, unit))}°{unit} / High {Math.round(convertTemperature(day.maxTemp, unit))}°{unit}
            </Typography>
          </Box>
        );
      })}
    </Card>
  );
};

export default FiveDayForecast;