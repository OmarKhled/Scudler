import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaTrashAlt, FaPen } from "react-icons/fa"
import { InputGroup, FormControl } from "react-bootstrap"

import { useDispatch } from "react-redux"
import { deleteSection, sectionNumberChange } from "../redux/schedules/coursesActions"

const Section = ({ section, sectionIndex, courseIndex }) => {

  const dispatch = useDispatch()

  // eslint-disable-next-line
  const { sectionNumber, lecture, tutorial, lab } = section

  const [edit, setEdit] = useState(false)
  const [editedSectionNumber, setSectionNumber] = useState(sectionNumber)

  const onDeleteSection = () => {
    dispatch(deleteSection(sectionIndex, courseIndex));
  }

  const onSetEdit = () => {
    if (edit) {
      setEdit(!edit)
      if(editedSectionNumber === '') {
        setSectionNumber(sectionNumber)
      } else {
        dispatch(sectionNumberChange(sectionIndex, courseIndex, editedSectionNumber));
      }
    } else {
      setEdit(!edit)
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between gap-2 align-items-center">
        <div>
          {
            !edit ? <h4>Section {sectionNumber}</h4> : (
              <InputGroup className="my-0">
                <FormControl
                  type="number"
                  value={editedSectionNumber}
                  onChange={(e) => setSectionNumber(e.target.value !== '' ? Number(e.target.value) : '')}
                  onKeyUp={(e) => e.key === "Enter" && onSetEdit()}
                  placeholder="Section Number"
                  aria-label="Section Number"
                />
              </InputGroup>
            )
          }
        </div>
        <div className="d-flex gap-2">
          <Button variant="info" onClick={onSetEdit} ><FaPen /></Button>
          <Button variant="danger" onClick={onDeleteSection}><FaTrashAlt /></Button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Section;
