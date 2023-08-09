import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Dropdown } from "react-bootstrap";

import Logo from "./Logo";

// import Login from "./Login";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      className="navbar"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto mb-2 mb-lg-0">
          <Dropdown>
            <Dropdown.Toggle variant="custom" className="custom-dropdown">
              Guides
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Nav.Link href="#/guides">Menu</Nav.Link>
              <Nav.Link href="#/guides/Intro">Intro</Nav.Link>
              <Nav.Link href="#/guides/HTMLBasics">HTML Basics</Nav.Link>
              <Nav.Link href="#/guides/CSSBasics">CSS Basics</Nav.Link>
              <Nav.Link href="#/guides/CSharpBasics">C# Basics</Nav.Link>
              <Nav.Link href="#/guides/CSharp/CSharp1">C# 1</Nav.Link>
              <Nav.Link href="#/guides/JavaScriptBasics">
                JavaScript Basics
              </Nav.Link>
              <Nav.Link href="#/guides/ReactBasics">React Basics</Nav.Link>
              <Nav.Link href="#/guides/AdvancedIntro">Advanced Intro</Nav.Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="custom" className="custom-dropdown">
              Comparisons
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Nav.Link href="#/compare">Menu</Nav.Link>
              <Nav.Link href="#/compare/phones">Smart Phones</Nav.Link>
              <Nav.Link href="#/compare/tablets">Tablets</Nav.Link>
              <Nav.Link href="#/compare/laptops">Laptops</Nav.Link>
              <Nav.Link href="#/compare/graphicscards">GPU's</Nav.Link>
              <Nav.Link href="#/compare/tvs">TV's</Nav.Link>
              <Nav.Link href="#/compare/powersupply">PSU's</Nav.Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="custom" className="custom-dropdown">
              Portfolio
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#/clients">Clients</Nav.Link>
              <Nav.Link href="#/education">Education</Nav.Link>
              <Nav.Link href="#/about">About</Nav.Link>
              <Nav.Link href="#/contact">Contact</Nav.Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
