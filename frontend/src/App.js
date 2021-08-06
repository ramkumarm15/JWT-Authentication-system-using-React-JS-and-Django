import React from "react";

import { Switch, Route } from "react-router-dom";

// Components
import { Navbar } from "./components/Navbar/Navbar";

// URL Routes for pages
import { Routes } from "./utils/Routes";

// layout
import { Layout } from "./hocs/Layout";

// Pages
import { Activation } from "./pages/Activation/Activation";
import { Homepage } from "./pages/Homepage/Homepage";
import { Login } from "./pages/Loginpage/Loginpage";
import { Resetpassword } from "./pages/Resetpassword/Resetpassword";
import { ResetPasswordConfrim } from "./pages/Resetpasswordconfrim/ResetPasswordConfrim";
import { Signup } from "./pages/Signup/Signup";

export const App = () => {
  const LayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  };

  return (
    <>
      <Switch>
        {/* <LayoutRoute component={Navbar} path={Routes.Home.path} exact /> */}
        <LayoutRoute component={Homepage} path={Routes.Dashboard.path} exact />
        <LayoutRoute component={Login} path={Routes.Loginpage.path} exact />
        <LayoutRoute component={Signup} path={Routes.signup.path} exact />
        <LayoutRoute
          component={Activation}
          path={Routes.activation.path}
          exact
        />
        <LayoutRoute
          component={Resetpassword}
          path={Routes.resetpassword.path}
          exact
        />
        <LayoutRoute
          component={ResetPasswordConfrim}
          path={Routes.resetpasswordconfrim.path}
          exact
        />
      </Switch>
    </>
  );
};
