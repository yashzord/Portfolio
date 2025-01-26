import React from "react";
import { experience } from "../data";
import TiltedCard from "./TiltedCard";
import "./TiltedCard.css";

const Experience = () => {
  return (
    <section id="experience" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">Professional Experience</h2>
        <div className="row justify-content-center">
          {experience.map((job, index) => (
            <TiltedCard
              key={index}
              containerHeight="400px"
              containerWidth="90%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              displayOverlayContent={true}
              overlayContent={
                <div>
                  <h5>{job.title}</h5>
                  <p>
                    <strong>Organization:</strong> {job.organization}
                  </p>
                  <p>
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p>
                    <strong>Duration:</strong> {job.duration}
                  </p>
                  <ul>
                    {job.points.map((point, idx) => (
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

export default Experience;
