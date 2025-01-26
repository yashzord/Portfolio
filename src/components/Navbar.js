import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  toggleSplashCursor,
  isSplashActive,
  isDarkMode,
  toggleTheme,
}) => {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (sectionId === "hero") {
      navigate("/");
    } else {
      navigate(`/main#${sectionId}`);
    }
  };

  return (
    <nav className={`navbar navbar-expand-md ${isDarkMode ? "navbar-dark" : "navbar-light"}`}>
      <div className="container">
        {/* Brand */}
        <a
          className="navbar-brand fw-bold"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("hero");
          }}
        >
          YB {/* Replaced full name with initials */}
        </a>

        {/* Toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            {/* Section Links */}
            <li className="nav-item">
              <a
                className="nav-link about-link"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("about");
                }}
              >
                <i className="bi bi-person-circle"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link education-link"
                href="#education"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("education");
                }}
              >
                <i className="bi bi-mortarboard-fill"></i> Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link skills-link"
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("skills");
                }}
              >
                <i className="bi bi-tools"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link experience-link"
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("experience");
                }}
              >
                <i className="bi bi-briefcase-fill"></i> Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link projects-link"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("projects");
                }}
              >
                <i className="bi bi-folder-fill"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link leadership-link"
                href="#leadership"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("leadership");
                }}
              >
                <i className="bi bi-star-fill"></i> Leadership
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link contact-link"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
              >
                <i className="bi bi-telephone-fill"></i> Contact
              </a>
            </li>

            {/* Splash Button */}
            <li className="nav-item">
              <button
                onClick={toggleSplashCursor}
                className={`btn splash-btn ${isSplashActive ? "active" : ""}`}
              >
                <i className={`bi ${isSplashActive ? "bi-droplet-fill" : "bi-droplet"}`}></i>
              </button>
            </li>

            {/* Theme Button */}
            <li className="nav-item ms-2">
              <button onClick={toggleTheme} className="btn theme-btn">
                {isDarkMode ? (
                  <i className="bi bi-sun-fill"></i>
                ) : (
                  <i className="bi bi-moon-fill"></i>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
