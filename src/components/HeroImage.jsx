import React from "react";
import heroBg from "../../assets/image.png";

export default function HeroImage() {
  return (
    <div className="hero-image-wrapper">
      <img className="hero-image" src={heroBg} alt="Kingsley hero" />
    </div>
  );
}
