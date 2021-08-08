import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <p className="footer__text">&copy; Derek David 2021</p>
      <div className="footer__links">
        <a href="/contact">Contact</a>|<a href="/about">About</a>
      </div>
    </footer>
  );
};

export default Footer;
