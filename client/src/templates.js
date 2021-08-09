export const initialTemplate = [
  {
    courseName: "",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "",
          slots: [
            {
              day: 2,
              slot: [0, 1],
            },
            {
              day: 1,
              slot: [3, 4],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "",
            slots: [
              {
                day: 3,
                slot: [0, 1],
              },
            ],
          },
          {
            tutorialName: "",
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
    slots: [
      {
        day: 2,
        slot: [0, 1],
      },
    ],
  },
};
