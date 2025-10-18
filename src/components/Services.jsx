// src/components/Services.jsx
import React from "react";
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
  return (
    <section id="services" className="py-20 bg-white animate-fadeIn">
      <div className="max-w-7xl mx-auto text-center mb-12 px-6">
        <h3 className="text-primary text-lg font-semibold mb-2">Practice Areas</h3>
        <h2 className="text-4xl font-heading font-bold text-darkblue mb-6">
          We Serve the Best Service
        </h2>
        <p className="text-midgray max-w-2xl mx-auto">
          From business documents to real estate and family papers, our notary services are available wherever you need them — ensuring accuracy and authenticity with every signature.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="bg-graylight rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
          >
            <img
              src={s.img}
              alt={s.title}
              className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-darkblue mb-2">{s.title}</h3>
              <p className="text-midgray text-sm">
                Expert notarization for all { s.title.toLowerCase() } needs — quick, secure, and certified.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
