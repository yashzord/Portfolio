import React from "react";
import { about } from "../data";
import TiltedCard from "./TiltedCard";
import "./TiltedCard.css";
import "./About.css"; // Import About.css for specific styling
import YashPicture from "../assets/Yash_Picture.jpg"; // Import your image
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaStackOverflow,
  FaInstagram,
  FaXing,
  FaSpotify,
  FaChessKnight,
} from "react-icons/fa"; // Import icons for socials

const About = () => {
  return (
    <section id="about" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">About Me</h2>
        <div className="row justify-content-center">
          {/* New Tilted Card with Picture */}
          <TiltedCard
            imageSrc={YashPicture} // Use the imported image
            altText="Yash's Picture"
            containerHeight="600px" // Card height
            containerWidth="400px"  // Card width
            scaleOnHover={1.2}
            rotateAmplitude={12}
            displayOverlayContent={false} // Disable overlay content for this card
          />

          {/* About Card */}
          <TiltedCard
            captionText={`${about.name}, based in ${about.location}`}
            containerHeight="600px" // Increased height
            containerWidth="400px"  // Reduced width for a vertical card
            rotateAmplitude={12}
            scaleOnHover={1.2}
            displayOverlayContent={true}
            overlayContent={
              <div>
                <p className="about-name">
                  <strong>{about.name}</strong>, a passionate computer scientist specializing in AI, ML, and full-stack development.
                </p>
                <p className="about-email">
                  <FaEnvelope className="icon" />
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${about.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {about.email}
                  </a>
                </p>
                <p className="about-phone">
                  <FaPhone className="icon" />
                  <a href={`tel:${about.contact}`} target="_blank" rel="noopener noreferrer">
                    {about.contact}
                  </a>
                </p>
                <p className="about-location">
                  <FaMapMarkerAlt className="icon" />
                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(about.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {about.location}
                  </a>
                </p>
                <p className="about-goal">
                  My goal is to build cutting-edge solutions that solve real-world problems and have a meaningful impact.
                </p>
              </div>
            }
          />

          {/* Socials, Chess, and Music Card */}
          <TiltedCard
            captionText="Here are my socials, hit me up for a game of chess, or dive into my work of music!"
            containerHeight="600px" // Card height
            containerWidth="400px"  // Card width
            rotateAmplitude={12}
            scaleOnHover={1.2}
            displayOverlayContent={true}
            overlayContent={
              <div className="socials-list">
                <p className="connect-message">Here are my socials:</p>
                <div className="social-icons">
                  <a href="https://github.com/yashzord" target="_blank" rel="noopener noreferrer" className="github">
                    <FaGithub />
                  </a>
                  <a
                    href="http://www.linkedin.com/in/Yashwant-Bitra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://stackoverflow.com/users/21560725/snakezord"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stackoverflow"
                  >
                    <FaStackOverflow />
                  </a>
                  <a href="https://www.instagram.com/yashwantbitra/" target="_blank" rel="noopener noreferrer" className="instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://x.com/yashwan09735949" target="_blank" rel="noopener noreferrer" className="twitter">
                    <FaXing />
                  </a>
                </div>

                <p className="chess-message">Hit me up for a game of chess:</p>
                <p className="about-chess">
                  <FaChessKnight className="icon" />
                  <a href="https://lichess.org/@/yashubitra" target="_blank" rel="noopener noreferrer">
                    Lichess
                  </a>
                </p>
                <p className="about-chess">
                  <FaChessKnight className="icon" />
                  <a href="https://www.chess.com/member/yashubitra" target="_blank" rel="noopener noreferrer">
                    Chess.com
                  </a>
                </p>


                <p className="music-message">Dive into my world of music:</p>
                <div className="social-icons">
                  <a href="https://open.spotify.com/user/31h3xfv7iib46nypgbr4peyncs64" target="_blank" rel="noopener noreferrer" className="spotify">
                    <FaSpotify />
                  </a>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default About;
