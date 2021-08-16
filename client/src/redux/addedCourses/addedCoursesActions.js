import { ADD_COURSE, REMOVE_COURSE } from "../types/addedCoursesTypes";

export const addCourse = (course) => (dispatch) => {
  dispatch({
    type: ADD_COURSE,
    payload: course,
  });
};

export const removeCourse = (course) => (dispatch, getState) => {
  let addedCourses = getState().addedCourses.addedCourses;

  addedCourses = addedCourses.filter(
    (addedCourse) => addedCourse.courseName !== course.courseName
  );
  dispatch({
    type: REMOVE_COURSE,
    payload: addedCourses,
  });
};
