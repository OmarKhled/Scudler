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
            tutorialPrefix: "1A",
            ta: "",
            slots: [
              {
                day: 3,
                slot: [0, 1],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "",
            labPrefix: "1A",
            ta: "",
            slots: [
              {
                day: 0,
                slot: [2, 3],
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
  tutorial: [],
  lab: [],
};

export const slotTemplate = {
  day: 2,
  slot: [0, 1],
};

export const tutorialTemplate = {
  tutorialName: "",
  tutorialPrefix: "",
  ta: "",
  slots: [
    {
      day: 3,
      slot: [0, 1],
    },
    {
      day: 1,
      slot: [0, 1],
    },
  ],
};

export const labTemplate = {
  labName: "",
  labPrefix: "1A",
  ta: "",
  slots: [
    {
      day: 0,
      slot: [2, 3],
    },
  ],
};
