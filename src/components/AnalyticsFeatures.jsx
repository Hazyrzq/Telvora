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
    <section className="relative py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/70 border border-slate-700 text-slate-100 text-xs md:text-sm font-medium mb-6 animate-fade-in delay-100">
            <Zap className="w-4 h-4" />
            <span>Analytics Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white animate-fade-in-up delay-200 tracking-tight">
            Powerful Tools untuk
            <span className="block text-slate-300 text-2xl md:text-3xl lg:text-4xl font-semibold mt-2">
              Optimalkan Bisnis
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up delay-300 leading-relaxed">
            Fitur-fitur canggih yang dirancang untuk meningkatkan efisiensi dan akurasi analitik Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {items.map((item, index) => {
            const Icon = item.Icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#1e2a3d] bg-[#0f1727] p-8 shadow-sm hover:shadow-xl transition-all duration-300 ease-out flex flex-col h-full animate-fade-in-up hover:-translate-y-1"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex flex-col flex-1">
                  <div className="inline-flex p-4 rounded-2xl bg-[#182338] text-sky-300 mb-6 animate-float-soft">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AnalyticsFeatures