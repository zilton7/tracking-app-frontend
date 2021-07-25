import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MeasurementItem = ({ id, image, name }) => (
  <Link to={`/progress/${id}`} className="measurement-item">
    <img alt="Measurement Item" src={image} />
    <div>
      <p className="name">{name}</p>
    </div>
  </Link>
);

MeasurementItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MeasurementItem;
