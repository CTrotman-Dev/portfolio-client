import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


// import Login from "./Login";

function Header() {
    const [isVisible, setIsVisible] = useState(true);

    function handleClick() {
        setIsVisible(!isVisible);
    }

    return (
<Navbar collapseOnSelect className="navbar" variant="dark" expand="lg" sticky="top">
  
  
  <Navbar.Brand href="/">
  <img className="logo-image" src="/logo.png" alt="logo" />
  </Navbar.Brand>
    {/* <Navbar.Brand href="/">Craig Trotman</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/clients">Clients</Link>
        <Link className="nav-item" to="/education">Education</Link>
        <Link className="nav-item" to="/about">About</Link>
        <Link className="nav-item" to="/contact">Contact</Link>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>
       
        // <nav className="navbar navbar-expand-lg sticky-top">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="/">Craig Trotman</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
                
        //             <div className="collapse navbar-collapse" id="navbarToggler">
        //             {isVisible &&  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li onClick={handleClick} className="nav-item">
        //                         <Link to="/">Home</Link>
        //                     </li>
        //                     <li onClick={handleClick} className="nav-item">
        //                         <Link to="/clients">Clients</Link>
        //                     </li>
        //                     <li onClick={handleClick} className="nav-item">
        //                         <Link to="/education">Education</Link>
        //                     </li>
        //                     <li onClick={handleClick} className="nav-item">
        //                         <Link to="/about">About</Link>
        //                     </li>
        //                     <li onClick={handleClick} className="nav-item">
        //                         <Link to="/contact">Contact</Link>
        //                     </li>
        //                 </ul>}

        //             </div>
        //     </div>
        // </nav>
    );
}

export default Header;