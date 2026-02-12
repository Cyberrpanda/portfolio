// Stack.jsx
import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Stack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const barRefs = useRef([]);

  // Skills data – grouped into three columns for the grid
  const skills = [
    { name: "HTML5", level: 100 },
    { name: "CSS3", level: 100 },
    { name: "Bootstrap", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "SCSS/SASS", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Version Control (Git)", level: 85 },
    { name: "JavaScript (ES6+)", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "User Acceptance Testing (UAT)", level: 80 },
    { name: "MySQL", level: 70 },
    { name: "Responsive Web Design", level: 95 },
    { name: "Problem Solving and Debugging", level: 80 },
    { name: "My Sql Workbench", level: 75 },
    { name: "PostgreSql", level: 65 },
    { name: "Hardware Diagnostics & Repair", level: 80 },
    { name: "REST APIs", level: 80 },
    { name: "Operating System Deployment", level: 80 },
    { name: "System Recovery", level: 80 },
    { name: "Endpoint Management", level: 90 },
    { name: "Peripheral Management", level: 90 },
    { name: "Identity & Access Management (IAM)", level: 80 },
    { name: "Network Domain Configuration", level: 80 },
    { name: "User Onboarding", level: 80 },
    { name: "Asset Management", level: 80 },
    { name: "Vendor Management", level: 80 },
    { name: "Policy Compliance", level: 80 },
    { name: "Inventory Lifecycle Management", level: 80 },	 
  ];

  // Intersection Observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          barRefs.current.forEach((bar) => {
            if (bar) {
              const width = bar.dataset.width;
              bar.style.width = width;
            }
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="relative bg-slate-900 text-white py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header – inspired by reference */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Comprehensive skill set developed through hands‑on projects and continuous learning
          </p>
        </div>

        {/* Skills Grid – 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">{skill.name}</h3>
                <span className="text-blue-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  ref={(el) => (barRefs.current[index] = el)}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  data-width={`${skill.level}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Skills Count – inline badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/20">
            <FaCheckCircle className="text-blue-500 text-xl mr-3" />
            <span className="text-slate-300 font-medium">
              Total: <span className="font-bold text-blue-500">{skills.length}+</span> Professional Skills
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}