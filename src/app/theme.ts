"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Urbanist, sans-serif",
    h1: {
      fontFamily: "Plus Jakarta Sans, sans-serif",
      fontWeight: 700,
      fontSize: "4.210rem",
    },
    h2: {
      fontFamily: "Plus Jakarta Sans, sans-serif",
      fontWeight: 700,
      fontSize: "3.158rem",
    },
    h3: {
      fontFamily: "Plus Jakarta Sans, sans-serif",
      fontWeight: 700,
      fontSize: "2.369rem",
    },
    h4: {
      fontFamily: "Plus Jakarta Sans, sans-serif",
      fontWeight: 700,
      fontSize: "1.777rem",
    },
    h5: {
      fontFamily: "Plus Jakarta Sans, sans-serif",
      fontWeight: 700,
      fontSize: "1.333rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    subtitle1: {
      fontSize: "1.25rem",
    },
  },

  palette: {
    text: {
      primary: "#0b1207",
    },
    background: {
      default: "#f2f4fa",
    },
    primary: {
      main: "#a6d487",
    },
    secondary: {
      main: "#8fd6a9",
    },
    accent: {
      main: "#78ceb4",
    },
  },
});

export default theme;
