import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

import Logo from "./Logo";

// import Login from "./Login";

function Header() {
  return (
    <Navbar collapseOnSelect className="navbar" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-0">
          <Nav.Link eventKey="0" as={Link} className="nav-item" href="/" to="/">Home</Nav.Link>
          <Nav.Link eventKey="1" as={Link} className="nav-item" href="/clients" to="/clients">Clients</Nav.Link>
          <Nav.Link eventKey="2" as={Link} className="nav-item" href="/education" to="/education">Education</Nav.Link>
          <Nav.Link eventKey="3" as={Link} className="nav-item" href="/about" to="/about">About</Nav.Link>
          <Nav.Link eventKey="4" as={Link} className="nav-item" href="/contact" to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;