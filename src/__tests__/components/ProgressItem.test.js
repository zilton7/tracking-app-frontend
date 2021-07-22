import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ProgressItem from "../../components/ProgressItem";
import store from "../../store";

afterEach(cleanup);

it("displays ProgressItem", () => {
  render(
    <Provider store={store}>
      <ProgressItem
        id="005784"
        date="2021-07-21T11:43:45.134Z"
        data="23.6"
        key="005784"
      />
    </Provider>
  );
  expect(screen.getByText("July 21, 2021")).toBeTruthy();
});
