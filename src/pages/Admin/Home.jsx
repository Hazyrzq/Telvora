import React, { useState, useEffect } from 'react'
import '../../styles/Admin/Home.css'
import { getDashboardStats } from '../../services/api'

const Home = () => {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats()
        setStats(data)
      } catch (error) {
        console.error('Error fetching dashboard stats:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  if (loading) return <div className="cms-dashboard"><p>Loading...</p></div>
  if (!stats) return <div className="cms-dashboard"><p>Error loading stats</p></div>

  const quickStats = [
    { label: 'Total Produk', value: stats.totalPackages || 4, icon: '📦', color: '#3b82f6', change: '+2.5%' },
    { label: 'Total Pengguna', value: (stats.totalCustomers / 1000).toFixed(1) + 'K', icon: '👥', color: '#10b981', change: '+8.3%' },
    { label: 'Alert Churn', value: stats.churnRate?.toFixed(1) || 8.5 + '%', icon: '⚠️', color: '#f59e0b', change: 'Perlu perhatian' },
  ]

  const growthData = [65, 80, 45, 90, 70, 85]
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const maxValue = Math.max(...growthData)

  return (
    <div className="cms-dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard Overview</h1>
          <p>Selamat datang di dashboard analitik</p>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="quick-stats-grid">
        {quickStats.map((stat, index) => (
          <div key={index} className="quick-stat-card">
            <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-details">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Growth Trend Chart */}
        <div className="dashboard-card large">
          <h2>Growth Trend</h2>
          <div className="chart-container">
            <div className="chart-y-axis">
              <div>800</div>
              <div>600</div>
              <div>400</div>
              <div>200</div>
              <div>0</div>
            </div>
            <div className="chart-bars-wrapper">
              <div className="chart-bars">
                {growthData.map((value, index) => (
                  <div key={index} className="bar-group">
                    <div
                      className="bar"
                      style={{
                        height: `${(value / maxValue) * 100}%`,
                        background: `linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)`,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="chart-x-axis">
                {months.map((month) => (
                  <div key={month}>{month}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="dashboard-card">
          <h2>Quick Stats</h2>
          <div className="quick-stats-list">
            <div className="quick-stat-item">
              <div className="stat-icon-small">⚡</div>
              <div className="stat-content">
                <p>Active Users Today</p>
                <h3>542 users</h3>
              </div>
              <span className="stat-badge positive">+15%</span>
            </div>
            <div className="quick-stat-item">
              <div className="stat-icon-small">📦</div>
              <div className="stat-content">
                <p>Products Sold Today</p>
                <h3>28 products</h3>
              </div>
              <span className="stat-badge positive">+8%</span>
            </div>
            <div className="quick-stat-item">
              <div className="stat-icon-small">⚠️</div>
              <div className="stat-content">
                <p>Churn Rate</p>
                <h3>6.4%</h3>
              </div>
              <span className="stat-badge negative">-2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home






