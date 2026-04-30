import React, { useState } from "react";
import Lightbox from './Lightbox';

import bloom from "../../img/bloom.png";
import studiotwentyseven from "../../img/studiotwentyseven.png";
import acnestudios from "../../img/acnestudios.png";
import mirror from "../../img/mirror.png";
import necklace from "../../img/necklace.png";
import bottegaveneta from "../../img/bottegaveneta.png";
import bunnies from "../../img/bunnies.png";
import adererror from "../../img/adererror.png";
import macintosh from "../../img/macintosh.png";
import bags from "../../img/bags.png";

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const images = [
    { src: bloom, alt: "" },
    { src: studiotwentyseven, alt: "" },
    { src: acnestudios, alt: "" },
    { src: mirror, alt: "" },
    { src: necklace, alt: "" },
    { src: bottegaveneta, alt: "" },
    { src: bunnies, alt: "" },
    { src: adererror, alt: "" },
    { src: macintosh, alt: "" },
    { src: bags, alt: "" }
  ];

  return (
    <div className="gallery">
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
  );
};

export default Gallery;
