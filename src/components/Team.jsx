import React, { useState, useEffect, useRef } from "react";
import Preloader from "./Preloader"; // ✅ Reuse the same preloader
import member1 from "../assets/team/member1.jpeg";
import member2 from "../assets/team/member2.jpeg";
import member3 from "../assets/team/member3.jpeg";

const team = [
  { id: 1, name: "Mitchel Connor", role: "Senior Notary", img: member1 },
  { id: 2, name: "Emily Parsons", role: "Legal Advisor", img: member2 },
  { id: 3, name: "Ellen Stevens", role: "Client Relations", img: member3 },
];

const Team = () => {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Preload team images
  useEffect(() => {
    const promises = team.map(
      (m) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = m.img;
          img.onload = resolve;
        })
    );
    Promise.all(promises).then(() => setLoaded(true));
  }, []);

  // ✅ Observe scroll position
  useEffect(() => {
    if (!loaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // only once
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
      id="team"
      ref={sectionRef}
      className={`py-20 bg-graylight transition-all duration-[2000ms] ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center px-6">
        <h3 className="text-primary text-lg font-semibold mb-2">Our Team</h3>
        <h2 className="text-4xl font-heading font-bold text-darkblue mb-12">
          Meet With Our Experts
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((m, index) => (
            <div
              key={m.id}
              className={`bg-white rounded-lg shadow hover:shadow-xl transition-all duration-[2000ms] ease-out transform hover:-translate-y-2 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h4 className="font-heading text-xl font-semibold text-darkblue">
                  {m.name}
                </h4>
                <p className="text-midgray">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
