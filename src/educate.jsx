// Educate.jsx
import React, { useEffect, useRef } from "react";

export default function Educate() {
  const cardsRef = useRef([]);

  // Intersection Observer for slide‑in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "-translate-x-8");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="educate" className="bg-slate-900 text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Education Section */}
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500">
          EDU<span className="text-white">CATION</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Card 1 – NIIT */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 -translate-x-8"
          >
            <div className="flex justify-between items-start mb-4">
              <h5 className="text-xl font-bold text-blue-400">NIIT LIMITED</h5>
              <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                2023
              </span>
            </div>
            <p className="text-slate-300 text-sm uppercase tracking-wide mb-4">
              Student Intern
            </p>
            <p className="text-slate-400 leading-relaxed">
              I began my Web Development journey here, studying to earn a
              certification in Web Design and Development.
            </p>
          </div>

          {/* Card 2 – Babcock University */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 -translate-x-8 delay-200"
          >
            <div className="flex justify-between items-start mb-4">
              <h5 className="text-xl font-bold text-blue-400">
                BSC. COMPUTER SCIENCE
              </h5>
              <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                2021 - 2024
              </span>
            </div>
            <p className="text-slate-300 text-sm uppercase tracking-wide mb-4">
              Babcock University
            </p>
            <p className="text-slate-400 leading-relaxed">
              Achieved a childhood dream of studying and graduating with a degree
              in Computer Science. Fascinated by technology since primary school.
              Published a paper in the IJSRED Journal and worked on several fun
              projects.
            </p>
          </div>
        </div>

        {/* Publications Section */}
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500">
          PUBLI<span className="text-white">CATIONS</span>
        </h3>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/30">
            <div className="aspect-video">
              <iframe src="/certificate.pdf" className="w-full h-full" />
            </div>
          </div>
          <p className="text-center text-slate-400 mt-6 text-sm md:text-base">
            Certificate of Publication – Issued by International Journal of
            Scientific Research and Engineering Development (IJSRED)
          </p>
        </div>
      </div>
    </section>
  );
}