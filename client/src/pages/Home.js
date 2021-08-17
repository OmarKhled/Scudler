import React from "react";
import Courses from "../components/Courses";
import Schedule from "../components/Schedule";
import SearchBar from "../components/SearchBar";
import { Button } from "react-bootstrap";
import axios from "axios";

import { setSchedules } from "../redux/schedule/scheduleActions";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { schedules } = useSelector((state) => state.schedules);

  const { finalCourses } = useSelector((state) => state.finalCourses);

  const onMakeSchedule = async () => {
    if (finalCourses.length === 0) {
      alert("Please add some courses and select professors");
      return;
    }
    const res = await axios.post("/api/schedules", { courses: finalCourses });
    console.log(res);
    dispatch(setSchedules(res.data.schedules));
  };

  return (
    <div className="home">
      <div className="d-flex justify-content-center">
        <h1>Scudler</h1>
      </div>
      <SearchBar />
      <Courses />
      <div className="d-flex justify-content-center">
        <Button variant="success" className="mt-3" onClick={onMakeSchedule}>
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
