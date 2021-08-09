import {
  COURSE_NAME_CHANGE,
  ADD_NEW_SECTION,
  DELETE_SECTION,
  SECTION_NUMBER_CHANGE,
  UPDATE_LECTURE_NAME,
  UPDATE_LECTURE_SLOT,
  UPDATE_LECTURE_PROFESSOR,
  DELETE_LECTURE_SLOT,
  ADD_LECTURE_SLOT,
} from "../types/coursesTypes";
import _ from "lodash";

export const addSection = (courseIndex) => (dispatch, getState) => {
  const newSectionNumber = getState().courses.courses[courseIndex].body[0]
    ? _.last(getState().courses.courses[courseIndex].body).sectionNumber + 1
    : 1;

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

export const updateLectureName =
  (sectionIndex, courseIndex, lectureName) => (dispatch) => {
    dispatch({
      type: UPDATE_LECTURE_NAME,
      payload: { sectionIndex, courseIndex, lectureName },
    });
  };

export const updateLectureSlot =
  (sectionIndex, courseIndex, slotIndex, slot) => (dispatch) => {
    dispatch({
      type: UPDATE_LECTURE_SLOT,
      payload: { sectionIndex, courseIndex, slotIndex, slot },
    });
  };

export const updateLectureProfessor =
  (sectionIndex, courseIndex, professor) => (dispatch) => {
    dispatch({
      type: UPDATE_LECTURE_PROFESSOR,
      payload: { sectionIndex, courseIndex, professor },
    });
  };

export const deleteLectureSlot =
  (sectionIndex, courseIndex, slotIndex) => (dispatch) => {
    dispatch({
      type: DELETE_LECTURE_SLOT,
      payload: { sectionIndex, courseIndex, slotIndex },
    });
  };

export const addLectureSlot = (sectionIndex, courseIndex) => (dispatch) => {
  dispatch({
    type: ADD_LECTURE_SLOT,
    payload: { sectionIndex, courseIndex },
  });
};
