import React, { useEffect, useState } from "react";
import AnimBlock from "./AnimBlock";
import chestImg from "../../assets/chest.png";
import heightImg from "../../assets/height.png";
import heightCombiImg from "../../assets/heightcombi.png";
import heightForwardImg from "../../assets/heightfoward.png";

const stats = [
  { value: "6'4\"", sub: "193 cm", label: "Height" },
  { value: "69", sub: "kg", label: "Weight" },
  { value: "35.5", sub: "inches", label: "Waist" },
  { value: "44", sub: "EU", label: "Shoes" },
  { value: "Brown", sub: "-", label: "Eyes" },
];

const slides = [
  { id: 0, title: "Chest Profile", image: chestImg, caption: "Strong proportions with a clean, camera-ready silhouette." },
  { id: 1, title: "Height Standard", image: heightImg, caption: "Tall frame suited for runway, editorial, and premium brand campaigns." },
  { id: 2, title: "Height Combo", image: heightCombiImg, caption: "Balanced presence with styling flexibility across fashion and commercial work." },
  { id: 3, title: "Forward Stance", image: heightForwardImg, caption: "Confident alignment and poised posture for polished presentation." },
];

export default function StatsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section id="stats" className="stats-section">
      <div className="stats-deco">K</div>
      <div className="stats-orb stats-orb-one" aria-hidden="true" />
      <div className="stats-orb stats-orb-two" aria-hidden="true" />

      <div className="stats-inner">
        <AnimBlock animation="fade-in">
          <span className="section-tag">02 - Stats &amp; Measurements</span>
          <h2 className="stats-heading">
            Vital<br /><em>Statistics</em>
          </h2>
        </AnimBlock>

        <AnimBlock animation="fade-in">
          <div className="stats-layout">
            <div className="stats-copy-rail">
              <div className="stats-summary-panel">
                <div className="stats-summary-head">
                  <div>
                    <div className="stats-summary-title">Model Kingsley</div>
                    <p className="stats-summary-intro">
                      Professional measurements paired with a refined visual profile gallery.
                    </p>
                  </div>
                  <div className="stats-slide-count">
                    {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </div>
                </div>

                <div className="stats-cards">
                  {stats.map((stat) => (
                    <div key={stat.label} className="stats-mini-card">
                      <div className="stats-mini-value">{stat.value}</div>
                      <div className="stats-mini-meta">
                        <div className="stats-mini-label">{stat.label}</div>
                        <div className="stats-mini-sub">{stat.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="stats-gallery-shell">
              <div className="stats-gallery-frame">
                <div className="stats-gallery-stage" aria-live="polite">
                  {slides.map((slide, index) => (
                    <figure
                      key={slide.id}
                      className={`stats-gallery-slide ${index === activeSlide ? "active" : ""}`}
                      aria-hidden={index === activeSlide ? "false" : "true"}
                    >
                      <img src={slide.image} alt={slide.title} className="stats-carousel-image" />
                    </figure>
                  ))}
                </div>
              </div>

              <div className="stats-gallery-meta">
                <div className="stats-carousel-copy">
                  <h3>{slides[activeSlide].title}</h3>
                  <p>{slides[activeSlide].caption}</p>
                </div>

                <div className="stats-carousel-controls">
                  <button className="stats-arrow" onClick={prevSlide} aria-label="Previous slide">←</button>
                  <div className="stats-dots">
                    {slides.map((slide) => (
                      <button
                        key={slide.id}
                        className={`stats-dot ${slide.id === activeSlide ? "active" : ""}`}
                        onClick={() => setActiveSlide(slide.id)}
                        aria-label={`Slide ${slide.id + 1}`}
                      />
                    ))}
                  </div>
                  <button className="stats-arrow" onClick={nextSlide} aria-label="Next slide">→</button>
                </div>
              </div>
            </div>
          </div>
        </AnimBlock>
      </div>
    </section>
  );
}
