import React from "react";
import { technicalSkills } from "../data";
import TiltedCard from "./TiltedCard";
import "./Skills.css";
import CertificateImage from "../assets/Certificate.png"; // Import the certificate directly
import { FaCode, FaTools, FaDatabase, FaAward } from "react-icons/fa"; // Import icons

const Skills = () => {
  const { programmingLanguages, frameworksAndTools, databases, certifications } = technicalSkills;

  const links = {
    programmingLanguages: {
      "C++": "https://cplusplus.com",
      C: "https://en.cppreference.com/w/c",
      JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      Python: "https://www.python.org",
      "X-86 Assembly": "https://en.wikipedia.org/wiki/X86_assembly_language",
    },
    frameworksAndTools: {
      "React.js": "https://reactjs.org",
      Docker: "https://www.docker.com",
      AWS: "https://aws.amazon.com",
      Flask: "https://flask.palletsprojects.com",
      "D3.js": "https://d3js.org",
      Wireshark: "https://www.wireshark.org",
      Git: "https://git-scm.com",
      GitHub: "https://github.com",
      Linux: "https://www.linux.org",
      Unix: "https://www.unix.com",
    },
    databases: {
      MongoDB: "https://www.mongodb.com",
      MySQL: "https://www.mysql.com",
      PostgreSQL: "https://www.postgresql.org",
    },
  };

  return (
    <section id="skills" data-aos="fade-up" className="skills-section">
      <div className="container">
        <h2 className="text-center">Technical Skills</h2>
        <div className="row justify-content-center">
          {[
            {
              title: "Programming Languages",
              icon: <FaCode className="icon" />, // Add code icon
              items: programmingLanguages,
              links: links.programmingLanguages,
            },
            {
              title: "Frameworks & Tools",
              icon: <FaTools className="icon" />, // Add tools icon
              items: frameworksAndTools,
              links: links.frameworksAndTools,
            },
            {
              title: "Databases",
              icon: <FaDatabase className="icon" />, // Add database icon
              items: databases,
              links: links.databases,
            },
            {
              title: "Certifications",
              icon: <FaAward className="icon" />, // Add award icon
              items: certifications,
              isCertification: true,
            },
          ].map((skill, index) => (
            <TiltedCard
              key={index}
              containerHeight="500px"
              containerWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              displayOverlayContent={true}
              overlayContent={
                <div>
                  <h5 className="skills-title">
                    {skill.icon} {skill.title}
                  </h5>
                  {skill.isCertification ? (
                    <div className="certification-container">
                      <a
                        href={CertificateImage} // Open the certificate image in a new tab
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certification-link"
                      >
                        Relational Database Systems
                      </a>
                    </div>
                  ) : (
                    <ul className="skills-list">
                      {skill.items.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href={skill.links[item]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="skills-link"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
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
