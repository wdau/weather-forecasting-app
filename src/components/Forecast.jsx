import { Box, Typography } from "@mui/material";

const Forecast = ({ forecast }) => {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Hourly Forecast
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
                            {forecast.list.indexOf(item) === 0
                                ? "Now"
                                : item.dt_txt.slice(11, 16)}
                        </Typography>

                        <Typography variant="h6" sx={{ mt: 1 }}>
                            {Math.round(item.main.temp)}°C
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Forecast;