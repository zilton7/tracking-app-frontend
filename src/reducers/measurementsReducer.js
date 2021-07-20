const initialState = {
  measurements: [],
};

const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MEASUREMENTS":
      return {
        ...state,
        measurements: action.payload.measurements,
      };
    default:
      return { ...state };
  }
};

export default measurementsReducer;
