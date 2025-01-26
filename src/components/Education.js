import React from "react";
import { education, relevantCoursework } from "../data";
import TiltedCard from "./TiltedCard";
import "./TiltedCard.css";

const Education = () => {
  return (
    <section id="education" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">Education</h2>
        <div className="row justify-content-center">
          {education.map((edu, index) => (
            <TiltedCard
              key={index}
              containerHeight="600px" // Increased height
              containerWidth="400px"  // Reduced width for a vertical card
              rotateAmplitude={12}
              scaleOnHover={1.2}
              displayOverlayContent={true}
              overlayContent={
                <div>
                  <h5>{edu.degree}</h5>
                  <p>
                    <strong>School:</strong> {edu.school}
                  </p>
                  <p>
                    <strong>GPA:</strong> {edu.gpa}
                  </p>
                  <p>
                    <strong>Graduation:</strong> {edu.graduation}
                  </p>
                  {edu.honors && (
                    <p>
                      <strong>Honors:</strong> {edu.honors}
                    </p>
                  )}
                </div>
              }
            />
          ))}
        </div>
        <div className="row justify-content-center mt-4">
          <TiltedCard
            containerHeight="600px" // Taller card for Relevant Coursework
            containerWidth="400px"  // Vertical design
            rotateAmplitude={12}
            scaleOnHover={1.2}
            displayOverlayContent={true}
            overlayContent={
              <div>
                <h5>Relevant Coursework</h5>
                <p>{relevantCoursework}</p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
