import {
  Breakpoints,
  darken,
  PaletteMode,
  ThemeOptions,
  PaletteOptions,
} from "@mui/material";

export const breakpoints: { values: Breakpoints["values"] } = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

export const getColorOptions = (mode: "light" | "dark"): PaletteOptions => {
  const light = {
    primary: {
      light: "#FB9B4C",
      main: "#FA8320",
      dark: "#C86819",
    },
    secondary: {
      light: "#4CABFB",
      main: "#2097fa",
      dark: "#1978C8",
    },
    tertiary: {
      main: "#002F95",
    },
    blue: {
      main: "#0EA5E9",
    },
    green: {
      main: "#00AD94",
    },
    yellow: {
      main: "FEAD13",
    },
    orange: { main: "E66E3C" },
    red: { main: "F81550" },
    background: {
      // This is more of a standard grey
      // default: "#3F598E",
      default: "#4F7390",
      paper: "#FFFFFF",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  };

  return light;
};

export const getThemeOptions = (
  mode: PaletteMode,
  primaryColor: string = "",
  secondaryColor: string = ""
): ThemeOptions => ({
  palette: {
    mode,
    ...getColorOptions(mode),
    ...(Boolean(primaryColor)
      ? {
          primary: {
            main: primaryColor,
          },
          tertiary: {
            main: darken(primaryColor, 0.25),
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
    fontFamily: "Avenir, sans-serif",
    fontSize: 14,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "currentColor",
          fontFamily: "Avenir, sans-serif",
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
