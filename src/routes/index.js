import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../container/Home";
import { Login } from "../container/user/login";
import { Signup } from "../container/user/signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
