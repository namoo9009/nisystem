import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/common.css";
import "./styles/reset.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
