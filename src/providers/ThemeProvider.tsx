"use client";

import React from "react";
import {ThemeProvider} from "@mui/styles";

const theme = {}

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppThemeProvider
