import React from "react";
import AnimBlock from "./AnimBlock";

const contactInfo = [
  { label: "Phone", value: "0710507597", href: "tel:0710507597" },
  { label: "Email", value: "denniskingsley5@gmail.com", href: "mailto:denniskingsley5@gmail.com" },
];

const socialLinks = [
  {
    label: "Instagram",
    handle: "@model Kingsley",
    href: "https://www.instagram.com/model_kingsley?igsh=MTgzZGI0cjNxM2d5bw==",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@model Kingsley",
    href: "https://www.tiktok.com/@mrmaseno2026?_r=1&_t=ZS-95tRstmJJ58",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4c.5 2.3 1.9 3.9 4 4.7" />
        <path d="M10 10.5V18a3.5 3.5 0 1 1-3.5-3.5" />
        <path d="M14 4v9a4 4 0 0 1-4 4" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    handle: "@model Kingsley",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.2c0 2.6-.3 4.2-.7 5.1-.4.8-1 1.4-1.8 1.8-.9.4-2.5.7-5.5.7s-4.6-.3-5.5-.7c-.8-.4-1.4-1-1.8-1.8C5.3 16.4 5 14.8 5 12.2s.3-4.2.7-5.1c.4-.8 1-1.4 1.8-1.8.9-.4 2.5-.7 5.5-.7s4.6.3 5.5.7c.8.4 1.4 1 1.8 1.8.4.9.7 2.5.7 5.1Z" />
        <path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "52px 48px", background: "#000", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", bottom: -60, left: -20,
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "140px", fontWeight: 700,
        color: "rgba(255,255,255,0.02)",
        whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none",
        lineHeight: 1
      }}>KINGSLEY</div>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="split-grid" style={{ display: "grid", gridTemplateColumns: "minmax(280px, 0.95fr) minmax(360px, 1.05fr)", gap: 40, alignItems: "start" }}>
          <AnimBlock animation="fade-left">
            <span className="section-tag">05 - Contact</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-1px",
              marginTop: 14,
              marginBottom: 14
            }}>
              Work<br /><em>With Me</em>
            </h2>

            <p style={{
              maxWidth: 460,
              margin: 0,
              fontFamily: "'Montserrat'",
              fontSize: "11px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.65
            }}>
              Available for runway, commercial, fashion, and brand collaborations. For bookings, campaign enquiries, and partnership conversations, reach out directly through the contacts below.
            </p>
          </AnimBlock>

          <AnimBlock animation="fade-right">
            <div style={{ display: "grid", gap: 20 }}>
              <div>
                <div className="section-tag" style={{ marginBottom: 10 }}>Contact Info</div>
                <div style={{ display: "grid", gap: 12 }}>
                  {contactInfo.map((item) => (
                    <div key={item.label} style={{ paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="section-tag" style={{ marginBottom: 4 }}>{item.label}</div>
                      <a
                        href={item.href}
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "clamp(18px, 2.1vw, 24px)",
                          fontWeight: 300,
                          letterSpacing: "-0.5px"
                        }}
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="section-tag" style={{ marginBottom: 10 }}>Social Media</div>
                <div style={{ display: "grid", gap: 10 }}>
                  {socialLinks.map((item) => {
                    const content = (
                      <>
                        <span style={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          border: "1px solid rgba(255,255,255,0.12)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          flexShrink: 0
                        }}>
                          {item.icon}
                        </span>
                        <span style={{ display: "grid", gap: 2 }}>
                          <span style={{ fontSize: "9px", letterSpacing: "1.6px", textTransform: "uppercase", color: "rgba(255,255,255,0.58)" }}>
                            {item.label}
                          </span>
                          <span style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "18px",
                            fontWeight: 300,
                            color: "#fff",
                            lineHeight: 1.1
                          }}>
                            {item.handle}
                          </span>
                        </span>
                      </>
                    );

                    const sharedStyle = {
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      paddingBottom: 10,
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      color: "#fff",
                      textDecoration: "none"
                    };

                    return item.href ? (
                      <a key={item.label} href={item.href} target="_blank" rel="noreferrer" style={sharedStyle}>
                        {content}
                      </a>
                    ) : (
                      <div key={item.label} style={sharedStyle}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimBlock>
        </div>
      </div>
    </section>
  );
}
