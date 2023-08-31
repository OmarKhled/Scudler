import React from "react";
import { Modal } from "react-bootstrap";
import _ from "lodash";

const CourseModal = ({ show, handleClose, currentCourse, times, days }) => {
  return (
    <Modal
      // centered
      show={show}
      onHide={handleClose}
    >
      {!_.isEmpty(currentCourse) && (
        <>
          <Modal.Header closeButton className="register-modal-header">
            <div>
              <Modal.Title className="modal-title">
                {currentCourse.name.split(" ")[0]}
              </Modal.Title>
              <div className="registered">Registered</div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="info">
              <p>
                Section: {_.last(currentCourse.name.split(" "))} | subtype:{" "}
                {_.capitalize(currentCourse.type)}
              </p>
            </div>
            <div>
              Instructors
              <div className="instructor">
                <span className="instructor-circle">
                  {currentCourse.instructor[0]}
                </span>
                <p>{currentCourse.instructor}</p>
              </div>
            </div>
            <p className="mb-1">Schedule</p>
            {currentCourse.slots.map((slot) => {
              return slot.slot.map((time) => (
                <div className="modal-slot">
                  <p>
                    {times[time + 1]} - {times[time + 2]}
                  </p>
                  <p>{days[slot.day]}</p>
                  <p>{currentCourse.online ? "Online" : "Offline"}</p>
                </div>
              ));
            })}
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default CourseModal;
