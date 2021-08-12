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
        tutorial: [],
        labs: [],
      },
    ],
  },
];

export const sectionTemplate = Object.assign(
  {},
  {
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
    labs: [],
  }
);

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
      day: 0,
      slot: [0, 1],
    },
  ],
};

export const labTemplate = Object.assign(
  {},
  {
    labName: "",
    labPrefix: "1A",
    ta: "",
    slots: [
      {
        day: 0,
        slot: [0, 1],
      },
    ],
  }
);

export const courseTemplate = {
  courseName: "DEMO",
  body: [
    {
      sectionNumber: 1,
      lecture: {
        lectureName: "",
        professor: "",
        slots: [
          {
            day: 2,
            slot: [0, 3],
          },
        ],
      },
      tutorial: [],
      labs: [],
    },
  ],
};
