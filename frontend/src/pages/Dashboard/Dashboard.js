import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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

const mapToStateProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export const Dashboard = connect(mapToStateProps)(DashboardApp);
