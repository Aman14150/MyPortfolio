import React from "react";
import logo from "../../assets/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function NavContents() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="mainNav">
      <Navbar.Brand as={Link} to="/" className="Portfolio">
        <img src={logo} alt="Logo" className="logoImg" /><span className="brandText">Portfolio</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/skills">
            <Nav.Link>Skills</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resume">
            <Nav.Link>Resume</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contacts">
            <Nav.Link>Contacts</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavContents;
