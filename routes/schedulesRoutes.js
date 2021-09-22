import express from "express";
import { getSchedule } from "../schedules/makeSchedule.js";

import getCombinations from "../schedules/getCombinations.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  console.log("object");
  const data = req.body;
  const courses = data.courses;
  const options = data.options || {};
  const schedulesNum = data.schedulesNum || 50;

  try {
    const coursesPossibilities = getCombinations(courses);

    let length = 0;
    coursesPossibilities.forEach((course) =>
      course.forEach((poss) => length++)
    );

    const schedules = getSchedule(coursesPossibilities, options);

    res.json({ schedules: schedules.splice(0, schedulesNum) });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
