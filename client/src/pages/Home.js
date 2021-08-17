import { useState } from "react";
import Courses from "../components/Courses";
import Schedule from "../components/Schedule";
import SearchBar from "../components/SearchBar";
import { Button, Form, Modal } from "react-bootstrap";

import { setSchedules } from "../redux/schedule/scheduleActions";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { finalCourses } = useSelector((state) => state.finalCourses);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const [sortUponOnlineDays, setSortUponOnlineDays] = useState(false);
  const [sortUponFreeDays, setSortUponFreeDays] = useState(false);
  const [sortUponLastFreeSlots, setSortUponLastFreeSlots] = useState(false);

  const onMakeSchedule = async () => {
    if (finalCourses.length === 0) {
      alert("Please add some courses and select professors");
      return;
    }
    dispatch(
      setSchedules(sortUponOnlineDays, sortUponFreeDays, sortUponLastFreeSlots)
    );
  };

  return (
    <div className="home">
      <>
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

        <Schedule className="mt-3" />
      </>
    </div>
  );
};

export default Home;
