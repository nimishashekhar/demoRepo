import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./components/App";
import configureStore from "./util/configureStore";
import reportWebVitals from "./reportWebVitals";
import $ from "jquery";

import "./App.css";

const store = configureStore();
$("body").click(function (event) {
  if ($("#exampleModal").is(":visible")) {
    $("#exampleModal").modal("hide");
  }
  if ($("#notificationModal").is(":visible")) {
    $("#notificationModal").modal("hide");
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
