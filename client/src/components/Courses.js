import React from "react";
import { Accordion, Form, Button, FormLabel } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { courses } from "../courses";

const Courses = () => {
  const addedCourses = courses;
  return (
    <div className="courses">
      <div className="d-flex justify-content-center mb-3">
        <h2>Courses</h2>
      </div>
      {addedCourses.length > 0 && (
        <Accordion>
          {addedCourses.map((course, index) => (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{course.courseName}</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <h4>{course.courseName}</h4>
                  <Button
                    // onClick={() => onDelete(course.courseName)}
                    variant="danger"
                  >
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
                        type="checkbox"
                        // onChange={(e) =>
                        //   onToggleProfessor(e, professor, course)
                        // }
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
