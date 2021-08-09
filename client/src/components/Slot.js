import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import _ from "lodash";

import { useDispatch, useSelector } from "react-redux";
import { updateLectureSlot } from "../redux/courses/coursesActions";

const Slots = ({ courseIndex, sectionIndex, slotIndex }) => {
  const dispatch = useDispatch();

  const { slots } = useSelector((state) => state.courses).courses[courseIndex]
    .body[sectionIndex].lecture;
  const { day: slotDay, slot } = slots[slotIndex];

  const [day, setDay] = useState(slotDay);
  const [from, setFrom] = useState(_.first(slot));
  const [to, setTo] = useState(_.last(slot));

  const onSetTo = (e) => {
    setTo(e.target.value !== "to" ? Number(e.target.value) : "to");
  };

  const onSetFrom = (e) => {
    setFrom(e.target.value !== "from" ? Number(e.target.value) : "from");
  };
  useEffect(() => {
    if (from >= to) {
      setTo(from < 7 ? from + 1 : from);
    }
  }, [from, to]);

  useEffect(() => {
    const compinedSlot = {
      day,
      slot: [from, to],
    };

    let modifiedSlot = {};
    if (to !== from + 1 && to > from + 1) {
      const array = [];
      for (
        let slot = compinedSlot.slot[0];
        slot < compinedSlot.slot[1];
        slot++
      ) {
        array.push(slot);
      }
      modifiedSlot = { day: compinedSlot.day, slot: array };
    } else if (to === from + 1) {
      modifiedSlot = { day: compinedSlot.day, slot: [from] };
    } else {
      modifiedSlot = compinedSlot;
    }

    dispatch(
      updateLectureSlot(sectionIndex, courseIndex, slotIndex, modifiedSlot)
    );

    // eslint-disable-next-line
  }, [day, from, to]);
  return (
    <div className="d-flex my-2 gap-4">
      <Form.Select
        value={day}
        onChange={(e) =>
          setDay(e.target.value !== "day" ? Number(e.target.value) : "day")
        }
      >
        <option disabled value="day">
          Day:
        </option>
        <option value="0">Sunday</option>
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
      </Form.Select>
      <Form.Select value={from} onChange={(e) => onSetFrom(e)}>
        <option disabled value="from">
          From:
        </option>
        <option value="0">8:30 AM</option>
        <option value="1">9:30 AM</option>
        <option value="2">10:30 AM</option>
        <option value="3">11:30 AM</option>
        <option value="4">12:30 PM</option>
        <option value="5">1:30 PM</option>
        <option value="6">2:30 PM</option>
        <option value="7">3:30 PM</option>
      </Form.Select>
      <Form.Select value={to} onChange={(e) => onSetTo(e)}>
        <option disabled value="to">
          To:
        </option>
        <option value="0" disabled={from >= 0}>
          8:30 AM
        </option>
        <option value="1" disabled={from >= 1}>
          9:30 AM
        </option>
        <option value="2" disabled={from >= 2}>
          10:30 AM
        </option>
        <option value="3" disabled={from >= 3}>
          11:30 AM
        </option>
        <option value="4" disabled={from >= 4}>
          12:30 PM
        </option>
        <option value="5" disabled={from >= 5}>
          1:30 PM
        </option>
        <option value="6" disabled={from >= 6}>
          2:30 PM
        </option>
        <option value="7" disabled={from >= 7}>
          3:30 PM
        </option>
      </Form.Select>
    </div>
  );
};

export default Slots;
