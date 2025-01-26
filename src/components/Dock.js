// src/components/Dock.js

import { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
import "./Dock.css";

// NEW: import useNavigate for multi-page navigation
import { useNavigate } from "react-router-dom";

const Dock = ({ position = "bottom", collapsible = false, responsive = "bottom" }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isDockVisible, setDockVisible] = useState(!collapsible);
  const [currentPosition, setCurrentPosition] = useState(position);

  const navigate = useNavigate(); // for route changes

  // Map the Dock items to corresponding sections
  const dockItems = [
    { icon: "🏠", label: "Hero", sectionId: "#hero" },
    { icon: "👨‍💻", label: "About", sectionId: "#about" },
    { icon: "🎓", label: "Education", sectionId: "#education" },
    { icon: "🛠️", label: "Skills", sectionId: "#skills" },
    { icon: "💼", label: "Experience", sectionId: "#experience" },
    { icon: "📁", label: "Projects", sectionId: "#projects" },
    { icon: "👑", label: "Leadership", sectionId: "#leadership" },
    { icon: "📞", label: "Contact", sectionId: "#contact" },
  ];

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleParentMouseEnter = () => {
    if (collapsible) {
      setDockVisible(true);
    }
  };

  const handleParentMouseLeave = () => {
    if (collapsible) {
      setDockVisible(false);
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      if (responsive && window.innerWidth <= 768) {
        setCurrentPosition(responsive);
      } else {
        setCurrentPosition(position);
      }
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [position, responsive, collapsible]);

  const getDockStyle = () => {
    const flexDirection =
      currentPosition === "left" || currentPosition === "right" ? "column" : "row";
    return { flexDirection };
  };

  // Define springs for all dock items
  const springs = useSprings(
    dockItems.length,
    dockItems.map((_, index) => {
      const translateValue = (() => {
        if (hoverIndex === index) {
          switch (currentPosition) {
            case "left":
              return "translateX(5px) translateY(0px)";
            case "right":
              return "translateX(-5px) translateY(0px)";
            case "top":
              return "translateX(0px) translateY(5px)";
            case "bottom":
            default:
              return "translateX(0px) translateY(-5px)";
          }
        } else {
          return "translateX(0px) translateY(0px)";
        }
      })();

      return {
        transform:
          hoverIndex === index
            ? `scale(1.5) ${translateValue}`
            : hoverIndex !== null && Math.abs(hoverIndex - index) === 1
            ? `scale(1.3) translateX(0px) translateY(0px)`
            : `scale(1) translateX(0px) translateY(0px)`,
      };
    })
  );

  const visibilitySpring = useSprings(1, [
    {
      opacity: isDockVisible ? 1 : 0,
      config: { tension: 120, friction: 14 },
    },
  ])[0];

  // NEW: In multi-page mode, we navigate to "/" for Hero or "/main#sectionId"
  const handleItemClick = (sectionId) => {
    if (sectionId === "#hero") {
      navigate("/");
    } else {
      // remove '#' from sectionId to build route + anchor
      const anchor = sectionId.replace("#", "");
      navigate(`/main#${anchor}`);
    }
  };

  return (
    <div
      className={`dock-container ${currentPosition}`}
      onMouseEnter={handleParentMouseEnter}
      onMouseLeave={handleParentMouseLeave}
    >
      <animated.div className="dock" style={{ ...getDockStyle(), ...visibilitySpring }}>
        {dockItems.map((item, index) => (
          <animated.div
            key={item.label}
            className="dock-item"
            style={springs[index]}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleItemClick(item.sectionId)}
          >
            {item.icon}
            <span className="dock-label">{item.label}</span>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default Dock;
