import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function PortfolioPage({ navigateTo }) {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
    return undefined;
  }, []);

  return (
    <div className="portfolio-page">
      <NavBar navScrolled={true} activeSection={"portfolio"} navLinks={[]} scrollTo={() => {}} navigateTo={navigateTo} />

      <header className="portfolio-hero">
        <div className="portfolio-hero-copy">
          <span className="section-tag">Portfolio</span>
          <h1>Gallery & Motion</h1>
          <p>
            Explore a curated portfolio of Model Kingsley's strongest visuals, styling concepts, and motion
            direction. Every frame is designed to reflect premium fashion, commercial storytelling, and lasting
            editorial presence.
          </p>
          <div className="portfolio-hero-actions">
            <button type="button" className="portfolio-primary-btn" onClick={() => navigateTo("/")}>Back Home</button>
            <button type="button" className="portfolio-secondary-btn" onClick={() => navigateTo("/services")}>View Services</button>
            <a className="portfolio-tertiary-btn" href="#gallery">Explore Gallery</a>
          </div>
        </div>
      </header>

      <main className="portfolio-main" id="gallery">
        <section className="portfolio-gallery-embed">
          <div className="elfsight-app-2eaebc35-e50a-49e7-a4dc-36c3c3ce3de3" data-elfsight-app-lazy />
        </section>
      </main>

      <section className="portfolio-cta-strip">
        <div>
          <p>Bring the campaign, lookbook, or brand story to life with Kingsley’s premium portfolio and live model experience.</p>
        </div>
        <div>
          <button className="portfolio-secondary-btn" onClick={() => navigateTo("/services")}>Book Services</button>
        </div>
      </section>

      <Footer navLinks={[]} scrollTo={() => {}} navigateTo={navigateTo} />
    </div>
  );
}
