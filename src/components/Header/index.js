import React from "react";
import Logo from "../../objects/Logo";
import AboutLink from "../../objects/AboutLink";
import Menu from "../../objects/Menu";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <AboutLink />
      <Menu />
    </div>
  );
};

export default Header;
