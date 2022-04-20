import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"

function NavBar({setCurrentUser}) {

  function handleLogoutClick(){
    fetch("/logout", { method: "DELETE"}).then((r) => {
        if (r.ok) {
            // console.log(r)
            setCurrentUser(null);
        }
    });
}






  return (
    <nav className="navbar">

      <div className="navbar-header">
        <h1> BeatMaker </h1>
      </div>

      <div className="flexbox-nav">
        <div className="navbar-links">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/kits">Kits</NavLink>
            <NavLink to="/beats">Beats</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
