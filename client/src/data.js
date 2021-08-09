export const initialTemplate = [
  {
    courseName: "",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          slots: [
            {
              day: "2",
              slot: [0, 1],
            },
          ],
        },
        tutorial: [
          {
            slots: [
              {
                day: 3,
                slot: [0, 1],
              },
            ],
          },
          {
            slots: [
              {
                day: 3,
                slot: [0, 1],
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
    slots: [
      {
        day: "2",
        slot: [0, 1],
      },
    ],
  },
};
