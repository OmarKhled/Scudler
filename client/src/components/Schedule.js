import React, { Fragment, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import { schedule } from "../courses";
import axios from "axios";
import _ from "lodash";

import { useSelector, useDispatch } from "react-redux";
import { setSchedule } from "../redux/schedule/scheduleActions";

const Schedule = ({ className }) => {
  const dispatch = useDispatch();

  const { finalCourses } = useSelector((state) => state.finalCourses);
  const { schedule } = useSelector((state) => state.schedule);

  const [show, setShow] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (course) => {
    setCurrentCourse(course);
    setShow(true);
  };

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

  useEffect(() => {
    console.log(currentCourse);
  }, [currentCourse]);
  return (
    <Fragment>
      <Modal
        // centered
        show={show}
        onHide={handleClose}
        style={{ paddingRight: "0", paddingLeft: "0" }}
      >
        {!_.isEmpty(currentCourse) && (
          <>
            <Modal.Header closeButton className="modal-header">
              <div>
                <Modal.Title className="modal-title">
                  {currentCourse.name.split(" ")[0]}
                </Modal.Title>
                <div className="registered">Registered</div>
              </div>
            </Modal.Header>
            <Modal.Body>
              <div className="info">
                <p>
                  Section: {_.last(currentCourse.name.split(" "))} | subtype:{" "}
                  {_.capitalize(currentCourse.type)}
                </p>
              </div>
              <div>
                Instructors
                <div className="instructor">
                  <span className="instructor-circle">
                    {currentCourse.instructor[0]}
                  </span>
                  <p>{currentCourse.instructor}</p>
                </div>
              </div>
              <p className="mb-1">Schedule</p>
              {currentCourse.slots.map((slot) => {
                return slot.slot.map((time) => (
                  <div className="modal-slot">
                    <p>
                      {times[time + 1]} - {times[time + 2]}
                    </p>
                    <p>{days[slot.day]}</p>
                    <p>{currentCourse.online ? "Online" : "Offline"}</p>
                  </div>
                ));
              })}
            </Modal.Body>
          </>
        )}
      </Modal>
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
                      <div onClick={() => handleShow(slot[0])} className="slot">
                        {slot[0].name}
                      </div>
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