// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logo/sealed-logo.png"; // ← put your logo in /assets/logo

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md animate-fadeInDown">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Sealed in the Valley" className="h-12 w-auto" />
          <span className="text-xl font-bold text-darkblue">
            Sealed in the Valley
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 text-dark font-medium">
          <li><a href="#home" className="hover:text-primary transition">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition">About</a></li>
          <li><a href="#services" className="hover:text-primary transition">Services</a></li>
          <li><a href="#team" className="hover:text-primary transition">Team</a></li>
          <li><a href="#blog" className="hover:text-primary transition">Blog</a></li>
          <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
        </ul>

        {/* Button */}
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-darkblue transition">
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
