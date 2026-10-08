import { Box, Card, Typography } from "@mui/material";
import { convertTemperature } from "../utils/temperature";

const Forecast = ({ forecast, unit }) => {
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
                            p: 1,
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: 2,
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
                            {Math.round(convertTemperature(item.main.temp, unit))}°{unit}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Card>
    );
};

export default Forecast;