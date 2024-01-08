import React, { useState } from "react";
import Lightbox from './Lightbox';
import lyrics from "../../../public/static/img/lyrics.png";
import annakiki from "../../../public/static/img/annakiki.png";
import universe from "../../../public/static/img/universe.png";
import electricguitar from "../../../public/static/img/electricguitar.png";
import cinematapes from "../../../public/static/img/cinematapes.png";
import elephants from "../../../public/static/img/elephants.png";
import rock from "../../../public/static/img/rock.png";
import zetian from "../../../public/static/img/zetian.png";
import sun from "../../../public/static/img/sun.png";
import bar from "../../../public/static/img/bar.png";
import overunder from "../../../public/static/img/overunder.png";
import swarovski from "../../../public/static/img/swarovski.png";
import necklace from "../../../public/static/img/necklace.png";
import yayoikusama from "../../../public/static/img/yayoikusama.png";
import maisonmargiela from "../../../public/static/img/maisonmargiela.png";
import hunjuice from "../../../public/static/img/hunjuice.png";
import folktalespirits from "../../../public/static/img/folktalespirits.png";
import sydney from "../../../public/static/img/sydney.png";
import ramune from "../../../public/static/img/ramune.png";
import cd from "../../../public/static/img/cd.png";
import takashimurakami from "../../../public/static/img/takashimurakami.png";
import zeus from "../../../public/static/img/zeus.png";
import burberry from "../../../public/static/img/burberry.png";
import dine from "../../../public/static/img/dine.png";
import outfits from "../../../public/static/img/outfits.png";
import art from "../../../public/static/img/art.png";
import potions from "../../../public/static/img/potions.png";
import streetwear from "../../../public/static/img/streetwear.png";
import gentlemonster from "../../../public/static/img/gentlemonster.png";
import air from "../../../public/static/img/air.png";
import airplane from "../../../public/static/img/airplane.png";
import mountain from "../../../public/static/img/mountain.png";
import park from "../../../public/static/img/park.png";
import classical from "../../../public/static/img/classical.png";
import aerialtram from "../../../public/static/img/aerialtram.png";

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
