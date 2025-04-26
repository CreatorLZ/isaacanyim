// components/LenisProvider.js
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      lerp: 1.15, // Increased for faster response, subtle inertia (0.1–0.2 range)
      smoothWheel: true, // Smooth mouse wheel scrolling
      smoothTouch: true, // Enable for touch devices
      wheelMultiplier: 1.8, // Faster scroll speed, less resistance (1–1.5 range)
      touchMultiplier: 1.5, // Balanced touch sensitivity
      duration: 0.1, // Animation duration in seconds for smoother transitions
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo easing for natural feel
    });

    // Animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle resize to prevent issues with dynamic layouts
    window.addEventListener("resize", () => lenis.resize());

    // Cleanup
    return () => {
      lenis.destroy();
      window.removeEventListener("resize", () => lenis.resize());
    };
  }, []);

  return <>{children}</>;
}
