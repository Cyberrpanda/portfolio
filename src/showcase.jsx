// Showcase.jsx
import React, { useState, useEffect } from "react";

export default function Showcase() {
  const projects = [
    {
      url: "https://medibridge-ty1l.onrender.com",
      image: "/medibridge.webp",
      alt: "Medibridge Project",
    },
    {
      url: "https://tunken-project.onrender.com",
      image: "/tunken.webp",
      alt: "Tunken Project",
    },
    {
      url: "https://ventures-by8n.onrender.com",
      image: "/ventures.webp",
      alt: "Ventures Project",
    },
    {
      url: "https://heavy-locomotive.onrender.com",
      image: "/heavy.webp",
      alt: "Heavy Locomotive Project",
    },
    {
      url: "https://thearchive-92w9.onrender.com",
      image: "/thearchive.webp",
      alt: "The Archive Project",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, projects.length]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);

  return (
    <section
      id="showcase"
      className="bg-slate-900 text-white py-24 px-6"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500">
          FEATURED <span className="text-white">WORK</span>
        </h3>

        {/* Desktop Carousel (visible on md and up) */}
        <div className="hidden md:block relative">
          <div className="flex items-center justify-center overflow-hidden py-8">
            <div className="relative w-full max-w-5xl h-64 lg:h-80">
              {projects.map((project, index) => {
                const position =
                  index === currentIndex
                    ? "active"
                    : index === (currentIndex - 1 + projects.length) % projects.length
                    ? "prev"
                    : index === (currentIndex + 1) % projects.length
                    ? "next"
                    : "hidden";

                return (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-out ${
                      position === "active"
                        ? "opacity-100 scale-100 translate-x-0 z-20"
                        : position === "prev"
                        ? "opacity-40 scale-90 -translate-x-[60%] z-10"
                        : position === "next"
                        ? "opacity-40 scale-90 translate-x-[60%] z-10"
                        : "opacity-0 scale-75 -z-10"
                    }`}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-4xl w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 z-30"
            aria-label="Previous project"
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-4xl w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 z-30"
            aria-label="Next project"
          >
            ›
          </button>
        </div>

        {/* Mobile Carousel (visible below md) */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-full"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full aspect-video object-cover"
                  />
                </a>
              ))}
            </div>

            {/* Mobile Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white text-3xl w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              ‹
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white text-3xl w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              ›
            </button>
          </div>
        </div>

        {/* Dots Navigation (both desktop & mobile) */}
        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}