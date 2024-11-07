// src/theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize this color to match your design
    },
    secondary: {
      main: "#9c27b0", // Customize secondary color
    },
    background: {
      default: "#f5f5f5", // Background color for the app
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase text transformation
        },
      },
    },
  },
});

export default theme;
