"use client";
import { ReactLenis } from "lenis/react";

function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.008,
        duration: 1.7,
        smooth: true,
        smoothTouch: true,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default LenisProvider;
