import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Home = () => {
  return (
    <section className="Homebody">
      <div className="main-container">
        <div className="image" data-aos="zoom-out" data-aos-duration="3000">
          <img src="../../public/Pritam_trns.png" alt="Main" />
        </div>

        <div className="content">
          <h1
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="700"
          >
            I am <span>Subham Pal</span>
          </h1>

          <div
            className="typewriter"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="900"
          >
            Skilled In <span className="typewriter-text"></span>
            <label>|</label>
          </div>

          <p
            data-aos="flip-down"
            data-aos-duration="1500"
            data-aos-delay="1100"
          >
            Skilled in Microsoft Excel and Advanced Excel techniques like Pivot
            Tables, VLOOKUP, HLOOKUP, XLOOKUP, and Macros. Experienced in data
            management, process automation, and insightful reporting to drive
            smarter business decisions.
          </p>

          <div className="social-links">
            <a
              href="#"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1300"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="#"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1400"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href="#"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1500"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="#"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1600"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>

          <div
            className="btn"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="1800"
          >
            <button>Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
