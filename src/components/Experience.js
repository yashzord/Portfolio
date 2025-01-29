import React from "react";
import { experience } from "../data";
import TiltedCard from "./TiltedCard";
import "./Experience.css";
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaGithub } from "react-icons/fa"; // Import icons

const Experience = () => {
  return (
    <section id="experience" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">Professional Experience</h2>
        <div className="row justify-content-center">
          {experience.map((job, index) => {
            // Assign GitHub links for specific roles
            let githubLink = null;
            if (job.title === "Software Developer Intern") {
              githubLink = "https://github.com/yashzord/Credit-Card-Data-Visualization-Platform";
            } else if (job.title === "Machine Learning Engineer Intern") {
              githubLink = "https://github.com/yashzord/Credit-Card-Fraud-Detection";
            }

            // Assign correct organization links
            let organizationLink = "https://www.corecard.com/US/home";
            if (job.organization === "Sultan Qaboos Hospital") {
              organizationLink = "https://en.wikipedia.org/wiki/Sultan_Qaboos_Hospital_Salalah";
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
                  <div className="experience-card">
                    <h5 className="experience-title">{job.title}</h5>

                    {/* Organization (Clickable Link) */}
                    <p className="experience-organization">
                      <FaBuilding className="icon" />
                      <a
                        href={organizationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-link"
                      >
                        {job.organization}
                      </a>
                    </p>

                    {/* Location (Google Maps Link) */}
                    <p className="experience-location">
                      <FaMapMarkerAlt className="icon" />
                      <a
                        href={`https://www.google.com/maps/search/${encodeURIComponent(job.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-link"
                      >
                        {job.location}
                      </a>
                    </p>

                    {/* Duration */}
                    <p className="experience-duration">
                      <FaCalendarAlt className="icon" />
                      {job.duration}
                    </p>

                    {/* Bullet Points */}
                    <ul className="experience-points">
                      {job.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>

                    {/* GitHub Repository (Only for Specific Roles) */}
                    {githubLink && (
                      <div className="experience-github">
                        <FaGithub className="icon" />
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-link"
                        >
                          View Project Code
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

export default Experience;
