import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { convertTemperature } from "../utils/temperature";

const CurrentWeather = ({ weather, unit }) => {
  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h4">
          {weather.name}
        </Typography>

        <Typography variant="h2" sx={{ mt: 2 }}>
          {Math.round(convertTemperature(weather.main.temp, unit))}°{unit}
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          {weather.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;