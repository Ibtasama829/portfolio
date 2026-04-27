// ============================================
// REUSABLE GSAP ANIMATION PRESETS
// ============================================

import gsap from "gsap";

export const EASE = {
  smooth: "power3.out",
  expo: "expo.out",
  circ: "circ.out",
  elastic: "elastic.out(1, 0.5)",
  bounce: "bounce.out",
};

export const DURATION = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  xslow: 1.8,
};

// Fade in from bottom
export const fadeInUp = (
  element: gsap.TweenTarget,
  delay = 0,
  duration = DURATION.normal
) => {
  return gsap.fromTo(
    element,
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration, delay, ease: EASE.smooth }
  );
};

// Fade in from left
export const fadeInLeft = (
  element: gsap.TweenTarget,
  delay = 0,
  duration = DURATION.normal
) => {
  return gsap.fromTo(
    element,
    { x: -60, opacity: 0 },
    { x: 0, opacity: 1, duration, delay, ease: EASE.smooth }
  );
};

// Staggered children reveal
export const staggerReveal = (
  elements: gsap.TweenTarget,
  stagger = 0.1,
  delay = 0
) => {
  return gsap.fromTo(
    elements,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: DURATION.normal,
      stagger,
      delay,
      ease: EASE.smooth,
    }
  );
};

// Scale in animation
export const scaleIn = (
  element: gsap.TweenTarget,
  delay = 0,
  duration = DURATION.normal
) => {
  return gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration, delay, ease: EASE.smooth }
  );
};

// Line draw animation
export const lineDraw = (
  element: gsap.TweenTarget,
  delay = 0,
  duration = DURATION.slow
) => {
  return gsap.fromTo(
    element,
    { scaleX: 0, transformOrigin: "left center" },
    { scaleX: 1, duration, delay, ease: EASE.expo }
  );
};

// Letter by letter reveal
export const letterReveal = (
  element: gsap.TweenTarget,
  delay = 0,
  stagger = 0.03
) => {
  return gsap.fromTo(
    element,
    { y: "100%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: DURATION.normal,
      stagger,
      delay,
      ease: EASE.expo,
    }
  );
};

// Counter animation
export const counterAnimation = (
  element: HTMLElement,
  target: number,
  duration = 2
) => {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: target,
    duration,
    ease: EASE.circ,
    onUpdate: () => {
      element.textContent = `${Math.round(obj.value)}%`;
    },
  });
};
