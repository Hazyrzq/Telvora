import React from 'react'
import { Zap, TrendingUp, Target, MessageSquare, FileText, Plug } from 'lucide-react'
import '../styles/AnalyticsFeatures.css'

const items = [
  { 
    Icon: Zap, 
    title: 'Adaptif Real-time', 
    desc: 'Sistem belajar dari pola penggunaan dan feedback pelanggan secara otomatis.' 
  },
  { 
    Icon: TrendingUp, 
    title: 'Analisis Data', 
    desc: 'Pantau metrik perilaku pelanggan dengan dashboard interaktif.' 
  },
  { 
    Icon: Target, 
    title: 'AI Rekomendasi', 
    desc: 'Prediksi paket yang paling sesuai berdasarkan profil pengguna.' 
  },
  { 
    Icon: MessageSquare, 
    title: 'Feedback User', 
    desc: 'Tingkatkan akurasi sistem melalui data interaksi pengguna.' 
  },
  { 
    Icon: FileText, 
    title: 'Ekspor Dokumen', 
    desc: 'Export laporan ke Word, Excel, dan PowerPoint dengan satu klik.' 
  },
  { 
    Icon: Plug, 
    title: 'Integrasi Cepat', 
    desc: 'Hubungkan ke layanan internal dan API eksternal dengan mudah.' 
  },
]

const AnalyticsFeatures = () => {
  return (
    <div className="analytics-features">
      <div className="container">
        <div className="section-header">
          <h2>Analytics Features</h2>
          <p>Powerful tools untuk mengoptimalkan bisnis IPTV Anda</p>
        </div>

        <div className="features-grid">
          {items.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <item.Icon />
              </div>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnalyticsFeatures