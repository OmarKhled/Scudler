import express from "express";
import { getSchedule } from "../schedules/makeSchedule.js";

import getCombinations from "../schedules/getCombinations.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  const data = req.body;
  // console.log(data);
  const courses = data.courses;

  const coursesPossibilities = getCombinations(courses);

  let length = 0;
  coursesPossibilities.forEach((course) => course.forEach((poss) => length++));
  console.log(length);

  const schedules = getSchedule(
    coursesPossibilities.length === 1
      ? Math.ceil(Math.pow(length, 1))
      : coursesPossibilities.length === 2
      ? Math.ceil(Math.pow(length, 2.1))
      : coursesPossibilities.length === 3 && Math.ceil(Math.pow(length, 2.5)),
    coursesPossibilities
  );

  console.log(schedules.length);

  res.json({ schedules });
});

export default router;
