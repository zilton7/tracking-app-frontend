const Nav = () => (
  <nav>
    <div className="bottom-buttons">
      <div className="button-wrapper">
        <i className="far fa-plus-square"></i>
        <p>Add measure</p>
      </div>
      <div className="button-wrapper">
        <i className="fas fa-chart-line"></i>
        <p>Tracker</p>
      </div>
      <div className="button-wrapper">
        <i className="fas fa-chart-pie"></i>
        <p>Progress</p>
      </div>
      <div className="button-wrapper">
        <i className="fas fa-ellipsis-h"></i>
        <p>More</p>
      </div>
    </div>
  </nav>
);

export default Nav;
