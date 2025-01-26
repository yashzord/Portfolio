import React from "react";
import { projects } from "../data";
import TiltedCard from "./TiltedCard";
import "./TiltedCard.css";

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <TiltedCard
              key={index}
              containerHeight="400px"
              containerWidth="90%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              displayOverlayContent={true}
              overlayContent={
                <div>
                  <h5>{project.title}</h5>
                  <p>
                    <strong>Technologies:</strong> {project.technologies.join(", ")}
                  </p>
                  <p>
                    <strong>Duration:</strong> {project.duration}
                  </p>
                  <ul>
                    {project.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
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

export default Projects;
