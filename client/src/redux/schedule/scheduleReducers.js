import {
  GET_SCHEDULES,
  SET_SCHEDULES_SUCCESS,
  SET_SCHEDULES_FAIL,
} from "../types/schedulesTypes";

const map = [
  /* 0   1   2   3   4   5   6   7,  8 */
  [[], [], [], [], [], [], [], [], []], // Sunday   0
  [[], [], [], [], [], [], [], [], []], // Monday   1
  [[], [], [], [], [], [], [], [], []], // Tuesday  2
  [[], [], [], [], [], [], [], [], []], // Wendsday 3
  [[], [], [], [], [], [], [], [], []], // Thursday 4
];

const scheduleReducers = (
  state = { schedules: [{ schedule: map }], loading: false, alerts: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SCHEDULES: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_SCHEDULES_SUCCESS: {
      return {
        ...state,
        loading: false,
        schedules: payload,
      };
    }
    case SET_SCHEDULES_FAIL: {
      return {
        ...state,
        loading: false,
        schedules: [],
        alerts: ["Server Error"],
      };
    }
    default: {
      return state;
    }
  }
};

export default scheduleReducers;
