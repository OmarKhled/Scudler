import { SET_SCHEDULE } from "../types/schedulesTypes";

const map = [
  /* 0   1   2   3   4   5   6   7,  8 */
  [[], [], [], [], [], [], [], [], []], // Sunday   0
  [[], [], [], [], [], [], [], [], []], // Monday   1
  [[], [], [], [], [], [], [], [], []], // Tuesday  2
  [[], [], [], [], [], [], [], [], []], // Wendsday 3
  [[], [], [], [], [], [], [], [], []], // Thursday 4
];

const scheduleReducers = (state = { schedule: map }, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SCHEDULE: {
      return {
        ...state,
        schedule: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default scheduleReducers;
