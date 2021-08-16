import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

store().then((str) => {
  ReactDOM.render(
    <Provider store={str}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
