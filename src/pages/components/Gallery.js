import React, { useState } from "react";
import Lightbox from './Lightbox';
import zeus from "../../img/zeus.png";
import cafe from "../../img/cafe.png";
import dine from "../../img/dine.png";
import burberry from "../../img/burberry.png"
import outfits from "../../img/outfits.png"
import potions from "../../img/potions.png"
import streetwear from "../../img/streetwear.png"
import gentlemonster from "../../img/gentlemonster.png"
import art from "../../img/art.png"
import air from "../../img/air.png"
import airplane from "../../img/airplane.png"
import mountain from "../../img/mountain.png"
import park from "../../img/park.png"
import classical from "../../img/classical.png"
import aerialtram from "../../img/aerialtram.png"

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const images = [
    { src: zeus, alt: "" },
    { src: cafe, alt: "" },
    { src: dine, alt: "" },
    { src: burberry, alt: "" },
    { src: outfits, alt: "" },
    { src: potions, alt: "" },
    { src: streetwear, alt: "" },
    { src: gentlemonster, alt: "" },
    { src: art, alt: "" },
    { src: air, alt: "" },
    { src: airplane, alt: "" },
    { src: mountain, alt: "" },
    { src: park, alt: "" },
    { src: classical, alt: "" },
    { src: aerialtram, alt: "" }
  ];

  return (
    <div className="gallery">
      <div className="gallery-row">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              loading="lazy"
              onClick={() => openLightbox(image.src)}
            />
          </div>
        ))}
        {lightboxImage && (
        <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} />
      )}
      </div>
    </div>
  );
};

export default Gallery;
