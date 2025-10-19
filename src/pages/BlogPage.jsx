import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import blog1 from "../assets/blog/blog1.jpeg";
import blog2 from "../assets/blog/blog2.jpeg";
import blog3 from "../assets/blog/blog3.jpeg";

const posts = [
  {
    id: 1,
    title: "The Benefits of Mobile Notary Services",
    date: "Sept 10, 2025",
    img: blog1,
    text: "Discover how mobile notary services make it easier than ever to sign and certify important documents from anywhere.",
  },
  {
    id: 2,
    title: "Understanding Real Estate Notarization",
    date: "Sept 14, 2025",
    img: blog2,
    text: "Learn the importance of notarizing real estate transactions and how it ensures secure property transfers.",
  },
  {
    id: 3,
    title: "Notarization Tips for Business Owners",
    date: "Sept 17, 2025",
    img: blog3,
    text: "Essential guidance for business owners to maintain compliance and authenticity in legal documentation.",
  },
  {
    id: 4,
    title: "7 Tips to Increase Revenue for Your Private Law Practice",
    date: "Sept 20, 2025",
    img: blog1,
    text: "Practical insights to grow your legal business while maintaining professionalism and client trust.",
  },
];

const BlogPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = {
    hero: useRef(null),
    content: useRef(null),
  };

  // ✅ Preload images
  useEffect(() => {
    const images = [blog1, blog2, blog3];
    const promises = images.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        })
    );
    Promise.all(promises).then(() => setLoaded(true));
  }, []);

  // ✅ Animate on scroll
  useEffect(() => {
    if (!loaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [loaded]);

  if (!loaded) return <Preloader />;

  return (
    <>
      <Navbar />

      {/* === Hero Section === */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className={`relative h-[60vh] flex items-center justify-center text-center text-white mt-20 md:mt-28 transition-all duration-[2000ms] ease-out ${
          visibleSections.hero
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 20, 50, 0.7), rgba(5, 20, 50, 0.7)), url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Blog
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto">
            Discover notary insights, tips, and legal knowledge that help
            individuals and businesses stay compliant and informed.
          </p>
        </div>
      </section>

      {/* === Blog Layout === */}
      <section
        id="content"
        ref={sectionRefs.content}
        className={`py-20 bg-white transition-all duration-[2000ms] ease-out ${
          visibleSections.content
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[2fr_1fr] gap-10">
          {/* === Blog Posts === */}
          <div className="space-y-10">
            {posts.map((p) => (
              <article
                key={p.id}
                className="bg-graylight rounded-lg shadow hover:shadow-lg transition-all duration-500 overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-72 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-primary mb-2">{p.date}</p>
                  <h3
                    className="text-2xl font-bold text-darkblue mb-3 hover:text-primary cursor-pointer"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{p.text}</p>
                  <a
                    href="#"
                    className="text-primary hover:text-darkblue font-semibold text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}

            <div className="text-center mt-10">
              <button className="bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-darkblue transition">
                Load More
              </button>
            </div>
          </div>

          {/* === Sidebar === */}
          <aside className="space-y-8">
            {/* Recent Posts */}
            <div className="bg-white shadow p-6 rounded-lg">
              <h4 className="font-bold text-darkblue mb-4 text-lg">
                Recent Posts
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                {posts.slice(0, 3).map((p) => (
                  <li key={p.id} className="border-b border-gray-200 pb-2">
                    <a href="#" className="hover:text-primary transition">
                      {p.title}
                    </a>
                    <p className="text-xs text-gray-400">{p.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box */}
            <div className="bg-[#0b1b3f] text-white rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-3">Have Any Question?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get in touch for quick assistance or document notarization
                inquiries.
              </p>
              <p className="text-primary font-semibold">+1 (405) 861-5061</p>
              <p className="text-gray-300 text-sm">
                info@sealedinthevalley.com
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white shadow p-6 rounded-lg">
              <h4 className="font-bold text-darkblue mb-4 text-lg">
                Categories
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="hover:text-primary cursor-pointer">Tips</li>
                <li className="hover:text-primary cursor-pointer">
                  Real Estate
                </li>
                <li className="hover:text-primary cursor-pointer">Notary</li>
                <li className="hover:text-primary cursor-pointer">Insight</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;
