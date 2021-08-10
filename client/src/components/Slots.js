import React, { Fragment } from "react";

import { useDispatch } from "react-redux";
import { addLectureSlot } from "../redux/courses/coursesActions";
import Slot from "./Slot";

const Slots = ({ courseIndex, sectionIndex, slots }) => {
  const dispatch = useDispatch();

  const onAddSlot = () => {
    dispatch(addLectureSlot(sectionIndex, courseIndex));
  };

  return (
    <Fragment>
      {slots.map((slot, index) => (
        <Slot
          key={index}
          {...{ courseIndex, sectionIndex, slotIndex: index }}
        />
      ))}
      <button className="link" onClick={onAddSlot}>
        Add another slot?
      </button>
    </Fragment>
  );
};

export default Slots;
