import React, { useState } from 'react'
import '../../styles/Admin/ProductLab.css'

const ProductLab = () => {
  const [simulating, setSimulating] = useState(false)
  const [simulationResult, setSimulationResult] = useState(null)
  
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    price: '',
    duration: '',
    dataCapacity: '',
    minutes: '',
    sms: '',
    vodCapacity: ''
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSimulate = async () => {
    setSimulating(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Calculate ML score
    let score = 50
    
    if (formData.dataCapacity > 50) score += 20
    else if (formData.dataCapacity > 20) score += 15
    else if (formData.dataCapacity > 0) score += 10
    
    if (formData.price < 50000) score += 15
    else if (formData.price < 100000) score += 10
    else if (formData.price < 200000) score += 5
    
    if (formData.vodCapacity > 0) score += 10
    if (formData.minutes > 500) score += 5
    
    const matchScore = Math.min(score, 95)
    const estimatedRecommendations = Math.floor((matchScore / 100) * 750)
    const conversionRate = Math.floor(matchScore * 0.8)
    
    setSimulationResult({
      matchScore,
      estimatedRecommendations,
      conversionRate,
      priceSegment: formData.price < 100000 ? 'Budget Friendly' : formData.price < 200000 ? 'Mid Range' : 'Premium',
      targetUsers: [
        { segment: 'Heavy Data Users', percentage: 35 },
        { segment: 'Price Sensitive', percentage: 25 },
        { segment: 'Entertainment Seekers', percentage: 20 },
        { segment: 'Business Users', percentage: 20 }
      ]
    })
    
    setSimulating(false)
  }

  return (
    <div className="product-lab-page">
      {/* Header */}
      <div className="lab-header">
        <div className="header-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </div>
        <div className="header-content">
          <h1>Product Lab</h1>
          <p>Simulasi AI untuk analisis peluang pasar produk baru</p>
        </div>
      </div>

      <div className="lab-container">
        {/* Form Card */}
        <div className="lab-form-card">
          <div className="form-section">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleFormChange}
              placeholder="Super Gamer 50GB"
              className="form-input"
            />
          </div>

          <div className="form-section">
            <label className="form-label">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleFormChange}
              className="form-select"
            >
              <option value="">Pilih Category</option>
              <option value="Hemat Data">Hemat Data</option>
              <option value="Unlimited">Unlimited</option>
              <option value="Premium">Premium</option>
              <option value="Business">Business</option>
              <option value="Gaming">Gaming</option>
              <option value="Streaming">Streaming</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-section">
              <label className="form-label">Price (Rp)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleFormChange}
                placeholder="50000"
                className="form-input"
              />
            </div>

            <div className="form-section">
              <label className="form-label">Duration (Days)</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleFormChange}
                placeholder="30"
                className="form-input"
              />
            </div>
          </div>

          <div className="detail-kuota-card">
            <h3>Detail Kuota</h3>
            
            <div className="form-row">
              <div className="form-section">
                <label className="form-label">Data Cap (GB)</label>
                <input
                  type="number"
                  name="dataCapacity"
                  value={formData.dataCapacity}
                  onChange={handleFormChange}
                  placeholder="0"
                  className="form-input"
                />
              </div>

              <div className="form-section">
                <label className="form-label">Voice Cap (Mins)</label>
                <input
                  type="number"
                  name="minutes"
                  value={formData.minutes}
                  onChange={handleFormChange}
                  placeholder="0"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-section">
                <label className="form-label">SMS Cap</label>
                <input
                  type="number"
                  name="sms"
                  value={formData.sms}
                  onChange={handleFormChange}
                  placeholder="0"
                  className="form-input"
                />
              </div>

              <div className="form-section">
                <label className="form-label">VOD Cap (GB)</label>
                <input
                  type="number"
                  name="vodCapacity"
                  value={formData.vodCapacity}
                  onChange={handleFormChange}
                  placeholder="0"
                  className="form-input"
                />
              </div>
            </div>
          </div>

          <button 
            className="btn-run-simulation" 
            onClick={handleSimulate}
            disabled={simulating}
          >
            {simulating ? (
              <>
                <span className="btn-spinner"></span>
                <span>PROCESSING...</span>
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
                <span>RUN SIMULATION</span>
              </>
            )}
          </button>
        </div>

        {/* Info Card */}
        <div className="lab-info-card">
          <div className="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div className="info-content">
            <h3>Tentang Product Lab</h3>
            <p>
              Product Lab menggunakan AI untuk menganalisis peluang pasar produk baru Anda. 
              Sistem akan mengevaluasi harga, kategori, dan detail kuota untuk memberikan 
              rekomendasi dan prediksi performa produk di pasar.
            </p>
          </div>
        </div>

        {/* Results Section */}
        {simulationResult && (
          <div className="lab-results-card">
            <h2>Hasil Simulasi</h2>
            
            <div className="results-grid">
              <div className="result-card">
                <div className="result-label">Match Score</div>
                <div className="result-value">{simulationResult.matchScore}%</div>
                <div className="result-bar">
                  <div 
                    className="result-bar-fill" 
                    style={{ width: `${simulationResult.matchScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="result-card">
                <div className="result-label">Estimated Users</div>
                <div className="result-value">{simulationResult.estimatedRecommendations}</div>
                <div className="result-sublabel">dari 750 total users</div>
              </div>

              <div className="result-card">
                <div className="result-label">Conversion Rate</div>
                <div className="result-value">{simulationResult.conversionRate}%</div>
                <div className="result-sublabel">prediction</div>
              </div>

              <div className="result-card">
                <div className="result-label">Price Segment</div>
                <div className="result-value-text">{simulationResult.priceSegment}</div>
                <div className="result-sublabel">market position</div>
              </div>
            </div>

            <div className="target-segments">
              <h3>Target User Segments</h3>
              <div className="segments-list">
                {simulationResult.targetUsers.map((target, idx) => (
                  <div key={idx} className="segment-row">
                    <div className="segment-name">{target.segment}</div>
                    <div className="segment-bar-wrapper">
                      <div 
                        className="segment-bar-fill" 
                        style={{ width: `${target.percentage}%` }}
                      ></div>
                    </div>
                    <div className="segment-percentage">{target.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="recommendation-box">
              <div className="recommendation-icon">💡</div>
              <div className="recommendation-content">
                <h4>Rekomendasi</h4>
                <p>
                  Produk ini memiliki potensi {simulationResult.matchScore > 80 ? 'tinggi' : 'sedang'} di pasar. 
                  {simulationResult.matchScore > 80 
                    ? ' Kami merekomendasikan untuk melanjutkan ke tahap produksi.'
                    : ' Pertimbangkan untuk menyesuaikan harga atau menambah fitur.'
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductLab