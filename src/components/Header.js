import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <React.Fragment>
      <Navbar bg="white" variant="white" expand="lg" className="justify-content-between align-items-center"> 
        <Navbar.Brand>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/logo.png" 
              alt="Parks and Rec Logo"
              className="mr-2"
              style={{ height: '150px', marginRight: '20px' }}
            />
            <div>
              <span style={{ fontSize: '50px' }}>
                Hood River Parks and Recreation District
              </span>
              <br />
              <span style={{ fontSize: '40px' }}>
                May 21, 2024 Election
              </span>
            </div>
          </div>
        </Navbar.Brand>
        <Nav className="ml-auto">
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
