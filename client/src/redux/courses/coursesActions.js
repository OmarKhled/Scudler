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
  CHANGE_TUTORIAL_PREFIX,
  CHANGE_TUTORIAL_NAME,
  CHANGE_TUTORIAL_TA,
  DELETE_TUTORIAL,
  ADD_TUTORIAL,
  DELETE_TUTORIAL_SLOT,
  UPDATE_TUTORIAL_SLOT,
  ADD_TUTORIAL_SLOT,
  CHANGE_LAB_PREFIX,
  CHANGE_LAB_NAME,
  CHANGE_LAB_TA,
  DELETE_LAB,
  ADD_LAB,
  DELETE_LAB_SLOT,
  UPDATE_LAB_SLOT,
  ADD_LAB_SLOT,
  ADD_COURSE,
  DELETE_COURSE,
} from "../types/coursesTypes";
import _ from "lodash";

export const addCourse = () => (dispatch) => {
  dispatch({
    type: ADD_COURSE,
  });
};

export const deleteCourse = (courseIndex) => (dispatch) => {
  dispatch({
    type: DELETE_COURSE,
    payload: { courseIndex },
  });
};

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

export const updateLectureSlot =
  (sectionIndex, courseIndex, slotIndex, slot) => (dispatch) => {
    dispatch({
      type: UPDATE_LECTURE_SLOT,
      payload: { sectionIndex, courseIndex, slotIndex, slot },
    });
  };

export const addLectureSlot = (sectionIndex, courseIndex) => (dispatch) => {
  dispatch({
    type: ADD_LECTURE_SLOT,
    payload: { sectionIndex, courseIndex },
  });
};

// Tutorials
export const deleteTutorialSlot =
  (sectionIndex, courseIndex, slotIndex, tutorialIndex) => (dispatch) => {
    dispatch({
      type: DELETE_TUTORIAL_SLOT,
      payload: { sectionIndex, courseIndex, slotIndex, tutorialIndex },
    });
  };

export const updateTutorialSlot =
  (sectionIndex, courseIndex, slotIndex, slot, tutorialIndex) => (dispatch) => {
    dispatch({
      type: UPDATE_TUTORIAL_SLOT,
      payload: { sectionIndex, courseIndex, slotIndex, slot, tutorialIndex },
    });
  };

export const addTutorialSlot =
  (sectionIndex, courseIndex, tutorialIndex) => (dispatch) => {
    dispatch({
      type: ADD_TUTORIAL_SLOT,
      payload: { sectionIndex, courseIndex, tutorialIndex },
    });
  };

// Labs
export const deleteLabSlot =
  (sectionIndex, courseIndex, slotIndex, labIndex) => (dispatch) => {
    dispatch({
      type: DELETE_LAB_SLOT,
      payload: { sectionIndex, courseIndex, slotIndex, labIndex },
    });
  };

export const updateLabSlot =
  (sectionIndex, courseIndex, slotIndex, slot, labIndex) => (dispatch) => {
    dispatch({
      type: UPDATE_LAB_SLOT,
      payload: { sectionIndex, courseIndex, slotIndex, slot, labIndex },
    });
  };

export const addLabSlot =
  (sectionIndex, courseIndex, labIndex) => (dispatch) => {
    dispatch({
      type: ADD_LAB_SLOT,
      payload: { sectionIndex, courseIndex, labIndex },
    });
  };

export const changeTutorialPrefix =
  (sectionIndex, courseIndex, tutorialIndex, prefix) => (dispatch) => {
    dispatch({
      type: CHANGE_TUTORIAL_PREFIX,
      payload: { sectionIndex, courseIndex, tutorialIndex, prefix },
    });
  };

export const changeTutorialName =
  (sectionIndex, courseIndex, tutorialIndex, tutorialName) => (dispatch) => {
    dispatch({
      type: CHANGE_TUTORIAL_NAME,
      payload: { sectionIndex, courseIndex, tutorialIndex, tutorialName },
    });
  };

export const changeTutorialTa =
  (sectionIndex, courseIndex, tutorialIndex, ta) => (dispatch) => {
    dispatch({
      type: CHANGE_TUTORIAL_TA,
      payload: { sectionIndex, courseIndex, tutorialIndex, ta },
    });
  };

export const deleteTutorial =
  (sectionIndex, courseIndex, tutorialIndex) => (dispatch) => {
    dispatch({
      type: DELETE_TUTORIAL,
      payload: { sectionIndex, courseIndex, tutorialIndex },
    });
  };

// Labs

export const changeLabPrefix =
  (sectionIndex, courseIndex, labIndex, prefix) => (dispatch) => {
    dispatch({
      type: CHANGE_LAB_PREFIX,
      payload: { sectionIndex, courseIndex, labIndex, prefix },
    });
  };

export const changeLabName =
  (sectionIndex, courseIndex, labIndex, labName) => (dispatch) => {
    dispatch({
      type: CHANGE_LAB_NAME,
      payload: { sectionIndex, courseIndex, labIndex, labName },
    });
  };

export const changeLabTa =
  (sectionIndex, courseIndex, labIndex, ta) => (dispatch) => {
    dispatch({
      type: CHANGE_LAB_TA,
      payload: { sectionIndex, courseIndex, labIndex, ta },
    });
  };

export const deleteLab =
  (sectionIndex, courseIndex, labIndex) => (dispatch) => {
    dispatch({
      type: DELETE_LAB,
      payload: { sectionIndex, courseIndex, labIndex },
    });
  };

export const addTutorial =
  (sectionIndex, courseIndex, sectionNumber) => (dispatch, getState) => {
    const prefixes = getState().courses.courses[courseIndex].body[
      sectionIndex
    ].tutorial.map((tut) => tut.tutorialPrefix);
    if (prefixes.length > 0) {
      const prefixesTemplate = [
        `${sectionNumber}A`,
        `${sectionNumber}B`,
        `${sectionNumber}C`,
        `${sectionNumber}D`,
      ];

      const avilablePrefixes = _.differenceWith(
        prefixesTemplate,
        prefixes,
        _.isEqual
      );

      dispatch({
        type: ADD_TUTORIAL,
        payload: { sectionIndex, courseIndex, prefix: avilablePrefixes[0] },
      });
    } else {
      dispatch({
        type: ADD_TUTORIAL,
        payload: { sectionIndex, courseIndex, prefix: `${sectionNumber}A` },
      });
    }
  };

export const addLab =
  (sectionIndex, courseIndex, sectionNumber) => (dispatch, getState) => {
    const prefixes = getState().courses.courses[courseIndex].body[
      sectionIndex
    ].labs.map((lab) => lab.labPrefix);
    if (prefixes.length > 0) {
      const prefixesTemplate = [
        `${sectionNumber}A`,
        `${sectionNumber}B`,
        `${sectionNumber}C`,
        `${sectionNumber}D`,
      ];

      const avilablePrefixes = _.differenceWith(
        prefixesTemplate,
        prefixes,
        _.isEqual
      );

      dispatch({
        type: ADD_LAB,
        payload: { sectionIndex, courseIndex, prefix: avilablePrefixes[0] },
      });
    } else {
      dispatch({
        type: ADD_LAB,
        payload: { sectionIndex, courseIndex, prefix: `${sectionNumber}A` },
      });
    }
  };
