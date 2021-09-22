import { GET_USER_SUCCESS } from "./types/usersTypes";

const crossSliceReducer = (state, action) => {
  // eslint-disable-next-line
  const { type, payload } = action;

  switch (type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        courses: {
          courses: payload.courses,
        },
        user: {
          user: payload,
          loading: false,
          isAuthenticated: true,
          alerts: [],
        },
      };
    default:
      return state;
  }
};

export default crossSliceReducer;
