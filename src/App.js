import { BrowserRouter, Routes, Route,} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header  from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
// import { AddMovieData } from "./firebase";
// import { useEffect } from "react";
function App() {
// useEffect(() => {
//   AddMovieData(); 
// }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Detail/:id" element={ <Detail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
