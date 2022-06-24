import React from 'react';
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div className="Head">
          <header>
            <Navbar variant="dark" expand="lg">
            <Container className='Navbar-container'>
              <div>
              <Navbar.Brand href="#home">Talented Tenth</Navbar.Brand>
              </div>
              <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">About Us</Nav.Link>
                  <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </div>
            </Container>
          </Navbar>
          </header>
        </div>
    );
}

export default Header;