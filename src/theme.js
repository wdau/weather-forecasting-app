import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#205F83",
    },
    secondary: {
      main: "#D88942",
    },
    background: {
      default: "#E8F1F7",
      paper: "#c2ddee",
    },
    text: {
      primary: "#16354B",
      secondary: "#294E67",
    },
    divider: "#7299B6",
  },
  shape: {
    borderRadius: 14,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8DD7F0",
    },
    secondary: {
      main: "#FFC477",
    },
    background: {
      default: "#0C1724",
      paper: "#09243a",
    },
    text: {
      primary: "#F4F8FC",
      secondary: "#C5D4E2",
    },
    divider: "#48647A",
  },
  shape: {
    borderRadius: 14,
  },
});