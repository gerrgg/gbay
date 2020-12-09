import React from "react";
import Headroom from "react-headroom";
import "fontsource-roboto";

const Layout = ({ children }) => (
  <>
    <Headroom>
      <header>header</header>
    </Headroom>
    <div>{children}</div>
    <footer>footer</footer>
  </>
);

export default Layout;
