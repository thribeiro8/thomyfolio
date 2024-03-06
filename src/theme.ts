import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
      //   main: purple[500],
    },
    secondary: {
      main: "#4f8e3e",
      // main: green[500],
    },
  },
  typography: {
    fontFamily: [
      "sans-serif",
      // fontFamily: "Helvetica Neue",
      // fontFamily: "-apple-system",
      // fontFamily: "Roboto",
      // fontFamily: "Segoe UI",
      // fontFamily: "Tahoma",]
    ].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
