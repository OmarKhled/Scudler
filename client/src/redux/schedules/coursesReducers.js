import { initialTemplate, sectionTemplate } from "../../data";

import {
  COURSE_NAME_CHANGE,
  ADD_NEW_SECTION,
  DELETE_SECTION,
  SECTION_NUMBER_CHANGE,
  UPDATE_LECTURE_NAME,
} from "../types/coursesTypes";
import { updateLectureName } from "./coursesActions";

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
      let found = newCourses[payload.courseIndex].body.map(
        (section) => section.sectionNumber === payload.newSectionNumber
      );
      while (found.includes(true)) {
        console.log(true);
        payload.newSectionNumber++;
        found = newCourses[payload.courseIndex].body.map(
          (section) => section.sectionNumber === payload.sectionNumber
        );
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

    case UPDATE_LECTURE_NAME: {
      newCourses[payload.courseIndex].body[
        payload.sectionIndex
      ].lecture.lectureName = payload.lectureName;

      console.log(newCourses);

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
