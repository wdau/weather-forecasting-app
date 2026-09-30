import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const WeatherDetails = ({ weather }) => {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Weather Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2">
              Feels Like
            </Typography>
            <Typography variant="h6">
              {Math.round(weather.main.feels_like)}°C
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="body2">
              Humidity
            </Typography>
            <Typography variant="h6">
              {weather.main.humidity}%
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="body2">
              Wind Speed
            </Typography>
            <Typography variant="h6">
              {weather.wind.speed} m/s
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherDetails;