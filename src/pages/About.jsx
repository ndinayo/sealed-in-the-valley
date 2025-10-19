import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsCheckCircleFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaUsers, FaTrophy, FaFileSignature, FaSmile } from "react-icons/fa";
import heroBg from "../assets/about/hero-bg.jpeg"; // ✅ Replace with your hero image
import aboutImg1 from "../assets/about/about1.jpeg"; // ✅ Replace with your local images
import aboutImg2 from "../assets/about/about2.jpeg"; // ✅ Replace with your local images
import team1 from "../assets/team/member1.jpeg";
import team2 from "../assets/team/member2.jpeg";
import team3 from "../assets/team/member3.jpeg";

const About = () => {
  return (
    <>
      <Navbar />

      {/* === Hero Section === */}
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
            About Us
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto">
            Learn more about our notary services and how we bring trust,
            convenience, and professionalism to every document we handle.
          </p>
        </div>
      </section>

      {/* === About Content === */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h5 className="text-primary font-semibold uppercase">
              Welcome To Sealed in the Valley
            </h5>
            <h2
              className="text-3xl md:text-4xl font-bold text-darkblue leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We Are A Notary Public That Travels To You
            </h2>
            <p className="text-gray-600">
              Our team provides reliable, efficient, and affordable notary
              services. Whether it’s a business contract, property document, or
              personal paperwork, we ensure every notarization meets legal and
              ethical standards.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <BsCheckCircleFill className="text-primary" />
                <span>Mobile and in-office notarization</span>
              </li>
              <li className="flex items-center space-x-2">
                <BsCheckCircleFill className="text-primary" />
                <span>Licensed and certified notary agents</span>
              </li>
              <li className="flex items-center space-x-2">
                <BsCheckCircleFill className="text-primary" />
                <span>Fast, secure, and affordable process</span>
              </li>
            </ul>

            <div className="flex items-center space-x-4 mt-6">
              <BsFillTelephoneFill className="text-primary text-2xl" />
              <div>
                <p className="text-sm text-gray-500">Call for Consultation</p>
                <h4 className="font-bold text-darkblue text-lg">
                  +1 (405) 861-5061
                </h4>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={aboutImg1}
              alt="Notary at work"
              className="rounded-lg shadow-lg"
            />
            <img
              src={aboutImg2}
              alt="Office team"
              className="rounded-lg shadow-lg mt-6"
            />
          </div>
        </div>
      </section>

      {/* === Why Choose Us === */}
      <section className="bg-[#0b1b3f] text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h5 className="text-primary uppercase font-semibold mb-2">
              Why Choose Us
            </h5>
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We Are Committed To Take Care Of Clients Seriously
            </h3>
            <p className="text-gray-300 mb-6">
              With years of professional experience, our team ensures every
              document is notarized properly, securely, and on time. We
              prioritize client satisfaction and maintain the highest
              confidentiality.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition">
              Get Consultation
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <FaUsers className="mx-auto text-primary text-3xl mb-2" />
              <p className="text-2xl font-bold">65+</p>
              <p className="text-gray-300">Professional Team</p>
            </div>
            <div>
              <FaTrophy className="mx-auto text-primary text-3xl mb-2" />
              <p className="text-2xl font-bold">85+</p>
              <p className="text-gray-300">Honors & Awards</p>
            </div>
            <div>
              <FaFileSignature className="mx-auto text-primary text-3xl mb-2" />
              <p className="text-2xl font-bold">4,258+</p>
              <p className="text-gray-300">Documents Notarized</p>
            </div>
            <div>
              <FaSmile className="mx-auto text-primary text-3xl mb-2" />
              <p className="text-2xl font-bold">2,250+</p>
              <p className="text-gray-300">Trusted Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* === Meet Our Experts === */}
      <section className="py-20 px-6 md:px-20 bg-[#f7f7f7] text-center">
        <h5 className="text-primary uppercase font-semibold">Our Team</h5>
        <h2
          className="text-3xl md:text-4xl font-bold text-darkblue mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Meet With Our Expert
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[team1, team2, team3].map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img src={img} alt="Team Member" className="w-full h-72 object-cover" />
              <div className="p-5">
                <h4 className="font-bold text-darkblue text-lg">
                  {i === 0
                    ? "Mitchel Conner"
                    : i === 1
                    ? "Emily Parsons"
                    : "Ellen Stevers"}
                </h4>
                <p className="text-gray-500 text-sm">
                  {i === 0
                    ? "Founder Notary"
                    : i === 1
                    ? "Document Identification"
                    : "Signing Agent"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
