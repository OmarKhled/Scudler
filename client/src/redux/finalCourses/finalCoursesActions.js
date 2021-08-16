import { EDIT_COURSE } from "../types/finalCoursesTypes";

export const editCourses = (finalCourses) => (dispatch) => {
  dispatch({
    type: EDIT_COURSE,
    payload: finalCourses,
  });
};
