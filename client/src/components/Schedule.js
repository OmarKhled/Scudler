import React from "react";
import { schedule } from "../courses";

const Schedule = ({ className }) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thrusday"];
  const times = [
    " ",
    "8:30 AM",
    "9:30 AM",
    "10:30 AM",
    "11:30 AM",
    "12:30 AM",
    "1:30 PM",
    "2:30 PM",
    "3:30 PM",
    "4:30 PM",
  ];
  return (
    <div className="schedule-container">
      <div className={"schedule " + className}>
        <div className="times">
          <ul>
            {times.map((time, index) => (
              <li
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
            <ul className="schedule-column">
              <li className="day-cell">{days[index]}</li>
              {day.map((slot) =>
                slot.length > 0 ? (
                  <li className="slot-container">
                    <div className="slot">{slot[0].name}</div>
                  </li>
                ) : (
                  <li className="slot-container"></li>
                )
              )}
            </ul>
          ))}
        </div>
      </div>
      <div className="schedule-tail">
        <div className="type">
          <div className="registered-circle"></div>
          <span>No worries dude, you are already registered!</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
