import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import axios from "axios";
import Measurements from "../components/Measurements";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import Home from "../components/Home";
import AddMeasure from "../components/AddMeasure";
import Progress from "../components/Progress";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadMeasurements from "../actions/measurementsAction";

function Router() {
  // Fetch measurements data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeasurements());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Heading />
        <Switch>
          <Route exact path="/add" component={AddMeasure} />
          <Route exact path="/tracker" component={Measurements} />
          <Route path="/progress/:measurementId" component={Progress} />
        </Switch>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default Router;
