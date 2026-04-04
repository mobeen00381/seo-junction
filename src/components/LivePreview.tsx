'use client'
import { useState } from 'react'

export default function LivePreview() {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop')

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-xl p-1 shadow-inner">
          <button 
            onClick={() => setView('desktop')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === 'desktop' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Desktop
          </button>
          <button 
            onClick={() => setView('mobile')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === 'mobile' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="relative mx-auto transition-all duration-500 ease-in-out" style={{ maxWidth: view === 'desktop' ? '1000px' : '375px' }}>
        {/* Browser/Phone Frame */}
        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transition-all duration-500 ${view === 'mobile' ? 'aspect-[9/19.5]' : 'aspect-video'}`}>
          {/* Top Bar */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-white border border-gray-200 rounded-md py-1 px-3 text-[10px] text-gray-400 truncate">
              smith-plumbing.com
            </div>
          </div>

          {/* Content Preview */}
          <div className="h-full overflow-y-auto scrollbar-hide bg-white">
            <header className="px-6 py-4 flex justify-between items-center bg-white sticky top-0 z-10 border-b border-gray-50">
              <div className="font-black text-blue-700 text-lg">Smith Plumbing</div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-[10px] font-bold">Call Now</button>
            </header>

            <section className="px-6 py-10 bg-blue-50/50">
              <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight">Fast, Reliable Plumbing in Austin</h3>
              <p className="text-gray-600 text-xs mb-6">Family owned since 1998. Emergency service available 24/7.</p>
              <div className="flex items-center gap-2 mb-8">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-[10px] font-bold text-gray-500">4.9 (124 Reviews)</span>
              </div>
              <div className="w-full h-40 bg-gray-200 rounded-xl overflow-hidden relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-4xl">🔧</span>
                </div>
              </div>
            </section>

            <section className="px-6 py-8">
              <div className="text-xs font-black text-gray-900 mb-4 uppercase tracking-widest">Our Recent Work</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-50 flex items-center justify-center text-xl">🏠</div>
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
                   <div className="absolute inset-0 bg-blue-50 flex items-center justify-center text-xl">🛁</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-[10px] font-bold text-blue-600 mb-1">New Update · Published Today</div>
                <div className="text-[11px] text-gray-700 font-medium">Just finished a full bathroom repipe in North Austin. Customer is thrilled with the water pressure!</div>
              </div>
            </section>

            {/* Google Snippet Preview */}
            <section className="px-6 py-8 mb-20">
               <div className="text-[10px] text-gray-400 font-bold mb-3 uppercase tracking-widest">Google Search Preview</div>
               <div className="p-4 rounded-xl border border-blue-50 bg-blue-50/20">
                  <div className="text-blue-800 font-bold text-sm mb-1 leading-tight">Smith Plumbing Services | #1 Rated Plumber in Austin</div>
                  <div className="text-green-700 text-[10px] mb-1">smith-plumbing.com › austin-plumber</div>
                  <p className="text-[10px] text-gray-500">Professional plumbing services in Austin, TX. Read 100+ five-star reviews. Specializing in water heaters, leak detection...</p>
               </div>
            </section>
          </div>
        </div>

        {/* Floating Badges */}
        <div className={`absolute -right-4 top-1/4 glass p-4 rounded-2xl shadow-xl max-w-[180px] hidden lg:block transition-all ${view === 'mobile' ? 'translate-x-32 opacity-0' : 'translate-x-0 opacity-1'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">✓</div>
            <div className="text-xs font-bold text-gray-900">Live on Google</div>
          </div>
          <p className="text-[10px] text-gray-500">Your business appears in the top results for local searches automatically.</p>
        </div>
      </div>
    </div>
  )
}
