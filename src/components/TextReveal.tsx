"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  stagger?: number;
  triggerOnScroll?: boolean;
  splitBy?: "word" | "letter";
}

export default function TextReveal({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
  stagger = 0.04,
  triggerOnScroll = true,
  splitBy = "word",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const spans = containerRef.current.querySelectorAll(".reveal-unit");

    const animation = gsap.fromTo(
      spans,
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        stagger,
        delay,
        ease: "power3.out",
        ...(triggerOnScroll
          ? {
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          : {}),
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === containerRef.current) st.kill();
      });
    };
  }, [delay, stagger, triggerOnScroll]);

  const units =
    splitBy === "word"
      ? children.split(" ").map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <span className="reveal-unit inline-block">{word}</span>
          </span>
        ))
      : children.split("").map((letter, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <span className="reveal-unit inline-block">
              {letter === " " ? "\u00A0" : letter}
            </span>
          </span>
        ));

  return (
    <Tag ref={containerRef as React.RefObject<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>} className={className}>
      {units}
    </Tag>
  );
}
