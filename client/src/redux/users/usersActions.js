import axios from "axios";

import {
  REQUEST_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  CLEAR_USER_ALERTS,
  LOGOUT_USER,
} from "../types/usersTypes";

import { isEmail } from "validator";

export const getUser = (user) => async (dispatch, getState) => {
  dispatch({
    type: REQUEST_USER,
  });

  try {
    const res = await axios.post("/api/users", user);
    const data = res.data;

    if (data.msg) {
      dispatch({
        type: GET_USER_FAIL,
        payload: data.msg,
      });
      setTimeout(() => {
        dispatch({
          type: CLEAR_USER_ALERTS,
        });
      }, 3000);
    } else if (data.user) {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: data.user,
      });

      const token = getState().user.user.token;
      localStorage.setItem("token", token);
    }
  } catch (err) {
    console.log(err, err.message);
    dispatch({
      type: GET_USER_FAIL,
      payload: "Server Error",
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_USER_ALERTS,
      });
    }, 3000);
  }
};

export const registerUser = (user) => async (dispatch, getState) => {
  dispatch({
    type: REQUEST_USER,
  });

  try {
    console.log(user.email);
    if (isEmail(user.email)) {
      const res = await axios.post("/api/users/register", user);
      const data = res.data;

      if (data.msg) {
        dispatch({
          type: GET_USER_FAIL,
          payload: data.msg,
        });
        setTimeout(() => {
          dispatch({
            type: CLEAR_USER_ALERTS,
          });
        }, 3000);
      } else if (data.user) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: data.user,
        });

        const token = getState().user.user.token;
        localStorage.setItem("token", token);
      }
    } else {
      dispatch({
        type: GET_USER_FAIL,
        payload: "Invalid Email",
      });
      setTimeout(() => {
        dispatch({
          type: CLEAR_USER_ALERTS,
        });
      }, 3000);
    }
  } catch (err) {
    console.log(err, err.message);
    dispatch({
      type: GET_USER_FAIL,
      payload: "Server Error",
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_USER_ALERTS,
      });
    }, 3000);
  }
};

export const saveCourses = (courses) => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token !== null) {
    const config = {
      headers: {
        auth: token,
      },
    };
    try {
      // eslint-disable-next-line
      const res = await axios.post("/api/users/courses", { courses }, config);
    } catch (err) {
      console.log(err);
    }
  }
};

export const logOutUser = (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
