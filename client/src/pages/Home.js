import Course from "../components/Course.js";
import { Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "../redux/courses/coursesActions";

const Home = () => {
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.courses);

  const onAddCourse = () => {
    dispatch(addCourse());
  };

  return (
    <div className="mt-3 m-container mb-5">
      <h1>Home</h1>

      {courses.map((course, index) => (
        <Course key={index} courseIndex={index} {...course} />
      ))}
      <Button variant="primary" onClick={onAddCourse}>
        Add course?
      </Button>
    </div>
  );
};

export default Home;
