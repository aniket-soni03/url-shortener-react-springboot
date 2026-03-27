import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container" id="footer-container">
      <footer className="footer" id="footer">
        <p className="footer-text" id="footer-text">
          &copy; {new Date().getFullYear()} TinyLink
        </p>
      </footer>
    </div>
  );
};

export default Footer;
