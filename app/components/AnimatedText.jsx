import React, { useState, useEffect, useRef } from "react";

export const AnimatedText = ({ children, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const elementRef = useRef(null);
  const text = children?.toString() || "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 40);

      return () => clearTimeout(timer);
    }
  }, [isVisible, currentIndex, text]);

  return (
    <p ref={elementRef} className={className}>
      {displayedText.split("").map((char, index) => (
        <span
          key={index}
          className={`
            transition-colors duration-300
            ${char === " " ? "mr-1" : "inline-block"}
            ${index === displayedText.length - 1 && char !== " " ? "bg-primary text-black" : ""}
          `}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      {isVisible && currentIndex < text.length && (
        <span className="inline-block w-1 h-5 ml-1 bg-black animate-pulse" />
      )}
    </p>
  );
};
