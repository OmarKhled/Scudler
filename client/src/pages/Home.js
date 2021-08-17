import { useState } from "react";
import Courses from "../components/Courses";
import Schedule from "../components/Schedule";
import SearchBar from "../components/SearchBar";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

import { setSchedules } from "../redux/schedule/scheduleActions";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const { schedules } = useSelector((state) => state.schedules);
  const { finalCourses } = useSelector((state) => state.finalCourses);

  const [show, setShow] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (course) => {
    setShow(true);
  };

  const [sortUponOnlineDays, setSortUponOnlineDays] = useState(false);
  const [sortUponFreeDays, setSortUponFreeDays] = useState(false);

  const onMakeSchedule = async () => {
    if (finalCourses.length === 0) {
      alert("Please add some courses and select professors");
      return;
    }
    const res = await axios.post("/api/schedules", {
      courses: finalCourses,
      options: {
        sortUponOnlineDays,
        sortUponFreeDays,
      },
    });
    console.log(res.data.schedules);
    const newSchedules = res.data.schedules.slice(0, 50);
    console.log(newSchedules);
    dispatch(setSchedules(newSchedules));
  };

  return (
    <div className="home">
      <div className="d-flex justify-content-center">
        <h1>Scudler</h1>
      </div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Options</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center row gap-3">
            <label className="d-flex gap-2 align-items-center">
              <Form.Check
                checked={sortUponFreeDays}
                onClick={() => setSortUponFreeDays(!sortUponFreeDays)}
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
          </div>
        </Modal.Body>
      </Modal>
      <SearchBar />
      <Courses />
      <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
        <Button variant="primary" onClick={handleShow}>
          {" "}
          Options{" "}
        </Button>
        <Button variant="success" onClick={onMakeSchedule}>
          Generate Schedue
        </Button>
      </div>
      {schedules.map((schedule) => (
        <Schedule className="mt-3" schedule={schedule.schedule} />
      ))}
    </div>
  );
};

export default Home;
