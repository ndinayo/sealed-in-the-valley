// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Blog from "./components/Blog";
import QuickContact from "./components/QuickContact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Blog />
       <QuickContact /> 
      <Footer />
    </div>
  );
}

export default App;
