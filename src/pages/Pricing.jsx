import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsCheckCircleFill } from "react-icons/bs";

const plans = [
  {
    name: "Basic Plan",
    price: "$69",
    features: [
      "5 Documents Will Be Assigned",
      "15 Minutes Wait Time Allowed",
      "Flat $15 Travel Fee",
      "24/7 Support",
    ],
  },
  {
    name: "Advanced Plan",
    price: "$69",
    features: [
      "5 Documents Will Be Assigned",
      "15 Minutes Wait Time Allowed",
      "Flat $15 Travel Fee",
      "24/7 Support",
    ],
  },
  {
    name: "Starter Plan",
    price: "$69",
    features: [
      "5 Documents Will Be Assigned",
      "15 Minutes Wait Time Allowed",
      "Flat $15 Travel Fee",
      "24/7 Support",
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <Navbar />

      {/* === Hero Section === */}
      <section className="bg-darkblue text-white py-24 text-center mt-20 md:mt-28">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Pricing
        </h1>
        <p className="max-w-2xl mx-auto text-gray-200 text-lg">
          Choose the plan that fits your legal or notary needs — simple, affordable, and transparent.
        </p>
      </section>

      {/* === Pricing Plans === */}
      <section className="py-20 bg-white text-center px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Affordable Pricing Plans
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We provide clear and upfront pricing for all our services — no hidden fees.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow hover:shadow-lg transition bg-white p-8 text-left"
            >
              <h3 className="text-xl font-bold text-darkblue mb-4">{plan.name}</h3>
              <p className="text-4xl font-semibold text-primary mb-2">{plan.price}</p>
              <p className="text-gray-500 mb-6">/ document</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-gray-700">
                    <BsCheckCircleFill className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-white w-full py-3 rounded-md font-semibold hover:bg-darkblue transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* === Call to Action === */}
      <section className="bg-[#0b1b3f] text-white py-20 px-6 text-center md:text-left md:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Get Your Document Legally Notarized In Minutes</h3>
            <p className="text-gray-300 mb-6">
              Our team ensures fast and secure notarization services tailored to your document needs.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-darkblue transition">
              Get Notarized
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg text-darkblue shadow-md">
            <h4 className="text-xl font-bold mb-3">Quick Contact</h4>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none resize-none"
              ></textarea>
              <button className="bg-primary w-full text-white py-3 rounded-md font-semibold hover:bg-darkblue transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;
