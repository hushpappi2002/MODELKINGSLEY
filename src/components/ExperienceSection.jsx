import React from "react";
import AnimBlock from "./AnimBlock";

const experienceList = [
  { year: "2026", role: "Mr Fashion Kenya", org: "Current Title Holder" },
  { year: "2026", role: "Mr Maseno University", org: "Current Title Holder" },
  { year: "2026", role: "Model of the Year Nominee", org: "Kitenge Fashion Fest and Awards 2026" },
  { year: "5+ Years", role: "Professional Modelling Experience", org: "Runway and Commercial Modelling" },
  { year: "Foundation", role: "Maseno Models Foundation", org: "Kisumu" },
  { year: "Ongoing", role: "Personal Brand Growth", org: "Fashion, Visual Storytelling, and Social Media Presence" },
];

export default function ExperienceSection({ scrollTo }) {
  return (
    <section id="experience" style={{ padding: "52px 48px", background: "#0d0d0d" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="split-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 42, alignItems: "start" }}>
          <AnimBlock animation="fade-left">
            <span className="section-tag">03 - Experience</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 3.8vw, 46px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-1px",
              marginTop: 14,
              marginBottom: 18
            }}>
              Background &amp;<br /><em>Journey</em>
            </h2>

            <p style={{ fontFamily: "'Montserrat'", fontSize: "16px", fontWeight: 300, lineHeight: 1.65, color: "#999", marginBottom: 12 }}>
              Kingsley is a professional model known for his strong camera presence and refined runway skills, with solid experience in commercial and fashion modelling.
            </p>
            <p style={{ fontFamily: "'Montserrat'", fontSize: "16px", fontWeight: 300, lineHeight: 1.65, color: "#999", marginBottom: 12 }}>
              He has built a compelling personal brand through a powerful social media presence, consistently showcasing versatility, confidence, and creativity in front of the camera. His passion for modelling and visual storytelling is evident in his ability to adapt to different concepts, bringing life and authenticity to every shoot and runway appearance.
            </p>
            <p style={{ fontFamily: "'Montserrat'", fontSize: "16px", fontWeight: 300, lineHeight: 1.65, color: "#999", marginBottom: 12 }}>
              Kingsley is the current <span style={{ color: "#fff", fontWeight: 400 }}>Mr Fashion Kenya</span> and <span style={{ color: "#fff", fontWeight: 400 }}>Mr Maseno University</span>. His ability to command attention with poise, style, and charisma has positioned him among the most promising and fast-rising talents in the industry. He is also a nominee for <span style={{ color: "#fff", fontWeight: 400 }}>Model of the Year</span> at the <span style={{ color: "#fff", fontWeight: 400 }}>Kitenge Fashion Fest and Awards 2026</span>, further affirming his growing influence in fashion.
            </p>
            <p style={{ fontFamily: "'Montserrat'", fontSize: "16px", fontWeight: 300, lineHeight: 1.65, color: "#999", marginBottom: 18 }}>
              With over five years of experience in modelling, Kingsley has steadily grown within the industry, beginning his journey at <span style={{ color: "#fff", fontWeight: 400 }}>Maseno Models Foundation</span> in <span style={{ color: "#fff", fontWeight: 400 }}>Kisumu</span>. He continues to expand his portfolio in runway and commercial modelling, combining high-fashion expression with consistency, discipline, and professional excellence.
            </p>
            <button onClick={() => scrollTo("services")} className="btn-outline">View Services</button>
          </AnimBlock>

          <AnimBlock animation="fade-right">
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {experienceList.map((exp, i) => (
                <AnimBlock key={i} animation="fade-right" delay={i * 80}>
                  <div style={{
                    display: "grid", gridTemplateColumns: "72px 1fr",
                    gap: 14, padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    alignItems: "center"
                  }}>
                    <span style={{ fontFamily: "'Montserrat'", fontSize: "9px", fontWeight: 600, letterSpacing: "2px", color: "#555", textTransform: "uppercase" }}>
                      {exp.year}
                    </span>
                    <div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", fontWeight: 400, marginBottom: 2 }}>
                        {exp.role}
                      </div>
                      <div style={{ fontFamily: "'Montserrat'", fontSize: "10px", fontWeight: 400, letterSpacing: "1px", color: "#666" }}>
                        {exp.org}
                      </div>
                    </div>
                  </div>
                </AnimBlock>
              ))}
            </div>
          </AnimBlock>
        </div>
      </div>
    </section>
  );
}
