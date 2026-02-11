// Footer.jsx
import { HashLink as Link } from "react-router-hash-link";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-white/10 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Ithiel<span className="text-blue-500">.</span>
          </h1>
          <p className="text-slate-400 leading-relaxed">
            I Guess 😂<br />
            Work with me...
          </p>
        </div>

        {/* Contact Column */}
        <div className="space-y-4">
          <h6 className="text-lg font-semibold text-white">Contact Me</h6>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/ithiel-balogun-09aa87242"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Cyberrpanda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
            </li>
          </ul>

          <div className="space-y-2">
            <h6 className="text-sm font-semibold text-white">Email</h6>
            <a
              href="mailto:ithielb9@gmail.com"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaEnvelope className="text-sm" /> ithielb9@gmail.com
            </a>
          </div>

          <div className="space-y-2">
            <h6 className="text-sm font-semibold text-white">Phone Numbers</h6>
            <a
              href="https://wa.me/2348185817626"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaWhatsapp className="text-sm" /> 08185817626
            </a>
            <a
              href="tel:+2349168728729"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaPhone className="text-sm" /> 09168728729
            </a>
          </div>
        </div>

        {/* Page Content Column */}
        <div className="space-y-4">
          <h6 className="text-lg font-semibold text-white">Page Content</h6>
          <ul className="space-y-2">
            <li>
              <Link smooth to="/#hero" className="text-slate-400 hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="/#stack" className="text-slate-400 hover:text-blue-400 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link smooth to="/#showcase" className="text-slate-400 hover:text-blue-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link smooth to="/#reason" className="text-slate-400 hover:text-blue-400 transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link smooth to="/#educate" className="text-slate-400 hover:text-blue-400 transition-colors">
                Education
              </Link>
            </li>
            <li>
              <Link smooth to="/#contact" className="text-slate-400 hover:text-blue-400 transition-colors">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

        {/* Location Column */}
        <div className="space-y-4">
          <h6 className="text-lg font-semibold text-white">Location</h6>
          <p className="text-slate-400 leading-relaxed">
            In case you're wondering, I live in Lagos, Nigeria. <br />
            You'll find me probably bent over a screen staring 😂. <br />
            This shouldn't bother you too much, right?
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Ithiel Balogun. Built with React & Tailwind.
      </div>
    </footer>
  );
}