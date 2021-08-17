import { fitness } from "./fitness.js";
import { compareMaps, sortSchedules } from "./schedulesUtil.js";

const getRandonInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const getSchedule = (rounds, combinations) => {
  // console.log("");
  let schedules = [];

  for (let index = 0; index < rounds; index++) {
    // console.log(index);
    const courses = [];
    combinations.forEach((course) => {
      courses.push(course[getRandonInt(course.length)]);
    });

    if (fitness(courses).fit >= 0) {
      const newSchedule = fitness(courses);
      let exist = false;
      schedules.forEach((schedule) => {
        if (compareMaps(schedule.schedule, newSchedule.schedule)) {
          index--;
          exist = true;
          // break
        }
      });
      if (!exist) {
        schedules.push(newSchedule);
      }
    }
  }

  // console.log(schedules);

  schedules.forEach((schedule1, index1) => {
    schedules.slice(index1 + 1).forEach((schedule2, index2) => {
      if (compareMaps(schedule1.schedule, schedule2.schedule)) {
        schedules.splice(index2 + index1 + 1);
      }
    });
  });
  // console.log(schedules);

  schedules = sortSchedules(schedules);

  // console.log(schedules);

  return schedules;
};
