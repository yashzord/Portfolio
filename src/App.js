// src/App.js

import React, { useEffect, useState } from "react";
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

import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./pageTransitions.css";

function App() {
  const [showSplashCursor, setShowSplashCursor] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;

    if (section) {
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

  const location = useLocation();

  const [nodeRefs] = useState({});
  const routePath = location.pathname;

  if (!nodeRefs[routePath]) {
    nodeRefs[routePath] = React.createRef();
  }

  useEffect(() => {
    if (location.pathname === "/main" && location.hash) {
      const anchor = location.hash.replace("#", "");
      handleScrollToSection(anchor);
    }
  }, [location]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={routePath}
        timeout={700}
        classNames="page"
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

                  {/* All sections displayed on one page */}
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

// Wrap App with HashRouter
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
