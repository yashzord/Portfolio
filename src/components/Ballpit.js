import { useRef, useEffect } from "react";
import createBallpit from "./ballpit-utility";

const Ballpit = ({
  className = "",
  followCursor = true,
  colors = ["#FF6F61", "#FFD166", "#06D6A0", "#118AB2", "#073B4C"],
  opacity = 0.8,
  ...props
}) => {
  const canvasRef = useRef(null);
  const spheresInstanceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    spheresInstanceRef.current = createBallpit(canvas, {
      followCursor,
      ...props,
      colors,
      materialParams: {
        opacity, // Adjust opacity of the balls
        transparent: true, // Enable transparency
        ...props.materialParams,
      },
    });

    return () => {
      if (spheresInstanceRef.current) {
        spheresInstanceRef.current.dispose();
      }
    };
    // Dependencies intentionally left empty for single initialization
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      className={`ballpit-canvas ${className}`}
      ref={canvasRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Ballpit;
