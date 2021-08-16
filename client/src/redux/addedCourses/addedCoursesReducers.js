import { ADD_COURSE, REMOVE_COURSE } from "../types/addedCoursesTypes";

const addedCoursesReducers = (state = { addedCourses: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COURSE: {
      const found = state.addedCourses.find(
        (course) => course.courseName === payload.courseName
      );
      if (found) {
        return state;
      } else {
        return {
          ...state,
          addedCourses: [...state.addedCourses, payload],
        };
      }
    }
    case REMOVE_COURSE: {
      return {
        ...state,
        addedCourses: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default addedCoursesReducers;
