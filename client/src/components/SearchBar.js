import { Fragment, useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "../redux/addedCourses/addedCoursesActions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.courses);
  const { addedCourses } = useSelector((state) => state.addedCourses);
  const [results, setResults] = useState([]);

  const onSearch = (e) => {
    if (e.target.value === "") {
      setResults([]);
    } else {
      setResults(
        courses.filter(
          (course) =>
            course.courseName.includes(e.target.value.toUpperCase()) &&
            !addedCourses.find(
              (addedCourse) => addedCourse.courseName === course.courseName
            )
        )
      );
    }
  };

  const onAddCourse = (course) => {
    dispatch(addCourse(course));
    document.querySelector("#courses-search").value = "";
  };

  useEffect(() => {
    const filteredCourses = results.filter(
      (course) =>
        !addedCourses.find(
          (addedCourse) => addedCourse.courseName === course.courseName
        )
    );

    setResults(filteredCourses);
    // eslint-disable-next-line
  }, [addedCourses]);
  return (
    <Fragment>
      <InputGroup className={`mt-3`}>
        <FormControl
          style={{ textTransform: "uppercase" }}
          onChange={onSearch}
          id="courses-search"
          placeholder="Search for course"
          className={`${results.length > 0 && "search-results"}`}
        />
        <InputGroup.Text className="search-icon">
          <FaSearch />
        </InputGroup.Text>
        {results.length > 0 && (
          <ul className="results">
            {results.map((result, index) => (
              <li
                key={index}
                className="result-item"
                onClick={() => onAddCourse(result)}
              >
                <p>{result.courseName}</p>
              </li>
            ))}
          </ul>
        )}
      </InputGroup>
    </Fragment>
  );
};

export default SearchBar;
