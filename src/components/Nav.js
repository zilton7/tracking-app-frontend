import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logout from '../actions/logoutAction';

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <nav>
      <div className="bottom-buttons">
        <Link to="/add" className="button-wrapper">
          <i className="far fa-plus-square" />
          <p>Add measure</p>
        </Link>
        <Link to="/tracker" className="button-wrapper">
          <i className="fas fa-chart-line" />
          <p>Tracker</p>
        </Link>
        <Link to="/progress/1" className="button-wrapper">
          <i className="fas fa-chart-pie" />
          <p>Progress</p>
        </Link>
        <div
          role="button"
          tabIndex={0}
          className="button-wrapper"
          onClick={handleClick}
          onKeyPress={handleClick}
        >
          <i className="fas fa-sign-out-alt" />
          <p>Logout</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
