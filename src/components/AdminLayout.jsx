import React, { useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import '../styles/Admin/AdminLayout.css'
import { useAuth } from '../contexts/AuthContext'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  const menuItems = [
    { path: '/admin', icon: '🏠', label: 'Home', exact: true },
    { path: '/admin/customers', icon: '👤', label: 'User Profile' },
    { path: '/admin/packages', icon: '📦', label: 'Product' },
    { path: '/admin/recommendations', icon: '📊', label: 'Analytic' }
  ]

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="admin-layout">
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-icon">📡</span>
            <span className="logo-text">TELMI Admin</span>
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path, item.exact) ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="back-to-site">
            <span>🏠</span>
            {sidebarOpen && <span>Kembali ke Situs</span>}
          </Link>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <h2>Panel Admin TELMI</h2>
          </div>
          <div className="header-right">
            <div className="user-menu">
              <div className="user-avatar">👤</div>
              <div className="user-info">
                <AuthInfo />
              </div>
            </div>
          </div>
        </header>

        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout

function AuthInfo() {
  const { user, signOut } = useAuth()

  if (!user) {
    return (
      <>
        <span className="user-name">Tamu</span>
        <span className="user-role">Belum Masuk</span>
      </>
    )
  }

  return (
    <>
      <span className="user-name">{user.email}</span>
      <button className="logout-button" onClick={() => signOut()}>Keluar</button>
    </>
  )
}






