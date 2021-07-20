import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Router from "./router/Router";
import "./assets/styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
