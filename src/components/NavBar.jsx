import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MSƚɾҽαɱ</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link home" >
          Home
        </Link>
        <Link to="/favorites" className="nav-link favorites">
          Favorites
        </Link>
      </div>
    </nav>
  );
};
