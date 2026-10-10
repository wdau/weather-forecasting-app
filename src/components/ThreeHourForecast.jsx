import { Box, Card, Typography } from "@mui/material";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { convertTemperature } from "../utils/temperature";

const ThreeHourForecast = ({ forecast, unit }) => {
  // Prepare forecast times and temperatures for the chart
  const chartData = forecast.list.map((item) => ({
    time: new Date(
      (item.dt + forecast.city.timezone) * 1000
    ).toLocaleTimeString("en-US", {
      hour: "numeric",
      timeZone: "UTC",
    }),
    temperature: Math.round(
      convertTemperature(item.main.temp, unit)
    ),
  }));

  // Match the chart width to the forecast cards and their gaps
  const contentWidth = forecast.list.length * 96 - 16;

  return (
    <Card
      sx={{
        height: "100%",
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
        3-Hour Forecast
      </Typography>

      <Box
        sx={{
          overflowX: "auto",
          pb: 2,
        }}
      >
        <Box sx={{ width: contentWidth, minWidth: contentWidth }}>

          {/* Temperature Graph */}
          <LineChart
            width={contentWidth}
            height={180}
            data={chartData}
            margin={{
              top: 10,
              right: 40,
              left: 40,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              hide
              padding={{
                left: 0,
                right: 0,
              }}
            />

            <YAxis hide />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="temperature"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>

          {/* Forecast Cards */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            {forecast.list.map((item) => (
              <Box
                key={item.dt}
                sx={{
                  minWidth: 80,
                  textAlign: "center",
                  p: 1,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                  backgroundColor: "background.paper",
                }}
              >
                <Typography variant="body2">
                  {new Date(
                    (item.dt + forecast.city.timezone) * 1000
                  ).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    timeZone: "UTC",
                  })}
                </Typography>

                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].description}
                  width="50"
                  height="50"
                />

                <Typography variant="h6">
                  {Math.round(
                    convertTemperature(item.main.temp, unit)
                  )}°{unit}
                </Typography>
              </Box>
            ))}
          </Box>

        </Box>
      </Box>
    </Card>
  );
};

export default ThreeHourForecast;