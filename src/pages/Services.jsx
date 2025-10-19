import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsCheckCircleFill } from "react-icons/bs";
import mobileNotary from "../assets/services/mobile-notary.jpg";
import businessDoc from "../assets/services/business-doc.jpg";
import realEstate from "../assets/services/real-estate.jpg";
import familyDoc from "../assets/services/family-doc.jpg";
import vehicleDoc from "../assets/services/vehicle-doc.jpg";
import medicalDoc from "../assets/services/medical-doc.jpg";
import heroBg from "../assets/services/hero-bg.jpg"; // ✅ Add your background image

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
    <>
      <Navbar />

      {/* === Hero Section with Dark Overlay like About === */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white mt-20 md:mt-28"
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
      <section id="services" className="py-20 bg-white">
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
      <section className="py-16 px-6 md:px-20 bg-darkblue text-white flex flex-col md:flex-row justify-between items-center gap-10">
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
