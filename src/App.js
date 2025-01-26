// src/App.js

import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dock from "./components/Dock";
import SplashCursor from "./components/SplashCursor";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

/* For multi-page + fade transitions (nodeRef fix) */
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// NEW: Black fade transitions in pageTransitions.css
import "./pageTransitions.css";

function App() {
  const [showSplashCursor, setShowSplashCursor] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  /**
   * handleScrollToSection
   * - We use an extra offset of 80px for "padding" from the top
   * - You can adjust the '80' to any number you like (e.g., 100, 120, etc.)
   */
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;

    if (section) {
      // Increase or decrease '80' to fine-tune the offset
      const offsetTop = section.offsetTop - navbarHeight - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const toggleSplashCursor = () => {
    setShowSplashCursor((prev) => !prev);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // For route transitions
  const location = useLocation();

  // === Refs to avoid findDOMNode usage ===
  const [nodeRefs] = useState({});
  // We only track the REFS by pathname so that hash changes won't cause new transitions
  const routePath = location.pathname;

  if (!nodeRefs[routePath]) {
    nodeRefs[routePath] = React.createRef();
  }

  // Scroll if /main#hash
  useEffect(() => {
    if (location.pathname === "/main" && location.hash) {
      const anchor = location.hash.replace("#", "");
      handleScrollToSection(anchor);
    }
  }, [location]);

  return (
    // Use routePath as the key for transitions
    <TransitionGroup component={null}>
      <CSSTransition
        key={routePath}
        timeout={700}     // <-- Slightly longer for extra smooth
        classNames="page" // page- classes in pageTransitions.css
        nodeRef={nodeRefs[routePath]}
      >
        <div ref={nodeRefs[routePath]}>
          <Routes location={location}>
            {/* 1) HERO Page */}
            <Route
              path="/"
              element={
                <div className={isDarkMode ? "dark-mode" : "light-mode"}>
                  <Navbar
                    toggleSplashCursor={toggleSplashCursor}
                    isSplashActive={showSplashCursor}
                    isDarkMode={isDarkMode}
                    toggleTheme={toggleTheme}
                  />

                  {showSplashCursor && <SplashCursor />}

                  <Dock
                    collapsible={true}
                    position="bottom"
                    onItemClick={(sectionId) => handleScrollToSection(sectionId)}
                  />

                  {/* Hero section alone */}
                  <section id="hero">
                    <Hero />
                  </section>

                  <Footer />
                </div>
              }
            />

            {/* 2) MAIN Page - all other sections on one page */}
            <Route
              path="/main"
              element={
                <div className={isDarkMode ? "dark-mode" : "light-mode"}>
                  <Navbar
                    toggleSplashCursor={toggleSplashCursor}
                    isSplashActive={showSplashCursor}
                    isDarkMode={isDarkMode}
                    toggleTheme={toggleTheme}
                  />

                  {showSplashCursor && <SplashCursor />}

                  <Dock
                    collapsible={true}
                    position="bottom"
                    onItemClick={(sectionId) => handleScrollToSection(sectionId)}
                  />

                  {/* 
                    All sections displayed on one page; 
                    handleScrollToSection just scrolls to the heading. 
                  */}
                  <div className="main-sections">
                    <section id="about">
                      <About />
                    </section>
                    <section id="education">
                      <Education />
                    </section>
                    <section id="skills">
                      <Skills />
                    </section>
                    <section id="experience">
                      <Experience />
                    </section>
                    <section id="projects">
                      <Projects />
                    </section>
                    <section id="leadership">
                      <Leadership />
                    </section>
                    <section id="contact">
                      <Contact />
                    </section>
                  </div>

                  <Footer />
                </div>
              }
            />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

// Wrap App with BrowserRouter
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
