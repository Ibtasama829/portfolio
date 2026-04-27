"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { asset } from "@/lib/basepath";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const tl = gsap.timeline({ delay: 2.8 });
    tl.fromTo(".hero-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .fromTo(".hero-name-line", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" }, "-=0.3")
      .fromTo(".hero-tagline", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .fromTo(".hero-pills", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .fromTo(".hero-image-wrap", { opacity: 0, scale: 0.92, x: 30 }, { opacity: 1, scale: 1, x: 0, duration: 1.1, ease: "power3.out" }, "-=0.9")
      .fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");
    return () => { tl.kill(); };
  }, []);

  return (
    <section ref={containerRef} id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "5rem", paddingBottom: "3rem", position: "relative", overflow: "hidden" }}>
      <div className="glow-blob" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(196,163,90,0.07) 0%, transparent 70%)", top: "10%", left: "-10%" }} />
      <div className="glow-blob" style={{ width: "400px", height: "400px", background: "radial-gradient(circle, rgba(196,163,90,0.05) 0%, transparent 70%)", bottom: "5%", right: "5%" }} />

      <div className="container-main" style={{ width: "100%" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "3rem" }}>

          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div className="hero-badge" style={{ opacity: 0 }}>
              <div className="section-badge" style={{ marginBottom: 0 }}><span>01</span>Creative Developer & Designer</div>
            </div>
            <div>
              <div className="hero-name-line text-hero" style={{ opacity: 0, color: "var(--text)" }}>IBTASAM</div>
              <div className="hero-name-line text-hero" style={{ opacity: 0, color: "var(--accent)" }}>ALI</div>
            </div>
            <p className="hero-tagline" style={{ opacity: 0, fontFamily: "var(--font-body)", fontSize: "clamp(0.9rem,1.4vw,1.1rem)", color: "var(--text-dim)", lineHeight: 1.7, maxWidth: "460px" }}>
              I craft digital experiences at the intersection of code and design. Specializing in frontend, Linux, DevOps, and visual storytelling.
            </p>
            <div className="hero-pills" style={{ opacity: 0, display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["Linux", "Frontend", "DevOps", "Graphic Design"].map(s => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>
            <div className="hero-cta" style={{ opacity: 0, display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#projects" className="btn-primary" data-hover
                onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                View Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" className="btn-outline" data-hover
                onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                Get in Touch
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", paddingTop: "0.5rem" }}>
              <div style={{ width: "2rem", height: "1px", background: "var(--border-accent)" }} />
              <a href="https://github.com/Ibtasam829" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "var(--font-body)", textDecoration: "none", letterSpacing: "0.1em" }} data-hover>GitHub</a>
              <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "var(--font-body)", textDecoration: "none", letterSpacing: "0.1em" }} data-hover>Email</a>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="hero-image-wrap" style={{ opacity: 0, display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: "-16px", borderRadius: "2rem", border: "1px solid rgba(196,163,90,0.1)" }} className="hero-ring-1" />
            <div style={{ position: "absolute", inset: "-36px", borderRadius: "2.5rem", border: "1px solid rgba(196,163,90,0.04)" }} className="hero-ring-2" />
            <div style={{ position: "relative", width: "min(380px, 100%)", aspectRatio: "3/4", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid rgba(196,163,90,0.15)" }}>
              <Image src={asset("/images/profile.jpg")} alt="Ibtasam Ali" fill style={{ objectFit: "cover", objectPosition: "top center" }} sizes="(max-width: 768px) 85vw, 380px" priority />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(to top, color-mix(in srgb, var(--bg) 80%, transparent) 0%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", right: "1.25rem" }}>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1.3rem", color: "var(--text)", marginBottom: "0.15rem" }}>Ibtasam Ali</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Creative Developer & Designer</div>
              </div>
            </div>
            {/* Floating cards */}
            <div style={{ position: "absolute", top: "0.5rem", right: "-1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "0.875rem", padding: "0.9rem 1.1rem", zIndex: 2 }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "1.6rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>10+</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Projects</div>
            </div>
            <div style={{ position: "absolute", bottom: "1.5rem", left: "-1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "0.875rem", padding: "0.9rem 1.1rem", zIndex: 2 }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "1.6rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>2+</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Yrs Exp</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", opacity: 0 }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "var(--text-muted)", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "1px", height: "2.5rem", background: "linear-gradient(to bottom, var(--accent), transparent)" }} className="scroll-line" />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-image-wrap { order: -1; }
          .hero-ring-1, .hero-ring-2 { display: none; }
          .hero-pills { justify-content: center; }
          .hero-cta { justify-content: center; }
        }
        @media (max-width: 480px) {
          .hero-image-wrap > div:nth-child(3) > div:first-child { width: 100% !important; }
        }
        @keyframes scroll-pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
        .scroll-line { animation: scroll-pulse 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
