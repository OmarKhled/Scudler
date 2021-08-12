import React from "react";
import _ from "lodash";

const Schedule = ({ schedule }) => {
  const range = (start, stop, step) => {
    if (typeof stop == "undefined") {
      stop = start;
      start = 0;
    }

    if (typeof step == "undefined") {
      step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
    }

    return result;
  };

  const days = ["  ", "Sunday", "Monday", "Tuesday", "Wendsday", "Thrusday"];
  const times = [
    "8:30",
    "9:30",
    "10:30",
    "11:30",
    "12:30",
    "1:30",
    "2:30",
    "3:30",
    "4:30",
  ];
  return (
    <div className="schedule">
      <table>
        <thead>
          <tr>
            {days.map((day, index) => (
              <th key={index} className="schedule-head">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {range(9).map((tr) => (
            <tr key={tr}>
              {range(6).map((td) =>
                td === 0 ? (
                  <td key={td} className="text-center">
                    {times[tr]}
                  </td>
                ) : (
                  <td key={td}>
                    <div
                      className={`${schedule[td - 1][tr].length > 0 && "slot"}`}
                    >
                      {schedule[td - 1][tr].length > 0 ? (
                        <>
                          <p>{schedule[td - 1][tr][0].name.split(" ")[0]}</p>
                          <span>
                            {_.capitalize(schedule[td - 1][tr][0].type)} -
                            Section{" "}
                            {_.last(schedule[td - 1][tr][0].name.split(" "))}
                          </span>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
