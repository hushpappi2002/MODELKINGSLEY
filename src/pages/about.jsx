import React from "react";
import aboutSittingImage from "../../assets/aboutsitting.png";

const aboutParagraphs = [
  "Dennis Okoth, professionally known as Model Kingsley, is a confident, ambitious, and versatile runway and commercial model with a strong and captivating presence. His tall frame and rich dark complexion, combined with his calm yet commanding energy, allow him to stand out effortlessly on the runway and in front of the camera. His ability to adapt to different styles and concepts makes him a perfect fit for both high-fashion and commercial projects.",
  "Known for his discipline, consistency, and professionalism, Kingsley brings focus and creativity into every project he takes on. He thrives in fast-paced environments, working seamlessly with designers, photographers, and brands to deliver impactful and memorable visuals. His natural confidence and attention to detail make him a reliable and standout talent in the modeling industry.",
  "Beyond modeling, Kingsley is driven by growth, creativity, and the desire to inspire. He believes in hard work, persistence, and authenticity, and is committed to representing Kenyan talent on both local and international platforms with excellence and style.",
];

export default function AboutPage({ navigateTo }) {
  return (
    <div className="about-page">
      <header className="about-page-header">
        <button type="button" className="about-back-link" onClick={() => navigateTo("/")}>
          ← Back Home
        </button>
        <div className="about-page-brand">Model Kingsley</div>
      </header>

      <main className="about-page-main">
        <section className="about-page-hero">
          <div className="about-page-copy">
            <span className="section-tag">About Me</span>
            <h1 className="about-page-title">
              Hello, I'm Dennis Okoth
              <span>(Model Kingsley)</span>
            </h1>
            <div className="about-page-text">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="about-page-image-shell">
            <img src={aboutSittingImage} alt="Model Kingsley seated portrait" className="about-page-image" />
          </div>
        </section>
      </main>
    </div>
  );
}
