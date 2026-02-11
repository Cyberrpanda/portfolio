// Reason.jsx
import React, { useEffect, useRef } from "react";
import {
  FaCheck,
  FaTrophy,
  FaFileContract,
  FaTools,
  FaMapMarkerAlt,
  FaCloud,
  FaCogs,
  FaBox,
  FaChartLine,
  FaUsers,
  FaSearch,
  FaFileInvoiceDollar,
  FaHandshake,
} from "react-icons/fa";

export default function Reason() {
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const experiences = [
    {
      id: 1,
      date: "06/2025 – Present",
      title: "IT Operations",
      company: "Eko Electricity Distribution Plc",
      location: "24/25 Marina Rd, Lagos Island, Nigeria",
      type: "Full-time",
      icon: <FaFileContract className="mr-2" />,
      responsibilities: [
        "Successfully deployed and configured scanner drivers and enterprise scan utilities (including HP ScanJet), improving document processing reliability and reducing scan-related support tickets.",
        "Standardised software installation and updates across laptops and desktops in line with internal IT policies, increasing system stability and reducing configuration errors.",
        "Resolved recurring hardware and boot issues (RAM detection failures, display faults, and boot loader errors), restoring devices to operational status and minimising user downtime.",
        "Improved user productivity by efficiently resolving account access issues, including password resets and login failures.",
        "Streamlined device onboarding by installing operating systems, configuring domain access, and deploying required applications, ensuring new users were operational on day one.",
        "Executed advanced diagnostics and system repairs (BIOS validation, disk/file system recovery, and Windows boot loader restoration), preventing unnecessary device replacements.",
        "Enhanced asset management accuracy by validating device model and serial numbers using WMIC queries, supporting reliable inventory and audit processes.",
        "Collaborated with third party vendors to coordinate device repairs and preventive maintenance, reducing turnaround time for faulty equipment and improving device availability.",
        "Partnered closely with the administrative store team to manage staff device issuance by assessing device condition and accurately classifying equipment as functional or obsolete, improving inventory efficiency and minimising the deployment of faulty devices.",
      ],
      achievements: [
        "Reduced scan-related support tickets by ~30% through proactive driver deployment.",
        "Cut device onboarding time by 50% with streamlined OS installation and domain configuration.",
        "Prevented unnecessary hardware replacements valued at over ₦2M through advanced diagnostics and repairs.",
      ],
      skills: [
        "Hardware Diagnostics",
        "Windows OS",
        "Driver Deployment",
        "Asset Management",
        "Vendor Coordination",
        "WMIC",
        "BIOS",
        "System Recovery",
      ],
    },
    {
      id: 2,
      date: "09/2023 – 10/2023",
      title: "Front-End Developer",
      company: "Tunken Elevators",
      location: "Lagos, Nigeria",
      type: "Contract",
      icon: <FaFileContract className="mr-2" />,
      responsibilities: [
        "Designed and developed a fully responsive company website using HTML and Bootstrap CSS to showcase core services, improving online visibility and user accessibility.",
        "Worked closely with the client to refine UI/UX design and user flows, delivering a smooth, intuitive browsing experience.",
        "Provided ongoing optimization recommendations and technical support, enhancing site performance and overall usability.",
      ],
      achievements: [
        "Delivered the project ahead of schedule with 100% client satisfaction.",
        "Improved mobile responsiveness and page load speed by over 40%.",
      ],
      skills: ["HTML", "Bootstrap", "UI/UX", "Responsive Design", "Client Collaboration"],
      projects: [
        {
          icon: <FaCloud />,
          name: "Corporate Website Redesign",
          description:
            "Modern, mobile‑first website showcasing elevator products and services.",
        },
      ],
    },
    {
      id: 3,
      date: "01/2023 – 06/2023",
      title: "Web Development Intern",
      company: "NIIT Limited",
      location: "Awolowo Road, Ikeja, Lagos, Nigeria",
      type: "Internship",
      icon: <FaTools className="mr-2" />,
      responsibilities: [
        "Completed a six-month frontend development internship, gaining hands-on experience building production-style web applications.",
        "Developed multiple web projects including a car dealership site, a travel agency website, and a personal portfolio using React.js and Bootstrap CSS, demonstrating versatility across business domains.",
        "Improved problem-solving and debugging skills by resolving UI/UX issues in real-world scenarios, contributing to more polished and user-friendly interfaces.",
      ],
      achievements: [
        "Successfully delivered 3 complete web projects during the internship.",
        "Received recognition from mentors for exceptional UI implementation.",
      ],
      skills: ["React.js", "Bootstrap", "HTML", "CSS", "JavaScript", "Debugging", "UI/UX"],
    },
  ];

  return (
    <section id="reason" className="relative bg-slate-900 text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-blue-500">Experience</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A journey through IT operations, freelance development, and hands‑on web development training
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line – hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent hidden lg:block"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  {/* Alternating layout */}
                  {index % 2 === 0 ? (
                    <>
                      {/* Left: Job Details */}
                      <div className="lg:text-right mb-8 lg:mb-0 lg:pr-12 order-2 lg:order-1">
                        <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-3">
                          {exp.date}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                        <div className="mt-2 flex items-center lg:justify-end text-slate-400">
                          <FaMapMarkerAlt className="mr-2 text-blue-400" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="mt-4 flex items-center lg:justify-end text-slate-400">
                          <span className="flex items-center">
                            {exp.icon}
                            {exp.type}
                          </span>
                        </div>
                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 mt-6 lg:justify-end">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-slate-800 text-blue-300 rounded-full text-xs font-medium border border-slate-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Card with responsibilities & achievements */}
                      <div className="lg:pl-12 order-1 lg:order-2 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900 shadow-lg hidden lg:flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                          {/* Responsibilities */}
                          <h4 className="font-bold text-white mb-3 text-lg flex items-center">
                            <FaCheck className="text-blue-400 mr-2 text-sm" />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-3 mb-6">
                            {exp.responsibilities.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 mt-0.5">
                                  <FaCheck className="text-blue-400 text-xs" />
                                </div>
                                <span className="text-slate-300 text-sm md:text-base">{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Achievements */}
                          <h4 className="font-bold text-white mb-3 text-lg flex items-center">
                            <FaTrophy className="text-yellow-500 mr-2 text-sm" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 mt-0.5">
                                  <FaTrophy className="text-yellow-500 text-xs" />
                                </div>
                                <span className="text-slate-300 text-sm md:text-base">{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Optional Projects Section (only for Tunken) */}
                          {exp.projects && (
                            <div className="mt-6">
                              <h4 className="font-bold text-white mb-3 text-lg">Key Projects</h4>
                              {exp.projects.map((project, i) => (
                                <div
                                  key={i}
                                  className="flex items-start bg-slate-700/30 p-4 rounded-xl border border-slate-700"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
                                    <div className="text-blue-400">{project.icon}</div>
                                  </div>
                                  <div>
                                    <span className="font-medium text-white">{project.name}</span>
                                    <p className="text-slate-400 text-sm mt-1">
                                      {project.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    // Alternating layout – swap sides (for future roles if added)
                    <>
                      {/* Left: Card with responsibilities & achievements */}
                      <div className="lg:text-right lg:pr-12 mb-8 lg:mb-0 relative">
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900 shadow-lg hidden lg:flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                          <h4 className="font-bold text-white mb-3 text-lg flex items-center lg:justify-end">
                            <FaCheck className="text-blue-400 mr-2 text-sm" />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-3 mb-6">
                            {exp.responsibilities.map((item, i) => (
                              <li key={i} className="flex items-start lg:flex-row-reverse">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center lg:ml-3 mt-0.5">
                                  <FaCheck className="text-blue-400 text-xs" />
                                </div>
                                <span className="text-slate-300 text-sm md:text-base lg:text-right">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="font-bold text-white mb-3 text-lg flex items-center lg:justify-end">
                            <FaTrophy className="text-yellow-500 mr-2 text-sm" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((item, i) => (
                              <li key={i} className="flex items-start lg:flex-row-reverse">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center lg:ml-3 mt-0.5">
                                  <FaTrophy className="text-yellow-500 text-xs" />
                                </div>
                                <span className="text-slate-300 text-sm md:text-base lg:text-right">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Job Details */}
                      <div className="lg:pl-12">
                        <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-3">
                          {exp.date}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                        <div className="mt-2 flex items-center text-slate-400">
                          <FaMapMarkerAlt className="mr-2 text-blue-400" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="mt-4 flex items-center text-slate-400">
                          <span className="flex items-center">
                            {exp.icon}
                            {exp.type}
                          </span>
                        </div>
                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 mt-6">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-slate-800 text-blue-300 rounded-full text-xs font-medium border border-slate-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}