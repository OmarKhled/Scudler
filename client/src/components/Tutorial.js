import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa"

import { useSelector } from "react-redux";

const Tutorial = ({ tutorial, tutorialIndex, courseIndex, sectionIndex }) => {
  const { sectionNumber } = useSelector((state) => state.courses).courses[
    courseIndex
  ].body[sectionIndex];
  const nums = [1, 2, 3];
  const prefixes = ["A", "B", "C", "D"];
  return (
    <div className="p-3 jumbutron-dark my-3">
      <Row className="align-items-start">
        <Col xs="auto" className="d-flex align-items-center gap-2">
          <p className="mb-1">Tutorial Prefix:</p>
          <Form.Select style={{ width: "max-content" }}>
            {prefixes.map((prefix, index) => {
              return nums.map((num, index) => (
                <option
                  key={index}
                  value={`${num}${prefix}`}
                >{`${num}${prefix}`}</option>
              ));
            })}
          </Form.Select>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="danger"><FaTrashAlt /></Button>
        </Col>
      </Row>
    </div>
  );
};

export default Tutorial;
