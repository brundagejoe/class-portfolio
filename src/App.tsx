import Reel from "./pages/Reel";
import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import GithubLogo from "./images/github_logo.png";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="text-gray-700 min-h-screen">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reel" element={<Reel />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <a
          href="https://github.com/brundagejoe"
          className="fixed bottom-10 right-20 flex"
        >
          <img className="max-w-[3rem]" src={GithubLogo} alt="joe-profile" />
        </a> */}
      </HashRouter>
    </div>
  );
}

export default App;
