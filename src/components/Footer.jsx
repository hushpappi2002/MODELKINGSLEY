import React from "react";

export default function Footer({ navLinks, scrollTo, navigateTo }) {
  return (
    <footer style={{
      padding: "40px 48px",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16,
      background: "#000"
    }}>
      <div
        onClick={() => navigateTo("/")}
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer" }}
      >
        KINGSLEY
      </div>
      <div style={{ fontFamily: "'Montserrat'", fontSize: "9px", fontWeight: 400, letterSpacing: "2px", color: "#555" }}>
        © 2026 MODEL KINGSLEY - NAIROBI, KENYA
      </div>
      <div style={{ display: "flex", gap: 24 }}>
        {navLinks.map((link) => (
          <span key={link.id} onClick={() => scrollTo(link.id)} className="nav-link" style={{ fontSize: "9px" }}>
            {link.label}
          </span>
        ))}
      </div>
    </footer>
  );
}
