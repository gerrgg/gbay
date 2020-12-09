import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { blue, amber } from "@material-ui/core/colors";
import "fontsource-roboto";
import Header from "./header";

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: amber["A400"] },
  },
});

const Layout = ({ children }) => (
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Header />
      <Container>{children}</Container>
      <footer>footer</footer>
    </ThemeProvider>
  </React.Fragment>
);

export default Layout;
