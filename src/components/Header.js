import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FaTree } from "react-icons/fa";

function Header() {
  return (
    <React.Fragment>
      <Navbar bg="white" variant="white" expand="lg" className="justify-content-between"> 
        <Navbar.Brand>
          <img
            src="/logo.png" 
            alt="Parks and Rec Logo"
            className="mr-2"
            style={{ height: '30px' }} 
          />
          Hood River Parks and Recreation May 2024 Ballot
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/donate" className="nav-link">Donate</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/community-input" className="nav-link">Community Input</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
