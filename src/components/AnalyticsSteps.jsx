import React from 'react'
import { LogIn, BarChart, Sparkles, MessageSquare, ArrowRight } from 'lucide-react'

const steps = [
  { 
    no: 1, 
    text: 'Login ke dashboard',
    desc: 'Akses dashboard dengan kredensial admin Anda',
    icon: LogIn,
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    no: 2, 
    text: 'Analisis pola penggunaan',
    desc: 'Sistem menganalisis data pelanggan secara real-time',
    icon: BarChart,
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    no: 3, 
    text: 'Rekomendasi otomatis tampil',
    desc: 'AI menghasilkan rekomendasi paket yang sesuai',
    icon: Sparkles,
    gradient: 'from-emerald-500 to-teal-500'
  },
  { 
    no: 4, 
    text: 'Feedback untuk perbaikan sistem',
    desc: 'Sistem belajar dari feedback untuk akurasi lebih baik',
    icon: MessageSquare,
    gradient: 'from-orange-500 to-red-500'
  },
]

const AnalyticsSteps = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/70 border border-slate-700 text-slate-100 text-xs md:text-sm font-medium mb-6 animate-fade-in delay-100">
            <Sparkles className="w-4 h-4" />
            <span>Cara Kerja</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white animate-fade-in-up delay-200 tracking-tight">
            <span className="text-slate-900 dark:text-white">Cara Kerja Sistem</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up delay-300 leading-relaxed">
            <span className="text-slate-700 dark:text-slate-400">Proses sederhana untuk mendapatkan insight yang powerful</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-stretch">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === steps.length - 1
              return (
                <div key={step.no}>
                  <div className="relative flex flex-col">
                    {/* Connector Line (hidden on mobile, visible on desktop) */}
                    {!isLast && (
                      <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
                    )}
                    <div className="relative flex flex-col flex-1">
                      <div
                        className="rounded-2xl border border-slate-200 dark:border-[#1e2a3d] bg-white dark:bg-[#0f1727] p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-out flex flex-col h-full animate-fade-in-up hover:-translate-y-1"
                        style={{ animationDelay: `${300 + index * 100}ms` }}
                      >
                        <div className="flex flex-col flex-1 h-full">
                          {/* Step Number Badge */}
                          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-100 dark:bg-[#182338] text-sky-500 dark:text-sky-300 font-semibold text-xl mb-4">
                            {step.no}
                          </div>
                          {/* Icon */}
                          <div className="mb-4">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-100 dark:bg-[#182338] text-slate-900 dark:text-sky-300 font-semibold text-xl animate-float-soft">
                              <Icon className="w-6 h-6 text-sky-500 dark:text-sky-300" />
                            </div>
                          </div>
                          {/* Content */}
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                            <span className="text-slate-900 dark:text-white">{step.text}</span>
                          </h3>
                          <p className="text-slate-400 text-xs md:text-sm leading-relaxed flex-1">
                            <span className="text-slate-700 dark:text-slate-400">{step.desc}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnalyticsSteps
