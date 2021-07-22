import React from 'react';
import { useSelector } from 'react-redux';
import MeasurementItem from '../components/MeasurementItem';

const Measurements = () => {
  // Load measurements from state
  const measurements = useSelector((state) => state.measurements.measurements);

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
