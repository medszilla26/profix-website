import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class Navigate extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigate;
