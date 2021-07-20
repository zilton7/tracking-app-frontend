import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import MeasurementItem from "./MeasurementItem";
import loadMeasurements from "../actions/measurementsAction";

import bicepLeft from "../assets/images/bicep-left.png";
import bicepRight from "../assets/images/bicep-right.png";
import waist from "../assets/images/waist.png";
import hip from "../assets/images/hip.png";
import legLeft from "../assets/images/leg-left.png";
import legRight from "../assets/images/leg-right.png";

const Measurements = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeasurements());
  }, [dispatch]);

  return (
    <div className="measurements">
      <div className="measurements-left">
        <MeasurementItem image={bicepLeft} name="Left Bicep" measure="50.6" />
        <MeasurementItem image={waist} name="Waist" measure="50.6" />
        <MeasurementItem image={legLeft} name="Left Leg" measure="50.6" />
      </div>
      <div className="measurements-right">
        <MeasurementItem image={bicepRight} name="Right Bicep" measure="50.6" />
        <MeasurementItem image={hip} name="Hip" measure="50.6" />
        <MeasurementItem image={legRight} name="Right Leg" measure="50.6" />
      </div>
    </div>
  );
};

export default Measurements;
