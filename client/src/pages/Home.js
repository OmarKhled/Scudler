import Course from "../components/Course.js"

import { useSelector } from "react-redux"

const Home = () => {

  const { courses } = useSelector(state => state.courses)

  return (
    <div className="mt-3" style={{ maxWidth: "80%", margin: "auto" }}>
      <h1>Home</h1>

      {
        courses.map((course, index) => (<Course key={index} courseIndex={index} {...course} />))
      }
    </div>
  );
};

export default Home;
