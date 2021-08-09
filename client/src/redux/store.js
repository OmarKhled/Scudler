import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import coursesReducers from "./schedules/coursesReducers";

const reducers = combineReducers({
  courses: coursesReducers,
});

const middlewares = [thunk];

const intialState = {};

const store = createStore(
  reducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
