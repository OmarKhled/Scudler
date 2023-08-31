import { Fragment, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { InputGroup, FormControl, Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteSection,
  sectionNumberChange,
  updateLectureName,
  updateLectureProfessor,
} from "../redux/courses/coursesActions";
import Slots from "./Slots";
import Subtypes from "./Subtypes";

const Section = ({ section, sectionIndex, courseIndex }) => {
  const dispatch = useDispatch();

  const { courseName } = useSelector((state) => state.courses).courses[
    courseIndex
  ];

  // eslint-disable-next-line
  const { sectionNumber, lecture, tutorial: tutorials, labs } = section;

  const [lectureName, setLectureName] = useState(
    `${courseName} Lecture - Section ${sectionNumber}`
  );
  const [edit, setEdit] = useState(false);
  const [editedSectionNumber, setSectionNumber] = useState("");

  const onDeleteSection = () => {
    dispatch(deleteSection(sectionIndex, courseIndex));
  };

  const onSetEdit = () => {
    if (edit) {
      setEdit(!edit);
      if (editedSectionNumber === "") {
        setSectionNumber("");
      } else {
        dispatch(
          sectionNumberChange(sectionIndex, courseIndex, editedSectionNumber)
        );
        setSectionNumber("");
      }
    } else {
      setEdit(!edit);
    }
  };

  const professorChange = (e) => {
    dispatch(updateLectureProfessor(sectionIndex, courseIndex, e.target.value));
  };

  useEffect(() => {
    setLectureName(`${courseName} Lecture - Section ${sectionNumber}`);
  }, [courseName, sectionNumber]);

  useEffect(() => {
    dispatch(updateLectureName(sectionIndex, courseIndex, lectureName));
    // eslint-disable-next-line
  }, [lectureName]);

  return (
    <Fragment>
      <div className="d-flex justify-content-between gap-2 align-items-center">
        <div>
          {!edit ? (
            // Normal Mode
            <h4>Section {sectionNumber}</h4>
          ) : (
            // Edit Mode
            <InputGroup className="my-0">
              <FormControl
                type="number"
                value={editedSectionNumber}
                onChange={(e) =>
                  setSectionNumber(
                    e.target.value !== "" ? Number(e.target.value) : ""
                  )
                }
                onKeyUp={(e) => e.key === "Enter" && onSetEdit()}
                placeholder="Section Number"
                aria-label="Section Number"
              />
            </InputGroup>
          )}
        </div>

        {/* Utilities */}
        <div className="d-flex gap-2">
          <Button variant="info" onClick={onSetEdit}>
            <FaPen />
          </Button>
          <Button variant="danger" onClick={onDeleteSection}>
            <FaTrashAlt />
          </Button>
        </div>
      </div>
      <hr />

      {/* Lecture */}

      <h3 className="mb-3">Lecture</h3>
      <Row className="my-1">
        <Col xs="12" sm="6">
          <InputGroup className="my-2">
            <InputGroup.Text>
              <small>Lecture Name</small>
            </InputGroup.Text>
            <FormControl
              readOnly
              value={lectureName}
              aria-label="Lecture Name"
              // disabled
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="my-2">
            <InputGroup.Text>
              <small>Professor</small>
            </InputGroup.Text>
            <FormControl
              name="professor"
              value={lecture.professor}
              onChange={professorChange}
              placeholder="Professor Name"
            />
          </InputGroup>
        </Col>
      </Row>

      {/* Slots */}
      <Slots
        {...{ courseIndex, sectionIndex, slots: lecture.slots }}
        type="lecture"
      />
      <div className="my-3">
        <Subtypes
          {...{ courseIndex, sectionIndex, subtypes: tutorials }}
          type="tutorial"
        />
      </div>
      <div className="my-3">
        <Subtypes
          {...{ courseIndex, sectionIndex, subtypes: labs }}
          type="lab"
        />
      </div>
    </Fragment>
  );
};

export default Section;
