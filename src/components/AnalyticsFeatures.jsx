import React from 'react'
import '../styles/AnalyticsFeatures.css'

const items = [
  { icon: '⚡', title: 'Adaptif Real-time', desc: 'Belajar dari feedback penggunaan.' },
  { icon: '📊', title: 'Analisis Data', desc: 'Pantau perilaku pelanggan.' },
  { icon: '🤖', title: 'AI Rekomendasi', desc: 'Prediksi paket paling sesuai.' },
  { icon: '💬', title: 'Feedback User', desc: 'Tingkatkan akurasi sistem.' },
  { icon: '📄', title: 'Ekspor Dokumen', desc: 'Word, Excel, PowerPoint untuk laporan.' },
  { icon: '🔌', title: 'Integrasi Cepat', desc: 'Hubungkan ke layanan & API internal.' },
]

const AnalyticsFeatures = () => {
  return (
    <section className="analytics-features">
      <div className="container">
        <div className="features-grid">
          {items.map((it) => (
            <div key={it.title} className="feature-card">
              <div className="feature-icon">{it.icon}</div>
              <div className="feature-content">
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnalyticsFeatures
