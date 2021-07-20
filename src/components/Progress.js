import { useParams } from "react-router-dom";
import axios from "axios";

const Progress = () => {
  let { measurementId } = useParams();
  axios
    .get(
      `https://tracking-app-be-zil.herokuapp.com/api/v1/measurements/${measurementId}`
    )
    .then((response) => console.log(response.data.measures));
  return <div>Progress {measurementId}</div>;
};

export default Progress;
