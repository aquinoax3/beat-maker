import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage";
import NavBar from "./Navbar";
import Authorize from "./Authorize"

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>
    <div>
      <NavBar />
      <Homepage />
      <Authorize />
    </div>
  );
}

export default App;
