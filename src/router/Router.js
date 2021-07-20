import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import axios from "axios";
import Measurements from "../components/Measurements";
import Nav from "../components/Nav";

function Router() {
  <div className="App">
    {/* <div className="heading">Tracking App</div>
    <Measurements />
    <Nav /> */}
  </div>;
  return (
    <div className="App">
      <div className="heading">Tracking App</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/tracker" component={Measurements} />
        </Switch>
      </BrowserRouter>
      <Nav />
    </div>
  );
}

export default Router;
