import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // 👈 changed from Link to NavLink
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

      {/* === Main Navigation === */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo + Name */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Sealed in the Valley" className="h-14 w-auto" />
          <span
            className="hidden md:inline text-xl font-bold text-darkblue uppercase tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sealed in the Valley
          </span>
        </NavLink>

        {/* === Desktop Menu === */}
        <ul className="hidden md:flex space-x-8 text-darkblue font-semibold text-sm tracking-wider uppercase">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#d89b1f]" : "hover:text-primary transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#d89b1f]" : "hover:text-primary transition"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-[#d89b1f]" : "hover:text-primary transition"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? "text-[#d89b1f]" : "hover:text-primary transition"
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-[#d89b1f]" : "hover:text-primary transition"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>

        {/* === Contact Button (always visible) === */}
        <NavLink
          to="/contact"
          className="bg-primary text-white px-5 py-3 rounded-md font-semibold hover:bg-darkblue transition duration-300 flex items-center"
        >
          <BsChatDots className="mr-2 text-lg" />
          Contact
        </NavLink>

        {/* === Mobile Menu Toggle === */}
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
            <li>
              <NavLink
                to="/"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#d89b1f]" : "hover:text-primary transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#d89b1f]" : "hover:text-primary transition"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#d89b1f]" : "hover:text-primary transition"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#d89b1f]" : "hover:text-primary transition"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#d89b1f]" : "hover:text-primary transition"
                }
              >
                Blog
              </NavLink>
            </li>

            {/* === Contact Button in Mobile Drawer === */}
            <li>
              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-white w-full block text-center py-3 rounded-md hover:bg-darkblue transition"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
