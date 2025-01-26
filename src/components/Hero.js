import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Waves from "./Waves";
import Ballpit from "./Ballpit";
import SplitText from "./SplitText";
import BlurText from "./BlurText";
import "./Hero.css";

const Hero = () => {
  const [showBallpit, setShowBallpit] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // To trigger re-animation

  const toggleBallpit = () => {
    setShowBallpit((prev) => !prev);
    setAnimationKey((prev) => prev + 1); // Increment key to force re-animation
  };

  return (
    <section id="hero" className={`hero-container ${showBallpit ? "dark-mode" : ""}`}>
      {/* Waves Background */}
      {!showBallpit && (
        <Waves lineColor="rgba(255,255,255,0.2)" backgroundColor="#16213e" />
      )}

      {/* Ballpit Animation */}
      {showBallpit && (
        <div className="ballpit-container fade-in">
          <Ballpit
            count={150}
            gravity={0.4}
            friction={0.98}
            wallBounce={0.9}
            followCursor={true}
            colors={["#FF6F61", "#6A0572", "#057DCD", "#FFD166", "#06D6A0"]}
          />
        </div>
      )}

      {/* Hero Text Content */}
      <div
        className={`hero-content ${
          showBallpit ? "dark-text large-text" : "light-text small-text"
        }`}
      >
        {/* "Hi there, I am" with SplitText Animation */}
        <SplitText
          key={`split-${animationKey}`} // Unique key to re-render SplitText
          text="Hi there, I am"
          className="hero-title"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />

        {/* "Yashwant Bitra" with BlurText Animation */}
        <BlurText
          key={`blur-${animationKey}`} // Unique key to re-render BlurText
          text="Yashwant Bitra"
          delay={200}
          animateBy="words"
          direction="top"
          className="hero-name"
          animationFrom={{ filter: "blur(10px)", opacity: 0, transform: "translate3d(0,-50px,0)" }}
          animationTo={[
            { filter: "blur(5px)", opacity: 0.5, transform: "translate3d(0,5px,0)" },
            { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
          ]}
          easing="easeOutCubic"
        />

        {/* ReactTyped for animated roles */}
        <p className="hero-typed">
          <ReactTyped
            strings={[
              "Full-Stack Developer",
              "AI/ML Engineer",
              "Software Engineer",
              "Data Analyst",
              "Chess Enthusiast",
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </p>

        {/* Toggle Ballpit Button */}
        <button onClick={toggleBallpit} className="hero-button">
          {showBallpit ? "Seal the Fun Zone" : "Unleash the Fun!"}
        </button>
      </div>
    </section>
  );
};

export default Hero;
