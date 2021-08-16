import React from "react";
import { Accordion, Form, Button, FormLabel } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../redux/addedCourses/addedCoursesActions";
import { editCourses } from "../redux/finalCourses/finalCoursesActions";

const Courses = () => {
  const dispatch = useDispatch();

  const { addedCourses } = useSelector((state) => state.addedCourses);
  const { finalCourses } = useSelector((state) => state.finalCourses);

  const onDelete = (course) => {
    dispatch(removeCourse(course));

    const courses = finalCourses.filter(
      (finalCourse) => finalCourse.courseName !== course.courseName
    );
    dispatch(editCourses(courses));
  };

  const onToggleProfessor = (course, professor, e) => {
    const professorSections = course.body
      .filter((section) => section.lecture.professor === professor)
      .slice();
    let courses = [];
    if (e.target.checked) {
      if (
        finalCourses.find(
          (finalCourse) => finalCourse.courseName === course.courseName
        )
      ) {
        courses = finalCourses
          .map((finalCourse) => {
            if (finalCourse.courseName === course.courseName) {
              const newBody = finalCourse.body.slice();
              newBody.push(...professorSections);
              return {
                ...finalCourse,
                body: newBody,
              };
            } else {
              return finalCourse;
            }
          })
          .slice();
      } else {
        courses = [...finalCourses.slice()];
        const newCourse = Object.assign({}, { ...course });
        newCourse.body = professorSections;
        courses.push(newCourse);
      }
    } else {
      courses = finalCourses.map((finalCourse) => {
        if (finalCourse.courseName === course.courseName) {
          const newBody = finalCourse.body
            .slice()
            .filter((section) => section.lecture.professor !== professor);
          return {
            ...finalCourse,
            body: newBody,
          };
        } else {
          return finalCourse;
        }
      });
      courses = courses.filter((finalCourse) => finalCourse.body.length > 0);
    }
    dispatch(editCourses(courses));
  };

  return (
    <div className="courses">
      <div className="d-flex justify-content-center mb-3">
        <h2>Courses</h2>
      </div>
      {addedCourses.length > 0 && (
        <Accordion>
          {addedCourses.map((course, index) => (
            <Accordion.Item key={index} eventKey={index}>
              <Accordion.Header>{course.courseName}</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <h4>{course.courseName}</h4>
                  <Button onClick={() => onDelete(course)} variant="danger">
                    <FaTrashAlt />
                  </Button>
                </div>
                <div className="mt-2">
                  {Array.from(
                    new Set(
                      course.body.map((section) => section.lecture.professor)
                    )
                  ).map((professor, index) => (
                    <FormLabel
                      key={index}
                      className="d-flex gap-2 align-items-center"
                    >
                      <Form.Check
                        checked={
                          finalCourses.find(
                            (finalCourse) =>
                              finalCourse.courseName === course.courseName
                          )
                            ? finalCourses
                                .find(
                                  (finalCourse) =>
                                    finalCourse.courseName === course.courseName
                                )
                                .body.map((section) =>
                                  section.lecture.professor === professor
                                    ? true
                                    : false
                                )
                                .includes(true)
                            : false
                        }
                        onChange={(e) =>
                          onToggleProfessor(course, professor, e)
                        }
                      />{" "}
                      <span>Dr. {professor}</span>
                    </FormLabel>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Courses;
