import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";

import coursesReducer from "./courses/coursesReducers";
import addedCoursesReducers from "./addedCourses/addedCoursesReducers";
import finalCoursesReducers from "./finalCourses/finalCoursesReducers";
import scheduleReducers from "./schedule/scheduleReducers";

const reducers = combineReducers({
  courses: coursesReducer,
  addedCourses: addedCoursesReducers,
  finalCourses: finalCoursesReducers,
  schedule: scheduleReducers,
});

const middlewares = [thunk];

const store = async () => {
  try {
    const res = await axios.get("/api/courses");

    const initialState = {
      courses: {
        courses: res.data.courses,
      },
    };

    return createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
  } catch (err) {
    console.log(err);
    return createStore(
      reducers,
      {},
      composeWithDevTools(applyMiddleware(...middlewares))
    );
  }
};

export default store;
