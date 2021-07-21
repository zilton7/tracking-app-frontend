import { useSelector } from "react-redux";

const Heading = () => {
  // Load username from state
  let username = useSelector((state) => state.user.username);

  return <div className="heading">{username}'s Tracking App</div>;
};

export default Heading;
