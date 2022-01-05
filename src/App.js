import { BrowserRouter, Routes, Route,} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header  from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
