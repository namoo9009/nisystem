import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/common.css";
import "./styles/reset.css";
import AboutCompany from "./pages/About/Company/Company";
import AboutMessage from "./pages/About/Message/Message";
import AboutHistory from "./pages/About/History/History";
import AboutClient from "./pages/About/Client/Client";
import AboutVendor from "./pages/About/Vendor/Vendor";
import AboutLocation from "./pages/About/Location/Location";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutCompany />}>
        <Route path="company" element={<AboutCompany />} />
        <Route path="message" element={<AboutMessage />} />
        <Route path="history" element={<AboutHistory />} />
        <Route path="client" element={<AboutClient />} />
        <Route path="vendor" element={<AboutVendor />} />
        <Route path="location" element={<AboutLocation />} />
      </Route>
    </Routes>
  );
}

export default App;
