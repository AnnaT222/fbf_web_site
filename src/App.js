import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import BrilleBoard from "./pages/BrilleBoard/BrilleBoard";
import Education from "./pages/Education/Education";
import ContactUs from "./pages/ContactUs/ContactUs";
import MillionaireGame from "./pages/Games/MillionaireGame";
import AuthTabs from "./components/Auth/AuthTabs";
import AuthChoice from "./components/Auth/AuthChoice";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthChoice />} />
          <Route path="/auth/tabs" element={<AuthTabs />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<BrilleBoard />} />
            <Route path="education" element={<Education />} />
            <Route path="games" element={<MillionaireGame />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
