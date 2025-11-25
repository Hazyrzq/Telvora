import React from 'react'
import { Link } from 'react-router-dom'
import AnalyticsHero from '../components/AnalyticsHero'
import AnalyticsFeatures from '../components/AnalyticsFeatures'
import AnalyticsSteps from '../components/AnalyticsSteps'

const Home = () => {
  return (
    <>
      <AnalyticsHero />
      <main style={{maxWidth: '1200px', margin: '0 auto', padding: '48px 20px'}}>
        {/* Call to Action Section */}
        <section style={{
          background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
          borderRadius: 16,
          padding: '48px 32px',
          color: '#fff',
          marginBottom: 48,
          boxShadow: '0 10px 40px rgba(0, 102, 204, 0.2)'
        }}>
          <h1 style={{
            margin: '0 0 12px 0',
            fontSize: '32px',
            fontWeight: 700
          }}>TELMI Analytics Portal</h1>
          <p style={{
            margin: '0 0 24px 0',
            fontSize: '16px',
            opacity: 0.95,
            maxWidth: '500px'
          }}>Platform analitik internal untuk mengelola pelanggan, produk, dan rekomendasi berbasis Machine Learning.</p>
          <Link to="/login" style={{
            display: 'inline-block',
            padding: '12px 28px',
            background: '#fff',
            color: '#0066cc',
            textDecoration: 'none',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 14,
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }} onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}>
            🔐 Login Admin
          </Link>
        </section>

        {/* Feature Cards */}
        <section style={{marginBottom: 48}}>
          <h2 style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '0 0 32px 0',
            textAlign: 'center'
          }}>Fitur Utama</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24
          }}>
            <div style={{
              background: '#fff',
              border: '1px solid #e9ecef',
              borderRadius: 12,
              padding: 28,
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0066cc';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{fontSize: 40, marginBottom: 12}}>📊</div>
              <h3 style={{fontSize: 18, fontWeight: 600, color: '#1a1a1a', margin: '0 0 8px 0'}}>Dashboard</h3>
              <p style={{fontSize: 14, color: '#666', margin: 0}}>Lihat ringkasan metrik utama dan aktivitas terkini sistem.</p>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid #e9ecef',
              borderRadius: 12,
              padding: 28,
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0066cc';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{fontSize: 40, marginBottom: 12}}>👥</div>
              <h3 style={{fontSize: 18, fontWeight: 600, color: '#1a1a1a', margin: '0 0 8px 0'}}>Pelanggan</h3>
              <p style={{fontSize: 14, color: '#666', margin: 0}}>Kelola data pelanggan, analisis perilaku, dan identifikasi churn risk.</p>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid #e9ecef',
              borderRadius: 12,
              padding: 28,
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0066cc';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{fontSize: 40, marginBottom: 12}}>📦</div>
              <h3 style={{fontSize: 18, fontWeight: 600, color: '#1a1a1a', margin: '0 0 8px 0'}}>Paket</h3>
              <p style={{fontSize: 14, color: '#666', margin: 0}}>CRUD untuk katalog produk dan kelola penawaran paket.</p>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid #e9ecef',
              borderRadius: 12,
              padding: 28,
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0066cc';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{fontSize: 40, marginBottom: 12}}>🤖</div>
              <h3 style={{fontSize: 18, fontWeight: 600, color: '#1a1a1a', margin: '0 0 8px 0'}}>Rekomendasi ML</h3>
              <p style={{fontSize: 14, color: '#666', margin: 0}}>Lihat dan kelola rekomendasi paket berbasis Machine Learning.</p>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid #e9ecef',
              borderRadius: 12,
              padding: 28,
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0066cc';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{fontSize: 40, marginBottom: 12}}>⚙️</div>
              <h3 style={{fontSize: 18, fontWeight: 600, color: '#1a1a1a', margin: '0 0 8px 0'}}>Pengaturan</h3>
              <p style={{fontSize: 14, color: '#666', margin: 0}}>Konfigurasi sistem, API integrasi, dan preferensi aplikasi.</p>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid #e9ecef',
              borderRadius: 12,
              padding: 28,
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0066cc';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{fontSize: 40, marginBottom: 12}}>📈</div>
              <h3 style={{fontSize: 18, fontWeight: 600, color: '#1a1a1a', margin: '0 0 8px 0'}}>Analitik</h3>
              <p style={{fontSize: 14, color: '#666', margin: 0}}>Analisis churn, perilaku pengguna, dan efektivitas produk.</p>
            </div>
          </div>
        </section>

        <AnalyticsFeatures />
        <AnalyticsSteps />
      </main>
    </>
  )
}

export default Home
