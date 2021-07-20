const ProgressItem = ({ date, data }) => {
  return (
    <div className="progress-item">
      <p className="date">{formatDate(date)}</p>
      <p className="data">{data} cm</p>
    </div>
  );
};

const formatDate = (string) => {
  var options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
};

export default ProgressItem;
