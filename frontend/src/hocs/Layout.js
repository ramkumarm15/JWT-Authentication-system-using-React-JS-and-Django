import React, { useEffect } from "react";

import { connect } from "react-redux";
import { checkAuthentication, loadUser } from "../store/actions/auth";

import { ToastContainer, Slide } from "react-toastify";
// import ReactLoading from "react-loading";



const LayoutApp = ({ checkAuthentication, loadUser, children }) => {
  useEffect(() => {
    checkAuthentication();
    loadUser();
  });

  return (
    <>
      <ToastContainer transition={Slide} />
      {children}
    </>
  );
};

export const Layout = connect(null, { checkAuthentication, loadUser })(
  LayoutApp
);
