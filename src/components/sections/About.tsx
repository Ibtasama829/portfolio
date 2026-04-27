"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AstronomyScene = dynamic(() => import("@/components/three/AstronomyScene"), { ssr: false });

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-left", { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.fromTo(".about-right", { opacity: 0, scale: 0.9 }, {
        opacity: 1, scale: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.fromTo(".about-stat", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".about-stats", start: "top 90%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { val: "2+", label: "Years Experience" },
    { val: "10+", label: "Projects Done" },
    { val: "5+", label: "Happy Clients" },
    { val: "3+", label: "Skill Domains" },
  ];

  return (
    <section id="about" ref={sectionRef} style={{ padding: "6rem 0", position: "relative" }}>
      <div className="glow-blob" style={{ width: "500px", height: "400px", background: "radial-gradient(ellipse, rgba(196,163,90,0.04) 0%, transparent 70%)", top: "10%", right: "-5%" }} />

      <div className="container-main">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-badge"><span>01</span>About Me</div>
          <h2 className="text-display" style={{ color: "var(--text)", maxWidth: "550px" }}>
            Building at the<br />
            <span style={{ color: "var(--accent)" }}>intersection</span> of<br />
            code & design
          </h2>
        </div>

        {/* Two columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }} className="about-grid">

          {/* Left: text */}
          <div className="about-left" style={{ opacity: 0 }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "var(--text-dim)", marginBottom: "1.5rem" }}>
              I&apos;m a creative developer passionate about crafting digital experiences that feel alive.
              My journey spans across{" "}
              <span style={{ color: "var(--accent)", fontWeight: 500 }}>frontend development</span>,{" "}
              <span style={{ color: "var(--accent)", fontWeight: 500 }}>Linux systems</span>,{" "}
              <span style={{ color: "var(--accent)", fontWeight: 500 }}>DevOps pipelines</span>, and{" "}
              <span style={{ color: "var(--accent)", fontWeight: 500 }}>visual design</span> —
              blending code with creativity to build things that matter.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "var(--text-dim)", marginBottom: "2rem" }}>
              Currently studying at university while freelancing for clients —
              I believe great design solves real problems and leaves a lasting impression.
              When I&apos;m not coding, you&apos;ll find me exploring the cosmos through astronomy.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#projects" className="btn-primary" data-hover
                onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                See My Work
              </a>
              <a href="/resume/Ibtasam_Ali_Resume.pdf" target="_blank" className="btn-outline" data-hover>
                Download CV
              </a>
            </div>
          </div>

          {/* Right: 3D astronomy scene */}
          <div className="about-right" style={{
            opacity: 0,
            position: "relative",
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            aspectRatio: "1/1",
            minHeight: "350px",
          }}>
            <AstronomyScene />
            {/* Badge overlay */}
            <div style={{
              position: "absolute", bottom: "1rem", left: "1rem",
              background: "color-mix(in srgb, var(--bg-card) 80%, transparent)",
              backdropFilter: "blur(10px)", border: "1px solid var(--border)",
              borderRadius: "0.75rem", padding: "0.5rem 0.9rem",
              fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--text-dim)",
            }}>
              🌌 Exploring the cosmos
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="about-stats" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          marginTop: "4rem",
        }}>
          {stats.map(s => (
            <div key={s.label} className="about-stat card" style={{ padding: "1.5rem", textAlign: "center", opacity: 0 }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "2rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1, marginBottom: "0.35rem" }}>
                {s.val}
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .about-stats { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .about-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
