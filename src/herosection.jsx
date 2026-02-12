// HeroSection.jsx
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaPaperPlane, FaChartLine, FaDownload, FaCheck, FaChevronDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column – Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Ithiel</span>
              <span className="block text-blue-500">Balogun</span>
            </h1>
            <p className="text-2xl text-slate-300 mb-8 font-light">
              Front‑end Developer
            </p>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              I am a highly skilled Front-End Developer specializing in building scalable, responsive web applications using React Js, TypeScript, and modern styling frameworks like Tailwind and SCSS. My technical foundation is built on deep proficiency in HTML, CSS, and JavaScript, with a strong emphasis on Responsive Web Design, seamless API Integration, and User Acceptance Testing (UAT) to ensure high-quality, user-centric products. I am adept at managing the development lifecycle through Version Control (Git) and possess robust data management capabilities using PostgreSQL and MySQL Workbench. What truly distinguishes my profile is a unique "systems-first" perspective gained from extensive IT Operations experience; I bring advanced Problem Solving and Debugging skills that extend beyond the browser into BIOS-level diagnostics, disk/file system recovery, and Windows boot loader restoration. This rare combination of front-end mastery and infrastructure depth—ranging from OS deployment and WMIC queries to resolving hardware failures like RAM and display faults—enables me to engineer stable, high-performance solutions with a comprehensive understanding of the entire technical stack.
            </p>

            {/* CTA Buttons – three buttons now */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                smooth
                to="/#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg hover:shadow-blue-500/30 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <FaPaperPlane className="text-sm" /> Start a Project
                </span>
              </Link>
              <Link
                smooth
                to="/#showcase"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-slate-800 border border-slate-700 rounded-full shadow-lg hover:bg-slate-700 hover:border-blue-500/50 hover:scale-105 overflow-hidden"
              >
                <span className="relative flex items-center gap-2">
                  <FaChartLine className="text-sm" /> View My Work
                </span>
              </Link>
              {/* Download CV Button – added */}
              <a
                href="/ITHIEL-BALOGUN-RESUME 2026.docx"
                download
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-slate-800 border border-slate-700 rounded-full shadow-lg hover:bg-slate-700 hover:border-blue-500/50 hover:scale-105 overflow-hidden"
              >
                <span className="relative flex items-center gap-2">
                  <FaDownload className="text-sm" /> Download CV
                </span>
              </a>
            </div>
          </div>

          {/* Right Column – Profile Image with Badge */}
          <div className="relative animate-slide-in-right">
            <div className="relative mx-auto lg:ml-auto w-full max-w-md">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800/50">
                <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800"></div>
                <img
                  src="/display.jpeg"
                  alt="Ithiel Balogun"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link smooth to="/#stack" className="text-white/80 hover:text-white transition-colors">
          <FaChevronDown className="text-2xl" />
        </Link>
      </div>
    </section>
  );
}