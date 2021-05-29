import React from "react";

import { Link } from "react-router-dom";

import { NavBarContent } from "./style";
import LogoAlest from "../../assets/img/logo.png";

const NavBar: React.FC = () => {
  return (
    <NavBarContent>
      <Link to="/">
        <img src={LogoAlest} alt="Logo Afya" />
      </Link>
      <div className="links-content">
        <Link to="/"> Produtos </Link>
        <Link to="/cadastrar"> Cadastrar produto </Link>
      </div>
    </NavBarContent>
  );
};

export default NavBar;
