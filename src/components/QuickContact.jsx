import React from "react";

const QuickContact = () => {
  return (
    <section className="bg-[#0b1b3f] text-white py-20 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* === Left Side Text === */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2
            className="text-3xl md:text-4xl font-bold leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get Your Document Legally <br /> Notarized In Minutes
          </h2>
          <p className="text-gray-300 max-w-md mx-auto md:mx-0">
            Our team ensures fast and secure notarization services tailored
            to your document needs.
          </p>
          <button className="bg-[#e4a11b] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#d89514] transition">
            Get Notarized
          </button>
        </div>

        {/* === Right Side Form === */}
        <div className="flex-1 bg-white text-darkblue rounded-lg shadow-lg p-8 w-full md:max-w-md">
          <h3 className="text-lg font-bold mb-6">Quick Contact</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#e4a11b] text-white font-semibold w-full py-3 rounded-md hover:bg-[#d89514] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
