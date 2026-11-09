import React from 'react';

const Lightbox = ({ imageSrc, onClose }) => {
  return (
    <main className="lightbox" onClick={onClose}>
      <section className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <img src={imageSrc} alt="" />
      </section>
    </main>
  );
};

export default Lightbox;