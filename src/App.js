import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StopWatch from "./components/stopwatch/StopWatch";
import Timer from "./components/timer/Timer";
import Header from "./components/common/header/Header";

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<StopWatch/>} />
          <Route path="/timer" element={<Timer/>} />
        </Routes>
      </div>
    </Router>
  </div>
  );
}

export default App;
