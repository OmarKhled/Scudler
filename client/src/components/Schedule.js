import React from "react";

const Schedule = ({ schedule, times, days, handleShow, className }) => {
  return (
    <div className="schedule-container">
      <div className={"schedule " + className}>
        <div className="times">
          <ul>
            {times.map((time, index) => (
              <li
                key={index}
                className={`time-indecator ${
                  index === 0 ? "shrink" : "expand"
                }`}
              >
                <small>{time}</small>
              </li>
            ))}
          </ul>
        </div>
        <div className="schedule-body">
          {schedule.map((day, index) => (
            <ul className="schedule-column" key={index}>
              <li className="day-cell">{days[index]}</li>
              {day.map((slot, index) =>
                slot.length > 0 ? (
                  <li key={index} className="slot-container">
                    <div onClick={() => handleShow(slot[0])} className="slot">
                      {slot[0].name}
                    </div>
                  </li>
                ) : (
                  <li key={index} className="slot-container"></li>
                )
              )}
            </ul>
          ))}
        </div>
      </div>
      <div className="schedule-tail">
        <div className="type">
          <div className="registered-circle"></div>
          <span>You are always ready to register!</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
