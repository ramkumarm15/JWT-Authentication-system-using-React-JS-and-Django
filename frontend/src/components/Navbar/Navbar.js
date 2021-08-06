import React, { useState } from "react";

import { Nav, Navbar, Container } from "react-bootstrap";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { logout } from "../../store/actions/auth";

export const HeaderApp = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    console.log('logout')
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
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Link
              </Nav.Link>
              {isAuthenticated ? (
                <Nav.Link onClick={logout_user}>Logout</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
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
