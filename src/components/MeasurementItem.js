const MeasurementItem = ({ image, name, measure }) => {
  return (
    <div className="measurement-item">
      <img src={image} />
      <div>
        <p className="name">{name}</p>
        <p className="measure">{measure}</p>
      </div>
    </div>
  );
};

export default MeasurementItem;
