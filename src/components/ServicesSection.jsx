import React, { useState } from "react";
import AnimBlock from "./AnimBlock";
import modelRepImage from "../../assets/modelrep.png";
import modelRepImageAlt from "../../assets/modelrep2.png";

const services = [
  {
    id: "representation",
    title: "Modeling, Brand Activation & Creative Influence",
    body: "Dennis Okoth offers professional modeling services for fashion, commercial, and editorial projects. He represents brands with style, confidence, and creativity both on the runway and in front of the camera.",
    details:
      "Kingsley also offers professional pageant judging, representing brands at activations, launches, and public appearances. He provides impactful social media and influencer services through high-quality content creation, sponsored campaigns, and audience engagement. He delivers fitness and lifestyle modeling to promote health, wellness, and sportswear brands. He supports e-commerce businesses with clean, compelling product showcases for online platforms and catalogs. He also specializes in creative and artistic modeling, bringing strong visual storytelling to concept shoots and music videos.",
    image: modelRepImageAlt,
    imageAlt: "Model Kingsley standing portrait",
    alignment: "top",
  },
];

export default function ServicesSection() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const closeDetails = () => setDetailsOpen(false);

  return (
    <>
      <section id="services" className="services-editorial-section">
      <div className="services-editorial-inner">
        <AnimBlock animation="fade-in">
          <div className="services-editorial-head">
            <span className="section-tag services-editorial-tag">04 - Services</span>
          </div>
        </AnimBlock>

        <div className="services-editorial-stage">
          <div className="services-editorial-accent services-editorial-accent-top" aria-hidden="true" />
          <div className="services-editorial-accent services-editorial-accent-bottom" aria-hidden="true" />
          <div className="services-editorial-script" aria-hidden="true">Services</div>
          <AnimBlock animation="fade-right" delay={180}>
            <div className="services-editorial-support-image-shell" aria-hidden="true">
              <img src={modelRepImage} alt="" className="services-editorial-image" />
            </div>
          </AnimBlock>

          {services.map((service, index) => (
            <AnimBlock key={service.id} animation="fade-left" delay={index * 120}>
              <article
                className={`services-editorial-card services-editorial-card-${service.alignment}`}
              >
                <div className="services-editorial-copy">
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  {service.details && (
                    <button
                      type="button"
                      className="services-readmore"
                      onClick={() => setDetailsOpen(true)}
                    >
                      Read more
                    </button>
                  )}
                </div>

                <div className={`services-editorial-image-shell services-editorial-image-shell-${service.alignment}`}>
                  <img src={service.image} alt={service.imageAlt} className="services-editorial-image" />
                </div>
              </article>
            </AnimBlock>
          ))}
        </div>
      </div>
      {detailsOpen && (
            <div className="services-overlay" onClick={closeDetails}>
              <div className="services-overlay-card" onClick={(event) => event.stopPropagation()}>
                <div className="services-overlay-header">
                  <h3>Additional Creative Services</h3>
                </div>
                <p>{services[0].details}</p>
                <button type="button" className="services-overlay-close" onClick={closeDetails}>
                  Close
                </button>
              </div>
            </div>
          )}
        </section>
      </>
    );
  }
