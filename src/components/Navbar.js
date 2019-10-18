import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Link className="navbar-brand" to="/">
        Todo List
      </Link>
      <Nav className="mr-auto">
        <Link className="nav-item nav-link" to="/">
          Home
        </Link>
        <Link className="nav-item nav-link" to="/about">
          About
        </Link>
      </Nav>
    </Container>
  </Navbar>
);
