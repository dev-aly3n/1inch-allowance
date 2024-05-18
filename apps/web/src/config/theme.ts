"use client";

import { createTheme } from "@mui/material/styles";

import { fonts } from "@/assets/fonts";

const theme = createTheme({
  typography: {
    fontFamily: fonts.inter.style.fontFamily,
  },
});

export default theme;
