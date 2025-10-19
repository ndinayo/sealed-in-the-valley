import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar"; // ✅ Shared navbar with links working
import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // === EmailJS function ===
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",    // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"      // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("Email send failed:", error);
          setLoading(false);
        }
      );
  };

  return (
    <>
      {/* === Shared Navbar === */}
      <Navbar />

      {/* === Contact Section === */}
      <section
        id="contact"
        className="min-h-screen bg-[#f7f7f7] py-20 px-6 md:px-20 animate-fadeIn"
      >
        {/* Page Title */}
        <div className="text-center mb-10 mt-24 md:mt-32">
          <h2
            className="text-4xl font-bold text-darkblue mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            We’re happy to answer your questions or schedule a consultation.
          </p>
        </div>

        {/* Info + Form Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow-lg">
          {/* === Left Column: Info === */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-darkblue">
              Contact Information
            </h3>
            <p className="text-gray-600">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-primary text-lg" />
              <span className="text-gray-700">+1 (405) 861-5061</span>
            </div>

            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-primary text-lg" />
              <span className="text-gray-700">support@sealedinthevalley.com</span>
            </div>

            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-primary text-lg" />
              <span className="text-gray-700">
                5225 N. Central Ave Suite 104, Phoenix, AZ 85012
              </span>
            </div>

            {/* Image */}
            <div className="mt-6">
              <img
                src="/src/assets/about/about-img.jpeg"
                alt="Office"
                className="rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* === Right Column: Form === */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-primary outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-primary outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-darkblue text-white w-full py-3 rounded-lg font-semibold transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-green-600 text-center text-sm mt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </section>

      {/* === Shared Footer === */}
      <Footer />
    </>
  );
};

export default Contact;
