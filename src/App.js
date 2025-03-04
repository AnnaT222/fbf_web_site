import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import BrilleBoard from "./pages/BrilleBoard/BrilleBoard";
import MultiCub from "./pages/MultiCub/MultiCub";
import Education from "./pages/Education/Eduaction";
import Games from "./pages/Games/Games";
import Community from "./pages/Community/Community";
import Podcast from "./pages/Podcast/Podcast";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BrilleBoard />} />
            <Route path="/multicub" element={<MultiCub />} />
            <Route path="/education" element={<Education />} />
            <Route path="/games" element={<Games />} />
            <Route path="/community" element={<Community />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
