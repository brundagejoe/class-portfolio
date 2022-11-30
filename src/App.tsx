import Reel from "./pages/Reel";
import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="text-gray-700 min-h-screen">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reel" element={<Reel />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
