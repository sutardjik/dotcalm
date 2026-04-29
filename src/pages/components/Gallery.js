import React, { useState } from "react";
import Lightbox from './Lightbox';

import alaia from "../../img/alaia.png";
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
import chair from "../../img/chair.png";
import park from "../../img/park.png";
import mountain from "../../img/mountain.png";
import flamenco from "../../img/flamenco.png";
import aerialtram from "../../img/aerialtram.png";

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const images = [
    { src: alaia, alt: "" },
    { src: bloom, alt: "" },
    { src: studiotwentyseven, alt: "" },
    { src: acnestudios, alt: "" },
    { src: mirror, alt: "" },
    { src: necklace, alt: "" },
    { src: bottegaveneta, alt: "" },
    { src: bunnies, alt: "" },
    { src: adererror, alt: "" },
    { src: macintosh, alt: "" },
    { src: bags, alt: "" },
    { src: chair, alt: "" },
    { src: park, alt: "" },
    { src: mountain, alt: "" },
    { src: flamenco, alt: "" },
    { src: aerialtram, alt: "" }
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
