// src/components/Testimonials.jsx
import React from "react";
import client1 from "../assets/testimonials/client1.jpeg";
import client2 from "../assets/testimonials/client2.jpeg";
import client3 from "../assets/testimonials/client3.png";

const testimonials = [
  {
    id: 1,
    name: "Frank Swanson",
    role: "Business Owner",
    img: client1,
    text:
      "Professional, quick, and convenient. Sealed in the Valley handled my business paperwork perfectly!",
  },
  {
    id: 2,
    name: "Patricia Ward",
    role: "Real Estate Agent",
    img: client2,
    text:
      "Their mobile notary service saved me time and effort. Highly recommended!",
  },
  {
    id: 3,
    name: "Lilian Mathews",
    role: "Private Client",
    img: client3,
    text:
      "Friendly, responsive, and trustworthy — exactly what I needed for my legal forms.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-darkblue text-white relative animate-fadeIn"
    >
      <div className="max-w-7xl mx-auto text-center px-6">
        <h3 className="text-primary text-lg font-semibold mb-2">
          Client Feedback
        </h3>
        <h2 className="text-4xl font-heading font-bold mb-10">
          We Always Take Care Of Clients Seriously
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/10 rounded-lg p-6 backdrop-blur-md shadow-md hover:translate-y-[-5px] transition-all duration-500"
            >
              <p className="text-sm mb-4 italic">“{t.text}”</p>
              <div className="flex items-center justify-center mt-6 space-x-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-12 w-12 rounded-full border-2 border-primary object-cover"
                />
                <div className="text-left">
                  <h4 className="font-bold">{t.name}</h4>
                  <span className="text-sm text-gray-300">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
