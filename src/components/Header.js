// Header.js

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <header className="bg-dark text-white text-center p-4">
        <h1>Hood River Parks and Recreation May 2024 Ballot Measure</h1>
      </header>
      <ul className="nav bg-dark justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/donate" className="nav-link text-white">Donate</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link text-white">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/community-input" className="nav-link text-white">Community Input</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link text-white">Contact</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;
