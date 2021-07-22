import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Router from "../../router/Router";
import store from "../../store/index";
import Login from "../../components/Login";
import Heading from "../../components/Heading";
import Measurements from "../../containers/Measurements";
import AddMeasure from "../../components/AddMeasure";
import Progress from "../../containers/Progress";
import Nav from "../../components/Nav";

afterEach(cleanup);

const user = {
  loggedIn: true,
};

it("Takes website's snapshot", () => {
  const { asFragment } = render(
    <Provider store={store}>
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
    </Provider>
  );
  expect(
    asFragment(
      <Provider store={store}>
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
      </Provider>
    )
  ).toMatchSnapshot();
});

it("Displays app's title", () => {
  render(
    <Provider store={store}>
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
    </Provider>
  );
  const element = screen.getByText(/Tracking App/i);
  expect(element).toBeInTheDocument();
});

// it("Displays nav bar", () => {
//   render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   );
//   const element = screen.getByPlaceholderText(/Search for Meal/i);
//   expect(element).toBeInTheDocument();
// });
