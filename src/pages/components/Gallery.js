import React, { useState } from "react";
import Lightbox from './Lightbox';
import lyrics from "../../img/lyrics.png";
import annakiki from "../../img/annakiki.png";
import universe from "../../img/universe.png";
import electricguitar from "../../img/electricguitar.png";
import cinematapes from "../../img/cinematapes.png";
import elephants from "../../img/elephants.png";
import rock from "../../img/rock.png";
import zetian from "../../img/zetian.png";
import sun from "../../img/sun.png";
import bar from "../../img/bar.png";
import overunder from "../../img/overunder.png";
import swarovski from "../../img/swarovski.png";
import necklace from "../../img/necklace.png";
import yayoikusama from "../../img/yayoikusama.png";
import maisonmargiela from "../../img/maisonmargiela.png";
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
    {src: lyrics, alt: ""},
    { src: annakiki, alt: "" },
    { src: universe, alt: "" },
    { src: electricguitar, alt: "" },
    { src: cinematapes, alt: "" },
    { src: elephants, alt: "" },
    { src: rock, alt: "" },
    { src: zetian, alt: "" },
    { src: sun, alt: "" },
    { src: bar, alt: "" },
    { src: overunder, alt: "" },
    { src: swarovski, alt: "" },
    { src: necklace, alt: "" },
    { src: yayoikusama, alt: "" },
    { src: maisonmargiela, alt: "" },
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
