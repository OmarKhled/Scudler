import {
  COURSE_NAME_CHANGE,
  ADD_NEW_SECTION,
  DELETE_SECTION,
  SECTION_NUMBER_CHANGE,
} from "../types/coursesTypes";
import _ from "lodash";

export const addSection = (courseIndex) => (dispatch, getState) => {
  const newSectionNumber =
    _.last(getState().courses.courses[courseIndex].body).sectionNumber + 1;

  dispatch({
    type: ADD_NEW_SECTION,
    payload: { newSectionNumber, courseIndex },
  });
};

export const courseNameChange = (courseIndex, courseName) => (dispatch) => {
  dispatch({
    type: COURSE_NAME_CHANGE,
    payload: { courseIndex, courseName },
  });
};

export const deleteSection = (sectionIndex, courseIndex) => (dispatch) => {
  dispatch({
    type: DELETE_SECTION,
    payload: { sectionIndex, courseIndex },
  });
};

export const sectionNumberChange =
  (sectionIndex, courseIndex, sectionNumber) => (dispatch) => {
    dispatch({
      type: SECTION_NUMBER_CHANGE,
      payload: { sectionIndex, courseIndex, sectionNumber },
    });
  };
