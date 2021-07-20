import React, { useEffect } from "react";
import axios from "axios";
import MeasurementItem from "./MeasurementItem";
import bicepLeft from "../images/bicep-left.png";
import bicepRight from "../images/bicep-right.png";
import waist from "../images/waist.png";
import hip from "../images/hip.png";
import legLeft from "../images/leg-left.png";
import legRight from "../images/leg-right.png";

const Measurements = () => {
  function checkLoginStatus() {
    axios
      .get("https://tracking-app-be-zil.herokuapp.com/api/v1/measurements")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => error);
  }
  useEffect(() => {
    checkLoginStatus();
  });

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
