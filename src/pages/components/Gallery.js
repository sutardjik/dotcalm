import React, { useState } from "react";
import Lightbox from './Lightbox';

import alaia from "../../img/alaia.png";
import saltstonexaritzia from "../../img/saltstonexaritzia.png";
import acnestudios from "../../img/acnestudios.png";
import yayoikusama from "../../img/yayoikusama.png";
import macintosh from "../../img/macintosh.png";
import gentlemonster from "../../img/gentlemonster.png";
import dine from "../../img/dine.png";
import outfits from "../../img/outfits.png";
import necklace from "../../img/necklace.png";
import fourseasons from "../../img/fourseasons.png";
import bunnies from "../../img/bunnies.png";
import bags from "../../img/bags.png";
import maze from "../../img/maze.png";
import hunjuice from "../../img/hunjuice.png";
import eadem from "../../img/eadem.png";
import elephants from "../../img/elephants.png";
import sydney from "../../img/sydney.png";
import takashimurakami from "../../img/takashimurakami.png";
import zeus from "../../img/zeus.png";
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
    { src: saltstonexaritzia, alt: "" },
    { src: acnestudios, alt: "" },
    { src: yayoikusama, alt: "" },
    { src: macintosh, alt: "" },
    { src: gentlemonster, alt: "" },
    { src: dine, alt: "" },
    { src: outfits, alt: "" },
    { src: necklace, alt: "" },
    { src: fourseasons, alt: "" },
    { src: bunnies, alt: "" },
    { src: bags, alt: "" },
    { src: maze, alt: "" },
    { src: hunjuice, alt: "" },
    { src: eadem, alt: "" },
    { src: elephants, alt: "" },
    { src: sydney, alt: "" },
    { src: takashimurakami, alt: "" },
    { src: zeus, alt: "" },
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
