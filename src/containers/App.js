import Router from "../router/Router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadMeasurements from "../actions/measurementsAction";
import Heading from "../components/Heading";
import Login from "../components/Login";

const App = () => {
  // Fetch measurements data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeasurements());
  }, [dispatch]);

  // Load user data from state
  let user = useSelector((state) => state.user);

  let app = <Login />;
  if (user.loggedIn) {
    app = (
      <>
        <Heading />
        <Router />
      </>
    );
  }

  return <div className="App">{app}</div>;
};

export default App;
