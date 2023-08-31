import React, { Fragment, useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

import { useSelector } from "react-redux";
import CourseModal from "./CourseModal";
import Schedule from "./Schedule";
import Pagination from "./Pagination";

const Schedules = ({ className }) => {
  const { schedules, loading } = useSelector((state) => state.schedules);
  let modifiedSchedules = schedules.map((schedule) => schedule.schedule);

  const [show, setShow] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

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
    "5:30 PM",
    "6:30 PM",
    "7:30 PM",
    "8:30 PM",
  ];

  useEffect(() => {
    setCurrentPage(0);
    // eslint-disable-next-line
  }, [Schedules]);

  return (
    <Fragment>
      <CourseModal {...{ currentCourse, show, handleClose, days, times }} />
      {loading ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <>
          {modifiedSchedules
            .slice(currentPage * 5, currentPage * 5 + 5)
            .map((schedule, index) => (
              <Schedule
                key={index}
                className={className}
                {...{ schedule, times, days, handleShow }}
              />
            ))}
          {schedules.length > 5 && (
            <Pagination
              key={Math.ceil(schedules.length / 5)}
              {...{ currentPage, setCurrentPage }}
              length={Math.ceil(schedules.length / 5)}
            />
          )}
        </>
      )}
    </Fragment>
  );
};

export default Schedules;
