import './index.css';
import { useRef } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const navRef = useRef();
  const [navIsOpen, setNavIsOpen] = useState(false);

  const showNavbar = () => {
    setNavIsOpen(!navIsOpen);
  };

  const closeNavbar = () => {
    setNavIsOpen(false);
  };

  return (
    <>
      <header className="head">
        <nav ref={navRef} className={`navbar ${navIsOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link smooth to="/#home" onClick={closeNavbar}>Home</Link>
            </li>
            <li>
              <Link smooth to="/#mylore" onClick={closeNavbar}>About</Link>
            </li>
            <li>
              <Link smooth to="/#stack" onClick={closeNavbar}>Skills</Link>
            </li>
            <li>
              <Link smooth to="/#showcase" onClick={closeNavbar}>Projects</Link>
            </li>
            <li>
              <Link smooth to="/#reason" onClick={closeNavbar}>Experience</Link>
            </li>
            <li>
              <Link smooth to="/#contactinfo" onClick={closeNavbar}>Contact Me</Link>
            </li>
          </ul>
        </nav>
       
        <button className="nav-btn" onClick={showNavbar}>
          {navIsOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>
    </>
  );
}
