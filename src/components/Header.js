import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Translate from "./Translate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <React.Fragment>
      <Navbar bg="white" variant="white" expand="lg" className="justify-content-between align-items-center"> 
        <Navbar.Brand>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/Home">
            <img
              src="/logo.png" 
              alt="Parks and Rec Logo"
              className="mr-2"
              style={{ height: '150px', marginRight: '20px' }}
            /></Link>
            <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '50px' }}>
              Hood River Valley Parks and Recreation District 
              </span>
              </div>
              <br/>
              </div>
              <span style={{ fontSize: '40px' }}>
              Political Action Committee
              </span>
          </div>
            </div>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">INFO ON BALLOT MEASURES</Link>
          <Link to="/community-input" className="nav-link">COMMUNITY INPUT</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
          <Link to="/donate" className="nav-link">DONATE</Link>
        </Nav>
      </Navbar>
      <Translate /> 
    </React.Fragment>
  );
}

export default Header;
