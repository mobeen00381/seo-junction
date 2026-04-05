'use client'
import { useState } from 'react'

interface LivePreviewProps {
  businessName?: string
  whatsapp?: string
  domain?: string
}

export default function LivePreview({ 
  businessName = 'Smith Plumbing', 
  whatsapp, 
  domain = 'smith-plumbing.com' 
}: LivePreviewProps) {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop')

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 dark:bg-slate-800 rounded-xl p-1 shadow-inner">
          <button 
            onClick={() => setView('desktop')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === 'desktop' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Desktop
          </button>
          <button 
            onClick={() => setView('mobile')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === 'mobile' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="relative mx-auto transition-all duration-500 ease-in-out" style={{ maxWidth: view === 'desktop' ? '1000px' : '375px' }}>
        {/* Browser/Phone Frame */}
        <div className={`bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-800 transition-all duration-500 relative ${view === 'mobile' ? 'h-[600px] w-full' : 'aspect-video'}`}>
          {/* Top Bar */}
          <div className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 px-4 py-3 flex items-center gap-2 relative z-20">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-md py-1 px-3 text-[10px] text-gray-400 truncate">
              {domain}
            </div>
          </div>

          {/* Content Preview */}
          <div className="h-full overflow-y-auto scrollbar-hide bg-white dark:bg-slate-950 pb-20 relative">
            
            {/* FLOATING WHATSAPP ICON (REQUESTED) */}
            {whatsapp && (
              <div className="fixed bottom-6 right-6 z-50 animate-bounce cursor-pointer group" style={{ position: 'absolute' }}>
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-25"></div>
                <div className="relative bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.411-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                </div>
                <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-2 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap pointer-events-none">
                  Chat on WhatsApp
                </div>
              </div>
            )}

            <header className="px-6 py-4 flex justify-between items-center bg-white dark:bg-slate-950 border-b border-gray-50 dark:border-slate-900 sticky top-0 z-10">
              <div className="font-bold text-blue-700 dark:text-blue-400 text-lg">{businessName}</div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-[10px] font-bold">Call Now</button>
            </header>

            <section className="px-6 py-10 bg-blue-50/50 dark:bg-blue-900/10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">Fast, Reliable Services in {businessName.includes(' ') ? businessName.split(' ')[0] : 'Your City'}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs mb-6">Expert solutions for your local business needs. Professional service available 24/7.</p>
              <div className="flex items-center gap-2 mb-8">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-[10px] font-bold text-gray-500">4.9 (124 Reviews)</span>
              </div>
              <div className="w-full h-40 bg-gray-200 dark:bg-slate-800 rounded-xl overflow-hidden relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <span className="text-4xl translate-y-1">🚀</span>
                </div>
              </div>
            </section>

            <section className="px-6 py-8">
              <div className="text-xs font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-widest">Our Recent Work</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden relative border border-gray-200 dark:border-slate-700">
                  <div className="absolute inset-0 flex items-center justify-center text-xl">🔨</div>
                </div>
                <div className="aspect-square bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden relative border border-gray-200 dark:border-slate-700">
                   <div className="absolute inset-0 flex items-center justify-center text-xl">🏠</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800">
                <div className="text-[10px] font-bold text-blue-600 mb-1">New Update · Published Today</div>
                <div className="text-[11px] text-gray-700 dark:text-gray-300 font-medium">Just finished a premium service for a local client. They are thrilled with the professional results!</div>
              </div>
            </section>

            {/* Google Snippet Preview */}
            <section className="px-6 py-8 pb-32">
               <div className="text-[10px] text-gray-400 font-bold mb-3 uppercase tracking-widest">Google Search Preview</div>
               <div className="p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 bg-blue-50/20 dark:bg-blue-900/10">
                  <div className="text-blue-800 dark:text-blue-300 font-bold text-sm mb-1 leading-tight">{businessName} | #1 Rated Professional Services</div>
                  <div className="text-green-700 dark:text-green-400 text-[10px] mb-1">{domain} › local-services</div>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">Professional services. Read 100+ five-star reviews. Specializing in high-quality craftsmanship and customer satisfaction...</p>
               </div>
            </section>
          </div>
        </div>

        {/* Floating Badges */}
        <div className={`absolute -right-4 top-1/4 glass p-4 rounded-2xl shadow-xl max-w-[180px] hidden lg:block transition-all z-20 ${view === 'mobile' ? 'translate-x-32 opacity-0' : 'translate-x-0 opacity-1'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">✓</div>
            <div className="text-xs font-bold text-gray-900 dark:text-white">Live on Google</div>
          </div>
          <p className="text-[10px] text-gray-500 dark:text-gray-400">Your business appears in the top results for local searches automatically.</p>
        </div>
      </div>
    </div>
  )
}
