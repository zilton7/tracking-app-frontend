import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Measurements from "../containers/Measurements";
import Progress from "../containers/Progress";
import AddMeasure from "../components/AddMeasure";
import Nav from "../components/Nav";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Measurements} />
        <Route exact path="/add" component={AddMeasure} />
        <Route exact path="/tracker" component={Measurements} />
        <Route path="/progress/:measurementId" component={Progress} />
      </Switch>
      <Nav />
    </BrowserRouter>
  );
}

export default Router;
