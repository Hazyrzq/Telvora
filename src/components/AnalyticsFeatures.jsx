import React from 'react'
import { Zap, TrendingUp, Target, MessageSquare, FileText, Plug } from 'lucide-react'

const items = [
  { 
    Icon: Zap, 
    title: 'Adaptif Real-time', 
    desc: 'Sistem belajar dari pola penggunaan dan feedback pelanggan secara otomatis.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  { 
    Icon: TrendingUp, 
    title: 'Analisis Data', 
    desc: 'Pantau metrik perilaku pelanggan dengan dashboard interaktif.',
    gradient: 'from-green-500 to-emerald-500'
  },
  { 
    Icon: Target, 
    title: 'AI Rekomendasi', 
    desc: 'Prediksi paket yang paling sesuai berdasarkan profil pengguna.',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    Icon: MessageSquare, 
    title: 'Feedback User', 
    desc: 'Tingkatkan akurasi sistem melalui data interaksi pengguna.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    Icon: FileText, 
    title: 'Ekspor Dokumen', 
    desc: 'Export laporan ke Word, Excel, dan PowerPoint dengan satu klik.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  { 
    Icon: Plug, 
    title: 'Integrasi Cepat', 
    desc: 'Hubungkan ke layanan internal dan API eksternal dengan mudah.',
    gradient: 'from-cyan-500 to-teal-500'
  },
]

const AnalyticsFeatures = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/70 border border-slate-700 text-slate-100 text-xs md:text-sm font-medium mb-6 animate-fade-in delay-100">
            <Zap className="w-4 h-4" />
            <span>Analytics Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white animate-fade-in-up delay-200 tracking-tight">
            <span className="text-slate-900 dark:text-white">Powerful Tools untuk</span>
            <span className="block text-slate-700 dark:text-slate-300 text-2xl md:text-3xl lg:text-4xl font-semibold mt-2">
              Optimalkan Bisnis
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up delay-300 leading-relaxed">
            <span className="text-slate-700 dark:text-slate-400">Fitur-fitur canggih yang dirancang untuk meningkatkan efisiensi dan akurasi analitik Anda</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {items.map((item, index) => {
            const Icon = item.Icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-[#1e2a3d] bg-white dark:bg-[#0f1727] p-8 shadow-sm hover:shadow-xl transition-all duration-300 ease-out flex flex-col h-full animate-fade-in-up hover:-translate-y-1"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="inline-flex p-4 rounded-2xl bg-slate-100 dark:bg-[#182338] text-sky-500 dark:text-sky-300 animate-float-soft">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AnalyticsFeatures