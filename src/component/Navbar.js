import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="logo">
          <img src="/airasia-logo.svg" />
          <span>AirAsia</span>
        </div>
        <FontAwesomeIcon size="2x" className="fa-loves" icon={faBars} />
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>
            <FontAwesomeIcon className="fa-icons" icon={faUser} /> Login
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
