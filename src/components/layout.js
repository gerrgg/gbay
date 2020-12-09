import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Headroom from "react-headroom";
import "fontsource-roboto";

const Layout = ({ children }) => (
  <React.Fragment>
    <CssBaseline />
    <Headroom>
      <header>header</header>
    </Headroom>
    <div>{children}</div>
    <footer>footer</footer>
  </React.Fragment>
);

export default Layout;
