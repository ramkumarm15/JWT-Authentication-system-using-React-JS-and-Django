import React, { useState } from "react";

import { Nav, Navbar, Container } from "react-bootstrap";
import { connect } from "react-redux";

import { Link, NavLink } from "react-router-dom";

import { logout } from "../../store/actions/auth";

export const HeaderApp = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
  };

  const AuthLinks = () => {
    return (
      <>
        <Nav.Link onClick={logout_user}>Logout</Nav.Link>
      </>
    );
  };
  const GuestLinks = () => {
    return (
      <>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={Link} to="/signup">
          Signup
        </Nav.Link>
      </>
    );
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Login System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                FAQ
              </Nav.Link>
              {isAuthenticated ? <AuthLinks /> : <GuestLinks />}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export const Header = connect(mapStateToProps, { logout })(HeaderApp);
