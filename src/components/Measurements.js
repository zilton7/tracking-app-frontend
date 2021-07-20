import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MeasurementItem from "./MeasurementItem";
import loadMeasurements from "../actions/measurementsAction";

const Measurements = () => {
  // Fetch measurements data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeasurements());
  }, [dispatch]);

  // Load measurements from state
  let measurements = useSelector((state) => state.measurements.measurements);

  return (
    <div className="measurements">
      {measurements.map((measurement) => (
        <MeasurementItem
          key={measurement.id}
          id={measurement.id}
          image={measurement.image}
          name={measurement.name}
        />
      ))}
    </div>
  );
};

export default Measurements;
