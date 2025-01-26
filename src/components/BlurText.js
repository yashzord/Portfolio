import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  animationFrom,
  animationTo,
  easing = "easeOutCubic",
  threshold = 0.1,
  rootMargin = "0px",
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom =
    direction === "top"
      ? { filter: "blur(10px)", opacity: 0, transform: "translate3d(0,-50px,0)" }
      : { filter: "blur(10px)", opacity: 0, transform: "translate3d(0,50px,0)" };

  const defaultTo = [
    {
      filter: "blur(5px)",
      opacity: 0.5,
      transform: direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
    },
    { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
  ];

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView ? animationTo || defaultTo : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <p ref={ref} className={`blur-text ${className}`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: "inline-block",
            willChange: "transform, filter, opacity",
          }}
        >
          {elements[index] === " " ? " " : elements[index]}
          {animateBy === "words" && index < elements.length - 1 && " "}
        </animated.span>
      ))}
    </p>
  );
};

export default BlurText;
