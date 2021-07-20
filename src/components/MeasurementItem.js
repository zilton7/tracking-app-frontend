const MeasurementItem = ({ image, name }) => {
  return (
    <div className="measurement-item">
      <img src={image} />
      <div>
        <p className="name">{name}</p>
      </div>
    </div>
  );
};

export default MeasurementItem;
