import React from "react";
import {
  FaBirthdayCake,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaRegCalendarAlt,
} from "react-icons/fa";
import Resume from "./Resume";

// Function to dynamically calculate years and months
const calculateYearsAndMonths = (birthDateString) => {
  const birthDate = new Date(birthDateString);
  const now = new Date();
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months };
};

const About = () => {
  const { years, months } = calculateYearsAndMonths("2001-02-24"); // Your birthday

  return (
    <div className="about">
      <h2>
        <span>About</span> Me
      </h2>
      <p className="about-text">
        I am a highly skilled professional with strong expertise in Microsoft
        Excel and Advanced Excel tools and techniques. I have hands-on
        experience with a wide range of Excel functions including Pivot Tables,
        VLOOKUP, HLOOKUP, XLOOKUP, and Macros automation, among many others.
        <br></br>
        With a sharp analytical mind and an eye for detail, I specialize in
        managing and analyzing complex datasets efficiently to drive informed
        decision-making. I am passionate about optimizing processes, automating
        repetitive tasks, and creating insightful reports and dashboards that
        add real value to any organization. <br></br>
        My continuous learning approach ensures I stay updated with the latest
        Excel advancements and best practices to deliver accurate and impactful
        results.
      </p>

      <div className="about-details">
        <div className="detail-item">
          <FaBirthdayCake className="detail-icon" />
          <strong>Birthday:</strong> <span>24 February 2001</span>
        </div>

        <div className="detail-item">
          <FaRegCalendarAlt className="detail-icon" />
          <strong>Age:</strong>{" "}
          <span>
            {years} Years {months} Months
          </span>
        </div>

        <div className="detail-item">
          <FaEnvelope className="detail-icon" />
          <strong>Email:</strong> <span>subham.pal2402@gmail.com</span>
        </div>

        <div className="detail-item">
          <FaGraduationCap className="detail-icon" />
          <strong>Degree:</strong> <span>Bachelor of Science</span>
        </div>

        <div className="detail-item">
          <FaPhoneAlt className="detail-icon" />
          <strong>Phone:</strong> <span>+91 9635306669</span>
        </div>

        <div className="detail-item">
          <FaMapMarkerAlt className="detail-icon" />
          <strong>City:</strong> <span>Barasat, North 24 Parganas</span>
        </div>
      </div>

      <Resume />
    </div>
  );
};

export default About;
