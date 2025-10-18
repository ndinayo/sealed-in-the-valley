// src/components/About.jsx
import React from "react";
import aboutImg from "../assets/about/about-img.jpeg"; // 🖼️ upload to /src/assets/about/

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-graylight animate-fadeIn"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        {/* About Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Sealed in the Valley"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
            1,021+ Trusted Clients
          </div>
        </div>

        {/* About Content */}
        <div>
          <h3 className="text-primary text-lg font-semibold mb-2">Welcome to Sealed in the Valley</h3>
          <h2 className="text-4xl font-heading font-bold text-darkblue mb-4 leading-snug">
            We Are A Notary Public That Travels To You
          </h2>
          <p className="text-midgray mb-6 leading-relaxed">
            With years of experience and a dedication to professionalism, we provide quick and reliable notarization services wherever you are. 
            Our goal is to make the process simple, secure, and convenient — whether for legal documents, real estate, or personal needs.
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
