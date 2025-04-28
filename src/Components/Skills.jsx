import React from "react";
import mySkills from "../Api/mySkills.json";

const Skills = () => {
  return (
    <section className="skills container">
      <h2>
        <span>Skills</span>
      </h2>
      <div className="skills-grid">
        {mySkills.map((curSkill, index) => {
          return (
            <div className="skill-box" key={index}>
              <img src={curSkill.image} alt={curSkill.skillname} />
              <p>{curSkill.skillname}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
