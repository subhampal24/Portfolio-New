import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
    typeWriter();
  }, []);

  const handleHamburg = () => {
    setMenuOpen(true);
  };

  const handleCancel = () => {
    setMenuOpen(false);
  };

  // Typewriter Effect
  const texts = [
    "EXCEL",
    "ADVANCE EXCEL",
    "VLOOKUP",
    "HLOOKUP",
    "XLOOKUP",
    "PIVOT TABLE",
    "MACROS",
  ];
  const speed = 100;
  let textIndex = 0;
  let charIndex = 0;

  const typeWriter = () => {
    const textElements = document.querySelector(".typewriter-text");
    if (!textElements) return;

    function type() {
      if (charIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
      } else {
        setTimeout(erase, 1000);
      }
    }

    function erase() {
      if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(erase, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(type, 500);
      }
    }

    type();
  };

  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <div className="logo" data-aos="zoom-in" data-aos-duration="1500">
            SUBHAM <span>PAL</span>
          </div>
        </Link>

        <div className="links">
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <Link to="/about">About</Link>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <Link to="/skills">Skills</Link>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <FaBars className="hamburg" onClick={handleHamburg} />
      </div>

      <div
        className="dropdown"
        style={{
          transform: menuOpen ? "translateY(0px)" : "translateY(-500px)",
        }}
      >
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
          <FaTimes className="cancel" onClick={handleCancel} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
