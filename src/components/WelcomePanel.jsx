import { Box, Typography } from "@mui/material";
import DeviceThermostatRoundedIcon from "@mui/icons-material/DeviceThermostatRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

const features = [
    {
        Icon: DeviceThermostatRoundedIcon,
        title: "Current conditions",
        description: "Temperature, humidity and wind.",
    },
    {
        Icon: TimelineRoundedIcon,
        title: "Temperature trends",
        description: "Follow upcoming temperature changes.",
    },
    {
        Icon: CalendarMonthRoundedIcon,
        title: "Five-day outlook",
        description: "Plan for the days ahead.",
    },
];

const WelcomePanel = () => (
    <Box
        sx={{
            mt: 4,
            p: { xs: 2, sm: 3 },
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            bgcolor: "background.paper",
            minWidth: 0,
            boxSizing: "border-box",
        }}
    >
        {/* Welcome message */}
        <Box
            sx={{
                width: "100%",
                minWidth: 0,
                overflowWrap: "anywhere",
            }}
        >
            <Typography
                variant="overline"
                color="primary"
                sx={{ fontWeight: 700 }}
            >
                YOUR WEATHER DASHBOARD
            </Typography>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    mt: 1,
                    mb: 2
                }}
            >
                Weather, at a glance.
            </Typography>

            <Typography variant="body1" color="text.secondary">
                Start by searching for a city above and selecting a location. Your current conditions, temperature trends, and five-day forecast will appear here.
            </Typography>
        </Box>

        {/* Feature highlights */}
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "repeat(3, minmax(0, 1fr))",
                },
                gap: 2,
                mt: 3,
                minWidth: 0,
            }}
        >
            {features.map(({ Icon, title, description }) => (
                <Box
                    key={title}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: "background.default",
                        minWidth: 0,
                        boxSizing: "border-box",
                    }}
                >
                    <Icon sx={{ color: "primary.main", flexShrink: 0 }} />

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 700, overflowWrap: "anywhere" }}
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ overflowWrap: "anywhere" }}
                        >
                            {description}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    </Box>
);

export default WelcomePanel;