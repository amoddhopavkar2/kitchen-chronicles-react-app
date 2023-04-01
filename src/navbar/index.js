import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
        Kitchen Chronicles
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/search")}>Recipes</Nav.Link>
            <Nav.Link onClick={() => navigate("/search")}>Cocktails</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
            <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
