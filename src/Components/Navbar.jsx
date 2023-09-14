import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../utils/global.context";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);
  const icon = theme === "light" ? "🌙" : "🌞";

  return (
    <nav className={`navbar ${theme === "dark" ? "dark" : ""}`}>
       <div className="navbar-logo"><h1>DH Odonto</h1></div> 
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Favs</Link>
        <button className={`toggle-button-${theme}`} onClick={toggleTheme}>
          {icon}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


