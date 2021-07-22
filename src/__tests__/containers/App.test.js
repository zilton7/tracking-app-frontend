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
import App from "../../containers/App";

afterEach(cleanup);

const user = {
  loggedIn: true,
};

it("Takes website's snapshot", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(
    asFragment(
      <Provider store={store}>
        <App />
      </Provider>
    )
  ).toMatchSnapshot();
});

it("Displays app's title", () => {
  render(
    <Provider store={store}>
      <App />
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
