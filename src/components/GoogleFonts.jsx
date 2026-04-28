import React from "react";

export default function GoogleFonts() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Montserrat:wght@200;300;400;500;600;700;900&display=swap');
      
      * { margin: 0; padding: 0; box-sizing: border-box; }
      
      :root {
        --black: #000000;
        --white: #ffffff;
        --off-white: #f5f5f0;
        --mid-gray: #888888;
        --light-gray: #cccccc;
        --dark-gray: #1a1a1a;
        --font-display: 'Cormorant Garamond', serif;
        --font-body: 'Montserrat', sans-serif;
      }

      html { scroll-behavior: smooth; }
      
      body { background: var(--black); color: var(--white); overflow-x: hidden; }

      .fade-in { opacity: 0; transform: translateY(40px); transition: opacity 0.9s ease, transform 0.9s ease; }
      .fade-in.visible { opacity: 1; transform: translateY(0); }
      
      .fade-left { opacity: 0; transform: translateX(-50px); transition: opacity 0.9s ease, transform 0.9s ease; }
      .fade-left.visible { opacity: 1; transform: translateX(0); }
      
      .fade-right { opacity: 0; transform: translateX(50px); transition: opacity 0.9s ease, transform 0.9s ease; }
      .fade-right.visible { opacity: 1; transform: translateX(0); }

      .nav-link {
        font-family: var(--font-body);
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--white);
        text-decoration: none;
        opacity: 0.6;
        transition: opacity 0.3s ease;
        cursor: pointer;
      }
      .nav-link:hover { opacity: 1; }
      .nav-link.active { opacity: 1; }

      .stat-number {
        font-family: var(--font-display);
        font-size: clamp(48px, 8vw, 96px);
        font-weight: 300;
        line-height: 0.9;
        color: var(--white);
      }

      .stat-label {
        font-family: var(--font-body);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--mid-gray);
        margin-top: 8px;
      }

      .section-tag {
        font-family: var(--font-body);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: var(--mid-gray);
      }

      .divider {
        width: 40px;
        height: 1px;
        background: var(--white);
        opacity: 0.3;
        margin: 24px 0;
      }

      .btn-outline {
        font-family: var(--font-body);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--white);
        border: 1px solid rgba(255,255,255,0.4);
        padding: 16px 32px;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
      }
      .btn-outline:hover {
        background: var(--white);
        color: var(--black);
        border-color: var(--white);
      }

      .btn-solid {
        font-family: var(--font-body);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--black);
        border: 1px solid var(--white);
        padding: 16px 32px;
        background: var(--white);
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
      }
      .btn-solid:hover {
        background: transparent;
        color: var(--white);
      }

      .award-pill {
        font-family: var(--font-body);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--black);
        background: var(--white);
        padding: 8px 16px;
        display: inline-block;
      }

      .service-card {
        border: 1px solid rgba(255,255,255,0.1);
        padding: 48px 40px;
        transition: border-color 0.3s ease, background 0.3s ease;
        cursor: default;
      }
      .service-card:hover {
        border-color: rgba(255,255,255,0.4);
        background: rgba(255,255,255,0.03);
      }

      .geo-line {
        position: absolute;
        border: 1px solid rgba(255,255,255,0.15);
        pointer-events: none;
      }

      .contact-input {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(255,255,255,0.2);
        color: var(--white);
        font-family: var(--font-body);
        font-size: 13px;
        font-weight: 300;
        letter-spacing: 1px;
        padding: 12px 0;
        outline: none;
        transition: border-color 0.3s ease;
      }
      .contact-input:focus { border-bottom-color: var(--white); }
      .contact-input::placeholder { color: rgba(255,255,255,0.3); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }

      @media (max-width: 768px) {
        .hero-name { font-size: clamp(60px, 18vw, 120px) !important; }
        .split-grid { grid-template-columns: 1fr !important; }
        .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .services-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  );
}
