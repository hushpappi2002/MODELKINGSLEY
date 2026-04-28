import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import modelRepImage from "../../assets/modelrep.png";
import modelRepImageAlt from "../../assets/modelrep2.png";

export default function ServicePage({ navigateTo }) {
  return (
    <div className="service-page">
      <NavBar navScrolled={true} activeSection="services" navLinks={[]} scrollTo={() => {}} navigateTo={navigateTo} />

      <main className="service-layout">
        <section className="service-hero">
          <div className="service-hero-copy">
            <span className="section-tag">Services</span>
            <div className="service-hero-intro">
              <span className="service-pill">Bespoke modeling / brand collaboration</span>
            </div>
            <h1>Strategic Brand Presence & Premium Model Services</h1>
            <p>
              Kingsley blends refined runway energy with commercial storytelling to deliver services that elevate campaigns,
              launches, and lifestyle branding with a striking premium finish.
            </p>
            <div className="service-hero-actions">
              <button className="service-primary-btn" onClick={() => navigateTo("/portfolio")}>Explore Portfolio</button>
              <a className="service-secondary-btn" href="mailto:denniskingsley5@gmail.com">Book a Session</a>
            </div>
          </div>

          <aside className="service-hero-panel">
            <span className="service-hero-panel-band">Featured service</span>
            <div className="service-hero-number">01</div>
            <div className="service-hero-note">
              Elite representation, editorial modeling, and bespoke brand storytelling designed for premium clients.
            </div>
            <div className="service-hero-panel-meta">
              <span>Luxury campaign modeling with purposeful direction.</span>
              <span>Event representation that feels polished, poised, and magnetic.</span>
            </div>
          </aside>
        </section>

        <section className="service-block service-block-right">
          <div className="service-block-copy">
            <span className="service-label">Live Representation</span>
            <h2>Pageant Judging • Brand Activation • Event Presence</h2>
            <p>
              Kingsley brings commanding stage presence, tasteful runway authority, and polished public-facing energy
              to every event. He provides reliable representation and activates brands with strong narrative focus.
            </p>
            <ul>
              <li>Pageant judging and awards hosting</li>
              <li>Live brand activation and launch representation</li>
              <li>On-stage leadership for fashion events and experiential marketing</li>
            </ul>
          </div>
          <div className="service-block-image service-block-image-right">
            <img src={modelRepImageAlt} alt="Model Kingsley in motion" />
          </div>
        </section>

        <section className="service-block service-block-left">
          <div className="service-block-image service-block-image-left">
            <img src={modelRepImage} alt="Model Kingsley portrait" />
          </div>
          <div className="service-block-copy">
            <span className="service-label">Creative Content</span>
            <h2>Luxury Editorial • Social Campaign • E-Commerce</h2>
            <p>
              Create high-end lifestyle, fitness, and fashion content with modern visual direction built for social media,
              catalogs, and advertising campaigns.
            </p>
            <ul>
              <li>Influencer and campaign content creation</li>
              <li>Fitness, sportswear, and luxury lifestyle modeling</li>
              <li>Gallery-ready e-commerce storytelling</li>
            </ul>
          </div>
        </section>

        <section className="service-cta-grid">
          <div className="service-cta-card">
            <span className="service-label">Why choose Kingsley</span>
            <h3>Refined styling, powerful visuals</h3>
            <p>
              Every booking is built with clarity, premium styling, and a modern aesthetic that makes imagery feel editorial,
              cinematic, and highly memorable.
            </p>
          </div>
          <div className="service-cta-card service-cta-card--accent">
            <span className="service-label">What to expect</span>
            <div className="service-cta-list">
              <div>
                <strong>Sharp creative direction</strong>
                <p>Clear concept support for brands and campaigns.</p>
              </div>
              <div>
                <strong>Collaborative execution</strong>
                <p>Seamless communication from brief to final delivery.</p>
              </div>
            </div>
            <button className="service-secondary-btn" onClick={() => navigateTo("/portfolio")}>See Portfolio</button>
          </div>
        </section>
      </main>

      <Footer navLinks={[]} scrollTo={() => {}} navigateTo={navigateTo} />
    </div>
  );
}
