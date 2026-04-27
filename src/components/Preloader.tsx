"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obj = { val: 0 };
    const tl = gsap.timeline();

    tl.to(obj, {
      val: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate() { setProgress(Math.round(obj.val)); },
      onComplete() {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
          delay: 0.2,
          onComplete,
        });
      },
    });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="preloader">
      {/* Name */}
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(1rem,2vw,1.25rem)",
          letterSpacing: "0.3em",
          color: "var(--accent)",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}>
          Ibtasam Ali
        </div>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(4rem,12vw,10rem)",
          fontWeight: 700,
          lineHeight: 1,
          color: "var(--text)",
          letterSpacing: "-0.04em",
        }}>
          {String(progress).padStart(2, "0")}
          <span style={{ color: "var(--accent)" }}>%</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="preloader-bar">
        <div className="preloader-fill" style={{ width: `${progress}%` }} />
      </div>

      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.7rem",
        letterSpacing: "0.2em",
        color: "var(--text-muted)",
        textTransform: "uppercase",
      }}>
        Loading Portfolio
      </div>
    </div>
  );
}
