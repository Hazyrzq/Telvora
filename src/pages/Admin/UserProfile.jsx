import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { getCustomers } from '../../services/api'
import { Search, X, AlertTriangle } from 'lucide-react'

const UserProfile = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

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

  const filteredCustomers = customers.filter(c => {
    if (!searchTerm) return true
    const search = searchTerm.toLowerCase()
    return (
      c.customerId?.toLowerCase().includes(search) ||
      c.planType?.toLowerCase().includes(search) ||
      c.device?.toLowerCase().includes(search)
    )
  })

  const openAnalysis = (customer) => {
    console.log('Opening analysis for customer:', customer)
    setSelectedCustomer(customer)
    setShowAnalysis(true)
  }

  const closeAnalysis = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowAnalysis(false)
      setSelectedCustomer(null)
      setIsClosing(false)
    }, 400) // Match animation duration
  }

  const getChurnRisk = (customer) => {
    const churnRate = customer.churnRate || 0
    if (churnRate > 70) return { level: 'Tinggi', color: 'text-red-600', bg: 'bg-red-100' }
    if (churnRate > 40) return { level: 'Sedang', color: 'text-amber-600', bg: 'bg-amber-100' }
    return { level: 'Rendah', color: 'text-green-600', bg: 'bg-green-100' }
  }

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-500"></div>
          <p className="text-slate-400">Memuat data pelanggan...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">User Profile</h1>
          <p className="mt-1 text-slate-400">Kelola dan analisis data pelanggan</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Cari customer ID atau plan type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500 py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
          />
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {filteredCustomers.length === 0 ? (
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-8 text-center text-slate-400">
            {customers.length === 0 ? 'Memuat data pelanggan...' : 'Tidak ada pelanggan ditemukan'}
          </div>
        ) : (
          filteredCustomers.map((customer, idx) => {
            const risk = getChurnRisk(customer)
            return (
              <div
                key={customer.id || customer.customerId || idx}
                className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white mb-1">{customer.customerId || customer.id || 'N/A'}</h3>
                    <p className="text-xs text-slate-400">{customer.device || 'N/A'}</p>
                  </div>
                  <button
                    onClick={() => openAnalysis(customer)}
                    className="rounded-lg bg-cyan-600 hover:bg-cyan-500 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lg hover:shadow-cyan-500/30 ml-2"
                  >
                    Analisis
                  </button>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Plan</span>
                    <span className="inline-block rounded-full bg-cyan-500/20 border border-cyan-500/30 px-2.5 py-1 text-xs font-semibold text-cyan-400">
                      {customer.planType || 'N/A'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Data</span>
                    <span className="text-sm text-slate-300">{(customer.dataUsage || 0).toFixed(1)} GB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Pengeluaran</span>
                    <span className="text-sm font-semibold text-white">Rp {(customer.totalSpend || 0).toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Churn Risk</span>
                    <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${
                      risk.level === 'Tinggi' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      risk.level === 'Sedang' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                      'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {risk.level} ({customer.churnRate || 0}%)
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block rounded-xl border border-slate-800 bg-slate-900/80 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="border-b border-slate-800 bg-slate-800/50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 whitespace-nowrap">Customer ID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 whitespace-nowrap">Plan</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 whitespace-nowrap hidden sm:table-cell">Device</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 whitespace-nowrap">Data (GB)</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 whitespace-nowrap hidden md:table-cell">Video %</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 whitespace-nowrap hidden lg:table-cell">Panggilan</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 whitespace-nowrap hidden lg:table-cell">SMS</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 whitespace-nowrap">Pengeluaran</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 whitespace-nowrap">Churn Risk</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-300 whitespace-nowrap">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan="10" className="px-6 py-8 text-center text-slate-400">
                    {customers.length === 0 ? 'Memuat data pelanggan...' : 'Tidak ada pelanggan ditemukan'}
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((customer, idx) => {
                  const risk = getChurnRisk(customer)
                  return (
                    <tr 
                      key={customer.id || customer.customerId || idx} 
                      className="border-b border-slate-800 transition hover:bg-slate-800/30 animate-fade-in-up"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <td className="px-4 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {customer.customerId || customer.id || 'N/A'}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="inline-block rounded-full bg-cyan-500/20 border border-cyan-500/30 px-3 py-1 text-xs font-semibold text-cyan-400">
                          {customer.planType || 'N/A'}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-300 whitespace-nowrap hidden sm:table-cell">
                        <div className="max-w-[120px] truncate" title={customer.device || 'N/A'}>
                          {customer.device || 'N/A'}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-300 whitespace-nowrap">
                        {(customer.dataUsage || 0).toFixed(1)}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-300 whitespace-nowrap hidden md:table-cell">
                        {parseFloat(customer.videoPercentage || 0).toFixed(1)}%
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-300 whitespace-nowrap hidden lg:table-cell">
                        {parseFloat(customer.callMinutes || 0).toFixed(1)}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-300 whitespace-nowrap hidden lg:table-cell">
                        {customer.smsCount || 0}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-white whitespace-nowrap">
                        Rp {(customer.totalSpend || 0).toLocaleString('id-ID')}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                          risk.level === 'Tinggi' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                          risk.level === 'Sedang' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                          'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          {risk.level} ({customer.churnRate || 0}%)
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center whitespace-nowrap">
                        <button
                          onClick={() => openAnalysis(customer)}
                          className="rounded-lg bg-cyan-600 hover:bg-cyan-500 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lg hover:shadow-cyan-500/30"
                        >
                          Analisis
                        </button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Analysis Modal */}
      {(showAnalysis || selectedCustomer) && createPortal(
        <div 
          className={`fixed inset-0 flex items-start justify-end p-0 ${isClosing ? 'animate-fade-out-overlay' : 'animate-fade-in-overlay'}`}
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            zIndex: 99999,
            opacity: 1
          }}
          onClick={closeAnalysis}
        >
          <div
            className={`relative h-full w-full max-w-2xl md:max-w-xl lg:max-w-2xl rounded-l-xl border-l border-slate-800 bg-slate-900 p-4 sm:p-6 shadow-2xl overflow-y-auto ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}
            onClick={(e) => e.stopPropagation()}
            style={{ 
              zIndex: 100000,
              position: 'relative',
              opacity: 1,
              backgroundColor: 'rgb(15 23 42)',
              color: 'white',
              display: 'block',
              visibility: 'visible',
              transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            {/* Modal Header */}
            <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">Analisis Pelanggan</h2>
              <button
                onClick={closeAnalysis}
                className="rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white p-1"
                type="button"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            {selectedCustomer ? (
            <div className="space-y-6">
              {/* Customer Info */}
              <div className="rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-4">
                <h3 className="text-lg font-bold text-white">
                  {selectedCustomer.customerId || selectedCustomer.id || 'N/A'}
                </h3>
                <p className="mt-1 text-sm text-slate-300">Plan: <span className="font-semibold text-cyan-400">{selectedCustomer.planType || 'N/A'}</span></p>
                <p className="text-sm text-slate-300">Device: <span className="font-semibold text-cyan-400">{selectedCustomer.device || 'N/A'}</span></p>
              </div>

              {/* Risk Assessment */}
              <div className={`rounded-xl border p-4 ${
                selectedCustomer.churnRate > 70 ? 'border-red-500/30 bg-red-500/10' :
                selectedCustomer.churnRate > 40 ? 'border-amber-500/30 bg-amber-500/10' :
                'border-emerald-500/30 bg-emerald-500/10'
              }`}>
                <div className="flex items-center gap-3">
                  <AlertTriangle className={selectedCustomer.churnRate > 70 ? 'text-red-400' : selectedCustomer.churnRate > 40 ? 'text-amber-400' : 'text-emerald-400'} size={24} />
                  <div>
                    <h4 className="font-bold text-white">Risiko Churn: <span className={getChurnRisk(selectedCustomer).color}>{getChurnRisk(selectedCustomer).level}</span></h4>
                    <p className="mt-1 text-sm text-slate-300">
                      {selectedCustomer.churnRate > 70 
                        ? 'Pelanggan ini memiliki risiko churn tinggi. Rekomendasi: Hubungi segera untuk penawaran khusus.'
                        : selectedCustomer.churnRate > 40
                        ? 'Pelanggan ini menunjukkan tanda-tanda ketidakpuasan. Rekomendasi: Tingkatkan kualitas layanan.'
                        : 'Pelanggan ini loyal dengan risiko churn rendah.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Usage Pattern */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-4">
                  <h4 className="font-bold text-white mb-3">Pola Penggunaan</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>📊 Data: <span className="font-semibold text-white">{(selectedCustomer.dataUsage || 0).toFixed(1)} GB</span></li>
                    <li>🎬 Video: <span className="font-semibold text-white">{parseFloat(selectedCustomer.videoPercentage || 0).toFixed(1)}%</span></li>
                    <li>📞 Panggilan: <span className="font-semibold text-white">{parseFloat(selectedCustomer.callMinutes || 0).toFixed(1)} menit</span></li>
                    <li>💬 SMS: <span className="font-semibold text-white">{selectedCustomer.smsCount || 0}</span></li>
                    <li>🌍 Travel Score: <span className="font-semibold text-white">{parseFloat(selectedCustomer.travelScore || 0).toFixed(2)}</span></li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-4">
                  <h4 className="font-bold text-white mb-3">Detail Finansial</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>💰 Pengeluaran Bulanan: <span className="font-semibold text-white">Rp {(selectedCustomer.totalSpend || 0).toLocaleString('id-ID')}</span></li>
                    <li>💳 Top-up Frekuensi: <span className="font-semibold text-white">{selectedCustomer.topupFreq || 0}x</span></li>
                    <li>⚠️ Jumlah Keluhan: <span className="font-semibold text-white">{selectedCustomer.complaintCount || 0}</span></li>
                    <li>🎯 Target Offer: <span className="font-semibold text-cyan-400">{selectedCustomer.targetOffer || 'N/A'}</span></li>
                  </ul>
                </div>
              </div>
            </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-slate-400">Memuat data pelanggan...</p>
              </div>
            )}

            {/* Modal Footer */}
            <div className="mt-6 flex justify-end gap-3 border-t border-slate-800 pt-4">
              <button
                onClick={closeAnalysis}
                className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-300 transition hover:bg-slate-700 hover:text-white"
                type="button"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default UserProfile






