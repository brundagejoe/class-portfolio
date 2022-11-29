import About from "./pages/About";
import Home from "./pages/Home";

import React from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
