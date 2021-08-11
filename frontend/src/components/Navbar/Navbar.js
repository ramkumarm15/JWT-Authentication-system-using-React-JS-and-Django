import React from "react";

import { Nav, Navbar, Container } from "react-bootstrap";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { logout } from "../../store/actions/auth";

export const HeaderApp = ({ logout, isAuthenticated, user }) => {
  const admin = user !== null ? user.is_superuser : false;
  // console.log(admin);

  const logout_user = () => {
    logout();
  };

  const AuthLinks = () => {
    return (
      <>
        {admin ? (
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
        ) : null}
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
  user: state.auth.user,
});

export const Header = connect(mapStateToProps, { logout })(HeaderApp);
