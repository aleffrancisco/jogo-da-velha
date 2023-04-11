import React from "react";
import Logo from "../../objects/Logo";
import Sobre from "../../objects/Sobre";
import Menu from "../../objects/Menu";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Sobre />
      <Menu />
    </div>
  );
};

export default Header;
