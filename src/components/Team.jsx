// src/components/Team.jsx
import React from "react";
import member1 from "../assets/team/member1.jpeg";
import member2 from "../assets/team/member2.jpeg";
import member3 from "../assets/team/member3.jpeg";

const team = [
  { id: 1, name: "Mitchel Connor", role: "Senior Notary", img: member1 },
  { id: 2, name: "Emily Parsons", role: "Legal Advisor", img: member2 },
  { id: 3, name: "Ellen Stevens", role: "Client Relations", img: member3 },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-graylight animate-fadeIn">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h3 className="text-primary text-lg font-semibold mb-2">Our Team</h3>
        <h2 className="text-4xl font-heading font-bold text-darkblue mb-12">
          Meet With Our Experts
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((m) => (
            <div
              key={m.id}
              className="bg-white rounded-lg shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
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
