import React, { useState, useEffect } from 'react'
import { getCustomers } from '../../services/api'
import '../../styles/Admin/UserProfile.css'

const UserProfile = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [showAnalysis, setShowAnalysis] = useState(false)

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true)
        const data = await getCustomers()
        setCustomers(data)
      } catch (error) {
        console.error('Error fetching customers:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCustomers()
  }, [])

  const filteredCustomers = customers.filter(c =>
    c.customerId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.planType?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openAnalysis = (customer) => {
    setSelectedCustomer(customer)
    setShowAnalysis(true)
  }

  const closeAnalysis = () => {
    setShowAnalysis(false)
    setSelectedCustomer(null)
  }

  const getChurnRisk = (customer) => {
    const churnRate = customer.churnRate || 0
    if (churnRate > 70) return { level: 'Tinggi', color: '#e53935', bg: 'rgba(229, 57, 53, 0.1)' }
    if (churnRate > 40) return { level: 'Sedang', color: '#f57c00', bg: 'rgba(245, 124, 0, 0.1)' }
    return { level: 'Rendah', color: '#00c853', bg: 'rgba(0, 200, 83, 0.1)' }
  }

  if (loading) {
    return (
      <div className="cms-customers">
        <div className="loading-state">
          <p>Memuat data pelanggan...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="cms-customers">
      <div className="page-header">
        <div>
          <h1>User Profile</h1>
          <p>Kelola dan analisis data pengguna</p>
        </div>
        <div className="header-actions">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Cari customer ID atau plan type..." 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <span>⚙️</span> Filter
          </button>
        </div>
      </div>

      <div className="customers-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Plan Type</th>
              <th>Device</th>
              <th>Data (GB)</th>
              <th>Video %</th>
              <th>Call (min)</th>
              <th>SMS</th>
              <th>Spend</th>
              <th>Topup</th>
              <th>Travel</th>
              <th>Complaint</th>
              <th>Churn Rate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length === 0 ? (
              <tr>
                <td colSpan="13" className="empty-row">
                  <p>Tidak ada pelanggan ditemukan</p>
                </td>
              </tr>
            ) : (
              filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className="customer-id">
                    {customer.customerId || `USR${customer.id.toString().padStart(3, '0')}`}
                  </td>
                  <td>
                    <span className="plan-badge">
                      {customer.planType || customer.package || 'N/A'}
                    </span>
                  </td>
                  <td>{customer.device || 'N/A'}</td>
                  <td>{(customer.dataUsage || 0).toFixed(1)}</td>
                  <td>{customer.videoPercentage || 0}%</td>
                  <td>{customer.callMinutes || 0}</td>
                  <td>{customer.smsCount || 0}</td>
                  <td className="amount">
                    Rp {(customer.totalSpend || 0).toLocaleString('id-ID')}
                  </td>
                  <td>{customer.topupAmount || 0}</td>
                  <td>{customer.roamingUsage || 0}</td>
                  <td className="complaint-count">
                    {customer.complaintCount || 0}
                  </td>
                  <td>
                    <span 
                      className="churn-badge"
                      style={{
                        background: getChurnRisk(customer).bg,
                        color: getChurnRisk(customer).color
                      }}
                    >
                      {customer.churnRate || 0}%
                    </span>
                  </td>
                  <td>
                    <button 
                      className="btn-analysis"
                      onClick={() => openAnalysis(customer)}
                    >
                      Analisis
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Analysis Modal */}
      {showAnalysis && selectedCustomer && (
        <div className="modal-overlay" onClick={closeAnalysis}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Analisis Pelanggan</h2>
              <button className="modal-close" onClick={closeAnalysis}>×</button>
            </div>

            <div className="modal-body">
              <div className="customer-info">
                <h3>{selectedCustomer.customerId || `USR${selectedCustomer.id.toString().padStart(3, '0')}`}</h3>
                <p>Plan: {selectedCustomer.planType || selectedCustomer.package}</p>
                <p>Device: {selectedCustomer.device}</p>
              </div>

              <div className="analysis-grid">
                <div className="analysis-card">
                  <h4>Risiko Churn</h4>
                  <div 
                    className="risk-indicator"
                    style={{ color: getChurnRisk(selectedCustomer).color }}
                  >
                    <div className="risk-level">{getChurnRisk(selectedCustomer).level}</div>
                    <div className="risk-rate">{selectedCustomer.churnRate || 0}%</div>
                  </div>
                  <p className="risk-description">
                    {selectedCustomer.churnRate > 70 
                      ? 'Pelanggan ini memiliki risiko churn tinggi. Rekomendasi: Hubungi segera untuk penawaran khusus.'
                      : selectedCustomer.churnRate > 40
                      ? 'Pelanggan ini menunjukkan tanda-tanda ketidakpuasan. Rekomendasi: Tingkatkan kualitas layanan.'
                      : 'Pelanggan ini loyal dengan risiko churn rendah.'}
                  </p>
                </div>

                <div className="analysis-card">
                  <h4>Pola Penggunaan</h4>
                  <ul className="usage-details">
                    <li>Data: {(selectedCustomer.dataUsage || 0).toFixed(1)} GB</li>
                    <li>Video: {selectedCustomer.videoPercentage || 0}% dari total</li>
                    <li>Panggilan: {selectedCustomer.callMinutes || 0} menit</li>
                    <li>SMS: {selectedCustomer.smsCount || 0} pesan</li>
                    <li>Roaming: {selectedCustomer.roamingUsage || 0} MB</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-secondary" onClick={closeAnalysis}>Tutup</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserProfile






