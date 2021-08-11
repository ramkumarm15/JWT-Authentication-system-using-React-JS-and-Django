import React from "react";

// Router redirection
import { Link, Redirect } from "react-router-dom";

// redux connect with react
import { connect } from "react-redux";

import { Container, Row, Col } from "react-bootstrap";

const HomepageApp = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? (
        <Container>
          <Row>
            <Col xl={12}>
              <div className="mt-5 p-5 bg-light">
                <div className="text-center">
                  <h1>Session Authentication App</h1>
                  <p className="text-muted">
                    The Application uses a Django rest framework session
                    authentication to login and logout users. Here I use React
                    as Frontend.
                  </p>
                </div>
                <hr className="my-4" />
                <Link className="btn btn-secondary me-3" to="/login">
                  Login
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

// Get Data from redux store
const mapToStateProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// Connect react component with redux store
export const Homepage = connect(mapToStateProps)(HomepageApp);
