import React from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Game from "./pages/Game/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/:id" element={<Game />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
