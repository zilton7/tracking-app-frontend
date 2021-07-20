import axios from "axios";

const loadMeasurements = () => async (dispatch) => {
  axios
    .get("https://tracking-app-be-zil.herokuapp.com/api/v1/measurements")
    .then(
      // (response) => console.log(response.data)
      (response) =>
        dispatch({
          type: "FETCH_MEASUREMENTS",
          payload: {
            measurements: [...response.data],
          },
        })
    );
};
export default loadMeasurements;
