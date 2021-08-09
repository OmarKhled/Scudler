import { Fragment, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { InputGroup, FormControl } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteSection,
  sectionNumberChange,
  updateLectureName
} from "../redux/schedules/coursesActions";

const Section = ({ section, sectionIndex, courseIndex }) => {
  const dispatch = useDispatch();

  const { courseName } = useSelector(state => state.courses).courses[courseIndex]

  // eslint-disable-next-line
  const { sectionNumber, lecture, tutorial, lab } = section;

  const [lectureName, setLectureName] = useState(`${courseName.toUpperCase()} Lecture - Section ${sectionNumber}`)
  const [edit, setEdit] = useState(false);
  const [editedSectionNumber, setSectionNumber] = useState("");

  useEffect(() => {
    setLectureName(`${courseName.toUpperCase()} Lecture - Section ${sectionNumber}`)
  }, [courseName, sectionNumber])

  useEffect(() => {
    dispatch(updateLectureName(sectionIndex, courseIndex, lectureName))
  }, [lectureName])

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

  return (
    <Fragment>
      <div className="d-flex justify-content-between gap-2 align-items-center">
        <div>
          {!edit ? (
            <h4>Section {sectionNumber}</h4>
          ) : (
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
      <InputGroup className="my-3">
        <InputGroup.Text>
          <small>Course name</small>
        </InputGroup.Text>
        <FormControl
          readOnly
          value={lectureName}
          aria-label="Lecture Name"
          // disabled
        />
      </InputGroup>
    </Fragment>
  );
};

export default Section;
