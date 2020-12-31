import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function LandingPageNavbar() {
  
  return (
    <>
      <Nav className="nav">

          <Navbar className="navbar">
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Our Mission</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Contact</NavLink>
            </NavItem>
          </Navbar>

      </Nav>
    </>
  );
}

export default LandingPageNavbar;
