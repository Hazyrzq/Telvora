import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">TELMI</h3>
            <p className="footer-tagline">Platform analitik internal untuk mengelola pelanggan dan rekomendasi berbasis AI.</p>
          </div>
          <div className="footer-links">
            <a href="#tentang">Tentang</a>
            <a href="#kontak">Kontak</a>
            <a href="#kebijakan">Kebijakan</a>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TELMI. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;















