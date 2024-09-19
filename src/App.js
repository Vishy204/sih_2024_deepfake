// import DataCard from "./components/DataCard";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/UploadPage"
import Results from "./pages/Result";
import Loader from "./pages/Loader";
import About from "./pages/About"
import Audio from "./pages/Audio"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upload" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/result" element={<Results />} />
        <Route path="/result/audio" element={<Audio />} />
      </Routes>
    </Router>
  );
}

export default App;
