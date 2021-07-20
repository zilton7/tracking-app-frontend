const AddMeasure = () => {
  return (
    <div className="add-measure">
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <input placeholder="55.5" />
    </div>
  );
};

export default AddMeasure;
