import React, { useEffect } from "react";
import { Header } from "../components/Navbar/Navbar";

import { connect } from "react-redux";
import { checkAuthentication, loadUser } from "../store/actions/auth";

import { ToastContainer, Slide } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const LayoutApp = ({ checkAuthentication, loadUser, children }) => {
  useEffect(() => {
    checkAuthentication();
    loadUser();
  }, []);

  return (
    <>
      <Header />
      <ToastContainer transition={Slide} />
      {children}
    </>
  );
};

export const Layout = connect(null, { checkAuthentication, loadUser })(
  LayoutApp
);
