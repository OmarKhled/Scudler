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
  changeTutorialTa,
  deleteTutorial,
} from "../redux/courses/coursesActions";

import _ from "lodash";

const Tutorial = ({ tutorial, tutorialIndex, courseIndex, sectionIndex }) => {
  const dispatch = useDispatch();

  const { sectionNumber, tutorial: tutorials } = useSelector(
    (state) => state.courses
  ).courses[courseIndex].body[sectionIndex];
  const { courseName } = useSelector((state) => state.courses).courses[
    courseIndex
  ];

  const usedPrefixes = tutorials.map(
    (tut, index) => index !== tutorialIndex && tut.tutorialPrefix
  );
  const usedPrefixes_letters = usedPrefixes.map((prefix) => prefix[1]);

  // eslint-disable-next-line
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

  useEffect(() => {
    if (usedPrefixes.includes(tutorialPrefix)) {
      const options = document.querySelector("#prefixes").options;
      for (let index = 0; index < options.length; index++) {
        const option = options[index];
        console.log(option);
        if (!option.disabled) {
          document.querySelector("#prefixes").getElementsByTagName("option")[
            index
          ].selected = "selected";
          return;
        }
      }
    }
  }, [usedPrefixes]);

  const onTaChange = (e) => {
    dispatch(
      changeTutorialTa(sectionIndex, courseIndex, tutorialIndex, e.target.value)
    );
  };

  const onDelete = () => {
    dispatch(deleteTutorial(sectionIndex, courseIndex, tutorialIndex));
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
    dispatch(
      changeTutorialPrefix(
        sectionIndex,
        courseIndex,
        tutorialIndex,
        `${sectionNumber}${tutorialPrefix !== "" ? tutorialPrefix[1] : "A"}`
      )
    );
    // eslint-disable-next-line
  }, [sectionNumber]);

  return (
    <div className="p-3 jumbutron-dark my-3">
      <Row className="align-items-start">
        <Col xs="auto" className="d-flex align-items-center gap-2">
          <p className="mb-1">Tutorial Prefix:</p>
          <Form.Select
            id="prefixes"
            value={tutorialPrefix === "" ? `${sectionNumber}A` : tutorialPrefix}
            onChange={onChangePrefix}
            style={{ width: "max-content" }}
          >
            {prefixes.map((prefix, index) => (
              <option
                disabled={usedPrefixes.includes(`${sectionNumber}${prefix}`)}
                key={index}
                value={`${sectionNumber}${prefix}`}
              >{`${sectionNumber}${prefix}`}</option>
            ))}
          </Form.Select>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="danger" onClick={onDelete}>
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
