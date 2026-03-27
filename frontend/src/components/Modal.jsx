import React from "react";
import "../styles/Modal.css";
import CopyButton from "./CopyButton";

const Modal = ({ data, onClose }) => {
  const shortUrl = `https://tinylink-aniket.up.railway.app/${data.code}`;

  return (
    <div className="modal-overlay" id="modal-overlay">
      <div className="modal-container">
        <div className="modal-content" id="modal-content">
          <button className="modal-close" id="modal-close" onClick={onClose}>×</button>
          <h2 className="modal-header">Short URL Created!</h2>
          <p className="modal-url" id="short-url">{shortUrl}</p>
          <CopyButton text={shortUrl} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
