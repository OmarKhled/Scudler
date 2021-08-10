import { useEffect } from "react";
import {
  Button,
  Col,
  Form,
  Row,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import {
  changeTutorialPrefix,
  changeTutorialName,
} from "../redux/courses/coursesActions";

const Tutorial = ({ tutorial, tutorialIndex, courseIndex, sectionIndex }) => {
  const dispatch = useDispatch();

  const { sectionNumber } = useSelector((state) => state.courses).courses[
    courseIndex
  ].body[sectionIndex];
  const { courseName } = useSelector((state) => state.courses).courses[
    courseIndex
  ];

  const { tutorialName, tutorialPrefix, ta, slots } = tutorial;

  const prefixes = ["A", "B", "C", "D"];

  const onChangePrefix = (e) => {
    dispatch(
      changeTutorialPrefix(
        sectionIndex,
        courseIndex,
        tutorialIndex,
        e.target.value
      )
    );
  };

  const onTaChange = (e) => {
    // dispatch(
    //   changeTutorialTa(sectionIndex, courseIndex, tutorialIndex, e.target.value)
    // );
  };

  useEffect(() => {
    dispatch(
      changeTutorialPrefix(
        sectionIndex,
        courseIndex,
        tutorialIndex,
        `${sectionNumber}A`
      )
    );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(
      changeTutorialName(
        sectionIndex,
        courseIndex,
        tutorialIndex,
        `${courseName} - Tutorial ${tutorialPrefix}`
      )
    );
    // eslint-disable-next-line
  }, [tutorialPrefix, courseName]);

  useEffect(() => {
    console.log(sectionNumber);
    dispatch(
      changeTutorialPrefix(
        sectionIndex,
        courseIndex,
        tutorialIndex,
        `${sectionNumber}${tutorialPrefix !== "" ? tutorialPrefix[1] : "A"}`
      )
    );
  }, [sectionNumber]);

  return (
    <div className="p-3 jumbutron-dark my-3">
      <Row className="align-items-start">
        <Col xs="auto" className="d-flex align-items-center gap-2">
          <p className="mb-1">Tutorial Prefix:</p>
          <Form.Select
            value={tutorialPrefix === "" ? `${sectionNumber}A` : tutorialPrefix}
            onChange={onChangePrefix}
            style={{ width: "max-content" }}
          >
            {prefixes.map((prefix, index) => (
              <option
                key={index}
                value={`${sectionNumber}${prefix}`}
              >{`${sectionNumber}${prefix}`}</option>
            ))}
          </Form.Select>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="danger">
            <FaTrashAlt />
          </Button>
        </Col>
      </Row>

      <Row className="my-1">
        <Col xs="12" sm="6">
          <InputGroup className="my-2">
            <InputGroup.Text>
              <small>Tutorial Name</small>
            </InputGroup.Text>
            <FormControl
              readOnly
              value={tutorialName}
              aria-label="Tutorial Name"
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="my-2">
            <InputGroup.Text>
              <small>TA</small>
            </InputGroup.Text>
            <FormControl
              name="Ta"
              value={ta}
              onChange={onTaChange}
              placeholder="TA Name"
            />
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Tutorial;
