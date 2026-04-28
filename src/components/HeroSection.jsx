import React from "react";
import AnimBlock from "./AnimBlock";
import HeroImage from "./HeroImage";

export default function HeroSection({ scrollTo }) {
  return (
    <section id="home" className="hero-section">
      <div className="geo-line" style={{ top: 60, left: "32%", width: "1px", height: "22vh" }} />
      <div className="geo-line" style={{ top: "16vh", left: "20%", width: "18%", height: "1px" }} />
      <div className="geo-line" style={{ bottom: "16vh", right: "10%", width: "10%", height: "1px" }} />
      <div className="geo-line" style={{ top: "12vh", right: "15%", width: "1px", height: "16vh" }} />

      <div style={{ position: "absolute", top: 84, left: 40, width: 30, height: 30, borderLeft: "1px solid rgba(255,255,255,0.3)", borderTop: "1px solid rgba(255,255,255,0.3)" }} />
      <div style={{ position: "absolute", bottom: 56, right: 40, width: 30, height: 30, borderRight: "1px solid rgba(255,255,255,0.3)", borderBottom: "1px solid rgba(255,255,255,0.3)" }} />

      <div style={{ position: "absolute", right: 28, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span style={{ fontFamily: "'Montserrat'", fontSize: "8px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", writingMode: "vertical-rl" }}>Scroll Down</span>
        <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.2)" }} />
      </div>

      <div className="hero-layout">
        <div className="hero-copy">
          <AnimBlock animation="fade-in" delay={200}>
            <span className="section-tag" style={{ marginBottom: 12, display: "block" }}>Modeling Portfolio - Nairobi, KE</span>
          </AnimBlock>

          <AnimBlock animation="fade-in" delay={400}>
            <h1 className="hero-name" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(44px, 9vw, 92px)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-1px",
              marginBottom: 16
            }}>
              MODEL<br />
              <span style={{ fontStyle: "italic", fontWeight: 300 }}>KINGSLEY</span>
            </h1>
          </AnimBlock>

          <AnimBlock animation="fade-in" delay={600} style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="award-pill">Mr Maseno University</span>
              <span className="award-pill" style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>Mr Fashion Kenya</span>
            </div>
            <button onClick={() => scrollTo("contact")} className="btn-solid">Work With Me</button>
          </AnimBlock>
        </div>

        <HeroImage />
      </div>
    </section>
  );
}
