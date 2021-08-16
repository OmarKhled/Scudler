import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
// import { schedule } from "../courses";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setSchedule } from "../redux/schedule/scheduleActions";

const Schedule = ({ className }) => {
  const dispatch = useDispatch();

  const { finalCourses } = useSelector((state) => state.finalCourses);
  const { schedule } = useSelector((state) => state.schedule);

  const days = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thrusday"];
  const times = [
    " ",
    "8:30 AM",
    "9:30 AM",
    "10:30 AM",
    "11:30 AM",
    "12:30 AM",
    "1:30 PM",
    "2:30 PM",
    "3:30 PM",
    "4:30 PM",
  ];

  const onMakeSchedule = async () => {
    if (finalCourses.length === 0) {
      alert("Please add some courses and select professors");
      return;
    }
    const res = await axios.post("/api/schedules", { courses: finalCourses });
    dispatch(setSchedule(res.data.schedule));
  };
  return (
    <Fragment>
      <div className="schedule-container">
        <div className={"schedule " + className}>
          <div className="times">
            <ul>
              {times.map((time, index) => (
                <li
                  key={index}
                  className={`time-indecator ${
                    index === 0 ? "shrink" : "expand"
                  }`}
                >
                  <small>{time}</small>
                </li>
              ))}
            </ul>
          </div>
          <div className="schedule-body">
            {schedule.map((day, index) => (
              <ul className="schedule-column" key={index}>
                <li className="day-cell">{days[index]}</li>
                {day.map((slot, index) =>
                  slot.length > 0 ? (
                    <li key={index} className="slot-container">
                      <div className="slot">{slot[0].name}</div>
                    </li>
                  ) : (
                    <li key={index} className="slot-container"></li>
                  )
                )}
              </ul>
            ))}
          </div>
        </div>
        <div className="schedule-tail">
          <div className="type">
            <div className="registered-circle"></div>
            <span>No worries dude, you are always ready to register!</span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="success" className="mt-3" onClick={onMakeSchedule}>
          Generate Schedue
        </Button>
      </div>
    </Fragment>
  );
};

export default Schedule;
