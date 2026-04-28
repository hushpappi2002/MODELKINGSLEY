import React from "react";
import AnimBlock from "./AnimBlock";
import modelRepImage from "../../assets/modelrep.png";
import modelRepImageAlt from "../../assets/modelrep2.png";

const services = [
  {
    id: "representation",
    title: "Modeling and Brand Representation",
    body: "Dennis Okoth offers professional modeling services for fashion, commercial, and editorial projects. He represents brands with style, confidence, and creativity both on the runway and in front of the camera, bringing each visual concept to life with strong presence and polished storytelling.",
    image: modelRepImageAlt,
    imageAlt: "Model Kingsley standing portrait",
    alignment: "top",
  },
];

export default function ServicesSection() {
  return (
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
                </div>

                <div className={`services-editorial-image-shell services-editorial-image-shell-${service.alignment}`}>
                  <img src={service.image} alt={service.imageAlt} className="services-editorial-image" />
                </div>
              </article>
            </AnimBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
