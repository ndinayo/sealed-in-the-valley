import React, { useState, useEffect, useRef } from "react";
import Preloader from "./Preloader"; // ✅ Reuse same loader
import mobileNotary from "../assets/services/mobile-notary.jpg";
import businessDoc from "../assets/services/business-doc.jpg";
import realEstate from "../assets/services/real-estate.jpg";
import familyDoc from "../assets/services/family-doc.jpg";
import vehicleDoc from "../assets/services/vehicle-doc.jpg";
import medicalDoc from "../assets/services/medical-doc.jpg";

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
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Preload all images first
  useEffect(() => {
    const promises = services.map(
      (s) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = s.img;
          img.onload = resolve;
        })
    );

    Promise.all(promises).then(() => {
      setLoaded(true);
    });
  }, []);

  // ✅ Observe scroll position
  useEffect(() => {
    if (!loaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // trigger once
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loaded]);

  if (!loaded) return <Preloader />;

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-20 bg-white transition-all duration-[2000ms] ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center mb-12 px-6">
        <h3 className="text-primary text-lg font-semibold mb-2">Practice Areas</h3>
        <h2 className="text-4xl font-heading font-bold text-darkblue mb-6">
          We Serve the Best Service
        </h2>
        <p className="text-midgray max-w-2xl mx-auto">
          From business documents to real estate and family papers, our notary
          services are available wherever you need them — ensuring accuracy and
          authenticity with every signature.
        </p>
      </div>

      {/* === Grid === */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {services.map((s, index) => (
          <div
            key={s.id}
            className={`bg-graylight rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-[2000ms] ease-out overflow-hidden group transform ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <img
              src={s.img}
              alt={s.title}
              className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-darkblue mb-2">
                {s.title}
              </h3>
              <p className="text-midgray text-sm">
                Expert notarization for all {s.title.toLowerCase()} needs — quick,
                secure, and certified.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
