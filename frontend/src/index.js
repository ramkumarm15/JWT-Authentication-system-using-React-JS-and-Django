import React from "react";
import ReactDOM from "react-dom";

// App
import { App } from "./App";

// React Router
import { HashRouter } from "react-router-dom";

// Redux Store
import { Provider } from "react-redux";
import { store } from "./store/store";

// Main CSS
import "./styles/app.css";

const Root = document.getElementById("root");

const AppSource = (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

ReactDOM.render(AppSource, Root);
