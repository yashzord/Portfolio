import React from "react";
import { education, relevantCoursework } from "../data";
import TiltedCard from "./TiltedCard";
import "./Education.css";
import { FaGraduationCap, FaStar, FaChartLine } from "react-icons/fa"; // Import icons

const Education = () => {
  return (
    <section id="education" data-aos="fade-up" className="education-section">
      <div className="container">
        <h2 className="text-center">Education</h2>
        <div className="row justify-content-center">
          {education.map((edu, index) => (
            <TiltedCard
              key={index}
              containerHeight="600px"
              containerWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              displayOverlayContent={true}
              overlayContent={
                <div>
                  <h5 className="education-degree">{edu.degree}</h5>
                  <p className="education-school">
                    <a
                      href="https://www.binghamton.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {edu.school}
                    </a>
                  </p>
                  <p className="education-gpa">
                    <FaChartLine className="icon" />
                    <strong>GPA:</strong> {edu.gpa}
                  </p>
                  <p className="education-graduation">
                    <FaGraduationCap className="icon" />
                    <strong>Graduation:</strong> {edu.graduation}
                  </p>
                  {edu.honors && (
                    <p className="education-honors">
                      <FaStar className="icon" />
                      <strong>Honors:</strong> {edu.honors}
                    </p>
                  )}
                </div>
              }
            />
          ))}

          <TiltedCard
            containerHeight="600px"
            containerWidth="400px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            displayOverlayContent={true}
            overlayContent={
              <div>
                <h5 className="education-degree">Relevant Coursework</h5>
                <p className="relevant-coursework">{relevantCoursework}</p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
