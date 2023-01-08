import React, { useEffect } from "react";
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

// PAGES
import Signin from "./Signin";
import Signup from "./Signup";
import RecoverAccount from "./RecoverAccount"
import NotFound from "../NotFound";
import SignAdmin from './SignAdmin'

const AuthContainer = () => {

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <div>
      <Switch>
        <Route exact path='/auth/admin_signin' component={SignAdmin} />
        <Route exact path="/auth/signin" component={Signin} />
        <Route exact path="/auth/signup" component={Signup} />
        <Route exact path="/auth/recover" component={RecoverAccount} />
        <Route exact path="/auth" component={Signin} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default withRouter(AuthContainer);
