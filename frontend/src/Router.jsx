import React from "react";
import { Route, Switch } from "react-router";
import Index from "./containers/Index";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";



const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Index} />
        <Route exact path={"/signup"} component={SignUp} />
        <Route exact path={"/signin"} component={SignIn} />

      </Switch>
    </>
  );
};
export default Router;
