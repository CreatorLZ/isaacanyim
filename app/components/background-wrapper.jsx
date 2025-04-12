"use client";

import { Squares } from "./squares-background";

export default function BackgroundWrapper({ children }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background layer */}
      <div className="fixed inset-0 z-[-1]">
        <Squares
          direction="right"
          speed={0.1}
          borderColor="#cccccc"
          hoverFillColor="rgba(200, 200, 200, 0.3)"
          squareSize={150}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
