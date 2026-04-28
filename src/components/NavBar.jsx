import React from "react";

export default function NavBar({ navScrolled, activeSection, navLinks, scrollTo, navigateTo }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "24px 48px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: navScrolled ? "rgba(0,0,0,0.95)" : "transparent",
      backdropFilter: navScrolled ? "blur(10px)" : "none",
      borderBottom: navScrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      transition: "all 0.4s ease"
    }}>
      <div onClick={() => navigateTo("/")} style={{ cursor: "pointer" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
          KINGSLEY
        </span>
      </div>

      <div style={{ display: "flex", gap: "40px" }} className="desktop-nav">
        {navLinks.map((link) => (
          <span key={link.id} onClick={() => scrollTo(link.id)} className={`nav-link ${activeSection === link.id ? "active" : ""}`}>
            {link.label}
          </span>
        ))}
      </div>

      <a href="mailto:denniskingsley5@gmail.com" className="btn-outline" style={{ fontSize: "9px", padding: "10px 20px" }}>
        Book Now
      </a>
    </nav>
  );
}
