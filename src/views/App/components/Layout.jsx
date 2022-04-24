import React from "react";
import Header from "../../../commons/Header.jsx";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
