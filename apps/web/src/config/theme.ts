"use client";

import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    background: {
      default: "#08101c",
      paper: "#08101c",
    },
    error: {
      dark: "#B11616",
      main: "#EB0000",
    },
    info: {
      main: "#ffffff",
    },
    primary: {
      light: "#6d4065",
      main: "#48103e",
    },
    secondary: {
      dark: "#08101c",
      light: "#6e7682",
      main: "#0d1a2f",
    },
    success: {
      dark: "#0C6450",
      main: "#15AC89",
    },
    text: {
      disabled: "#9ea3ac",
      primary: "#ffffff",
      secondary: "#dacfd8",
    },
    warning: {
      dark: "#B85600",
      main: "#F07000",
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          borderBottom: `2px solid ${theme.palette.secondary.main}`,
        },
      },
    },
  },
});

export default theme;
