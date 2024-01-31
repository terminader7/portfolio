import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import getThemeOptions from "../config/theme";

function MyPortfolio({ Component, pageProps }) {
  const { primaryColor, secondaryColor } = pageProps;

  const theme = useMemo(
    () => createTheme(getThemeOptions(primaryColor, secondaryColor)),
    [primaryColor, secondaryColor]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyPortfolio;
