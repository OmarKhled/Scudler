import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

const Slots = ({ courseIndex, sectionIndex, slotIndex }) => {
  const dispatch = useDispatch();

  const { slots } = useSelector((state) => state.courses).courses[courseIndex]
    .body[sectionIndex].lecture;
  const { day: slotDay, slot } = slots[slotIndex];

  const [day, setDay] = useState(slotDay);
  const [from, setFrom] = useState(slot[0]);
  const [to, setTo] = useState(slot[1]);

  useEffect(() => {
    // Day Change
  }, [day]);
  useEffect(() => {
    // From Change
  }, [from]);
  useEffect(() => {
    // To Change
  }, [to]);
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
      <Form.Select
        value={from}
        onChange={(e) =>
          setFrom(e.target.value !== "from" ? Number(e.target.value) : "from")
        }
      >
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
      <Form.Select
        value={to}
        onChange={(e) =>
          setTo(e.target.value !== "to" ? Number(e.target.value) : "to")
        }
      >
        <option disabled value="to">
          To:
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
    </div>
  );
};

export default Slots;
