import React from 'react'
import AnalyticsHero from '../components/AnalyticsHero'
import AnalyticsFeatures from '../components/AnalyticsFeatures'
import AnalyticsSteps from '../components/AnalyticsSteps'
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Sparkles, 
  Settings, 
  BarChart3,
  ArrowRight
} from 'lucide-react'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    desc: 'Lihat ringkasan metrik utama dan aktivitas terkini sistem.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10'
  },
  {
    icon: Users,
    title: 'Pelanggan',
    desc: 'Kelola data pelanggan, analisis perilaku, dan identifikasi churn risk.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    icon: Package,
    title: 'Paket',
    desc: 'CRUD untuk katalog produk dan kelola penawaran paket.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10'
  },
  {
    icon: Sparkles,
    title: 'Rekomendasi ML',
    desc: 'Lihat dan kelola rekomendasi paket berbasis Machine Learning.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    icon: Settings,
    title: 'Pengaturan',
    desc: 'Konfigurasi sistem, API integrasi, dan preferensi aplikasi.',
    gradient: 'from-slate-500 to-gray-500',
    bgGradient: 'from-slate-500/10 to-gray-500/10'
  },
  {
    icon: BarChart3,
    title: 'Analitik',
    desc: 'Analisis churn, perilaku pengguna, dan efektivitas produk.',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/10'
  },
]

const Home = () => {
  return (
    <>
      <AnalyticsHero />
      <main className="relative">
        {/* Tentang Sistem Section */}
          <section id="tentang-sistem" className="py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/70 border border-slate-700 text-slate-100 text-xs md:text-sm font-medium mb-6 animate-fade-in delay-100">
                <Sparkles className="w-4 h-4" />
                <span>Tentang Sistem</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-up delay-200 tracking-tight text-slate-900 dark:text-white">
                Penjelasan Sistem
                <span className="block text-slate-900 dark:text-slate-300 text-2xl md:text-3xl lg:text-4xl font-semibold mt-2">
                  Telvora Analytics
                </span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300 text-slate-700 dark:text-slate-400">
                Platform analitik berbasis Machine Learning yang dirancang untuk membantu Anda mengelola pelanggan, 
                menganalisis perilaku, dan memberikan rekomendasi produk yang tepat sasaran.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {features.map((feature, index) => {
                const Icon = feature.icon
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
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
                      {feature.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <AnalyticsFeatures />
        <AnalyticsSteps />
      </main>
    </>
  )
}

export default Home