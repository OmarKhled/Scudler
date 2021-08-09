import { initialTemplate, sectionTemplate } from "../../data";

import {
  COURSE_NAME_CHANGE,
  ADD_NEW_SECTION,
  DELETE_SECTION,
  SECTION_NUMBER_CHANGE,
} from "../types/coursesTypes";

const initialState = {
  courses: initialTemplate,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  let newCourses = state.courses;

  switch (type) {
    case COURSE_NAME_CHANGE: {
      newCourses[payload.courseIndex].courseName = payload.courseName;

      return {
        ...state,
        courses: newCourses,
      };
    }
    case ADD_NEW_SECTION: {
      let found = newCourses[payload.courseIndex].body.map(
        (section) => section.sectionNumber == payload.newSectionNumber
      );
      console.log(found);
      while (found.includes(true)) {
        console.log(true);
        payload.newSectionNumber++;
        found = newCourses[payload.courseIndex].body.map(
          (section) => section.sectionNumber == payload.sectionNumber
        );
      }
      const newSection = Object.assign({}, sectionTemplate);
      newSection.sectionNumber = payload.newSectionNumber;

      newCourses[payload.courseIndex].body.push(newSection);

      return {
        ...state,
        courses: newCourses,
      };
    }
    case DELETE_SECTION: {
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
      const found = newCourses[payload.courseIndex].body.map(
        (section) => section.sectionNumber == payload.sectionNumber
      );
      if (!found.includes(true)) {
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
    default:
      return state;
  }
};

export default reducer;
