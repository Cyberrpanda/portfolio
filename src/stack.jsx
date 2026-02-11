// Stack.jsx
import React, { useEffect, useRef } from "react";

export default function Stack() {
  const divisionsRef = useRef([]);

  // Intersection Observer – fade in and fill progress bars when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-4");

            // Animate all skill bars inside this division
            const bars = entry.target.querySelectorAll(".skill-progress");
            bars.forEach((bar) => {
              const width = bar.dataset.width;
              bar.style.width = width;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const divisions = divisionsRef.current;
    divisions.forEach((div) => {
      if (div) observer.observe(div);
    });

    return () => {
      divisions.forEach((div) => {
        if (div) observer.unobserve(div);
      });
    };
  }, []);

  const skillsColumn1 = [
    { name: "HTML", level: 100 },
    { name: "CSS3", level: 100 },
    { name: "Bootstrap", level: 90 },
    { name: "Tailwind", level: 90 },
    { name: "SCSS/SASS", level: 90 },
    { name: "ReactJS", level: 80 },
    { name: "Git/GitHub", level: 80 },
  ];

  const skillsColumn2 = [
    { name: "JavaScript", level: 80 },
    { name: "SwiperJS", level: 80 },
    { name: "MySQL Workbench", level: 80 },
    { name: "TypeScript", level: 80 },
  ];

  return (
    <section
      id="stack"
      className="bg-slate-900 text-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500">
          MY <span className="text-white">SKILLS</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Column 1 */}
          <div
            ref={(el) => (divisionsRef.current[0] = el)}
            className="space-y-6 opacity-0 translate-y-4 transition-all duration-700 ease-out"
          >
            {skillsColumn1.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="skill-progress h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "0%" }}
                    data-width={`${skill.level}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div
            ref={(el) => (divisionsRef.current[1] = el)}
            className="space-y-6 opacity-0 translate-y-4 transition-all duration-700 ease-out delay-200"
          >
            {skillsColumn2.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="skill-progress h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "0%" }}
                    data-width={`${skill.level}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}