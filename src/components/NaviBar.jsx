import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navibar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="ms-4">KEWEBLE.dev</Navbar.Brand>
      <Navbar.Toggle onClick={toggleNav} aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav" in={expanded}>
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="projects" smooth={true} duration={500} offset={-50}>
              Projects
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="connect" smooth={true} duration={500} offset={-50}>
              Connect
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navibar;
