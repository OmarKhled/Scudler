import { SET_SCHEDULE } from "../types/schedulesTypes";

export const setSchedule = (schedule) => (dispatch) => {
  dispatch({
    type: SET_SCHEDULE,
    payload: schedule,
  });
};
