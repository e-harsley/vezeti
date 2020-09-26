import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import SignupPage from "./components/pages/SignupPage";
import PasswordReset from "./components/pages/PasswordReset";
import pinReset from "./components/pages/pinReset";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alert from "./components/Alert";
import PrivateRoute from "./components/common/PrivateRoute";
import history from "./history";
import { getUser } from "./actions/auth";
import store from "./store";
import EmailChange from "./components/pages/EmailChange";

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "70px",
  transition: transitions.SCALE,
};

class App extends Component {
  componentDidMount() {
    store.dispatch(getUser());
  }
  render() {
    return (
      <div className="App">
        <AlertProvider template={AlertTemplate} {...options}>
          <Alert />
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute
                exact
                path="/change-email"
                component={EmailChange}
              />
              <Route path="/signup" exact component={SignupPage} />
              <Route path="/password-reset" exact component={PasswordReset} />
              <Route path="/pin-reset" exact component={pinReset} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </Router>
        </AlertProvider>
      </div>
    );
  }
}

export default App;
