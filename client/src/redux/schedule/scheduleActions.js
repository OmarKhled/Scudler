import { SET_SCHEDULES } from "../types/schedulesTypes";

export const setSchedules = (schedules) => (dispatch) => {
  dispatch({
    type: SET_SCHEDULES,
    payload: schedules,
  });
};
