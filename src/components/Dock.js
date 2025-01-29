import { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import "./Dock.css";

const Dock = ({ position = "bottom", responsive = "bottom" }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(position);
  const [isDockVisible, setIsDockVisible] = useState(true);
  const navigate = useNavigate();

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

  // Detect when user scrolls near the footer and hide Dock
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop < windowHeight - 50) {
          setIsDockVisible(false);
        } else {
          setIsDockVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  }, [position, responsive]);

  const getDockStyle = () => ({
    flexDirection: currentPosition === "left" || currentPosition === "right" ? "column" : "row",
    opacity: isDockVisible ? 1 : 0, // Hide Dock when near footer
    pointerEvents: isDockVisible ? "auto" : "none", // Disable interaction when hidden
    transition: "opacity 0.3s ease-in-out",
  });

  const springs = useSprings(
    dockItems.length,
    dockItems.map((_, index) => ({
      transform: hoverIndex === index
        ? `scale(1.4) translateY(-4px)`
        : hoverIndex !== null && Math.abs(hoverIndex - index) === 1
        ? `scale(1.2) translateY(0px)`
        : `scale(1) translateY(0px)`,
      config: { mass: 1, tension: 170, friction: 20 },
    }))
  );

  const handleItemClick = (sectionId) => {
    if (sectionId === "#hero") {
      navigate("/");
    } else {
      const anchor = sectionId.replace("#", "");
      navigate(`/main#${anchor}`);
    }
  };

  return (
    <div className={`dock-container ${currentPosition}`}>
      <animated.div className="dock" style={getDockStyle()}>
        {dockItems.map((item, index) => (
          <animated.div
            key={item.label}
            className="dock-item"
            style={springs[index]}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
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
