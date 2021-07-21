import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProgressItem from "./ProgressItem";

const sortObjByDate = (array) => {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return array.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
};

const Progress = () => {
  let { measurementId } = useParams();
  const [measures, setMeasures] = useState([]);
  const [measureName, setMeasureName] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://tracking-app-be-zil.herokuapp.com/api/v1/measurements/${measurementId}`
      )
      .then((response) => {
        setMeasures(sortObjByDate(response.data.measures));
        setMeasureName(response.data.name);
      })
      .catch((err) => err);
  }, []);

  return (
    <div className="progress-container">
      <h3>Your {measureName} Progress</h3>
      {measures.map((measure) => (
        <ProgressItem date={measure.created_at} data={measure.data} />
      ))}
    </div>
  );
};

export default Progress;
