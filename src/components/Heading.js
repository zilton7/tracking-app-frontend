import { useSelector } from 'react-redux';

const Heading = () => {
  // Load username from state
  const username = useSelector((state) => state.user.username);

  return (
    <div className="heading">
      {username}
      &apos; Tracking App
    </div>
  );
};

export default Heading;
