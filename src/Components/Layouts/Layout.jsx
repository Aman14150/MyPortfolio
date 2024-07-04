import React from "react";
import NavContents from "./Header";
import FooterContents from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavContents />
      {children}
      <FooterContents />
    </>
  );
};

export default Layout;
