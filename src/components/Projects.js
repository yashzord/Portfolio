import React from "react";
import { projects } from "../data";
import TiltedCard from "./TiltedCard";
import "./Projects.css";
import { FaCode, FaCalendarAlt, FaGithub, FaTools } from "react-icons/fa"; // Import icons

const technologyLinks = {
  Python: "https://www.python.org",
  Wireshark: "https://www.wireshark.org",
  "Kali Linux": "https://www.kali.org",
  "Aircrack Suite": "https://www.aircrack-ng.org",
  "DNS Services": "https://en.wikipedia.org/wiki/Domain_Name_System",
  "USB Wi-Fi Adapters": "https://www.alfa.com.tw",
  MongoDB: "https://www.mongodb.com",
  Flask: "https://flask.palletsprojects.com",
  AJAX: "https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX",
  "Chart.js": "https://www.chartjs.org",
  Bootstrap: "https://getbootstrap.com",
  "Moderate Hate Speech library": "https://github.com/jwslaby/moderateHateSpeech",
  "Hugging Face": "https://huggingface.co",
};

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row justify-content-center">
          {projects.map((project, index) => {
            // Assign GitHub links for specific projects
            let githubLink = null;
            let dashboardLink = null;
            if (project.title === "Evil Twin Attack") {
              githubLink = "https://github.com/yashzord/Evil_Twin_Attack";
            } else if (project.title === "Social Media Data Crawlers") {
              githubLink = "https://github.com/yashzord/Social-Media-Data-Crawlers";
              dashboardLink = "https://github.com/yashzord/Social-Media-Data-Web-Dashboard";
            }

            return (
              <TiltedCard
                key={index}
                containerHeight="auto"
                containerWidth="90%"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                displayOverlayContent={true}
                overlayContent={
                  <div className="project-card">
                    <h5 className="project-title">
                      <FaCode className="icon" />
                      {project.title}
                    </h5>

                    {/* Technologies Section */}
                    <p className="project-technologies">
                      <FaTools className="icon" />
                      <strong>Technologies: </strong>
                      {project.technologies.map((tech, idx) => (
                        <a
                          key={idx}
                          href={technologyLinks[tech] || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-tech-link"
                        >
                          {tech}
                          {idx < project.technologies.length - 1 ? ", " : ""}
                        </a>
                      ))}
                    </p>

                    {/* Duration */}
                    <p className="project-duration">
                      <FaCalendarAlt className="icon" />
                      {project.duration}
                    </p>

                    {/* Project Points */}
                    <ul className="project-points">
                      {project.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>

                    {/* GitHub Repository Links */}
                    {githubLink && (
                      <div className="project-github">
                        <FaGithub className="icon" />
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          View Project Code
                        </a>
                      </div>
                    )}

                    {dashboardLink && (
                      <div className="project-github">
                        <FaGithub className="icon" />
                        <a
                          href={dashboardLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          View Web Dashboard Code
                        </a>
                      </div>
                    )}
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
