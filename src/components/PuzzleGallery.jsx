import React, { useEffect, useRef, useState } from "react";
import "./PuzzleGallery.css";
import aboutImage from "../../assets/about.png";
import heroImage from "../../assets/image.png";
import chestImg from "../../assets/chest.png";
import heightImg from "../../assets/height.png";
import heightCombiImg from "../../assets/heightcombi.png";
import heightForwardImg from "../../assets/heightfoward.png";

const baseImages = [
  aboutImage,
  heroImage,
  chestImg,
  heightImg,
  heightCombiImg,
  heightForwardImg,
];

const ALL_IMAGES = baseImages.map((src, index) => ({
  id: `gallery-${index + 1}`,
  src,
}));

const ANIMATION_MS = 850;

export default function PuzzleGallery() {
  const [visibleImages, setVisibleImages] = useState(ALL_IMAGES.slice(0, 4));
  const [incomingImage, setIncomingImage] = useState(null);
  const [nextIndex, setNextIndex] = useState(4 % ALL_IMAGES.length);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const nextImage = ALL_IMAGES[nextIndex];
      setIncomingImage(nextImage);

      timeoutRef.current = window.setTimeout(() => {
        setVisibleImages((current) => [
          nextImage,
          current[0],
          current[1],
          current[2],
        ]);
        setIncomingImage(null);
      }, ANIMATION_MS);

      setNextIndex((prev) => (prev + 1) % ALL_IMAGES.length);
    }, 3000);

    return () => {
      window.clearInterval(interval);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [nextIndex]);

  const animatedPieces = incomingImage
    ? [incomingImage, ...visibleImages]
    : visibleImages;

  return (
    <div className="puzzle-wrapper">
      <h2 className="puzzle-title">Sliding Draft Gallery</h2>

      <div className="puzzle-grid">
        {animatedPieces.map((image, index) => (
          <div
            key={image.id}
            className={`puzzle-piece ${incomingImage ? `puzzle-flow-${index}` : `puzzle-rest-${index}`}`}
          >
            <img src={image.src} alt="Gallery Piece" />
          </div>
        ))}
      </div>
    </div>
  );
}
