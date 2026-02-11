// Navbar.jsx
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Navigation items – exactly matching the IDs in App.jsx
  const navItems = [
    { label: "Home", to: "/#hero" },
    { label: "Stack", to: "/#stack" },
    { label: "Flex", to: "/#flex" },
    { label: "Projects", to: "/#showcase" },
    { label: "Experience", to: "/#reason" },
    { label: "Educate", to: "/#educate" },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo – scrolls to top (hero) */}
        <Link
          smooth
          to="/#hero"
          onClick={closeMenu}
          className="text-2xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors"
        >
          Ithiel<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-white/90 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              smooth
              to={item.to}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-2xl font-medium transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            smooth
            to={item.to}
            onClick={closeMenu}
            className="text-white hover:text-blue-400 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}