import React from 'react';

const Lightbox = ({ imageSrc, onClose }) => {
  return (
    <main className="lightbox" onClick={onClose}>
      <section className="lightbox-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt="" />
      </section>
    </main>
  );
};

export default Lightbox;