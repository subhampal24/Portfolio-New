import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="resume-section">
      <h2 className="resume-title">Qualification</h2>

      <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-content">
            <h4>Bachelor of Science</h4>
            <p>Barasat Govt. College | 2019 - 2021</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-content">
            <h4>Higher Secondary (Science)</h4>
            <p>Kartickpur Deganga Adarsha Vidyapith (H.S) | 2018</p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-content">
            <h4>Secondary Education</h4>
            <p>Kartickpur Deganga Adarsha Vidyapith (H.S) | 2016</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
