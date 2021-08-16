const coursesReducer = (
  state = { courses: [], loading: false, alerts: [] },
  action
) => {
  // eslint-disable-next-line
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};

export default coursesReducer;
