import { Theme as MUITheme } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

export interface Theme {
  mui: MUITheme;

  shape: {
    borderRadiusSmall: number;
    borderRadiusLarge: number;
  };

  header: {
    backgroundColor: string;
    textColor: string;
  };
  embedded: boolean;
}

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
    },
    secondary: {
      main: "#ff4081",
    },
    tonalOffset: 0.65,
    error: {
      main: "#E82117",
    },
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 10,
  },
});
