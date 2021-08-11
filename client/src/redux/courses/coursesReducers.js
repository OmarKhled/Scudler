import {
  initialTemplate,
  labTemplate,
  sectionTemplate,
  slotTemplate,
  tutorialTemplate,
} from "../../templates";

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
  ADD_TUTORIAL_SLOT,
  DELETE_TUTORIAL_SLOT,
  UPDATE_TUTORIAL_SLOT,
  CHANGE_LAB_TA,
  CHANGE_LAB_PREFIX,
  CHANGE_LAB_NAME,
  DELETE_LAB,
  ADD_LAB,
} from "../types/coursesTypes";

const initialState = {
  courses: initialTemplate,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  let newCourses = state.courses;

  switch (type) {
    case COURSE_NAME_CHANGE: {
      // Changing course name
      newCourses[payload.courseIndex].courseName = payload.courseName;

      return {
        ...state,
        courses: newCourses,
      };
    }

    case ADD_NEW_SECTION: {
      // Checking if the new section number existed before
      while (
        newCourses[payload.courseIndex].body
          .map((section) => section.sectionNumber === payload.newSectionNumber)
          .includes(true)
      ) {
        payload.newSectionNumber++;
      }
      // Adding the new section
      const newSection = Object.assign({}, sectionTemplate);
      newSection.sectionNumber = payload.newSectionNumber;

      newCourses[payload.courseIndex].body.push(newSection);

      return {
        ...state,
        courses: newCourses,
      };
    }

    case DELETE_SECTION: {
      // Deleting the section
      const newSections = newCourses[payload.courseIndex].body.filter(
        (section, index) => index !== payload.sectionIndex && section
      );
      newCourses[payload.courseIndex].body = newSections;

      return {
        ...state,
        courses: newCourses,
      };
    }

    case SECTION_NUMBER_CHANGE: {
      // Checking if the section number already exists
      const found = newCourses[payload.courseIndex].body.map(
        (section) => section.sectionNumber === payload.sectionNumber
      );
      if (!found.includes(true)) {
        // Changing the section number
        const newSections = newCourses[payload.courseIndex].body.filter(
          (section, index) => {
            if (index !== payload.sectionIndex) {
              return section;
            } else {
              section.sectionNumber = payload.sectionNumber;
              return section;
            }
          }
        );
        newCourses[payload.courseIndex].body = newSections;
      }

      return {
        ...state,
        courses: newCourses,
      };
    }

    case UPDATE_LECTURE_SLOT: {
      newCourses[payload.courseIndex].body[payload.sectionIndex].lecture.slots[
        payload.slotIndex
      ] = payload.slot;

      return {
        ...state,
        courses: newCourses,
      };
    }

    case UPDATE_LECTURE_NAME: {
      // Changing lecture name
      newCourses[payload.courseIndex].body[
        payload.sectionIndex
      ].lecture.lectureName = payload.lectureName;

      return {
        ...state,
        courses: newCourses,
      };
    }

    case UPDATE_LECTURE_PROFESSOR: {
      // Changing professor name
      newCourses[payload.courseIndex].body[
        payload.sectionIndex
      ].lecture.professor = payload.professor;

      return {
        ...state,
        courses: newCourses,
      };
    }

    case DELETE_LECTURE_SLOT: {
      // Deleting slot
      const newSlots = newCourses[payload.courseIndex].body[
        payload.sectionIndex
      ].lecture.slots.filter((slot, index) => index !== payload.slotIndex);
      newCourses[payload.courseIndex].body[payload.sectionIndex].lecture.slots =
        newSlots;

      return {
        ...state,
        courses: newCourses,
      };
    }

    case ADD_LECTURE_SLOT: {
      // Adding slot
      newCourses[payload.courseIndex].body[
        payload.sectionIndex
      ].lecture.slots.push(slotTemplate);

      return {
        ...state,
        courses: newCourses,
      };
    }

    case CHANGE_TUTORIAL_PREFIX: {
      // Changing prefix
      newCourses[payload.courseIndex].body[payload.sectionIndex].tutorial[
        payload.tutorialIndex
      ].tutorialPrefix = payload.prefix;

      return {
        ...state,
        courses: newCourses,
      };
    }

    case CHANGE_TUTORIAL_NAME: {
      // Change Name
      try {
        newCourses[payload.courseIndex].body[payload.sectionIndex].tutorial[
          payload.tutorialIndex
        ].tutorialName = payload.tutorialName;
      } catch (err) {
        console.log(err);
      }

      return {
        ...state,
        courses: newCourses,
      };
    }

    case CHANGE_TUTORIAL_TA: {
      // Change Name
      newCourses[payload.courseIndex].body[payload.sectionIndex].tutorial[
        payload.tutorialIndex
      ].ta = payload.ta;

      return {
        ...state,
        courses: newCourses,
      };
    }

    case DELETE_TUTORIAL: {
      // Delete Tutorial
      newCourses[payload.courseIndex].body[payload.sectionIndex].tutorial =
        newCourses[payload.courseIndex].body[
          payload.sectionIndex
        ].tutorial.filter((tutorial, index) => index !== payload.tutorialIndex);

      return {
        ...state,
        courses: newCourses,
      };
    }

    // Labs
    case CHANGE_LAB_PREFIX: {
      // Changing prefix
      newCourses[payload.courseIndex].body[payload.sectionIndex].labs[
        payload.labIndex
      ].labPrefix = payload.prefix;

      return {
        ...state,
        courses: newCourses,
      };
    }

    case CHANGE_LAB_NAME: {
      // Change Name
      try {
        newCourses[payload.courseIndex].body[payload.sectionIndex].labs[
          payload.labIndex
        ].labName = payload.labName;
      } catch (err) {
        console.log(err);
      }

      return {
        ...state,
        courses: newCourses,
      };
    }

    case CHANGE_LAB_TA: {
      // Change Name
      newCourses[payload.courseIndex].body[payload.sectionIndex].labs[
        payload.labIndex
      ].ta = payload.ta;

      return {
        ...state,
        courses: newCourses,
      };
    }

    case DELETE_LAB: {
      // Delete Tutorial
      newCourses[payload.courseIndex].body[payload.sectionIndex].labs =
        newCourses[payload.courseIndex].body[payload.sectionIndex].labs.filter(
          (lab, index) => index !== payload.labIndex
        );

      return {
        ...state,
        courses: newCourses,
      };
    }

    case ADD_TUTORIAL: {
      // Add Tutorial
      const newTutorial = Object.assign({}, tutorialTemplate);
      newTutorial.tutorialPrefix = payload.prefix;
      newCourses[payload.courseIndex].body[payload.sectionIndex].tutorial.push(
        newTutorial
      );

      return {
        ...state,
        courses: newCourses,
      };
    }

    case ADD_LAB: {
      // Add Lab
      const newLab = Object.assign({}, labTemplate);
      newLab.labPrefix = payload.prefix;
      newCourses[payload.courseIndex].body[payload.sectionIndex].labs.push(
        newLab
      );

      return {
        ...state,
        courses: newCourses,
      };
    }

    case ADD_TUTORIAL_SLOT: {
      // Adding slot
      newCourses[payload.courseIndex].body[payload.sectionIndex].tutorial[
        payload.tutorialIndex
      ].slots.push(slotTemplate);

      return {
        ...state,
        courses: newCourses,
      };
    }

    case UPDATE_TUTORIAL_SLOT: {
      // Update Slot
      newCourses[payload.courseIndex].body[payload.sectionIndex].tutorial[
        payload.tutorialIndex
      ].slots[payload.slotIndex] = payload.slot;

      return {
        ...state,
        courses: newCourses,
      };
    }

    case DELETE_TUTORIAL_SLOT: {
      // Deleting slot
      const newSlots = newCourses[payload.courseIndex].body[
        payload.sectionIndex
      ].tutorial[payload.tutorialIndex].slots.filter(
        (slot, index) => index !== payload.slotIndex
      );
      newCourses[payload.courseIndex].body[payload.sectionIndex].tutorial[
        payload.tutorialIndex
      ].slots = newSlots;

      return {
        ...state,
        courses: newCourses,
      };
    }
    default:
      return state;
  }
};

export default reducer;
