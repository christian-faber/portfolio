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
      <div className="w-full h-screen bg-gradient-to-r from-olive-300 to-olive-400">
        <div className="absolute top-3 right-3 lg:hidden z-10 bg-olive-300 rounded-full">
          <MenuButton />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="ventures" element={<Ventures />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;