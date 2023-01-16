import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#12181b",
  LIGHT_BLUE = "#81d4fa",
  FONT_GLOBAL = "'Roboto', sans-serif",
  ERROR_MAIN = "#f44556",
  BG_ERROR_MAIN = "rgba(244,67,54,0.2)"
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.LIGHT_BLUE
    }
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL
  },
  components: {
    MuiButton: {
        defaultProps: {
            style: {
                textTransform: "none",
                boxShadow: "none",
                borderRadius: "0.5em"
            }
        }
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "0.8em",
          fontSize: "1em"
        }
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${themePalette.ERROR_MAIN}`,
          background: themePalette.BG_ERROR_MAIN
        }
      }
    }
  }
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />.
      {children}
    </ThemeProvider>
  );
};
