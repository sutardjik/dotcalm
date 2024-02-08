import React, { useState } from "react";
import Lightbox from './Lightbox';

import orchid from "../../img/orchid.png";
import asocietyoffgod from "../../img/asocietyoffgod.png";
import sculpturegarden from "../../img/sculpturegarden.png";
import isseymiyake from "../../img/isseymiyake.png";
import offwhite from "../../img/offwhite.png";
import sliveroftime from "../../img/sliveroftime.png";
import loewe from "../../img/loewe.png";
import universe from "../../img/universe.png";
import annakiki from "../../img/annakiki.png";
import electricguitar from "../../img/electricguitar.png";
import rock from "../../img/rock.png";
import cinematapes from "../../img/cinematapes.png";
import blackhorse from "../../img/blackhorse.png";
import elephants from "../../img/elephants.png";
import swarovski from "../../img/swarovski.png";
import sun from "../../img/sun.png";
import bar from "../../img/bar.png";
import ohnodarling from "../../img/ohnodarling.png";
import maisonmargiela from "../../img/maisonmargiela.png";
import necklace from "../../img/necklace.png";
import yayoikusama from "../../img/yayoikusama.png";
import hunjuice from "../../img/hunjuice.png";
import folktalespirits from "../../img/folktalespirits.png";
import sydney from "../../img/sydney.png";
import ramune from "../../img/ramune.png";
import cd from "../../img/cd.png";
import takashimurakami from "../../img/takashimurakami.png";
import zeus from "../../img/zeus.png";
import burberry from "../../img/burberry.png";
import dine from "../../img/dine.png";
import outfits from "../../img/outfits.png";
import art from "../../img/art.png";
import potions from "../../img/potions.png";
import streetwear from "../../img/streetwear.png";
import gentlemonster from "../../img/gentlemonster.png";
import air from "../../img/air.png";
import airplane from "../../img/airplane.png";
import mountain from "../../img/mountain.png";
import park from "../../img/park.png";
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
    { src: orchid, alt: "" },
    { src: asocietyoffgod, alt: "" },
    { src: sculpturegarden, alt: "" },
    { src: isseymiyake, alt: "" },
    { src: offwhite, alt: "" },
    { src: sliveroftime, alt: "" },
    { src: loewe, alt: "" },
    { src: universe, alt: "" },
    { src: annakiki, alt: "" },
    { src: electricguitar, alt: "" },
    { src: rock, alt: "" },
    { src: cinematapes, alt: "" },
    { src: blackhorse, alt: "" },
    { src: elephants, alt: "" },
    { src: swarovski, alt: "" },
    { src: sun, alt: "" },
    { src: bar, alt: "" },
    { src: ohnodarling, alt: "" },
    { src: maisonmargiela, alt: "" },
    { src: necklace, alt: "" },
    { src: yayoikusama, alt: "" },
    { src: hunjuice, alt: "" },
    { src: folktalespirits, alt: "" },
    { src: sydney, alt: "" },
    { src: ramune, alt: "" },
    { src: cd, alt: "" },
    { src: takashimurakami, alt: "" },
    { src: zeus, alt: "" },
    { src: burberry, alt: "" },
    { src: dine, alt: "" },
    { src: outfits, alt: "" },
    { src: potions, alt: "" },
    { src: streetwear, alt: "" },
    { src: art, alt: "" },
    { src: gentlemonster, alt: "" },
    { src: air, alt: "" },
    { src: airplane, alt: "" },
    { src: mountain, alt: "" },
    { src: park, alt: "" },
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
