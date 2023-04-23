import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Characters from "./pages/Characters/Characters";
import Planets from "./pages/Planets/Planets";
import Navbar from "./components/Navbar/Navbar";
import PlanetDetail from "./pages/PlanetDetail/PlanetDetail";

function App() {
  return (
    <div>
      {/* <Reducer/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Characters />}></Route>
        <Route path="/planets" element={<Planets />}></Route>
        <Route path="/planet-detail" element={<PlanetDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
