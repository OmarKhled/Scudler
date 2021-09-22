import {
  REQUEST_USER,
  GET_USER_FAIL,
  CLEAR_USER_ALERTS,
  LOGOUT_USER,
} from "../types/usersTypes";

export const userAuthReducer = (
  state = { user: {}, alerts: [], loading: false, isAuthenticated: false },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_USER:
      return {
        ...state,
        loading: true,
        user: {},
      };
    case GET_USER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        alerts: [...state.alerts, payload],
        user: {},
        loading: false,
        isAuthenticated: false,
      };
    case CLEAR_USER_ALERTS:
      return {
        ...state,
        alerts: [],
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        user: {},
        loading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
