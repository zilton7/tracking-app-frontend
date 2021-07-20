import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import MeasurementItem from "./MeasurementItem";
import loadMeasurements from "../actions/measurementsAction";

import bicepLeft from "../assets/images/bicep-left.png";
import bicepRight from "../assets/images/bicep-right.png";
import waist from "../assets/images/waist.png";
import hip from "../assets/images/hip.png";
import legLeft from "../assets/images/leg-left.png";
import legRight from "../assets/images/leg-right.png";

const Measurements = () => {
  // Fetch measurements data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeasurements());
  }, [dispatch]);

  // Put images to array
  const images = [bicepLeft, bicepRight, waist, hip, legLeft, legRight];
  // Load measurements from state
  let measurements = useSelector((state) => state.measurements.measurements);

  return (
    <div className="measurements">
      {measurements.map((measurement) => (
        <MeasurementItem
          image={images[measurement.id - 1]}
          name={measurement.name}
        />
      ))}
    </div>
  );
};

export default Measurements;
