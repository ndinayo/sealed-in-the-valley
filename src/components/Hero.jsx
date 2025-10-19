import React, { useEffect, useState } from "react";
import Preloader from "./Preloader"; // ← Import your preloader
import heroBg from "../assets/hero/hero-bg.jpeg";
import heroBg2 from "../assets/hero/hero-bg2.jpeg";
import heroBg3 from "../assets/hero/hero-bg3.jpeg";

const images = [heroBg, heroBg2, heroBg3];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // ✅ Preload all hero images
    const promises = images.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        })
    );

    Promise.all(promises).then(() => {
      setLoaded(true);
      setTimeout(() => setTextVisible(true), 300); // Delay before text appears
    });
  }, []);

  // ✅ Image slider
  useEffect(() => {
    if (!loaded) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [loaded]);

  if (!loaded) return <Preloader />;

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-start text-white relative overflow-hidden"
    >
      {/* === Local keyframes (for zoom effect) === */}
      <style>
        {`
          @keyframes zoomInHero {
            from { transform: scale(1); }
            to { transform: scale(1.15); }
          }
        `}
      </style>

      {/* === Background Images === */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-top transition-opacity duration-[1500ms] ease-soft ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            animation:
              index === current ? "zoomInHero 10s ease-out forwards" : "none",
          }}
        ></div>
      ))}

      {/* === Dark Overlay === */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* === Hero Text === */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 text-left">
          <div
            className={`max-w-2xl transform transition-all duration-[2000ms] ease-soft ${
              textVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-snug relative">
              Professional and Reliable{" "}
              <span className="relative inline-block">
                <div className="absolute left-0 bottom-1 h-4 w-full bg-primary -z-10"></div>
                Notary
              </span>{" "}
              Service That You Can Trust
            </h1>

            <p className="text-base md:text-lg mb-6 text-gray-200 max-w-md">
              Faithfully serving with every seal  trusted notary services you
              can rely on for documents, property, and business verification.
            </p>

            <button className="bg-primary px-5 py-2.5 rounded-md hover:bg-darkblue transition font-semibold text-sm md:text-base">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
