import {
  GET_SCHEDULES,
  SET_SCHEDULES_FAIL,
  SET_SCHEDULES_SUCCESS,
} from "../types/schedulesTypes";
import axios from "axios";

export const setSchedules =
  (sortUponOnlineDays, sortUponFreeDays, sortUponLastFreeSlots, courses) =>
  async (dispatch, getState) => {
    dispatch({
      type: GET_SCHEDULES,
    });
    try {
      const res = await axios.post("/api/schedules", {
        courses,
        options: {
          sortUponOnlineDays,
          sortUponFreeDays,
          sortUponLastFreeSlots,
        },
        schedulesNum: 50,
      });
      dispatch({
        type: SET_SCHEDULES_SUCCESS,
        payload: res.data.schedules,
      });
    } catch (err) {
      dispatch({
        type: SET_SCHEDULES_FAIL,
      });
    }
  };
