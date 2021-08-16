import { EDIT_COURSE } from "../types/finalCoursesTypes";

const finalCoursesReducers = (state = { finalCourses: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
    case EDIT_COURSE: {
      return {
        ...state,
        finalCourses: payload,
      };
    }
  }
};

export default finalCoursesReducers;
