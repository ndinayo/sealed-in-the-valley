// src/components/Hero.jsx
import React from "react";
import heroBg from "../assets/hero/hero-bg.jpeg"; // ← put hero image in /assets/hero

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center text-white relative animate-fadeIn"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
          Professional and Reliable Notary Service
        </h1>
        <p className="text-lg mb-6">
          Faithfully serving with every seal — trusted notary services you can rely on.
        </p>
        <button className="bg-primary px-6 py-3 rounded-md hover:bg-darkblue transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
