import React, { useState, useEffect, useRef } from "react";
import Preloader from "./Preloader"; // ✅ Reuse same loader
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
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Preload testimonial images
  useEffect(() => {
    const promises = testimonials.map(
      (t) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = t.img;
          img.onload = resolve;
        })
    );
    Promise.all(promises).then(() => setLoaded(true));
  }, []);

  // ✅ Observe scroll position for animation
  useEffect(() => {
    if (!loaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loaded]);

  if (!loaded) return <Preloader />;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`py-20 bg-darkblue text-white relative transition-all duration-[2000ms] ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center px-6">
        <h3 className="text-primary text-lg font-semibold mb-2">
          Client Feedback
        </h3>
        <h2 className="text-4xl font-heading font-bold mb-10">
          We Always Take Care Of Clients Seriously
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`bg-white/10 rounded-lg p-6 backdrop-blur-md shadow-md transition-all duration-[2000ms] ease-out transform hover:-translate-y-1 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
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
