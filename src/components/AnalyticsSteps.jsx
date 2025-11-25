import React from 'react'
import '../styles/AnalyticsSteps.css'

const steps = [
  { no: 1, text: 'Login ke dashboard' },
  { no: 2, text: 'Analisis pola penggunaan' },
  { no: 3, text: 'Rekomendasi otomatis tampil' },
  { no: 4, text: 'Feedback untuk perbaikan sistem' },
]

const AnalyticsSteps = () => {
  return (
    <section className="analytics-steps">
      <div className="container">
        <h2>Cara Kerja Sistem</h2>
        <div className="steps-grid">
          {steps.map(s => (
            <div key={s.no} className="step-item">
              <div className="step-no">{s.no}</div>
              <div className="step-text">{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnalyticsSteps
