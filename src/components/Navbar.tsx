"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const sunIcon = <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>;
  const moonIcon = <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "color-mix(in srgb, var(--bg) 85%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.4s ease",
      }}>
        <a href="#" onClick={e => scrollTo(e, "#")} style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.25rem",
          color: "var(--text)", textDecoration: "none", letterSpacing: "-0.02em",
        }} data-hover>
          IA<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="nav-desktop">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={e => scrollTo(e, l.href)} className="nav-link" data-hover>
              <span style={{ color: "var(--accent)", fontSize: "0.6rem", marginRight: "0.25rem", fontFamily: "monospace" }}>0{i+1}</span>
              {l.label}
            </a>
          ))}
          <button onClick={toggle} className="theme-toggle" data-hover aria-label="Toggle theme">
            {theme === "dark" ? sunIcon : moonIcon}
          </button>
          <a href="/resume/Ibtasam_Ali_Resume.pdf" target="_blank" rel="noopener noreferrer"
            className="btn-outline" data-hover style={{ padding: "0.5rem 1.2rem", fontSize: "0.7rem" }}>
            Résumé
          </a>
        </div>

        {/* Mobile controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="nav-mobile-controls">
          <button onClick={toggle} className="theme-toggle" data-hover aria-label="Toggle theme" style={{ width: "36px", height: "36px" }}>
            {theme === "dark" ? sunIcon : moonIcon}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" data-hover
            style={{ background: "none", border: "none", display: "flex", flexDirection: "column", gap: "5px", padding: "6px" }}>
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--text)", transform: open ? "rotate(45deg) translate(4.7px,4.7px)" : "none", transition: "0.3s ease" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--text)", opacity: open ? 0 : 1, transition: "0.3s ease" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--text)", transform: open ? "rotate(-45deg) translate(4.7px,-4.7px)" : "none", transition: "0.3s ease" }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99, background: "var(--bg)", backdropFilter: "blur(24px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem",
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => scrollTo(e, l.href)}
              style={{ fontFamily: "'Space Grotesk'", fontSize: "1.8rem", fontWeight: 700, color: "var(--text)", textDecoration: "none" }} data-hover>
              {l.label}
            </a>
          ))}
          <a href="/resume/Ibtasam_Ali_Resume.pdf" target="_blank" className="btn-outline" data-hover>Résumé</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .nav-desktop { display: none !important; } }
        @media (min-width: 769px) { .nav-mobile-controls { display: none !important; } }
      `}</style>
    </>
  );
}
