import Nav from "./components/Nav";
import Measurements from "./components/Measurements";

function App() {
  return (
    <div className="App">
      <div className="heading">Tracking App</div>
      <Measurements />
      <Nav />
    </div>
  );
}

export default App;
