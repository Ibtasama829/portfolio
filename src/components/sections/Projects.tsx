"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/lib/constants";
import { asset } from "@/lib/basepath";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<typeof PROJECTS[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".proj-header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.fromTo(".proj-card", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".proj-grid", start: "top 82%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="projects" ref={sectionRef} style={{ padding: "6rem 0", position: "relative" }}>
        <div className="container-main">
          <div className="proj-header" style={{ opacity: 0, marginBottom: "3.5rem" }}>
            <div className="section-badge"><span>03</span>Selected Work</div>
            <h2 className="text-display" style={{ color: "var(--text)" }}>
              Projects that{" "}<span style={{ color: "var(--accent)" }}>define</span> my craft
            </h2>
          </div>

          <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="proj-card card" style={{ opacity: 0, position: "relative" }} onClick={() => setSelected(p)} data-hover>
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                  <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover", transition: "transform 0.6s ease" }} sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" className="proj-img" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, color-mix(in srgb, var(--bg-card) 90%, transparent) 0%, color-mix(in srgb, var(--bg-card) 30%, transparent) 40%, transparent 100%)" }} />
                  <div style={{ position: "absolute", top: "0.75rem", left: "1rem", fontFamily: "monospace", fontSize: "0.75rem", color: "var(--accent)" }}>0{i+1}</div>
                  <div style={{ position: "absolute", top: "0.75rem", right: "1rem", padding: "0.25rem 0.75rem", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)", borderRadius: "999px", border: "1px solid var(--border)", fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "var(--text-dim)" }}>{p.category}</div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.4rem", transition: "color 0.3s" }} className="proj-title">{p.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--text-dim)", lineHeight: 1.55, marginBottom: "0.8rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {p.tags.map(t => (<span key={t} style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "var(--text-muted)", padding: "0.2rem 0.6rem", background: "rgba(255,255,255,0.03)", borderRadius: "999px", border: "1px solid var(--border)" }}>{t}</span>))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div onClick={e => e.stopPropagation()} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1.5rem", maxWidth: "800px", width: "100%", maxHeight: "90vh", overflowY: "auto", position: "relative" }}>
            <button onClick={() => setSelected(null)} data-hover style={{ position: "sticky", top: "1rem", float: "right", margin: "1rem 1rem 0 0", width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)", color: "var(--text)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>✕</button>
            <div style={{ position: "relative", aspectRatio: "16/9" }}>
              <Image src={selected.image} alt={selected.title} fill style={{ objectFit: "cover" }} sizes="800px" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg-card) 0%, transparent 60%)" }} />
            </div>
            <div style={{ padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem" }}>
                <span style={{ padding: "0.25rem 0.8rem", background: "rgba(196,163,90,0.1)", border: "1px solid var(--border-accent)", borderRadius: "999px", fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--accent)" }}>{selected.category}</span>
                <span style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "var(--text-muted)" }}>{selected.year}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, color: "var(--text)", marginBottom: "0.8rem" }}>{selected.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--text-dim)", lineHeight: 1.8, marginBottom: "1.25rem" }}>{selected.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {selected.tags.map(t => (<span key={t} className="pill">{t}</span>))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .proj-card:hover .proj-img { transform: scale(1.04); }
        .proj-card:hover .proj-title { color: var(--accent); }
        @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
