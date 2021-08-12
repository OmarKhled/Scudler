import Course from "../components/Course.js";
import { Button, FormControl } from "react-bootstrap";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "../redux/courses/coursesActions";
import { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.courses);

  const onAddCourse = () => {
    dispatch(addCourse());
  };

  let [output, setOutput] = useState({ data: "data" });

  const onMakeSchedule = async () => {
    console.log(courses);
    const res = await axios.post("/api/schedules", { courses });
    setOutput(res.data);
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
          Show possibilities
        </Button>
      </div>
      <div className="form-control" style={{ background: "#FADA5E" }}>
        <pre>{JSON.stringify(output, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Home;
