"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveDot = (e: MouseEvent) => {
      gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0.08, ease: "power2.out" });
      gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power2.out" });
    };

    const onEnter = () => {
      gsap.to(dot.current, { scale: 2.5, duration: 0.3 });
      gsap.to(ring.current, { scale: 1.6, borderColor: "var(--accent)", duration: 0.3 });
    };

    const onLeave = () => {
      gsap.to(dot.current, { scale: 1, duration: 0.3 });
      gsap.to(ring.current, { scale: 1, borderColor: "rgba(196,163,90,0.45)", duration: 0.3 });
    };

    const attach = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", moveDot);
    attach();

    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveDot);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" style={{ top: 0, left: 0 }} />
      <div ref={ring} className="cursor-ring" style={{ top: 0, left: 0 }} />
    </>
  );
}
