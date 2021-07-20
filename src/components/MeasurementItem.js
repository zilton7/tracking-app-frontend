const MeasurementItem = ({ image, name, measure }) => {
  return (
    <div className="measurement-item">
      <img src={image} />
      <div>
        <p class="name">{name}</p>
        <p class="measure">{measure}</p>
      </div>
    </div>
  );
};

export default MeasurementItem;
