import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import axios from "axios";
import Measurements from "../components/Measurements";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import Home from "../components/Home";
import AddMeasure from "../components/AddMeasure";

function Router() {
  <div className="App">
    {/* <div className="heading">Tracking App</div>
    <Measurements />
    <Nav /> */}
  </div>;
  return (
    <div className="App">
      <BrowserRouter>
        <Heading />
        <Switch>
          <Route exact path="/add" component={AddMeasure} />
          <Route exact path="/tracker" component={Measurements} />
        </Switch>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default Router;
