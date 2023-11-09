"use client";

import { ThemeProvider } from "@mui/material";
import theme from "../theme/index";

const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default NextThemeProvider;