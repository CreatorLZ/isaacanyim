"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Track hover state for interactive elements
    const handleElementHover = () => {
      setIsHovering(true);
    };

    const handleElementLeave = () => {
      setIsHovering(false);
    };

    // Add hover detection to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover);
      el.addEventListener("mouseleave", handleElementLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, []);

  return (
    <div
      style={{ cursor: "none" }} // Hide the default cursor
    >
      <AnimatePresence>
        <motion.div
          key="cursor-container"
          className="fixed pointer-events-none"
          style={{
            width: "55px",
            height: "55px",
            top: 0,
            left: 0,
            zIndex: 150,
          }}
          animate={{
            x: position.x - 27, // Centering
            y: position.y - 27,
          }}
          transition={{
            type: "spring",
            stiffness: 100, // Lower stiffness for slower response
            damping: 20, // Higher damping for smoother trailing effect
            mass: 0.7,
          }}
        >
          {/* Pulsating Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-transparent"
            initial={{ opacity: 0.2 }}
            animate={{
              scale: isHovering ? [1, 1.1, 1] : [1, 1.05, 1],
              opacity: isHovering ? [0.3, 0.4, 0.3] : [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* Outer Circle */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: "1px solid",
              borderColor: isHovering ? "#7856ff" : "#7856ff",
            }}
            animate={{
              scale: isHovering ? 1.8 : 1,
              opacity: isHovering ? 0.8 : 0.6,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          />

          {/* Inner Dot (which acts as the actual cursor) */}
          <motion.div
            className="absolute rounded-full bg-primary"
            style={{
              width: "8px",
              height: "8px",
              top: "23px",
              left: "23px",
            }}
            animate={{
              scale: isHovering ? 1.3 : 1,
              opacity: isHovering ? 0.5 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MouseTracker;
