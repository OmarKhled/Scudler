import _ from "lodash";

export const compareMaps = (map1, map2) => {
  let dup = true;
  map1.forEach((day, dayIndex) => {
    day.forEach((slot, slotIndex) => {
      const map2Slot = map2[dayIndex][slotIndex];
      if (map2Slot.length === 0 && slot.length === 0) {
        //pass
      } else if (
        map2Slot.length > slot.length ||
        map2Slot.length < slot.length
      ) {
        dup = false;
      } else {
        if (_.isEmpty(slot[0]) || _.isEmpty(map2Slot[0])) {
          dup = false;
        } else {
          Object.keys(slot[0]).forEach((x) => {
            if (!(slot[0][x] === map2Slot[0][x])) {
              dup = false;
            }
          });
          Object.keys(map2Slot[0]).forEach((x) => {
            if (!(slot[0][x] === map2Slot[0][x])) {
              dup = false;
            }
          });
        }
      }
    });
  });
  return dup;
};

export const sortSchedules = (schedules) => {
  schedules.sort(function (a, b) {
    return b.fit - a.fit;
  });
  return schedules;
};
