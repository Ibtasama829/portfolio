"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { asset } from "@/lib/basepath";

gsap.registerPlugin(ScrollTrigger);

const EMAIL = "ibtasamali829@gmail.com";
const GITHUB = "https://github.com/Ibtasam829";

const socials = [
  { name: "GitHub", url: GITHUB, icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg> },
  { name: "LinkedIn", url: "https://linkedin.com/in/ibtasamali", icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/></svg> },
  { name: "Instagram", url: "https://instagram.com/ibtasam.ali", icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.86 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.97-6.98C23.99 15.67 24 15.26 24 12s-.01-3.67-.07-4.95C23.78 2.7 21.36.27 17 .07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32A6.16 6.16 0 0012 5.84zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg> },
  { name: "Email", url: `mailto:${EMAIL}`, icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-reveal", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const send = (e: React.FormEvent) => {
    e.preventDefault(); setSending(true);
    const sub = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${sub}&body=${body}`;
    setTimeout(() => setSending(false), 1200);
  };

  return (
    <section id="contact" ref={sectionRef} style={{ padding: "6rem 0 4rem", position: "relative" }}>
      <div className="glow-blob" style={{ width: "600px", height: "500px", background: "radial-gradient(ellipse, rgba(196,163,90,0.05) 0%, transparent 70%)", bottom: 0, left: "50%", transform: "translateX(-50%)" }} />

      <div className="container-main">
        <div className="contact-reveal" style={{ opacity: 0, textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-badge" style={{ justifyContent: "center" }}><span>05</span>Get in Touch</div>
          <h2 className="text-display" style={{ color: "var(--text)", maxWidth: "600px", margin: "0 auto" }}>
            Let&apos;s create{" "}<span style={{ color: "var(--accent)" }}>something</span> together
          </h2>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "4rem", alignItems: "flex-start" }}>
          {/* Form */}
          <div className="contact-reveal" style={{ opacity: 0 }}>
            <form onSubmit={send} style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              <div>
                <label style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Your Name</label>
                <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="field" placeholder="John Doe" required />
              </div>
              <div>
                <label style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Email</label>
                <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="field" placeholder="john@example.com" required />
              </div>
              <div>
                <label style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Message</label>
                <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="field" placeholder="Tell me about your project..." required style={{ resize: "none", minHeight: "120px" }} />
              </div>
              <button type="submit" disabled={sending} className="btn-primary" data-hover>{sending ? "Opening email..." : "Send Message →"}</button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-reveal" style={{ opacity: 0, display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.6rem" }}>Email</div>
              <a href={`mailto:${EMAIL}`} data-hover style={{ fontFamily: "var(--font-head)", fontSize: "clamp(0.85rem,1.3vw,1.05rem)", color: "var(--text)", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}>{EMAIL}</a>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.8rem" }}>Follow Me</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {socials.map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" data-hover title={s.name}
                    className="theme-toggle">{s.icon}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.6rem" }}>Résumé</div>
              <a href={asset("/resume/Ibtasam_Ali_Resume.pdf")} target="_blank" className="btn-outline" data-hover>
                Download CV
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 10v6m0 0l-3-3m3 3l3-3M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text-muted)" }}>© {new Date().getFullYear()} Ibtasam Ali. All rights reserved.</span>
          <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "var(--text-muted)" }}>Crafted with ♥ & code</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>
    </section>
  );
}
