// src/pages/Contact.jsx
import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import officeImg from "../assets/about/about-img.jpeg";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // preload + animate-on-scroll state
  const [loaded, setLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = {
    header: useRef(null),
    form: useRef(null),
  };

  // ✅ Preload image
  useEffect(() => {
    const img = new Image();
    img.src = officeImg;
    img.onload = () => setLoaded(true);
  }, []);

  // ✅ Animate on scroll (2s)
  useEffect(() => {
    if (!loaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs).forEach((ref) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, [loaded]);

  // === EmailJS handler ===
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // ← replace
        "YOUR_TEMPLATE_ID",    // ← replace
        form.current,
        "YOUR_PUBLIC_KEY"      // ← replace
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

  if (!loaded) return <Preloader />;

  return (
    <>
      <Navbar />

      {/* === Header (ensure visible below fixed navbar on ALL screens) === */}
      <section
        id="header"
        ref={sectionRefs.header}
        className={`text-center mb-6 pt-40 sm:pt-40 md:pt-40 lg:pt-44 transition-all duration-[2000ms] ease-out ${
          visibleSections.header ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-darkblue mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Get in Touch
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          We’re happy to answer your questions or schedule a consultation.
        </p>
      </section>

      {/* === Contact Section (trim excess top gap, keep comfy bottom) === */}
      <section
        id="form"
        ref={sectionRefs.form}
        className={`min-h-screen bg-[#f7f7f7] pt-8 md:pt-10 pb-16 px-4 sm:px-6 md:px-20 transition-all duration-[2000ms] ease-out ${
          visibleSections.form ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-6 md:p-8 rounded-xl shadow-lg">
          {/* === Left Column: Info === */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-darkblue">Contact Information</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-primary text-lg" />
              <span className="text-gray-700 text-sm md:text-base">+1 (405) 861-5061</span>
            </div>

            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-primary text-lg" />
              <span className="text-gray-700 text-sm md:text-base">
                support@sealedinthevalley.com
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-primary text-lg" />
              <span className="text-gray-700 text-sm md:text-base">
                5225 N. Central Ave Suite 104, Phoenix, AZ 85012
              </span>
            </div>

            <div className="mt-4 md:mt-6">
              <img
                src={officeImg}
                alt="Office"
                className="rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* === Right Column: Form === */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none text-sm md:text-base"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none text-sm md:text-base"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-primary outline-none text-sm md:text-base"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-primary outline-none resize-none text-sm md:text-base"
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

      <Footer />
    </>
  );
};

export default Contact;
