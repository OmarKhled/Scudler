import express from "express";
import { getSchedule } from "../schedules/makeSchedule.js";

import getCombinations from "../schedules/getCombinations.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  const data = req.body;
  // console.log(data);
  const courses = data.courses;

  const coursesPossibilities = getCombinations(courses);

  // console.log(coursesPossibilities);

  const schedules = getSchedule(10000, coursesPossibilities);

  console.log("schedules");

  res.json({ schedules });
});

export default router;
