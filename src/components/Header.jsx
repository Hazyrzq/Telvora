import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo-container">
            <div className="logo-icon">📡</div>
            <span className="logo-text">TELMI</span>
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



