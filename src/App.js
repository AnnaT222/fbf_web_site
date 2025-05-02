import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import BrilleBoard from "./pages/BrilleBoard/BrilleBoard";
import MultiCub from "./pages/MultiCub/MultiCub";
import Education from "./pages/Education/Education";
import Community from "./pages/Community/Community";
import Podcast from "./pages/Podcast/Podcast";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard"; // Import dashboard page
import MillionaireGame from "./pages/Games/MillionaireGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<BrilleBoard />} />
            <Route path="/education" element={<Education />} />
            <Route path="/games" element={<MillionaireGame />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
