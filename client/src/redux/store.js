import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import coursesReducer from "./courses/coursesReducers";

const reducers = combineReducers({
  courses: coursesReducer,
});

const middlewares = [thunk];

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
