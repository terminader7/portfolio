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

export const getColorOptions = (): PaletteOptions => {
  const palette = {
    primary: {
      main: "#0EA5E9",
      green: "#00AD94",
      blue: "#0EA5E9",
      yellow: "#FEAD13",
      orange: "#E66E3C",
      red: "#F81550",
    },
    background: {
      default: "#1A1D25",
      paper: "#FFFFFF",
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
