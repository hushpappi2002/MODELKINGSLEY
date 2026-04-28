import React from "react";
import AnimBlock from "./AnimBlock";
import aboutImage from "../../assets/about.png";

const aboutText = `Dennis Okoth, professionally known as Model Kingsley, is a confident, ambitious, and versatile runway and commercial model with a strong and captivating presence. His tall frame and rich dark complexion, combined with his calm yet commanding energy, allow him to stand out effortlessly on the runway and in front of the camera. His ability to adapt to different styles and concepts makes him a perfect fit for both high-fashion and commercial projects.

Known for his discipline, consistency, and professionalism, Kingsley brings focus and creativity into every project he takes on. He thrives in fast-paced environments, working seamlessly with designers, photographers, and brands to deliver impactful and memorable visuals. His natural confidence and attention to detail make him a reliable and standout talent in the modeling industry.

Beyond modeling, Kingsley is driven by growth, creativity, and the desire to inspire. He believes in hard work, persistence, and authenticity, and is committed to representing Kenyan talent on both local and international platforms with excellence and style.`;

export default function AboutSection({ scrollTo, navigateTo }) {
  return (
    <section id="about" style={{ padding: "88px 40px", background: "#fff", color: "#000" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="split-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
          <AnimBlock animation="fade-left">
            <div style={{ position: "relative", maxWidth: 260, margin: "0 auto" }}>
              <div style={{
                width: "100%",
                aspectRatio: "3/4",
                background: "#000",
                position: "relative",
                overflow: "hidden",
                borderRadius: 10,
                boxShadow: "0 10px 26px rgba(0,0,0,0.12)"
              }}>
                <img
                  src={aboutImage}
                  alt="Model Kingsley"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 10, border: "1px solid rgba(255,255,255,0.08)", pointerEvents: "none" }} />
              </div>
              <div style={{
                position: "absolute",
                bottom: -8,
                right: -8,
                width: 28,
                height: 28,
                background: "#000",
                border: "1px solid #000"
              }} />
            </div>
          </AnimBlock>

          <AnimBlock animation="fade-right">
            <span className="section-tag" style={{ color: "#888" }}>01 - About Me</span>
            <div className="divider" style={{ background: "#000", opacity: 0.15 }} />
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(22px, 2.7vw, 32px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-1px",
              color: "#000",
              marginBottom: 14
            }}>
              Hello, I'm Dennis Okoth<br />
              <em>(Model Kingsley)</em>
            </h2>
            <div className="about-preview" style={{ marginBottom: 18 }}>
              <p style={{ fontFamily: "'Montserrat'", fontSize: "16px", fontWeight: 300, lineHeight: 1.5, color: "#444", margin: 0 }}>
                {aboutText}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("contact")} className="btn-outline" style={{ color: "#000", borderColor: "rgba(0,0,0,0.3)" }}>
                Get In Touch
              </button>
              <button
                onClick={() => navigateTo("/about")}
                className="about-readmore-btn"
                type="button"
              >
                <span>Read Full Story</span>
                <span className="about-readmore-arrow">→</span>
              </button>
            </div>
          </AnimBlock>
        </div>
      </div>
    </section>
  );
}
