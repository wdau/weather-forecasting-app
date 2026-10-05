import { Box, Typography } from "@mui/material";
import { convertTemperature } from "../utils/temperature";

const Forecast = ({ forecast, unit }) => {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                3-Hour Forecast
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    overflowX: "auto",
                    gap: 2,
                    pb: 2,
                }}
            >
                {forecast.list.map((item) => (
                    <Box
                        key={item.dt}
                        sx={{
                            minWidth: 80,
                            textAlign: "center",
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
                        />

                        <Typography variant="h6">
                            {Math.round(convertTemperature(item.main.temp, unit))}°{unit}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Forecast;