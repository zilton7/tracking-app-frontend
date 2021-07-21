import { useDispatch } from "react-redux";
import login from "../actions/loginAction";

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const username = document.getElementById("username").value;
    dispatch(login(username));
  };

  return (
    <div className="login-page">
      login page
      <input id="username" />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
