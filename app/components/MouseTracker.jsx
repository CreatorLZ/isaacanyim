"use client";

import { useRef, useState, useEffect } from "react";

const RING_LERP = 0.12;
const VELOCITY_LERP = 0.15;
const DOT_STRETCH_FACTOR = 0.04;
const DOT_STRETCH_MAX = 0.6;
const RING_STRETCH_FACTOR = 0.06;
const RING_STRETCH_MAX = 0.35;

const GALLERY_LERP = 0.1;
const GALLERY_CYCLE_MS = 400;
const GALLERY_IMAGES = [
  "/bagxtra.png",
  "/taskwise.webp",
  "/_next/image?url=%2Fideafundr.png&w=384&q=75",
  "/silkywriters.webp",
  "/wristy.webp",
  "/_next/image?url=%2Fexpressline.png&w=384&q=75",
  "/moviebox.webp",
  "/adresstracker.webp",
];

const lerp = (current, target, factor) => current + (target - current) * factor;

const MouseTracker = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const galleryRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isGalleryActive, setIsGalleryActive] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const hasPreloadedRef = useRef(false);

  // Preload gallery images in the background when desktop cursor is enabled
  // This improves subsequent cycles but does NOT block the interval from starting
  useEffect(() => {
    if (enabled && !hasPreloadedRef.current) {
      hasPreloadedRef.current = true;
      GALLERY_IMAGES.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [enabled]);

  // Image cycling interval — starts immediately on hover, no loading gate
  useEffect(() => {
    if (isGalleryActive) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
      }, GALLERY_CYCLE_MS);
    } else {
      setCurrentImageIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isGalleryActive]);

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
    let galleryX = 0;
    let galleryY = 0;
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
        mouseX = ringX = galleryX = prevMouseX = prevRingX = e.clientX;
        mouseY = ringY = galleryY = prevMouseY = prevRingY = e.clientY;
        initialized = true;
      }

      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);

      const target = e.target;

      // Check for gallery trigger
      const galleryTrigger = target.closest("[data-cursor-gallery]");
      setIsGalleryActive(!!galleryTrigger);

      setIsHovering(
        !!target.closest(
          'a, button, [role="button"], input, textarea, select, label, [data-clickable]'
        )
      );
    };

    const onMouseLeave = () => {
      setVisible(false);
      setIsGalleryActive(false);
    };
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

      // Gallery follows cursor with its own lerp (offset so it doesn't cover the button)
      galleryX = lerp(galleryX, mouseX, GALLERY_LERP);
      galleryY = lerp(galleryY, mouseY, GALLERY_LERP);

      // Subtle tilt based on cursor velocity for organic feel
      const galleryTilt = Math.max(-12, Math.min(12, velX * 0.8));

      if (galleryRef.current) {
        galleryRef.current.style.transform = `translate(${galleryX + 15}px, ${galleryY - 140}px) rotate(${galleryTilt}deg)`;
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
          isHovering || isGalleryActive ? "is-expanded" : ""
        }`}
        aria-hidden="true"
      />
      <div
        ref={galleryRef}
        className={`cursor-gallery ${isGalleryActive ? "is-active" : ""}`}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={GALLERY_IMAGES[currentImageIndex]}
          alt=""
          draggable={false}
        />
      </div>
    </>
  );
};

export default MouseTracker;

