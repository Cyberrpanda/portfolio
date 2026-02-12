import React, { useEffect, useRef } from "react";
import { ExternalLink, FileText, Users } from "lucide-react"; // Install lucide-react or use SVGs

export default function Educate() {
  const cardsRef = useRef([]);

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
      { threshold: 0.1 }
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
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500 uppercase tracking-tight">
          EDU<span className="text-white">CATION</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {/* Card 1 – NIIT */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 opacity-0 -translate-x-8"
          >
            <div className="flex justify-between items-start mb-4">
              <h5 className="text-xl font-bold text-blue-400 uppercase">NIIT LIMITED</h5>
              <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">2023</span>
            </div>
            <p className="text-slate-300 text-sm uppercase tracking-wide mb-4">Student Intern</p>
            <p className="text-slate-400 leading-relaxed">
              I began my Web Development journey here, studying to earn a certification in Web Design and Development.
            </p>
          </div>

          {/* Card 2 – Babcock University */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 opacity-0 -translate-x-8 delay-200"
          >
            <div className="flex justify-between items-start mb-4">
              <h5 className="text-xl font-bold text-blue-400 uppercase">BSc. Computer Science</h5>
              <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">2021 - 2024</span>
            </div>
            <p className="text-slate-300 text-sm uppercase tracking-wide mb-4">Babcock University</p>
            <p className="text-slate-400 leading-relaxed">
              Graduated with a degree in Computer Science. Fascinated by technology since primary school, I used this time to sharpen my frontend skills and collaborate on research.
            </p>
          </div>
        </div>

        {/* Publications Section */}
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500 uppercase tracking-tight">
          PUBLI<span className="text-white">CATIONS</span>
        </h3>

        <div 
          ref={(el) => (cardsRef.current[2] = el)}
          className="max-w-5xl mx-auto opacity-0 -translate-x-8 transition-all duration-1000 delay-300"
        >
          <div className="group relative bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-3xl overflow-hidden shadow-2xl hover:border-blue-500/50 transition-colors">
            <div className="flex flex-col md:flex-row">
              
              {/* Left Side: Visual "Glory" */}
              <div className="md:w-1/2 relative overflow-hidden bg-slate-950 flex items-center justify-center p-4">
                <img 
                  src="/certificate.jpeg"  // Recommend using a JPG screenshot of the certificate here
                  alt="IJSRED Publication Certificate" 
                  className="rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500 border border-slate-800"
                />
                <div className="absolute top-6 left-6">
                   <span className="flex items-center gap-2 bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md">
                     <Users size={12} /> Collaborative Work
                   </span>
                </div>
              </div>

              {/* Right Side: Details & Actions */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h4 className="text-blue-400 font-mono text-sm mb-2 uppercase tracking-widest">Journal Publication</h4>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  IJSRED – Volume 7, Issue 2
                </h2>
                
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Contributed to a technical research paper published in the <span className="text-white font-medium">International Journal of Scientific Research and Engineering Development</span>. 
                  Collaborated with a team to analyze data and present engineering insights.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.ijsred.com/volume7-issue2-part17.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold transition-all active:scale-95"
                  >
                    Read Paper <ExternalLink size={16} />
                  </a>
                  <a 
                    href="/IJSRED-V7I2P161-3.pdf" 
                    target="_blank"
                    className="flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-slate-200 px-5 py-2.5 rounded-xl font-semibold border border-slate-600 transition-all active:scale-95"
                  >
                    <FileText size={16} /> Certificate
                  </a>
                </div>
              </div>

            </div>
          </div>
          <p className="text-center text-slate-500 mt-8 text-xs uppercase tracking-[0.3em]">
            Official Academic Record • Verified Peer Review
          </p>
        </div>
      </div>
    </section>
  );
}