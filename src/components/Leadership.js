import React from "react";
import { leadership } from "../data";
import TiltedCard from "./TiltedCard";
import "./Leadership.css";
import { FaUserTie, FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"; // Import icons

const Leadership = () => {
  return (
    <section id="leadership" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">Leadership and Involvement Experience</h2>
        <div className="row justify-content-center">
          {leadership.map((role, index) => {
            // Assign correct organization links
            let organizationLink = "#";
            if (role.organization === "Binghamton University School of Computing") {
              organizationLink = "https://www.binghamton.edu/computer-science/index.html";
            } else if (role.organization === "Theta Tau Engineering Fraternity") {
              organizationLink = "https://www.binghamtonthetatau.org/";
            } else if (role.organization === "Duke of Edinburgh’s International Award") {
              organizationLink = "https://intaward.org/";
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
                  <div className="leadership-card">
                    <h5 className="leadership-title">
                      <FaUserTie className="icon" />
                      {role.title}
                    </h5>

                    {/* Organization (Clickable Link) */}
                    <p className="leadership-organization">
                      <FaBuilding className="icon" />
                      <a
                        href={organizationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leadership-link"
                      >
                        {role.organization}
                      </a>
                    </p>

                    {/* Location (Google Maps Link) */}
                    <p className="leadership-location">
                      <FaMapMarkerAlt className="icon" />
                      <a
                        href={`https://www.google.com/maps/search/${encodeURIComponent(role.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leadership-link"
                      >
                        {role.location}
                      </a>
                    </p>

                    {/* Duration */}
                    <p className="leadership-duration">
                      <FaCalendarAlt className="icon" />
                      {role.duration}
                    </p>

                    {/* Bullet Points */}
                    <ul className="leadership-points">
                      {role.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
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

export default Leadership;
