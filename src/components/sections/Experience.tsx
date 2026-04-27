"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCE } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const typeColors: Record<string, string> = { freelance: "#c4a35a", workshop: "#7c9cc0", university: "#9c7ac4" };
const typeIcons: Record<string, string> = { freelance: "💼", workshop: "🎓", university: "📚" };

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".exp-header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.fromTo(".timeline-line", { scaleY: 0 }, {
        scaleY: 1, duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: ".exp-timeline", start: "top 78%" },
      });
      gsap.fromTo(".exp-entry", { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".exp-timeline", start: "top 78%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} style={{ padding: "6rem 0", position: "relative" }}>
      <div className="glow-blob" style={{ width: "400px", height: "400px", background: "radial-gradient(circle, rgba(196,163,90,0.04) 0%, transparent 70%)", top: "10%", left: "-5%" }} />

      <div className="container-main">
        <div className="exp-header" style={{ opacity: 0, marginBottom: "4rem" }}>
          <div className="section-badge"><span>04</span>Journey</div>
          <h2 className="text-display" style={{ color: "var(--text)" }}>
            Experience &{" "}<span style={{ color: "var(--accent)" }}>milestones</span>
          </h2>
        </div>

        <div className="exp-timeline" style={{ position: "relative", paddingLeft: "2.75rem", maxWidth: "800px" }}>
          <div className="timeline-line" style={{ transform: "scaleY(0)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {EXPERIENCE.map((item) => (
              <div key={item.id} className="exp-entry" style={{ opacity: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "-2.2rem", top: "1.15rem", width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--accent)", background: "var(--bg)", zIndex: 2 }} />

                <div className="card" style={{ padding: "1.5rem 1.75rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "0.6rem", marginBottom: "0.6rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span style={{ fontSize: "1.2rem" }}>{typeIcons[item.type] ?? "📌"}</span>
                      <div>
                        <div style={{ fontFamily: "var(--font-head)", fontSize: "1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.15rem" }}>{item.title}</div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--text-muted)" }}>{item.company}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "var(--accent)" }}>{item.year}</span>
                      <span style={{ padding: "0.15rem 0.55rem", borderRadius: "999px", border: `1px solid ${typeColors[item.type] ?? "var(--border)"}22`, background: `${typeColors[item.type] ?? "var(--border)"}11`, fontFamily: "var(--font-body)", fontSize: "0.6rem", color: typeColors[item.type] ?? "var(--text-dim)", textTransform: "capitalize" }}>{item.type}</span>
                    </div>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-dim)", lineHeight: 1.7 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-timeline { padding-left: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
