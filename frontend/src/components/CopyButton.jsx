import React from "react";
import { toast } from "react-toastify";
import "../styles/CopyButton.css";

const CopyButton = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="copy-btn-wrapper" id="copy-btn-wrapper">
      <button className="copy-button" id="copy-button" onClick={handleCopy}>
        Copy
      </button>
    </div>
  );
};

export default CopyButton;
