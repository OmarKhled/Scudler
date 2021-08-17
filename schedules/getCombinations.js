export default (courses) => {
  const coursesPossibilities = [];
  courses.forEach((course) => {
    const possibilities = [];
    course.body.forEach((section) => {
      const { lecture, tutorial, labs, sectionNumber } = section;
      const currentCombination = { lecture: {}, tutorial: {}, lab: {} };
      const currentLecture = {
        name: lecture.lectureName,
        slots: lecture.slots,
        instructor: lecture.professor,
        online: lecture.online,
      };
      currentCombination.lecture = currentLecture;

      if (tutorial.length > 0) {
        tutorial.forEach((tut) => {
          if (labs.length > 0) {
            labs.forEach((lab) => {
              currentCombination.lab = {
                name: lab.labName,
                slots: lab.slots,
                instructor: lab.ta,
                online: lab.online,
              };
              currentCombination.tutorial = {
                name: tut.tutorialName,
                slots: tut.slots,
                instructor: tut.ta,
                online: tut.online,
              };
              possibilities.push({ ...currentCombination });
            });
          } else {
            currentCombination.lab = {};
            currentCombination.tutorial = {
              name: tut.tutorialName,
              slots: tut.slots,
              instructor: tut.ta,
              online: tut.online,
            };
            possibilities.push({ ...currentCombination });
          }
        });
      } else {
        if (labs.length > 0) {
          currentCombination.tutorial = {};
          labs.forEach((lab) => {
            currentCombination.lab = {
              name: lab.labName,
              slots: lab.slots,
              instructor: lab.ta,
              online: lab.online,
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
  return coursesPossibilities;
};
