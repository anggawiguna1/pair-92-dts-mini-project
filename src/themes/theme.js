import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const base = createTheme({
  palette: {
    primary: {
      main: "#E50913",
    },
    secondary: {
      main: "#FFFFFF",
    },
    tertiary: {
      main: "#ffffff4d",
    },
    error: {
      main: red[400],
    },
    divider: "#FFFFFF",
    background: {
      default: "#141414",
      paper: "#141414",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    button: {
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 4,
  },
  props: {
    MuiAppBar: {
      color: "transparent",
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;