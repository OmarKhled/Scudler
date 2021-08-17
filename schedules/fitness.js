import _ from "lodash";

const TYPES = ["lecture", "lab", "tutorial"];

export const fitness = (courses) => {
  let map = [
    /* 0   1   2   3   4   5   6   7,  8 */
    [[], [], [], [], [], [], [], [], []], // Sunday   0
    [[], [], [], [], [], [], [], [], []], // Monday   1
    [[], [], [], [], [], [], [], [], []], // Tuesday  2
    [[], [], [], [], [], [], [], [], []], // Wendsday 3
    [[], [], [], [], [], [], [], [], []], // Thursday 4
  ];

  courses.forEach((course) => {
    TYPES.forEach((type) => {
      if (!_.isEmpty(course[type])) {
        course[type].slots.forEach((appointment) => {
          appointment.slot.forEach((slot) => {
            map[Number(appointment.day)][Number(slot)].push({
              name: course[type].name,
              instructor: course[type].instructor,
              type,
              online: course[type].online,
              slots: course[type].slots,
            });
          });
        });
      }
    });
  });
  let fit = 0;
  map.forEach((day) => {
    day.forEach((slot) => {
      if (slot.length > 1) {
        fit--;
      }
    });
  });
  // Empty days
  if (fit === 0) {
    map.forEach((day) => {
      let emptyDay = true;
      day.forEach((slot) => {
        if (slot.length > 0) emptyDay = false;
      });
      if (emptyDay) fit++;
    });
  }
  return { fit, schedule: map };
};
