import React, { Fragment } from "react";
import { Form, FormLabel } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import {
  addLectureSlot,
  addTutorialSlot,
  addLabSlot,
  changeOnlineStatus,
} from "../redux/courses/coursesActions";
import Slot from "./Slot";

const Slots = ({ courseIndex, sectionIndex, slots, type, tutorialIndex }) => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  let subtype;

  switch (type) {
    case "lecture":
      subtype = courses[courseIndex].body[sectionIndex][type];
      break;

    default:
      subtype = courses[courseIndex].body[sectionIndex][type][tutorialIndex];
      break;
  }

  const onAddSlot = () => {
    switch (type) {
      case "lecture":
        dispatch(addLectureSlot(sectionIndex, courseIndex));
        break;
      case "tutorial":
        dispatch(addTutorialSlot(sectionIndex, courseIndex, tutorialIndex));
        break;
      case "labs":
        dispatch(addLabSlot(sectionIndex, courseIndex, tutorialIndex));
        break;
      default:
        break;
    }
  };

  const onOnlineChange = (e) => {
    switch (type) {
      case "lecture":
        dispatch(
          changeOnlineStatus(
            `courses[${courseIndex}].body[${sectionIndex}][${type}].online`
          )
        );
        break;

      default:
        dispatch(
          changeOnlineStatus(
            `courses[${courseIndex}].body[${sectionIndex}][${type}][${tutorialIndex}].online`
          )
        );
        break;
    }
  };

  return (
    <Fragment>
      {slots.map((slot, index) => (
        <Slot
          key={index}
          {...{
            courseIndex,
            sectionIndex,
            slotIndex: index,
            type,
            slots,
            tutorialIndex,
          }}
        />
      ))}
      <FormLabel className="d-flex gap-2 align-items-center user-select-none">
        <Form.Check onChange={onOnlineChange} checked={subtype.online} /> Online
      </FormLabel>
      <button className="link" onClick={onAddSlot}>
        Add another slot?
      </button>
    </Fragment>
  );
};

export default Slots;
