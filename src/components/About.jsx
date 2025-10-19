import React, { useState, useEffect, useRef } from "react";
import Preloader from "./Preloader"; // ✅ Use existing preloader
import aboutImg from "../assets/about/about-img.jpeg"; // 🖼️ upload to /src/assets/about/

const About = () => {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Preload image
  useEffect(() => {
    const img = new Image();
    img.src = aboutImg;
    img.onload = () => setLoaded(true);
  }, []);

  // ✅ Trigger smooth scroll animation
  useEffect(() => {
    if (!loaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // only once
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loaded]);

  if (!loaded) return <Preloader />;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-graylight animate-fadeIn"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        {/* === About Image === */}
        <div
          className={`relative transform transition-all duration-[2000ms] ease-soft ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <img
            src={aboutImg}
            alt="About Sealed in the Valley"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
            1,021+ Trusted Clients
          </div>
        </div>

        {/* === About Content === */}
        <div
          className={`transform transition-all duration-[2000ms] ease-soft delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <h3 className="text-primary text-lg font-semibold mb-2">
            Welcome to Sealed in the Valley
          </h3>
          <h2 className="text-4xl font-heading font-bold text-darkblue mb-4 leading-snug">
            We Are A Notary Public That Travels To You
          </h2>
          <p className="text-midgray mb-6 leading-relaxed">
            With years of experience and a dedication to professionalism, we
            provide quick and reliable notarization services wherever you are.
            Our goal is to make the process simple, secure, and convenient —
            whether for legal documents, real estate, or personal needs.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-darkblue transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
