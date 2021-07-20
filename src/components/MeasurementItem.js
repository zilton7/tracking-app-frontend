import { Link } from "react-router-dom";

const MeasurementItem = ({ id, image, name }) => {
  return (
    <Link to={`/progress/${id}`} className="measurement-item">
      <img src={image} />
      <div>
        <p className="name">{name}</p>
      </div>
    </Link>
  );
};

export default MeasurementItem;
