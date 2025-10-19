// src/components/Footer.jsx
import React from "react";
import logo from "../assets/logo/sealed-logo.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkblue text-white py-12 mt-20 animate-fadeIn">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
        {/* Logo + Intro */}
        <div>
          <img src={logo} alt="Sealed in the Valley" className="h-12 mb-4" />
          <p className="text-sm text-gray-300">
            Faithfully serving with every seal — offering trusted notary
            services across the community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-primary">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#team" className="hover:text-white">Team</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
  <h4 className="text-lg font-semibold mb-3 text-primary">Contact</h4>

  <div className="space-y-3 text-sm text-gray-300">
    {/* Address */}
    <div className="flex items-start space-x-2">
      <FaMapMarkerAlt className="text-primary mt-1" />
      <p>45 Main Street, Valley Town</p>
    </div>

    {/* Phone */}
    <div className="flex items-start space-x-2">
      <FaPhoneAlt className="text-primary mt-1" />
      <p>+1 (405) 861-5061</p>
    </div>

    {/* Email */}
    <div className="flex items-start space-x-2">
      <FaEnvelope className="text-primary mt-1" />
      <p>info@sealedinthevalley.com</p>
    </div>
  </div>
</div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-primary">Newsletter</h4>
          <p className="text-sm text-gray-300 mb-3">
            Subscribe to receive legal & notary updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l bg-white text-dark outline-none"
            />
            <button
              type="submit"
              className="bg-primary px-4 py-2 rounded-r hover:bg-white hover:text-dark transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Sealed in the Valley. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
