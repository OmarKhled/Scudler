const coursesReducer = (state = { courses: [] }, action) => {
  // eslint-disable-next-line
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};

export default coursesReducer;
