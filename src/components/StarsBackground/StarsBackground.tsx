import React, { useEffect, useState } from "react";
import "./StarsBackground.scss";

interface Star {
  size: number;
  xPos: number;
  yPos: number;
  animationDuration: number;
}

interface BackgroundProps {
  numStars?: number;
}

export const StarsBackground: React.FC<BackgroundProps> = ({
  numStars = 50,
}) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < numStars; i++) {
        const size = Math.random() * 2;
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        const animationDuration = Math.random() * 3 + 1; // Random duration between 1 and 4 seconds
        newStars.push({ size, xPos, yPos, animationDuration });
      }
      setStars(newStars);
    };

    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [numStars]);

  return (
    <div className="background">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star twinkling"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.yPos}px`,
            left: `${star.xPos}px`,
            animationDuration: `${star.animationDuration}s`, // Apply animation duration
          }}
        ></div>
      ))}
    </div>
  );
};
