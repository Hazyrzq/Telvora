import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Info, LogIn } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all group-hover:scale-105">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 50C25 20 45 80 60 50C70 30 75 50 80 50" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                  <circle cx="85" cy="50" r="10" stroke="white" strokeWidth="8" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Telvora
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Platform analitik internal untuk mengelola pelanggan dan rekomendasi berbasis Machine Learning.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <Home className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/tentang-sistem" 
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <Info className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Tentang Sistem</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/login" 
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Login Admin</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Additional Info */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white mb-4">Kontak</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Email: info@telvora.com</p>
              <p>Telepon: +62 812 3456 7890</p>
              <p className="text-slate-500">Alamat: Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8">
          <p className="text-sm text-center text-slate-500">
            &copy; {new Date().getFullYear()} Telvora. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
















