import React, { Fragment } from "react";

import { useDispatch } from "react-redux";
import {
  addLectureSlot,
  addTutorialSlot,
} from "../redux/courses/coursesActions";
import Slot from "./Slot";

const Slots = ({ courseIndex, sectionIndex, slots, type, tutorialIndex }) => {
  const dispatch = useDispatch();

  const onAddSlot = () => {
    switch (type) {
      case "lecture":
        dispatch(addLectureSlot(sectionIndex, courseIndex));
        break;
      case "tut":
        dispatch(addTutorialSlot(sectionIndex, courseIndex, tutorialIndex));
        break;
      default:
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
      <button className="link" onClick={onAddSlot}>
        Add another slot?
      </button>
    </Fragment>
  );
};

export default Slots;
