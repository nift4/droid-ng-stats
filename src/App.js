import "./App.css";
import Stats from "./Stats";
import Device from "./Device";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./Country";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Stats />} />
          <Route path="/:device" element={<Device />} />
          <Route path="/en/:country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
