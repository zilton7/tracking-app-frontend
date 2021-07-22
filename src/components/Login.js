import { useDispatch } from "react-redux";
import login from "../actions/loginAction";

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const username = document.getElementById("username").value;
    if (username != "") {
      dispatch(login(username));
    } else {
      alert("Username can not be empty");
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <h1>Tracking App</h1>
        <input id="username" placeholder="Enter Your Name" />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
