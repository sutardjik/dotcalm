import React, { useState } from "react";
import Lightbox from './Lightbox';

import holoscandi from "../../img/holoscandi.png"
import bicycle from "../../img/bicycle.png"
import necklace from "../../img/necklace.png"
import fourseasons from "../../img/fourseasons.png"
import bunnies from "../../img/bunnies.png"
import bags from "../../img/bags.png"
import maze from "../../img/maze.png";
import spiral from "../../img/spiral.png";
import orchid from "../../img/orchid.png";
import annakiki from "../../img/annakiki.png";
import cinematapes from "../../img/cinematapes.png";
import elephants from "../../img/elephants.png";
import sun from "../../img/sun.png";
import yayoikusama from "../../img/yayoikusama.png";
import hunjuice from "../../img/hunjuice.png";
import folktalespirits from "../../img/folktalespirits.png";
import sydney from "../../img/sydney.png";
import takashimurakami from "../../img/takashimurakami.png";
import zeus from "../../img/zeus.png";
import xenia from "../../img/xenia.png";
import art from "../../img/art.png";
import park from "../../img/park.png";
import mountain from "../../img/mountain.png";
import classical from "../../img/classical.png";
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
    { src: holoscandi, alt: "" },
    { src: bicycle, alt: "" },
    { src: necklace, alt: "" },
    { src: fourseasons, alt: "" },
    { src: bunnies, alt: "" },
    { src: bags, alt: "" },
    { src: maze, alt: "" },
    { src: spiral, alt: "" },
    { src: orchid, alt: "" },
    { src: annakiki, alt: "" },
    { src: cinematapes, alt: "" },
    { src: elephants, alt: "" },
    { src: sun, alt: "" },
    { src: yayoikusama, alt: "" },
    { src: hunjuice, alt: "" },
    { src: folktalespirits, alt: "" },
    { src: sydney, alt: "" },
    { src: takashimurakami, alt: "" },
    { src: zeus, alt: "" },
    { src: xenia, alt: "" },
    { src: art, alt: "" },
    { src: park, alt: "" },
    { src: mountain, alt: "" },
    { src: classical, alt: "" },
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
