import React from "react";
import { leadership } from "../data";
import TiltedCard from "./TiltedCard";
import "./TiltedCard.css";

const Leadership = () => {
  return (
    <section id="leadership" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">Leadership</h2>
        <div className="row justify-content-center">
          {leadership.map((role, index) => (
            <TiltedCard
              key={index}
              containerHeight="400px"
              containerWidth="90%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              displayOverlayContent={true}
              overlayContent={
                <div>
                  <h5>{role.title}</h5>
                  <p>
                    <strong>Organization:</strong> {role.organization}
                  </p>
                  <p>
                    <strong>Location:</strong> {role.location}
                  </p>
                  <p>
                    <strong>Duration:</strong> {role.duration}
                  </p>
                  <ul>
                    {role.points.map((point, idx) => (
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

export default Leadership;
