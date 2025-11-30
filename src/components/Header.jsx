import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo-container">
            {/* PERBAIKAN: Menggunakan Inline SVG untuk akurasi */}
            <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Bentuk gelombang dan lingkaran, disesuaikan dengan warna Cyan dari CSS */}
                    <path d="M10 50C25 20 45 80 60 50C70 30 75 50 80 50" stroke="url(#cyanGradient)" strokeWidth="8" strokeLinecap="round"/>
                    <circle cx="85" cy="50" r="10" stroke="url(#cyanGradient)" strokeWidth="8" />

                    {/* Definisikan gradient Cyan yang akan digunakan oleh SVG */}
                    <defs>
                        <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: "var(--cyan-primary)", stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: "#00ddaa", stopOpacity: 1}} /> {/* var(--cyan-dark) */}
                        </linearGradient>
                    </defs>
                </svg>
            </div> 
            <span className="logo-text">TELVORA</span>
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;