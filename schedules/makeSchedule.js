import { schedule2 } from "../courses.js";
import { fitness } from "./fitness.js";
import { compareMaps, sortSchedules } from "./schedulesUtil.js";

const getRandonInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const getSchedule = (rounds, combinations, options) => {
  let schedules = [];
  let existNum = 0;

  for (let index = 0; index < rounds; index++) {
    const courses = [];
    combinations.forEach((course) => {
      courses.push(course[getRandonInt(course.length)]);
    });

    if (fitness(courses, options).fit >= 0) {
      const newSchedule = fitness(courses, options);
      let exist = false;
      // schedules.forEach((schedule) => {
      //   if (compareMaps(schedule.schedule, newSchedule.schedule)) {
      //     // index--;
      //     exist = true;
      //     // break
      //   }
      // });
      exist = schedules.find(
        (schedule) =>
          JSON.stringify(schedule.schedule) ===
          JSON.stringify(newSchedule.schedule)
      );
      if (!exist) {
        schedules.push(newSchedule);
        console.log(true);
      } else {
        console.log(existNum);
        existNum++;
        if (existNum > 2000) {
          break;
        }
      }
    }
  }

  console.log(schedules.length);

  schedules.forEach((schedule1, index1) => {
    schedules.slice(index1 + 1).forEach((schedule2, index2) => {
      if (compareMaps(schedule1.schedule, schedule2.schedule)) {
        schedules.splice(index2 + index1 + 1);
      }
    });
  });
  console.log(schedules.length);

  schedules = sortSchedules(schedules);

  // console.log(schedules);

  return schedules;
};
