import React from "react";
import { technicalSkills } from "../data";
import TiltedCard from "./TiltedCard";
import "./TiltedCard.css";

const Skills = () => {
  const { programmingLanguages, frameworksAndTools, databases, certifications } =
    technicalSkills;

  return (
    <section id="skills" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">Technical Skills</h2>
        <div className="row justify-content-center">
          {[
            { title: "Programming Languages", items: programmingLanguages },
            { title: "Frameworks & Tools", items: frameworksAndTools },
            { title: "Databases", items: databases },
            { title: "Certifications", items: certifications },
          ].map((skill, index) => (
            <TiltedCard
              key={index}
              containerHeight="500px" // Increased height for vertical layout
              containerWidth="350px" // Slightly narrower width for proportional design
              rotateAmplitude={12}
              scaleOnHover={1.2} // Enhanced hover effect
              displayOverlayContent={true}
              overlayContent={
                <div>
                  <h5 className="text-center">{skill.title}</h5>
                  <ul>
                    {skill.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
