// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/sealed-logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow animate-fadeInDown">
      {/* === Top Bar === */}
      <div className="bg-gray-50 border-b border-gray-200 py-2 px-6 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-2 text-gray-600">
          <FiClock className="text-primary" />
          <span>Open Hours : Mon–Fri 09:00 - 16:00</span>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-gray-600">
          <a href="#" className="hover:text-primary transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-primary transition"><FaTwitter /></a>
          <a href="#" className="hover:text-primary transition"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-primary transition"><FaInstagram /></a>
        </div>
      </div>

      {/* === Main Nav === */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Sealed in the Valley" className="h-14 w-auto" />
          <span
            className="hidden md:inline text-xl font-bold text-darkblue uppercase tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sealed in the Valley
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-darkblue font-semibold text-sm tracking-wider uppercase">
          <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
          <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
          <li><a href="#services" className="hover:text-primary transition flex items-center space-x-1">Services <span>▼</span></a></li>
          <li><a href="#pages" className="hover:text-primary transition flex items-center space-x-1">Pages <span>▼</span></a></li>
          <li><a href="#blog" className="hover:text-primary transition flex items-center space-x-1">Blog <span>▼</span></a></li>
        </ul>

        {/* Contact Button (Always visible on mobile + desktop) */}
        <Link
          to="/contact"
          className="bg-primary text-white px-5 py-3 rounded-md font-semibold hover:bg-darkblue transition duration-300 flex items-center"
        >
          <BsChatDots className="mr-2 text-lg" />
          Contact
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-darkblue text-3xl ml-3 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* === Mobile Menu Drawer === */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 animate-fadeInDown">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-darkblue font-semibold uppercase">
            <li><Link to="/" onClick={() => setMobileOpen(false)} className="hover:text-primary transition">Home</Link></li>
            <li><a href="#about" className="hover:text-primary transition" onClick={() => setMobileOpen(false)}>About Us</a></li>
            <li><a href="#services" className="hover:text-primary transition" onClick={() => setMobileOpen(false)}>Services</a></li>
            <li><a href="#pages" className="hover:text-primary transition" onClick={() => setMobileOpen(false)}>Pages</a></li>
            <li><a href="#blog" className="hover:text-primary transition" onClick={() => setMobileOpen(false)}>Blog</a></li>

            {/* Contact Button in Mobile Drawer */}
            <li>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-white w-full block text-center py-3 rounded-md hover:bg-darkblue transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
