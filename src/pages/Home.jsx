import React from 'react'
import { Link } from 'react-router-dom'
import AnalyticsHero from '../components/AnalyticsHero'
import AnalyticsFeatures from '../components/AnalyticsFeatures'
import AnalyticsSteps from '../components/AnalyticsSteps'

// Gaya Inline Disesuaikan dengan Tema Cyan/Dark Teal
const primaryColor = '#00ffcc'; 
const bgColor = '#0a1f1a';      
const textMuted = '#a8d5c3';    
const cardBg = 'rgba(20, 35, 30, 0.95)'; 
const borderColor = 'rgba(0, 255, 204, 0.15)'; 

// FUNGSI UTILITY: Hanya untuk meniru tampilan ikon 64x64px
const IconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 64, // Disamakan dengan .feature-icon
    height: 64, // Disamakan dengan .feature-icon
    background: 'rgba(0, 255, 204, 0.08)', // Sama dengan .feature-icon background
    border: `1px solid ${borderColor}`,
    borderRadius: 12,
    flexShrink: 0,
    transition: 'all 0.4s ease',
    position: 'relative',
    marginBottom: 20, // Tambahkan margin agar terpisah dari Judul Card
    color: primaryColor,
    fontSize: 32,
    textShadow: `0 0 15px ${primaryColor}40`
};

const Home = () => {
  return (
    <>
      <AnalyticsHero />
      <main style={{maxWidth: '1200px', margin: '0 auto', padding: '48px 20px', color: '#fff'}}> 
        
        {/* Feature Cards Section */}
        <section style={{marginBottom: 48}}>
          <h2 style={{
            fontSize: 40, // PERBAIKAN: Disamakan dengan .section-header h2 di CSS (40px)
            fontWeight: 700,
            color: '#ffffff', 
            margin: '0 0 60px 0', // PERBAIKAN: Disamakan dengan .section-header margin-bottom di CSS (60px)
            textAlign: 'center',
            fontFamily: 'Rajdhani', 
            textTransform: 'uppercase',
            textShadow: `0 0 30px ${primaryColor}40` // Disesuaikan dengan .section-header h2
          }}>Fitur Utama</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24
          }}>
            
            {/* Array Fitur dengan Ikon Placeholder */}
            {[
              {icon: '⚡', title: 'Dashboard', desc: 'Lihat ringkasan metrik utama dan aktivitas terkini sistem.'},
              {icon: '◰', title: 'Pelanggan', desc: 'Kelola data pelanggan, analisis perilaku, dan identifikasi churn risk.'},
              {icon: '☐', title: 'Paket', desc: 'CRUD untuk katalog produk dan kelola penawaran paket.'},
              {icon: '∷', title: 'Rekomendasi ML', desc: 'Lihat dan kelola rekomendasi paket berbasis Machine Learning.'},
              {icon: '⚙', title: 'Pengaturan', desc: 'Konfigurasi sistem, API integrasi, dan preferensi aplikasi.'},
              {icon: '▲', title: 'Analitik', desc: 'Analisis churn, perilaku pengguna, dan efektivitas produk.'}
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: cardBg, 
                  border: `1px solid ${borderColor}`, 
                  borderRadius: 12,
                  padding: 28,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex', // Diubah menjadi flex
                  flexDirection: 'column', // Diatur sebagai column
                  alignItems: 'center' // Pusatkan konten
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = primaryColor; 
                  e.currentTarget.style.boxShadow = `0 8px 20px ${primaryColor}20`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.background = 'rgba(25, 40, 35, 0.95)';

                  // Hover icon style (Meniru: transform: scale(1.05))
                  const iconElement = e.currentTarget.querySelector('.feature-icon-placeholder');
                  if (iconElement) {
                      iconElement.style.boxShadow = `0 0 24px ${primaryColor}40`;
                      iconElement.style.background = 'rgba(0, 255, 204, 0.15)';
                      iconElement.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = borderColor;
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = cardBg;

                  // Leave icon style (Meniru: reset)
                  const iconElement = e.currentTarget.querySelector('.feature-icon-placeholder');
                  if (iconElement) {
                      iconElement.style.boxShadow = 'none';
                      iconElement.style.background = 'rgba(0, 255, 204, 0.08)';
                      iconElement.style.transform = 'scale(1)';
                  }
                }}
              >
                {/* ICON DITIRU SEPERTI DIV FEATURE-ICON */}
                <div 
                    className="feature-icon-placeholder" 
                    style={IconStyle}
                >
                    <span style={{fontSize: 32}}>{feature.icon}</span>
                </div>
                
                <h3 style={{
                  fontSize: 18, 
                  fontWeight: 600, 
                  color: '#fff', 
                  margin: '0 0 8px 0',
                  fontFamily: 'Rajdhani, sans-serif'
                }}>{feature.title}</h3>
                <p style={{
                  fontSize: 14, 
                  color: textMuted, 
                  margin: 0
                }}>{feature.desc}</p>
              </div>
            ))}

          </div>
        </section>

        <AnalyticsFeatures />
        <AnalyticsSteps />
      </main>
    </>
  )
}

export default Home