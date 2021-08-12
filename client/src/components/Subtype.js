import { useEffect } from "react";
import {
  Button,
  Col,
  Form,
  Row,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import Slots from "./Slots";
import { FaTrashAlt } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import {
  changeTutorialPrefix,
  changeTutorialName,
  changeTutorialTa,
  deleteTutorial,
  changeLabPrefix,
  changeLabName,
  changeLabTa,
  deleteLab,
} from "../redux/courses/coursesActions";

const Subtype = ({
  subtype,
  subtypeIndex,
  courseIndex,
  sectionIndex,
  type,
}) => {
  const dispatch = useDispatch();

  const subtypeType =
    type === "tutorial" ? "Tutorial" : type === "lab" && "Lab";

  const { sectionNumber } = useSelector((state) => state.courses).courses[
    courseIndex
  ].body[sectionIndex];

  const { tutorial: tutorials } = useSelector((state) => state.courses).courses[
    courseIndex
  ].body[sectionIndex];

  const { labs } = useSelector((state) => state.courses).courses[courseIndex]
    .body[sectionIndex];

  const { courseName } = useSelector((state) => state.courses).courses[
    courseIndex
  ];

  let subtypeName, subtypePrefix, ta, slots;
  switch (type) {
    case "tutorial":
      ({
        tutorialName: subtypeName,
        tutorialPrefix: subtypePrefix,
        ta,
        slots,
      } = subtype);
      break;

    case "lab":
      ({ labName: subtypeName, labPrefix: subtypePrefix, ta, slots } = subtype);
      break;

    default:
      break;
  }

  let usedPrefixes;

  switch (type) {
    case "tutorial":
      usedPrefixes = tutorials.map(
        (tut, index) => index !== subtypeIndex && tut.tutorialPrefix
      );
      break;

    case "lab":
      usedPrefixes = labs.map(
        (lab, index) => index !== subtypeIndex && lab.labPrefix
      );

      break;

    default:
      break;
  }

  const prefixes = ["A", "B", "C", "D"];

  const onChangePrefix = (e) => {
    switch (type) {
      case "tutorial":
        dispatch(
          changeTutorialPrefix(
            sectionIndex,
            courseIndex,
            subtypeIndex,
            e.target.value
          )
        );
        break;

      case "lab":
        dispatch(
          changeLabPrefix(
            sectionIndex,
            courseIndex,
            subtypeIndex,
            e.target.value
          )
        );
        break;

      default:
        break;
    }
  };

  const onTaChange = (e) => {
    switch (type) {
      case "tutorial":
        dispatch(
          changeTutorialTa(
            sectionIndex,
            courseIndex,
            subtypeIndex,
            e.target.value
          )
        );
        break;

      case "lab":
        dispatch(
          changeLabTa(sectionIndex, courseIndex, subtypeIndex, e.target.value)
        );
        break;

      default:
        break;
    }
  };

  const onDelete = () => {
    switch (type) {
      case "tutorial":
        dispatch(deleteTutorial(sectionIndex, courseIndex, subtypeIndex));
        break;

      case "lab":
        dispatch(deleteLab(sectionIndex, courseIndex, subtypeIndex));
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (type) {
      case "tutorial":
        dispatch(
          changeTutorialName(
            sectionIndex,
            courseIndex,
            subtypeIndex,
            `${courseName} - Tutorial ${subtypePrefix}`
          )
        );
        break;

      case "lab":
        dispatch(
          changeLabName(
            sectionIndex,
            courseIndex,
            subtypeIndex,
            `${courseName} - Lab ${subtypePrefix}`
          )
        );
        break;

      default:
        break;
    }

    // eslint-disable-next-line
  }, [subtypePrefix, courseName]);

  useEffect(() => {
    switch (type) {
      case "tutorial":
        dispatch(
          changeTutorialPrefix(
            sectionIndex,
            courseIndex,
            subtypeIndex,
            `${sectionNumber}${subtypePrefix[1]}`
          )
        );
        break;

      case "lab":
        dispatch(
          changeLabPrefix(
            sectionIndex,
            courseIndex,
            subtypeIndex,
            `${sectionNumber}${subtypePrefix[1]}`
          )
        );
        break;

      default:
        break;
    }
    // eslint-disable-next-line
  }, [sectionNumber]);

  return (
    <div className="p-3 jumbutron-dark my-3">
      <Row className="align-items-start">
        <Col xs="auto" className="d-flex align-items-center gap-2">
          <p className="mb-1">{subtypeType} Prefix:</p>
          <Form.Select
            id="prefixes"
            value={subtypePrefix}
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
              <small>{subtypeType} Name</small>
            </InputGroup.Text>
            <FormControl
              readOnly
              value={subtypeName}
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

      <Slots
        {...{ courseIndex, sectionIndex, slots, tutorialIndex: subtypeIndex }}
        type={type}
      />
    </div>
  );
};

export default Subtype;
