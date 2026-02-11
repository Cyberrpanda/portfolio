// HeroSection.jsx (rename from Lore.js)
import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function HeroSection() {
  const contentRef = useRef(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/BALOGUN ITHIEL RESUME.pdf";
    link.download = "BALOGUN ITHIEL RESUME.pdf";
    link.click();
  };

  // Intersection Observer for fade‑in animation (optional, but kept)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.2 }
    );

    const content = contentRef.current;
    if (content) observer.observe(content);

    return () => {
      if (content) observer.unobserve(content);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-slate-900 text-white pt-24 pb-16 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          ref={contentRef}
          className="grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out opacity-0 translate-y-8"
        >
          {/* Left Column – Text Content */}
          <div className="space-y-6">
            <h3 className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
              A Little About Me
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              I’m Ithiel Balogun,
              <br />
              <span className="text-blue-500">Front‑end Engineer</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Hey there, fellow tech enthusiast. I’m a front‑end software engineer (for now 😂) 
              with a Major in Computer Science. I’ve built several projects – but those aren’t 
              the full extent of my abilities. I’m always curious, always learning, and currently 
              expanding into backend development. I hope to share my ideas with the world one day.
            </p>

            {/* Download CV Button – modern gradient style */}
            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg hover:shadow-blue-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">
                <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                  👋 Hi
                </span>
                <span className="w-px h-5 bg-white/40"></span>
                <span>Download CV</span>
              </span>
            </button>
          </div>

          {/* Right Column – Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative blobs / gradient background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
              <img
                src="/display.jpeg"
                alt="Ithiel Balogun"
                className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-4 border-slate-800/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}