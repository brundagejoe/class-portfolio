import Reel from "./pages/Reel";
import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Scriptures from "./pages/Scriptures";
import Chapters from "./pages/Chapters";
import ScriptureChapter from "./pages/ScriptureChapter";

function App() {
  return (
    <div className="text-gray-700 dark:text-white dark:bg-gray-900 min-h-screen">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reel" element={<Reel />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scriptures" element={<Scriptures />} />
          <Route path="/scriptures/:bookName" element={<Chapters />} />
          <Route
            path="/scriptures/:bookName/:chapter"
            element={<ScriptureChapter />}
          />
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
