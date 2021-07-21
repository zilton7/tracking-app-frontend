import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddMeasure = () => {
  const [measurementId, setMeasurementId] = useState({
    id: 1,
  });

  const [measureData, setMeasureData] = useState({
    data: 0.01,
  });
  // Load measurements from state
  let measurements = useSelector((state) => state.measurements.measurements);

  const history = useHistory();

  const handleSelectChange = (e) => {
    setMeasurementId({
      id: e.target.value,
    });
  };

  const handleInputChange = (e) => {
    setMeasureData({
      data: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const payload = {
      measurement: {
        id: measurementId.id,
      },
      measure: {
        data: measureData.data,
      },
    };
    axios
      .post(
        "https://tracking-app-be-zil.herokuapp.com/api/v1/measurements",
        payload
      )
      .then(() => {
        document.getElementById("measurement-input").value = "";
        history.push(`/progress/${measurementId.id}`);
      });
  };

  return (
    <div className="add-measure">
      <div className="container">
        <div className="select-wrapper">
          <select
            name="select-measurements"
            id="select-measurements"
            onChange={handleSelectChange}
          >
            {measurements.map((measurement) => (
              <option value={measurement.id}>{measurement.name}</option>
            ))}
          </select>
          <input
            id="measurement-input"
            type="number"
            step="0.01"
            min="0"
            placeholder="0.01 cm"
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export default AddMeasure;
