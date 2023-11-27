import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Portfolio } from "./pages/Portfolio.js";
import { Experience } from "./pages/Experience.js";
import React from "react";
import { Ventures } from "./pages/Ventures.js";
import { MenuButton } from "./components/MenuButton.js";
import { Top } from "./components/Top.js";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="absolute top-3 right-3 lg:hidden z-10 bg-pink-400 rounded-full">
          <MenuButton />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="ventures" element={<Ventures />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
