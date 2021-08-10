export const initialTemplate = [
  {
    courseName: "DEMO",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "",
          professor: "",
          slots: [
            {
              day: 4,
              slot: [7, 8],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "",
            tutorialPrefix: "",
            ta: "",
            slots: [
              {
                day: 3,
                slot: [0, 1],
              },
            ],
          },
          {
            tutorialName: "",
            tutorialPrefix: "",
            ta: "",
            slots: [
              {
                day: 2,
                slot: [0, 3],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const sectionTemplate = {
  sectionNumber: 1,
  lecture: {
    lectureName: "",
    professor: "",
    slots: [
      {
        day: 2,
        slot: [0, 1],
      },
    ],
  },
};

export const slotTemplate = {
  day: 2,
  slot: [0, 1],
};
