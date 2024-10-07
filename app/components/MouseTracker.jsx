"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target instanceof HTMLElement) {
        setIsHoveringLink(
          e.target.tagName.toLowerCase() === "a" || e.target.closest("a")
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="cursor-container"
        className="fixed pointer-events-none"
        style={{
          width: "55px",
          height: "55px",
          top: 0,
          left: 0,
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      >
        {/* Pulsating Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-purple-500"
          initial={{ opacity: 0.2 }}
          animate={{
            scale: isHoveringLink ? [1, 1.1, 1] : [1, 1.05, 1],
            opacity: isHoveringLink ? [0.3, 0.4, 0.3] : [0.2, 0.3, 0.2],
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
            borderColor: isHoveringLink ? "#9b5de5" : "#9b5de5",
          }}
          animate={{
            scale: isHoveringLink ? 1.8 : 1,
            opacity: isHoveringLink ? 0.8 : 0.6,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        />

        {/* Inner Dot */}
        <motion.div
          className="absolute rounded-full bg-purple-500"
          style={{
            width: "8px",
            height: "8px",
            top: "23px",
            left: "23px",
          }}
          animate={{
            scale: isHoveringLink ? 1.3 : 1,
            opacity: isHoveringLink ? 0.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default MouseTracker;
