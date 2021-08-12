import { fitness } from "./fitness.js";

const getRandonInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const getSchedule = (rounds, combinations) => {
  console.log("");
  let schedule = {};

  for (let index = 0; index < rounds; index++) {
    console.log(index);
    const courses = [];
    combinations.forEach((course) => {
      courses.push(course[getRandonInt(course.length)]);
    });

    if (fitness(courses).fit === 0) {
      schedule = fitness(courses).schedule;
      break;
    }
  }

  return schedule;
};
