import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routing/PrivateRoute";
import Alert from "./components/layout/Alerts";
import MerchantRegister from "./components/merchant/MerchantRegister";
import NerExtract from "./components/dashboard/NerExtract";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Landing from "./components/landing/Landing";
import IternarySlider from "./components/dashboard/IternarySlider";
const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            {/* <Navbar /> */}
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path="/merchant/register"
                  component={MerchantRegister}
                />
                <Route exact path="/itr" component={IternarySlider} />
                <PrivateRoute exact path="/dashboard" component={NerExtract} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
