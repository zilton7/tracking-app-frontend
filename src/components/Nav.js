import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <div className="bottom-buttons">
      <Link to="/add" className="button-wrapper">
        <i className="far fa-plus-square"></i>
        <p>Add measure</p>
      </Link>
      <Link to="/tracker" className="button-wrapper">
        <i className="fas fa-chart-line"></i>
        <p>Tracker</p>
      </Link>
      <Link to="/" className="button-wrapper">
        <i className="fas fa-chart-pie"></i>
        <p>Progress</p>
      </Link>
      <Link to="/" className="button-wrapper">
        <i className="fas fa-ellipsis-h"></i>
        <p>More</p>
      </Link>
    </div>
  </nav>
);

export default Nav;
