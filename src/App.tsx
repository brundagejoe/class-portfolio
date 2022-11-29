import About from "./pages/About";
import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-gray-700 min-h-screen">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
