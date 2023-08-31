import { useState } from "react";
import Course from "../components/Course.js";
import Schedules from "../components/Schedules";
import { Button, Modal, Form } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "../redux/courses/coursesActions";
import { setSchedules } from "../redux/schedule/scheduleActions.js";
import { saveCourses } from "../redux/users/usersActions.js";

const Home = () => {
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.courses);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const [sortUponOnlineDays, setSortUponOnlineDays] = useState(false);
  const [sortUponFreeDays, setSortUponFreeDays] = useState(false);
  const [sortUponLastFreeSlots, setSortUponLastFreeSlots] = useState(false);

  const onAddCourse = () => {
    dispatch(addCourse());
  };

  const onMakeSchedule = async () => {
    dispatch(
      setSchedules(
        sortUponOnlineDays,
        sortUponFreeDays,
        sortUponLastFreeSlots,
        courses
      )
    );
  };

  const onSaveData = () => {
    dispatch(saveCourses(courses));
  };

  return (
    <div className="mt-3 m-container mb-5">
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Options</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center row gap-3">
            <label className="d-flex gap-2 align-items-center">
              <Form.Check
                checked={sortUponFreeDays}
                onChange={() => setSortUponFreeDays(!sortUponFreeDays)}
              />{" "}
              Sort based on empty days ?
            </label>
            <label className="d-flex gap-2 align-items-center">
              <Form.Check
                checked={sortUponOnlineDays}
                onChange={() => setSortUponOnlineDays(!sortUponOnlineDays)}
              />{" "}
              Sort based on online days ?
            </label>
            <label className="d-flex gap-2 align-items-center">
              <Form.Check
                checked={sortUponLastFreeSlots}
                onChange={() =>
                  setSortUponLastFreeSlots(!sortUponLastFreeSlots)
                }
              />{" "}
              Sort based on last free slots ?
            </label>
          </div>
        </Modal.Body>
      </Modal>
      {courses.map((course, index) => (
        <Course key={index} courseIndex={index} {...course} />
      ))}
      <Button variant="primary" onClick={onAddCourse}>
        Add another course
      </Button>
      <br />
      <div className="d-flex justify-content-center">
        <Button variant="danger" className="mt-3" onClick={handleShow}>
          {" "}
          Options{" "}
        </Button>
      </div>
      <br />
      <div className="my-4 d-flex align-items-center ">
        <Button onClick={onMakeSchedule} variant="success">
          Generate Schedule
        </Button>
        <Button
          onClick={onSaveData}
          className="ms-2"
          variant="secondary"
          style={{ color: "#fff" }}
        >
          Save Data
        </Button>
      </div>
      <Schedules />
    </div>
  );
};

export default Home;
