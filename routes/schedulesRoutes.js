import express from "express";
import { getSchedule } from "../schedules/makeSchedule.js";

import getCombinations from "../schedules/getCombinations.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  const data = req.body;
  const courses = data.courses;

  const coursesPossibilities = getCombinations(courses);

  const schedule = getSchedule(100000, coursesPossibilities);

  res.json({ schedule });
});

export default router;
