import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddMeasure = () => {
  const [data, setData] = useState({
    measurementId: null,
    measureData: null,
  });

  // Load measurements from state
  let measurements = useSelector((state) => state.measurements.measurements);

  const handleClick = () => {
    const values = "calculate(buttonName, data)";
    setData({
      measurementId: "calculation.total",
      measureData: "calculation.next",
    });
  };

  return (
    <div className="add-measure">
      <select name="select-measurements" id="select-measurements">
        {measurements.map((measurement) => (
          <option value={measurement.id}>{measurement.name}</option>
        ))}
      </select>
      <input placeholder="55.5" />
    </div>
  );
};

export default AddMeasure;
