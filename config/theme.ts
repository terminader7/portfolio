import { Breakpoints, ThemeOptions, PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    red?: string;
    green?: string;
    blue?: string;
    yellow?: string;
    orange?: string;
  }

  interface SimplePaletteColorOptions {
    red?: string;
    green?: string;
    blue?: string;
    yellow?: string;
    orange?: string;
  }
}

export const breakpoints: { values: Breakpoints["values"] } = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

export const getColorOptions = (): PaletteOptions => {
  const red = "#F81550";
  const green = "#00AD94";
  const blue = "#0EA5E9";
  const yellow = "#FEAD13";
  const orange = "#E66E3C";

  const palette = {
    primary: {
      main: "#0EA5E9",
      green,
      blue,
      yellow,
      orange,
      red,
    },
    background: {
      default: "#1A1D25",
      paper: "#25282F",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#000000",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  };

  return palette;
};

export const getThemeOptions = (
  primaryColor: string = "",
  secondaryColor: string = ""
): ThemeOptions => ({
  palette: {
    ...getColorOptions(),
    ...(Boolean(primaryColor)
      ? {
          primary: {
            main: primaryColor,
          },
        }
      : {}),
    ...(Boolean(secondaryColor)
      ? {
          secondary: {
            main: secondaryColor,
          },
        }
      : {}),
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
    fontSize: 14,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "currentColor",
          fontFamily: "Raleway, sans-serif",
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: "currentColor",
          fill: "currentColor",
        },
      },
    },
  },
  breakpoints,
  shape: {
    borderRadius: 10,
  },
});

export default getThemeOptions;
