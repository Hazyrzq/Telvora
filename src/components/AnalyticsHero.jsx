import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AnalyticsHero.css'

const AnalyticsHero = () => {
  return (
    <section className="analytics-hero">
      <div className="container">
        <div className="hero-content">
          <h1>TELMI Analytics Portal</h1>
          <p className="hero-subtitle">
            Platform manajemen pelanggan dan rekomendasi produk berbasis Machine Learning. 
            Analisis perilaku pengguna dan tingkatkan engagement dengan rekomendasi yang tepat sasaran.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn-primary">
              🔐 Login Admin
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="stats-card">
            <div className="stat-item">
              <span className="stat-number">12.5K</span>
              <span className="stat-label">Pelanggan</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">94%</span>
              <span className="stat-label">Akurasi ML</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8K+</span>
              <span className="stat-label">Rekomendasi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnalyticsHero