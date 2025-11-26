import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { isSupabaseConfigured, isValidUrl, isJwt, isWrongKeyPrefix } from '../lib/supabaseClient'
import '../styles/Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/admin'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      await signIn(email, password)
      navigate(from, { replace: true })
    } catch (err) {
      const msg = err?.message || 'Gagal login'
      if (!isSupabaseConfigured) {
        if (isWrongKeyPrefix) {
          setError('Key bukan Supabase Anon. Jangan pakai sb_publishable/sb_secret; gunakan Anon public key (JWT mulai eyJ...).')
        } else if (!isValidUrl) {
          setError('VITE_SUPABASE_URL tidak valid. Gunakan https://<project-ref>.supabase.co.')
        } else if (!isJwt) {
          setError('VITE_SUPABASE_ANON_KEY harus JWT (mulai eyJ..., berisi titik).')
        } else {
          setError('Konfigurasi Supabase belum diatur dengan benar.')
        }
      } else if (msg === 'Failed to fetch') {
        const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5174'
        setError(`Tidak bisa terhubung ke Supabase. Periksa URL/Key, koneksi internet, dan whitelist ${origin} di Auth settings.`)
      } else {
        setError(msg)
      }
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side - Illustration */}
        <div className="login-left">
          <div className="brand-section">
            <h1 className="brand-title">Welcome</h1>
            <p className="brand-subtitle">Welcome to the website</p>
          </div>

          {/* Stars */}
          <div className="stars">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>
            <div className="star star-6"></div>
          </div>

          {/* Large Decorative Circles */}
          <div className="large-circles">
            <div className="large-circle circle-1"></div>
            <div className="large-circle circle-2"></div>
            <div className="large-circle circle-3"></div>
            <div className="large-circle circle-4"></div>
            <div className="large-circle circle-5"></div>
            <div className="large-circle circle-6"></div>
            <div className="large-circle circle-7"></div>
          </div>

          {/* Rocket */}
          <div className="rocket-wrapper">
            <svg className="rocket" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
              {/* Rocket Body */}
              <ellipse cx="50" cy="75" rx="18" ry="45" fill="#ffffff" opacity="0.95"/>
              
              {/* Rocket Nose Cone */}
              <path d="M 50 20 L 35 40 L 65 40 Z" fill="#e8e8e8"/>
              
              {/* Window */}
              <circle cx="50" cy="50" r="8" fill="#1a5f4a" opacity="0.3"/>
              <circle cx="50" cy="50" r="5" fill="#1a5f4a" opacity="0.5"/>
              
              {/* Left Fin */}
              <path d="M 32 95 L 25 120 L 38 105 Z" fill="#e8e8e8"/>
              
              {/* Right Fin */}
              <path d="M 68 95 L 75 120 L 62 105 Z" fill="#e8e8e8"/>
              
              {/* Flame Base */}
              <path d="M 40 115 Q 38 125 40 135 Q 45 130 50 135 Q 55 130 60 135 Q 62 125 60 115 Z" fill="#ffeb3b" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="0.4s" repeatCount="indefinite"/>
              </path>
              
              {/* Flame Tip */}
              <path d="M 42 135 Q 46 145 50 148 Q 54 145 58 135" fill="#ff9800" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="0.3s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>

          {/* Cloud/Smoke Effect */}
          <div className="clouds">
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
            <div className="cloud cloud-3"></div>
            <div className="cloud cloud-4"></div>
            <div className="cloud cloud-5"></div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-right">
          <div className="login-box">
            <div className="login-header">
              <h2 className="login-title">USER LOGIN</h2>
              <p className="login-desc">Login ke TELMI Analytics Portal</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
                <div className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember</span>
                </label>
                <a href="#" className="link-forgot">Forgot password ?</a>
              </div>

              {error && (
                <div className="error-message">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <button type="submit" className="btn-login">Login</button>

              <div className="form-footer">
                <a href="#" className="create">Gunakan akun admin atau pengguna untuk akses ke dashboard.</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login