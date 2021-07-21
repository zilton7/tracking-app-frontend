import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Measurements from "../components/Measurements";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import Home from "../components/Home";
import AddMeasure from "../components/AddMeasure";
import Progress from "../components/Progress";
import Login from "../components/Login";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadMeasurements from "../actions/measurementsAction";

function Router() {
  // Fetch measurements data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeasurements());
  }, [dispatch]);

  // Load user data from state
  let user = useSelector((state) => state.user);

  return (
    <div className="App">
      {user.loggedIn ? (
        <BrowserRouter>
          <Heading />
          <Switch>
            <Route exact path="/" component={Measurements} />
            <Route exact path="/add" component={AddMeasure} />
            <Route exact path="/tracker" component={Measurements} />
            <Route path="/progress/:measurementId" component={Progress} />
          </Switch>
          <Nav />
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Router;
