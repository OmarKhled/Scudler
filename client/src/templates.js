export const initialTemplate = [
  {
    courseName: "",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "",
          professor: "Yasser",
          slots: [
            {
              day: 2,
              slot: [0, 1, 2, 3],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "",
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
