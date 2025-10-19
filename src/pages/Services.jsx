import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import { BsCheckCircleFill } from "react-icons/bs";
import mobileNotary from "../assets/services/mobile-notary.jpg";
import businessDoc from "../assets/services/business-doc.jpg";
import realEstate from "../assets/services/real-estate.jpg";
import familyDoc from "../assets/services/family-doc.jpg";
import vehicleDoc from "../assets/services/vehicle-doc.jpg";
import medicalDoc from "../assets/services/medical-doc.jpg";
import heroBg from "../assets/services/hero-bg.jpg";

const services = [
  { id: 1, title: "Mobile Notary", img: mobileNotary },
  { id: 2, title: "Business Documents", img: businessDoc },
  { id: 3, title: "Real Estate Forms", img: realEstate },
  { id: 4, title: "Family Documents", img: familyDoc },
  { id: 5, title: "Vehicle Documents", img: vehicleDoc },
  { id: 6, title: "Medical Documents", img: medicalDoc },
];

const Services = () => {
  const [loaded, setLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = {
    hero: useRef(null),
    grid: useRef(null),
    contact: useRef(null),
  };

  // ✅ Preload all service & hero images
  useEffect(() => {
    const images = [heroBg, ...services.map((s) => s.img)];
    const promises = images.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        })
    );
    Promise.all(promises).then(() => setLoaded(true));
  }, []);

  // ✅ Scroll-in animations
  useEffect(() => {
    if (!loaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [loaded]);

  if (!loaded) return <Preloader />;

  return (
    <>
      <Navbar />

      {/* === Hero Section === */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className={`relative h-[60vh] flex items-center justify-center text-center text-white mt-20 md:mt-28 transition-all duration-[2000ms] ease-out ${
          visibleSections.hero
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(5, 20, 50, 0.7), rgba(5, 20, 50, 0.7)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto">
            We serve the best service for your document needs with
            professionalism and care.
          </p>
        </div>
      </section>

      {/* === Services Grid Section === */}
      <section
        id="grid"
        ref={sectionRefs.grid}
        className={`py-20 bg-white transition-all duration-[2000ms] ease-out ${
          visibleSections.grid
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center mb-12 px-6">
          <h3 className="text-primary text-lg font-semibold mb-2">
            Practice Areas
          </h3>
          <h2
            className="text-4xl font-heading font-bold text-darkblue mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We Serve the Best Service
          </h2>
          <p className="text-midgray max-w-2xl mx-auto">
            From business documents to real estate and family papers, our
            notary services are available wherever you need them — ensuring
            accuracy and authenticity with every signature.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-graylight rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-darkblue mb-2">
                  {s.title}
                </h3>
                <p className="text-midgray text-sm">
                  Expert notarization for all {s.title.toLowerCase()} needs —
                  quick, secure, and certified.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === Contact Section === */}
      <section
        id="contact"
        ref={sectionRefs.contact}
        className={`py-16 px-6 md:px-20 bg-darkblue text-white flex flex-col md:flex-row justify-between items-center gap-10 transition-all duration-[2000ms] ease-out ${
          visibleSections.contact
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex-1 space-y-6">
          <h3 className="text-lg text-primary uppercase tracking-wide">
            Online Notarization
          </h3>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get Your Document Legally Notarized In Minutes
          </h2>
          <p className="text-gray-300 max-w-md">
            We offer certified, online, and in-person notarization services for
            all types of legal and business documents. Get started in just a few
            clicks.
          </p>

          <ul className="grid grid-cols-2 gap-3 text-gray-300">
            {[
              "Notarization Packages",
              "Mobile Service",
              "Certifications",
              "E-Documents",
            ].map((text, i) => (
              <li key={i} className="flex items-center space-x-2">
                <BsCheckCircleFill className="text-primary" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white rounded-lg p-8 shadow-md text-darkblue w-full md:max-w-lg">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary outline-none"
            />
            <select className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary outline-none">
              <option>Select Service</option>
              <option>Business Document</option>
              <option>Property Form</option>
              <option>Medical Form</option>
            </select>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white w-full py-3 rounded-lg font-semibold hover:bg-darkblue transition"
            >
              Get Notarized
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
