import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reduceReducers from "reduce-reducers";

import axios from "axios";

import coursesReducers from "./courses/coursesReducers";
import scheduleReducers from "./schedule/scheduleReducers";
import { userAuthReducer } from "./users/usersReducers";
import crossSliceReducer from "./crossSliceReducer";

const localReducers = combineReducers({
  courses: coursesReducers,
  schedules: scheduleReducers,
  user: userAuthReducer,
});

let reducers = reduceReducers(localReducers, crossSliceReducer);

const middlewares = [thunk];

var initialState = {
  user: {
    user: {},
    loading: false,
    alerts: [],
    isAuthenticated: false,
  },
};

const token = localStorage.getItem("token");

const store = async () => {
  if (token !== null) {
    const config = {
      headers: {
        auth: token,
      },
    };
    try {
      const res = await axios.get("/api/users/auth", config);
      const user = res.data.user;
      if (user) {
        initialState = {
          user: {
            user: user,
            loading: false,
            alerts: [],
            isAuthenticated: true,
          },
          courses: {
            courses: user.courses,
          },
        };
      }
    } catch (err) {
      console.log(err);
    }

    return createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
  } else {
    return createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
  }
};

export default store;
