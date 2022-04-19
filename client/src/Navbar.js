import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar">

      <div className="navbar-header">
        <h1> BeatMaker </h1>
      </div>

      <div className="flexbox-nav">
        <div className="navbar-links">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/beats">Beats</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
