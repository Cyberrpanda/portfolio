import React from "react";
import "./index.css";

export default function Showcase() {
  const projects = [
    {
      url: "https://medibridge-ty1l.onrender.com",
      image: "../medibridge.webp",
      alt: "Medibridge Project"
    },
    {
      url: "https://tunken-project.onrender.com", 
      image: "../tunken.webp",
      alt: "Tunken Project"
    },
    {
      url: "https://ventures-by8n.onrender.com",
      image: "../ventures.webp", 
      alt: "Ventures Project"
    },
    {
      url: "https://heavy-locomotive.onrender.com",
      image: "../heavy.webp",
      alt: "Heavy Locomotive Project"
    },
    {
      url: "https://thearchive-92w9.onrender.com",
      image: "../thearchive.webp",
      alt: "The Archive Project"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, projects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="showcase-container" id="showcase">
      <h3 className="showcase-title">
        <i>FEATURED WORK</i>
      </h3>

      <div 
        className="carousel-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Desktop View - Multiple slides visible */}
        <div className="desktop-carousel">
          <div className="slides-container">
            {projects.map((project, index) => {
              let position = 'nextSlide';
              if (index === currentIndex) {
                position = 'activeSlide';
              }
              if (index === currentIndex - 1 || (currentIndex === 0 && index === projects.length - 1)) {
                position = 'prevSlide';
              }

              return (
                <div
                  key={index}
                  className={`slide ${position}`}
                >
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slide-link"
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="slide-image desktop-image"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View - Single slide with better proportions */}
        <div className="mobile-carousel">
          <div className="mobile-slides-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`mobile-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slide-link"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="slide-image mobile-image"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="nav-arrow nav-arrow-left"
        >
          ‹
        </button>

        <button
          onClick={goToNext}
          className="nav-arrow nav-arrow-right"
        >
          ›
        </button>

        {/* Dots Navigation */}
        <div className="dots-container">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}