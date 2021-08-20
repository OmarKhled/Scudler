import { useState } from "react";
import Course from "../components/Course.js";
import Schedule from "../components/Schedule.js";

import { Button } from "react-bootstrap";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "../redux/courses/coursesActions";

const Home = () => {
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.courses);

  const onAddCourse = () => {
    dispatch(addCourse());
  };

  // eslint-disable-next-line
  const map = [
    /* 0   1   2   3   4   5   6   7,  8 */
    [[], [], [], [], [], [], [], [], []], // Sunday   0
    [[], [], [], [], [], [], [], [], []], // Monday   1
    [[], [], [], [], [], [], [], [], []], // Tuesday  2
    [[], [], [], [], [], [], [], [], []], // Wendsday 3
    [[], [], [], [], [], [], [], [], []], // Thursday 4
  ];

  let [schedule, setSchedule] = useState([
    /* 0   1   2   3   4   5   6   7,  8 */
    [[], [], [], [], [], [], [], [], []], // Sunday   0
    [[], [], [], [], [], [], [], [], []], // Monday   1
    [[], [], [], [], [], [], [], [], []], // Tuesday  2
    [[], [], [], [], [], [], [], [], []], // Wendsday 3
    [[], [], [], [], [], [], [], [], []], // Thursday 4
  ]);

  const onMakeSchedule = async () => {
    const res = await axios.post("/api/schedules", { courses });
    console.log(res.data.schedule);
    setSchedule(res.data.schedule);
    console.log(res.data.schedule[0][0]);
  };

  return (
    <div className="mt-3 m-container mb-5">
      <h1>Home</h1>

      {courses.map((course, index) => (
        <Course key={index} courseIndex={index} {...course} />
      ))}
      <Button variant="primary" onClick={onAddCourse}>
        Add another course
      </Button>
      <br />
      <div className="my-4">
        <Button onClick={onMakeSchedule} variant="success">
          Generate Schedule
        </Button>
      </div>
      <Schedule schedule={schedule} />
    </div>
  );
};

export default Home;
