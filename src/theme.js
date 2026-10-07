import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});