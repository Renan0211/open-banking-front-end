import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navbar1 extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Open banking</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar">
      <Nav className="me-auto">
        <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
        <Link to="/login"><Nav.Link href="#link">Login</Nav.Link></Link>
        <NavDropdown title="About us" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Our History</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Work with us!</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
        </NavDropdown>
        <Nav className="justify-content-end">
          <Link to="/register"><Nav.Link href="#link">Register</Nav.Link></Link>
        </Nav>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
  }
};

export default Navbar1;