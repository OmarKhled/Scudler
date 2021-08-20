export const initialTemplate = [
  {
    courseName: "MATH002",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "MATH002 Lecture - Section 1",
          professor: "Mohamed Wafa",
          online: true,
          slots: [
            {
              day: 2,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MATH002 - Tutorial 1A",
            tutorialPrefix: "1A",
            ta: "Mohamed farag",
            online: true,
            slots: [
              {
                day: 3,
                slot: [0, 1],
              },
            ],
          },
          {
            tutorialName: "MATH002 - Tutorial 1B",
            tutorialPrefix: "1B",
            ta: "Menna Mohamed",
            online: false,
            slots: [
              {
                day: 3,
                slot: [0, 1],
              },
            ],
          },
        ],
        labs: [],
      },
      {
        sectionNumber: 2,
        lecture: {
          lectureName: "MATH002 Lecture - Section 2",
          professor: "Mohamed Wafa",
          online: true,
          slots: [
            {
              day: 2,
              slot: [2, 3],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MATH002 - Tutorial 2A",
            tutorialPrefix: "2A",
            ta: "Mohamed Farag",
            online: false,
            slots: [
              {
                day: 3,
                slot: [2, 3],
              },
            ],
          },
          {
            tutorialName: "MATH002 - Tutorial 2B",
            tutorialPrefix: "2B",
            ta: "Menna Mohamed",
            online: true,
            slots: [
              {
                day: 3,
                slot: [5, 6],
              },
            ],
          },
        ],
        labs: [],
      },
      {
        sectionNumber: 3,
        lecture: {
          lectureName: "MATH002 Lecture - Section 3",
          professor: "Mohamed Mamdouh",
          online: true,
          slots: [
            {
              day: 0,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MATH002 - Tutorial 3A",
            tutorialPrefix: "3A",
            ta: "Mohamed Farag",
            online: true,
            slots: [
              {
                day: 3,
                slot: [5, 6],
              },
            ],
          },
          {
            tutorialName: "MATH002 - Tutorial 3B",
            tutorialPrefix: "3B",
            ta: "Menna Farag",
            online: false,
            slots: [
              {
                day: 4,
                slot: [3, 4],
              },
            ],
          },
        ],
        labs: [],
      },
      {
        sectionNumber: 4,
        lecture: {
          lectureName: "MATH002 Lecture - Section 4",
          professor: "Mohamed Mamdouh",
          online: true,
          slots: [
            {
              day: 0,
              slot: [3, 4],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MATH002 - Tutorial 4A",
            tutorialPrefix: "4A",
            ta: "Mohamed Farag",
            online: true,
            slots: [
              {
                day: 1,
                slot: [0, 1],
              },
            ],
          },
          {
            tutorialName: "MATH002 - Tutorial 4B",
            tutorialPrefix: "4B",
            ta: "Menna Mohamed",
            online: false,
            slots: [
              {
                day: 3,
                slot: [3, 4],
              },
            ],
          },
        ],
        labs: [],
      },
    ],
  },
  {
    courseName: "ENGL003",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 1",
          professor: "Shierien",
          online: true,
          slots: [
            {
              day: 1,
              slot: [1],
            },
            {
              day: 0,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 2,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 2",
          professor: "Mariam",
          online: true,
          slots: [
            {
              day: 0,
              slot: [0, 1],
            },
            {
              day: 1,
              slot: [1],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 3,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 3",
          professor: "Iman",
          online: true,
          slots: [
            {
              day: 0,
              slot: [2, 3],
            },
            {
              day: 1,
              slot: [1],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 4,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 4",
          professor: "Adham",
          online: true,
          slots: [
            {
              day: 4,
              slot: [5],
            },
            {
              day: 2,
              slot: [5],
            },
            {
              day: 3,
              slot: [3],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 5,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 5",
          professor: "Marwa",
          online: true,
          slots: [
            {
              day: 0,
              slot: [5],
            },
            {
              day: 4,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 6,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 6",
          professor: "Amany",
          online: true,
          slots: [
            {
              day: 1,
              slot: [2],
            },
            {
              day: 0,
              slot: [2, 3],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 7,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 7",
          professor: "Omnia",
          online: true,
          slots: [
            {
              day: 0,
              slot: [2, 3],
            },
            {
              day: 3,
              slot: [5],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 8,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 8",
          professor: "Asmaa ",
          online: true,
          slots: [
            {
              day: 1,
              slot: [3],
            },
            {
              day: 3,
              slot: [4, 5],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
    ],
  },
  {
    courseName: "PHYS002",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "PHYS002 Lecture - Section 1",
          professor: "Yasser El-Batawy",
          online: true,
          slots: [
            {
              day: 0,
              slot: [4, 5],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "PHYS002 - Tutorial 1A",
            tutorialPrefix: "1A",
            ta: "Rawan Edris",
            online: true,
            slots: [
              {
                day: 1,
                slot: [2, 3],
              },
            ],
          },
          {
            tutorialName: "PHYS002 - Tutorial 1B",
            tutorialPrefix: "1B",
            ta: "Marwa El Badawy",
            online: false,
            slots: [
              {
                day: 0,
                slot: [0, 1],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "PHYS002 - Lab 1A",
            labPrefix: "1A",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 4,
                slot: [4, 5],
              },
            ],
          },
          {
            labName: "PHYS002 - Lab 1B",
            labPrefix: "1B",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 4,
                slot: [0, 1],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 2,
        lecture: {
          lectureName: "PHYS002 Lecture - Section 2",
          professor: "Yasser El-Batawy",
          online: true,
          slots: [
            {
              day: 1,
              slot: [5, 6],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "PHYS002 - Tutorial 2A",
            tutorialPrefix: "2A",
            ta: "Rawan Edris",
            online: true,
            slots: [
              {
                day: 0,
                slot: [4, 5],
              },
            ],
          },
          {
            tutorialName: "PHYS002 - Tutorial 2B",
            tutorialPrefix: "2B",
            online: false,
            ta: "Rawan Edris",
            slots: [
              {
                day: 0,
                slot: [2, 3],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "PHYS002 - Lab 2A",
            labPrefix: "2A",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 3,
                slot: [5, 6],
              },
            ],
          },
          {
            labName: "PHYS002 - Lab 2B",
            labPrefix: "2B",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 3,
                slot: [0, 1],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 3,
        lecture: {
          lectureName: "PHYS002 Lecture - Section 3",
          professor: "Amr Essawy",
          online: true,
          slots: [
            {
              day: 2,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "PHYS002 - Tutorial 3A",
            tutorialPrefix: "3A",
            ta: "Marwa Mohamed",
            online: false,
            slots: [
              {
                day: 0,
                slot: [4, 5],
              },
            ],
          },
          {
            tutorialName: "PHYS002 - Tutorial 3B",
            tutorialPrefix: "3B",
            online: true,
            ta: "Rawan Edris",
            slots: [
              {
                day: 1,
                slot: [0, 1],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "PHYS002 - Lab 3A",
            labPrefix: "3A",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 4,
                slot: [6, 7],
              },
            ],
          },
          {
            labName: "PHYS002 - Lab 3B",
            labPrefix: "3B",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 2,
                slot: [6, 7],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 4,
        lecture: {
          lectureName: "PHYS002 Lecture - Section 4",
          professor: "Amr Essawy",
          online: true,
          slots: [
            {
              day: 3,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "PHYS002 - Tutorial 4A",
            tutorialPrefix: "4A",
            ta: "Amany Mostafa",
            slots: [
              {
                day: 0,
                slot: [0, 1],
              },
            ],
          },
          {
            tutorialName: "PHYS002 - Tutorial 4B",
            tutorialPrefix: "4B",
            ta: "Amany Mostafa",
            slots: [
              {
                day: 1,
                slot: [0, 1],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "PHYS002 - Lab 4A",
            labPrefix: "4A",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 1,
                slot: [5, 6],
              },
            ],
          },
          {
            labName: "PHYS002 - Lab 4B",
            labPrefix: "4B",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 2,
                slot: [0, 1],
              },
            ],
          },
        ],
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
      online: true,
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
  online: true,
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
    online: false,
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
        online: true,
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
