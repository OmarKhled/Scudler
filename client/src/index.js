import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/master.scss";

import { Provider } from "react-redux";
import store from "./redux/store";

store().then((str) => {
  setTimeout(() => {
    ReactDOM.render(
      <Provider store={str}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  }, 600);
});
