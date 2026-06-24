"use client";

import { useRef, useState, useEffect } from "react";

const RING_LERP = 0.12;
const VELOCITY_LERP = 0.15;
const DOT_STRETCH_FACTOR = 0.04;
const DOT_STRETCH_MAX = 0.6;
const RING_STRETCH_FACTOR = 0.06;
const RING_STRETCH_MAX = 0.35;

const lerp = (current, target, factor) => current + (target - current) * factor;

const MouseTracker = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-active");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let prevRingX = 0;
    let prevRingY = 0;
    let velX = 0;
    let velY = 0;
    let initialized = false;
    let rafId;

    const onMouseMove = (e) => {
      if (!initialized) {
        mouseX = ringX = prevMouseX = prevRingX = e.clientX;
        mouseY = ringY = prevMouseY = prevRingY = e.clientY;
        initialized = true;
      }

      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);

      const target = e.target;
      setIsHovering(
        !!target.closest(
          'a, button, [role="button"], input, textarea, select, label, [data-clickable]'
        )
      );
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const animate = () => {
      velX = lerp(velX, mouseX - prevMouseX, VELOCITY_LERP);
      velY = lerp(velY, mouseY - prevMouseY, VELOCITY_LERP);
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      const dotSpeed = Math.hypot(velX, velY);
      const dotAngle = (Math.atan2(velY, velX) * 180) / Math.PI;
      const dotStretch = Math.min(DOT_STRETCH_FACTOR * dotSpeed, DOT_STRETCH_MAX);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) rotate(${dotAngle}deg) scale(${1 + dotStretch}, ${1 - 0.5 * dotStretch})`;
      }

      ringX = lerp(ringX, mouseX, RING_LERP);
      ringY = lerp(ringY, mouseY, RING_LERP);

      const ringVelX = ringX - prevRingX;
      const ringVelY = ringY - prevRingY;
      prevRingX = ringX;
      prevRingY = ringY;

      const ringSpeed = Math.hypot(ringVelX, ringVelY);
      const ringAngle = (Math.atan2(ringVelY, ringVelX) * 180) / Math.PI;
      const ringStretch = Math.min(RING_STRETCH_FACTOR * ringSpeed, RING_STRETCH_MAX);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) rotate(${ringAngle}deg) scale(${1 + ringStretch}, ${1 - 0.5 * ringStretch})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${visible ? "is-visible" : ""} ${
          isHovering ? "is-hidden" : ""
        }`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${visible ? "is-visible" : ""} ${
          isHovering ? "is-expanded" : ""
        }`}
        aria-hidden="true"
      />
    </>
  );
};

export default MouseTracker;
