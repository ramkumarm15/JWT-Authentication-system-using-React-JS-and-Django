import React, { useState, useEffect } from "react";

// Router redirection
import { Redirect } from "react-router-dom";

// redux connect with react
import { connect } from "react-redux";


const DashboardApp = ({ user, isAuthenticated }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      const { is_superuser } = user;
      setIsAdmin(is_superuser);
    }
  }, [isAuthenticated, user]);
  return (
    <>
      {isAuthenticated ? (
        isAdmin ? (
          <p>Dashobard</p>
        ) : (
          <p>No accesss</p>
        )
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

// Get Data from redux store
const mapToStateProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

// Connect react component with redux store
export const Dashboard = connect(mapToStateProps)(DashboardApp);
