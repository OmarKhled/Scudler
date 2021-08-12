import express from "express";
import { courses } from "../courses.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  const courses = req.body.courses;

  const coursesPossibilities = [];
  courses.forEach((course) => {
    const possibilities = [];
    course.body.forEach((section) => {
      const { lecture, tutorial, labs, sectionNumber } = section;
      const currentCombination = { lecture: {}, tutorial: {}, lab: {} };
      const currentLecture = {
        name: lecture.lectureName,
        slots: lecture.slots,
        professor: lecture.professor,
      };
      currentCombination.lecture = currentLecture;

      if (tutorial.length > 0) {
        tutorial.forEach((tut) => {
          if (labs.length > 0) {
            labs.forEach((lab) => {
              currentCombination.lab = {
                name: lab.labName,
                slots: lab.slots,
                ta: lab.ta,
              };
              currentCombination.tutorial = {
                name: tut.tutorialName,
                slots: tut.slots,
                ta: tut.ta,
              };
            });
          } else {
            currentCombination.lab = {};
            currentCombination.tutorial = {
              name: tut.tutorialName,
              slots: tut.slots,
              ta: tut.ta,
            };
          }
          possibilities.push({ ...currentCombination });
        });
      } else {
        if (labs.length > 0) {
          currentCombination.tutorial = {};
          labs.forEach((lab) => {
            currentCombination.lab = {
              name: lab.labName,
              slots: lab.slots,
              ta: lab.ta,
            };
            possibilities.push({ ...currentCombination });
          });
        } else {
          possibilities.push({ ...currentCombination });
        }
      }
    });
    coursesPossibilities.push(possibilities);
  });
  res.json(coursesPossibilities);
});

export default router;
