import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const CurrentWeather = ({ weather }) => {
  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h4">
          {weather.name}
        </Typography>

        <Typography variant="h2" sx={{ mt: 2 }}>
          {Math.round(weather.main.temp)}°C
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          {weather.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;