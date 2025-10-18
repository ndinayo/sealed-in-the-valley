// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-white text-dark overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
