import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logout from "../actions/logoutAction";

const Nav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    window.location = "/";
  };

  return (
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
        <div className="button-wrapper" onClick={handleClick}>
          <i className="fas fa-sign-out-alt"></i>
          <p>Logout</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
