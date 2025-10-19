import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Contact from "./pages/Contact.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import BlogPage from "./pages/BlogPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} /> {/* ✅ New Page */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> {/* ← New */}
        <Route path="/blog" element={<BlogPage />} /> {/* ✅ add route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
