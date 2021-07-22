import { combineReducers } from 'redux';
import measurementsReducer from './measurementsReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  measurements: measurementsReducer,
  user: loginReducer,
});

export default rootReducer;
