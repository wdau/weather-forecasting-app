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
          {weather.city}
        </Typography>

        <Typography variant="h2" sx={{ mt: 2 }}>
          {weather.temperature}°C
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          {weather.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;