import React, { useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import '../styles/Admin/AdminLayout.css'
import { useAuth } from '../contexts/AuthContext'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { 
      path: '/admin', 
      icon: 'home', 
      label: 'Dashboard', 
      exact: true 
    },
    { 
      path: '/admin/customers', 
      icon: 'users', 
      label: 'Pelanggan' 
    },
    { 
      type: 'dropdown',
      icon: 'package', 
      label: 'Product',
      submenu: [
        { path: '/admin/packages', label: 'Product Management' },
        { path: '/admin/product-lab', label: 'Product Lab' }
      ]
    },
    { 
      path: '/admin/recommendations', 
      icon: 'chart', 
      label: 'Analitik' 
    }
  ]

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  const isDropdownActive = (submenu) => {
    return submenu.some(item => location.pathname.startsWith(item.path))
  }

  // SVG Icons Component
  const Icon = ({ name, className = "" }) => {
    const icons = {
      home: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      users: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      package: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      chart: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      arrowLeft: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12 19 5 12 12 5"/>
        </svg>
      ),
      arrowRight: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      ),
      chevronDown: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      ),
      user: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      logout: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
      ),
      signal: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      )
    }

    return (
      <span className={`icon ${className}`}>
        {icons[name] || icons.home}
      </span>
    )
  }

  return (
    <div className="admin-layout">
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon-wrapper">
              <Icon name="signal" className="logo-icon-svg" />
            </div>
            <span className="logo-text">TELVORA</span>
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? 'Tutup sidebar' : 'Buka sidebar'}
          >
            <Icon name={sidebarOpen ? 'arrowLeft' : 'arrowRight'} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">Menu Utama</div>
            {menuItems.map((item, index) => {
              if (item.type === 'dropdown') {
                const dropdownActive = isDropdownActive(item.submenu)
                return (
                  <div 
                    key={index} 
                    className={`nav-item-dropdown ${productDropdownOpen ? 'open' : ''}`}
                  >
                    <button
                      className={`nav-dropdown-toggle ${dropdownActive ? 'active' : ''}`}
                      onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                    >
                      <div className="nav-dropdown-content">
                        <Icon name={item.icon} className="nav-icon" />
                        <span className="nav-text">{item.label}</span>
                      </div>
                      <Icon name="chevronDown" className="nav-chevron" />
                    </button>
                    <div className="nav-submenu">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`nav-submenu-item ${isActive(subItem.path) ? 'active' : ''}`}
                        >
                          <span>{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive(item.path, item.exact) ? 'active' : ''}`}
                >
                  <Icon name={item.icon} className="nav-icon" />
                  <span className="nav-text">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="back-to-site">
            <Icon name="arrowLeft" className="back-icon" />
            <span className="back-text">Kembali ke Situs</span>
          </Link>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <h1>Panel Admin TELVORA</h1>
            <div className="header-breadcrumb">
              <span>Dashboard</span>
              <span className="breadcrumb-separator">/</span>
              <span>Overview</span>
            </div>
          </div>
          
          <div className="header-right">
            <button className="notification-btn" aria-label="Notifikasi">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span className="notification-badge">3</span>
            </button>

            <div className="user-menu">
              <div className="user-avatar">
                <Icon name="user" />
              </div>
              <div className="user-info">
                <AuthInfo Icon={Icon} />
              </div>
              <Icon name="chevronDown" className="user-dropdown-icon" />
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

function AuthInfo({ Icon }) {
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
      <span className="user-name">{user.email?.split('@')[0] || 'Admin'}</span>
      <span className="user-role">Administrator</span>
    </>
  )
}