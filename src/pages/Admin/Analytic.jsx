import React, { useState, useEffect } from 'react'
import '../../styles/Admin/Analytic.css'

const Analytic = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  // Mock data for analytics
  const analyticsData = {
    modelMetrics: {
      accuracy: 94.5,
      precision: 92.3,
      recall: 91.8,
      f1Score: 92
    },
    products: [
      { id: 1, name: 'Premium Data Package', sold: 125, retention: 92, status: 'Excellent' },
      { id: 2, name: 'Basic Voice Package', sold: 98, retention: 85, status: 'Good' },
      { id: 3, name: 'Entertainment Bundle', sold: 156, retention: 95, status: 'Excellent' },
      { id: 4, name: 'Student Package', sold: 87, retention: 88, status: 'Good' }
    ]
  }

  return (
    <div className="cms-recommendations analytics-dashboard">
      <div className="page-header">
        <div>
          <h1>Analytics Dashboard</h1>
          <p>Analisis kinerja dan behavior pengguna</p>
        </div>
      </div>

      {/* ML Model Performance Section */}
      <div className="section">
        <h2>Machine Learning Model Performance</h2>
        <div className="metrics-grid">
          <div className="metrics-box">
            <h3>Model Metrics</h3>
            <div className="metrics-chart">
              <svg viewBox="0 0 400 300" className="bar-chart">
                <rect x="50" y="100" width="60" height="150" fill="#5555ff" />
                <text x="80" y="270" textAnchor="middle" fontSize="12">Accuracy</text>
                <rect x="130" y="110" width="60" height="140" fill="#5555ff" />
                <text x="160" y="270" textAnchor="middle" fontSize="12">Precision</text>
                <rect x="210" y="120" width="60" height="130" fill="#5555ff" />
                <text x="240" y="270" textAnchor="middle" fontSize="12">Recall</text>
                <rect x="290" y="115" width="60" height="135" fill="#5555ff" />
                <text x="320" y="270" textAnchor="middle" fontSize="12">F1-Score</text>
                <line x1="40" y1="250" x2="360" y2="250" stroke="#ddd" strokeWidth="1" />
                <text x="35" y="255" fontSize="10">0</text>
                <text x="35" y="175" fontSize="10">25</text>
                <text x="35" y="95" fontSize="10">100</text>
              </svg>
            </div>
          </div>

          <div className="metrics-box">
            <h3>Model Summary</h3>
            <div className="summary-metrics">
              <div className="metric-row">
                <div className="metric-label">
                  <span className="metric-icon">✓</span>
                  <span>Accuracy</span>
                </div>
                <div className="metric-display">
                  <div className="metric-bar" style={{ width: '94.5%' }}></div>
                  <span className="metric-value">94.5%</span>
                </div>
              </div>
              <div className="metric-row">
                <div className="metric-label">
                  <span className="metric-icon">✓</span>
                  <span>Precision</span>
                </div>
                <div className="metric-display">
                  <div className="metric-bar" style={{ width: '92.3%' }}></div>
                  <span className="metric-value">92.3%</span>
                </div>
              </div>
              <div className="metric-row">
                <div className="metric-label">
                  <span className="metric-icon warning">⚡</span>
                  <span>Recall</span>
                </div>
                <div className="metric-display">
                  <div className="metric-bar" style={{ width: '91.8%' }}></div>
                  <span className="metric-value">91.8%</span>
                </div>
              </div>
              <div className="metric-row">
                <div className="metric-label">
                  <span className="metric-icon">✓</span>
                  <span>F1-Score</span>
                </div>
                <div className="metric-display">
                  <div className="metric-bar" style={{ width: '92%' }}></div>
                  <span className="metric-value">92%</span>
                </div>
              </div>
              <div className="model-status">
                <span className="status-check">✓</span>
                <span className="status-text">Excellent Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Behavior Trends Section */}
      <div className="section">
        <h2>Behavior Trends</h2>
        <div className="trends-grid">
          <div className="trend-box">
            <h3>Usage Comparison (Video vs Voice)</h3>
            <div className="line-chart">
              <p style={{ color: '#666', fontSize: '14px', marginTop: '40px' }}>Line chart visualization - Usage trends over 6 months</p>
            </div>
          </div>

          <div className="trend-box">
            <h3>Postpaid vs Prepaid</h3>
            <div className="pie-chart">
              <p style={{ color: '#666', fontSize: '14px', marginTop: '40px' }}>Postpaid 60% • Prepaid 40%</p>
            </div>
            <div className="pie-stats">
              <div className="pie-stat">
                <span>Postpaid Users</span>
                <strong>450 users</strong>
                <span className="percent">60%</span>
              </div>
              <div className="pie-stat">
                <span>Prepaid Users</span>
                <strong>300 users</strong>
                <span className="percent">40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Usage Trends */}
      <div className="section">
        <h2>Data Usage Trends</h2>
        <div className="usage-chart">
          <p style={{ color: '#666', fontSize: '14px', padding: '40px 20px' }}>Monthly data usage bar chart - Jan to Jun</p>
        </div>
      </div>

      {/* Product Effectiveness Section */}
      <div className="section">
        <h2>Product Effectiveness</h2>
        <div className="effectiveness-grid">
          <div className="effectiveness-box">
            <h3>Products Sold</h3>
            <div className="horizontal-bars">
              {analyticsData.products.map((product) => (
                <div key={product.id} className="bar-item">
                  <label>{product.name}</label>
                  <div className="bar-container">
                    <div 
                      className="bar-fill" 
                      style={{ width: `${(product.sold / 160) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="effectiveness-box">
            <h3>Retention Rate</h3>
            <div className="retention-items">
              {analyticsData.products.map((product) => (
                <div key={product.id} className="retention-item">
                  <div className="retention-header">
                    <span className="product-name">{product.name}</span>
                    <span className="retention-value">{product.retention}%</span>
                  </div>
                  <div className="retention-bar-container">
                    <div 
                      className="retention-bar" 
                      style={{ width: `${product.retention}%` }}
                    ></div>
                  </div>
                  <div className="retention-info">
                    <span>{product.sold} sold</span>
                    <span className={`status-badge ${product.status === 'Excellent' ? 'excellent' : 'good'}`}>
                      {product.status === 'Excellent' ? '⬆ Excellent' : '⚡ Good'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytic
