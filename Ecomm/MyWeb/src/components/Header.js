import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

export default Header;
