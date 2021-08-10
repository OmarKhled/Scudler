import { useState } from "react";
import { Tabs, Tab, InputGroup, FormControl, Button } from "react-bootstrap";

import Section from "./Section";

import { useDispatch } from "react-redux";
import { courseNameChange, addSection } from "../redux/courses/coursesActions";

const Course = ({ body, courseName, courseIndex }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState(0);

  const onAddSection = () => {
    dispatch(addSection(courseIndex));
  };

  const onCourseNameChange = (e) => {
    dispatch(courseNameChange(courseIndex, e.target.value.toUpperCase()));
  };

  return (
    <div className="round-5 p-4 jumbutron my-3 mb-5">
      <InputGroup className="my-3">
        <InputGroup.Text>
          {" "}
          <small>Course name</small>
        </InputGroup.Text>
        <FormControl
          name="Course name"
          value={courseName}
          onChange={onCourseNameChange}
          placeholder="Course name"
          aria-label="Course name"
        />
      </InputGroup>

      <div className="d-flex justify-content-end my-2">
        <Button onClick={onAddSection} variant="success">
          Add Section
        </Button>
      </div>

      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        {body.map((section, index) => (
          <Tab
            key={index}
            eventKey={index}
            title={`Section ${section.sectionNumber}`}
          >
            <Section {...{ section, sectionIndex: index, courseIndex }} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Course;
