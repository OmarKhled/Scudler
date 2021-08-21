import express from "express";
import { getSchedule } from "../schedules/makeSchedule.js";

import getCombinations from "../schedules/getCombinations.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  const data = req.body;
  // console.log(data);
  const courses = data.courses;
  const options = data.options;
  const schedulesNum = data.schedulesNum;

  try {
    const coursesPossibilities = getCombinations(courses);

    let length = 0;
    coursesPossibilities.forEach((course) =>
      course.forEach((poss) => length++)
    );

    console.log(length);

    const schedules = getSchedule(coursesPossibilities, options);

    // console.log(schedules.length);

    res.json({ schedules: schedules.splice(0, schedulesNum) });
    // res.json({ schedules: schedules });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
