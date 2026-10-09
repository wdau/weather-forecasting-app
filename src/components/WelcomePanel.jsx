import { Box, Typography } from "@mui/material";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
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

const WelcomePanel = () => {
  return (
    <Box
      sx={{
        mt: 4,
        p: { xs: 2, sm: 3, md: 4 },
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 4,
        bgcolor: "background.paper",
      }}
    >
      {/* Welcome message */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 3,
          minWidth: 0,
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: 1.5,
            }}
          >
            YOUR WEATHER DASHBOARD
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mt: 1,
              mb: 2,
              fontSize: { xs: "1.6rem", sm: "2.125rem" },
              overflowWrap: "anywhere",
            }}
          >
            Weather, at a glance.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
          >
            Start by searching for a city above and selecting a location. Your current conditions, temperature trends, and five-day forecast will appear here.
          </Typography>
        </Box>

        <Box
          sx={{
            flexShrink: 0,
            alignSelf: { xs: "flex-end", sm: "auto" },
            width: { xs: 64, sm: 104 },
            height: { xs: 64, sm: 104 },
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            bgcolor: "action.hover",
            color: "primary.main",
          }}
        >
          <CloudQueueRoundedIcon
            sx={{ fontSize: { xs: 40, sm: 64 } }}
          />
        </Box>
      </Box>

      {/* Feature highlights */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: 2,
          mt: 4,
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
              p: 2,
              minWidth: 0,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
              bgcolor: "background.default",
            }}
          >
            <Icon
              sx={{
                color: "primary.main",
                fontSize: 32,
                flexShrink: 0,
              }}
            />

            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  overflowWrap: "anywhere",
                }}
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
};

export default WelcomePanel;