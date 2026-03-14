import React, { useState } from "react";
import Lightbox from './Lightbox';

import alaia from "../../img/alaia.png";
import bloom from "../../img/bloom.png";
import saltstonexaritzia from "../../img/saltstonexaritzia.png";
import acnestudios from "../../img/acnestudios.png";
import outfits from "../../img/outfits.png";
import necklace from "../../img/necklace.png";
import fourseasons from "../../img/fourseasons.png";
import bunnies from "../../img/bunnies.png";
import bags from "../../img/bags.png";
import macintosh from "../../img/macintosh.png";
import elephants from "../../img/elephants.png";
import sydney from "../../img/sydney.png";
import takashimurakami from "../../img/takashimurakami.png";
import dine from "../../img/dine.png";
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
    { src: saltstonexaritzia, alt: "" },
    { src: acnestudios, alt: "" },
    { src: outfits, alt: "" },
    { src: necklace, alt: "" },
    { src: fourseasons, alt: "" },
    { src: bunnies, alt: "" },
    { src: bags, alt: "" },
    { src: macintosh, alt: "" },
    { src: elephants, alt: "" },
    { src: sydney, alt: "" },
    { src: takashimurakami, alt: "" },
    { src: dine, alt: "" },
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
