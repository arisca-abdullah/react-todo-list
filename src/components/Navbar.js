import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Link className="navbar-brand" to="/">
        Todo List
      </Link>
    </Container>
  </Navbar>
);
