// src/components/Blog.jsx
import React from "react";
import blog1 from "../assets/blog/blog1.jpeg";
import blog2 from "../assets/blog/blog2.jpeg";
import blog3 from "../assets/blog/blog3.jpeg";

const posts = [
  {
    id: 1,
    title: "The Benefits of Mobile Notary Services",
    date: "Sept 10, 2025",
    img: blog1,
    text:
      "Discover how mobile notary services make it easier than ever to sign and certify important documents from anywhere.",
  },
  {
    id: 2,
    title: "Understanding Real Estate Notarization",
    date: "Sept 14, 2025",
    img: blog2,
    text:
      "Learn the importance of notarizing real estate transactions and how it ensures secure property transfers.",
  },
  {
    id: 3,
    title: "Notarization Tips for Business Owners",
    date: "Sept 17, 2025",
    img: blog3,
    text:
      "Essential guidance for business owners to maintain compliance and authenticity in legal documentation.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white animate-fadeIn">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h3 className="text-primary text-lg font-semibold mb-2">Our Blog</h3>
        <h2 className="text-4xl font-heading font-bold text-darkblue mb-10">
          Latest Blog & Articles
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <div
              key={p.id}
              className="bg-graylight rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-sm text-primary mb-2">{p.date}</p>
                <h4 className="font-semibold text-lg mb-2 text-darkblue">
                  {p.title}
                </h4>
                <p className="text-midgray text-sm mb-4">{p.text}</p>
                <a
                  href="#"
                  className="text-primary hover:text-darkblue text-sm font-semibold"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
