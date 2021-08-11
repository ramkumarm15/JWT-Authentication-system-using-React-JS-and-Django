import React from "react";

import { Switch, Route } from "react-router-dom";

// URL Routes for pages
import { Routes } from "./utils/Routes";

// layout
import { Layout } from "./hocs/Layout";

// Component
import { Header } from "./components/Navbar/Navbar";
import { Loader } from "./components/Loader/Loader";
// Pages
import { Activation } from "./pages/Activation/Activation";
import { Homepage } from "./pages/Homepage/Homepage";
import { LoginPage } from "./pages/Loginpage/Loginpage";
import { Resetpassword } from "./pages/Resetpassword/Resetpassword";
import { ResetPasswordConfrim } from "./pages/Resetpasswordconfrim/ResetPasswordConfrim";
import { Signup } from "./pages/Signup/Signup";
import { Dashboard } from "./pages/Dashboard/Dashboard";

export const App = () => {
  const RouteWithSidebar = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 4000);
      return () => clearTimeout(timer);
    }, []);
    return (
      <Route
        {...rest}
        render={(props) => (
          <>
            <Layout>
              {!loaded ? (
                <Loader />
              ) : (
                <>
                  <Header />
                  <Component {...props} />
                </>
              )}
            </Layout>
          </>
        )}
      />
    );
  };

  const RouteFullPage = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 4000);
      return () => clearTimeout(timer);
    }, []);
    console.log(loaded);
    return (
      <Route
        {...rest}
        render={(props) => (
          <>
            <Layout>
              {!loaded ? (
                <Loader />
              ) : (
                <>
                  <Component {...props} />
                </>
              )}
            </Layout>
          </>
        )}
      />
    );
  };

  return (
    <>
      <Switch>
        <RouteWithSidebar
          component={Homepage}
          path={Routes.Dashboard.path}
          exact
        />
        <RouteFullPage
          component={LoginPage}
          path={Routes.Loginpage.path}
          exact
        />
        <RouteFullPage component={Signup} path={Routes.signup.path} exact />
        <RouteFullPage
          component={Activation}
          path={Routes.activation.path}
          exact
        />
        <RouteFullPage
          component={Resetpassword}
          path={Routes.resetpassword.path}
          exact
        />
        <RouteFullPage
          component={ResetPasswordConfrim}
          path={Routes.resetpasswordconfrim.path}
          exact
        />
        <RouteWithSidebar component={Dashboard} path={Routes.Home.path} exact />
      </Switch>
    </>
  );
};
