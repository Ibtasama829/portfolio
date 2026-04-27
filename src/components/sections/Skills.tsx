"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Frontend Development",
    icon: "⚡",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "PHP", "Tailwind CSS"],
  },
  {
    title: "Design Tools",
    icon: "🎨",
    items: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva", "UI Design", "Brand Identity"],
  },
  {
    title: "Linux & DevOps",
    icon: "🐧",
    items: ["Linux", "Docker", "Git", "GitHub", "CI/CD", "Cloud Computing", "Shell Scripting", "DevOps"],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".skills-header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.fromTo(".skill-card-anim", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ padding: "6rem 0", position: "relative" }}>
      <div className="glow-blob" style={{ width: "500px", height: "400px", background: "radial-gradient(ellipse, rgba(196,163,90,0.04) 0%, transparent 70%)", bottom: "10%", left: "-8%" }} />

      <div className="container-main">
        {/* Header */}
        <div className="skills-header" style={{ opacity: 0, marginBottom: "3.5rem" }}>
          <div className="section-badge"><span>02</span>Skills & Tools</div>
          <h2 className="text-display" style={{ color: "var(--text)" }}>
            Technologies I{" "}
            <span style={{ color: "var(--accent)" }}>work with</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-dim)", marginTop: "1rem", maxWidth: "500px", lineHeight: 1.7 }}>
            A curated set of tools and technologies I use to bring ideas to life across development, design, and DevOps.
          </p>
        </div>

        {/* Grid of skill cards */}
        <div className="skills-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}>
          {categories.map((cat, ci) => (
            <div key={cat.title} className="skill-card-anim skill-card" style={{ opacity: 0 }}>
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "1px solid var(--border)" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "0.75rem",
                  background: "rgba(196,163,90,0.1)", border: "1px solid var(--border-accent)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem",
                }}>
                  {cat.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1rem", color: "var(--text)" }}>{cat.title}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--text-muted)" }}>{cat.items.length} skills</div>
                </div>
              </div>

              {/* Skill items */}
              <div>
                {cat.items.map(skill => (
                  <div key={skill} className="skill-item">
                    <div className="skill-dot" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
