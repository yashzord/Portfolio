import React from "react";
import { about } from "../data";
import TiltedCard from "./TiltedCard";
import "./TiltedCard.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">About Me</h2>
        <div className="row justify-content-center">
          <TiltedCard
            captionText={`${about.name}, based in ${about.location}`}
            containerHeight="600px" // Increased height
            containerWidth="400px"  // Reduced width for a vertical card
            rotateAmplitude={12}
            scaleOnHover={1.2}
            displayOverlayContent={true}
            overlayContent={
              <div>
                <p>
                  <strong>{about.name}</strong>, a passionate computer scientist specializing in AI, ML, and full-stack development.
                </p>
                <p>
                  <i className="bi bi-envelope-fill me-2 text-primary"></i>
                  <strong>Email: </strong>{about.email}
                </p>
                <p>
                  <i className="bi bi-telephone-fill me-2 text-primary"></i>
                  <strong>Phone: </strong>{about.contact}
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                  <strong>Location: </strong>{about.location}
                </p>
                <p>
                  My goal is to build cutting-edge solutions that solve real-world problems and have a meaningful impact.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default About;
