import { CssBaseline, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { useMemo } from "react";
import getThemeOptions from "../config/theme";
import { SnackbarProvider } from "notistack";

function MyPortfolio({ Component, pageProps }) {
  const { primaryColor, secondaryColor } = pageProps;

  const theme = useMemo(
    () => createTheme(getThemeOptions(primaryColor, secondaryColor)),
    [primaryColor, secondaryColor]
  );

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        disableWindowBlurListener
        anchorOrigin={{
          vertical: "top",
          horizontal: isMobile ? "center" : "right",
        }}
        style={{
          marginTop: isMobile ? "0" : "90px",
        }}
      >
        <Component {...pageProps} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyPortfolio;
