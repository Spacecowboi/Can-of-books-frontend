import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import AuthButtons from './Components/AuthButtons';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/About" className="btn btn-outline-light">About</Link>
          </Nav>
          <Nav>
            <AuthButtons />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;

