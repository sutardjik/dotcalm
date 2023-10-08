import React from 'react';

const Lightbox = ({ imageSrc, onClose }) => {
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt="" />
      </div>
    </div>
  );
};

export default Lightbox;