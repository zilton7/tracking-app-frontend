import { combineReducers } from "redux";
import measurementsReducer from "./measurementsReducer";

const rootReducer = combineReducers({
  measurements: measurementsReducer,
});

export default rootReducer;
