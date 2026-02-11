// HeroSection.jsx
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaPaperPlane, FaChartLine, FaCheck, FaChevronDown } from "react-icons/fa";

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
              Front‑end Engineer | React Specialist | UI/UX Enthusiast | Full‑stack (in progress)
            </p>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              I'm a front‑end software engineer with a Computer Science degree and a passion for building
              beautiful, responsive web experiences. I've delivered multiple projects using React, Tailwind,
              and modern JavaScript. Currently expanding into backend development to become a versatile
              full‑stack engineer. I love solving problems, learning new technologies, and turning ideas
              into reality.
            </p>

            {/* CTA Buttons */}
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
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">10+</div>
                <div className="text-slate-400 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">4+</div>
                <div className="text-slate-400 text-sm">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
                <div className="text-slate-400 text-sm">Client Satisfaction</div>
              </div>
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