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
      <div className="login-card">
        <h2>Selamat Datang</h2>
        <p className="login-subtitle">Login ke TELMI Analytics Portal</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Email Admin
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@telmi.com"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </label>
          {error && <div className="login-error">⚠️ {error}</div>}
          <button type="submit">🔐 Login</button>
        </form>
        <p className="login-note">Gunakan akun admin atau pengguna untuk akses ke dashboard. Sesi dikelola oleh Supabase Auth.</p>
      </div>
    </div>
  )
}

export default Login
