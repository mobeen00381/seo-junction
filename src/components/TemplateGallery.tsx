'use client'
import { useState } from 'react'

const TEMPLATES = [
  { id: 'plumbing', name: 'Plumbing', color: '#1E40AF', emoji: '🔧', desc: 'Classic, professional blue for trustworthy service.' },
  { id: 'electrician', name: 'Electrician', color: '#FACC15', emoji: '⚡', desc: 'High-visibility yellow with bold typography.' },
  { id: 'hvac', name: 'HVAC Specialist', color: '#3B82F6', emoji: '❄️', desc: 'Cool, modern aesthetic for heating & air services.' },
  { id: 'cleaning', name: 'Premium Cleaning', color: '#10B981', emoji: '🧹', desc: 'Fresh, clean palette with minimalist layout.' },
]

export default function TemplateGallery({ onSelect }: { onSelect?: (id: string) => void }) {
  const [selected, setSelected] = useState('plumbing')

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Choose Your Look</h2>
          <p className="text-gray-500">Pick a style that fits your business. You can change this anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEMPLATES.map((t) => (
            <div 
              key={t.id} 
              className={`group relative rounded-3xl border-2 transition-all p-2 cursor-pointer ${selected === t.id ? 'border-blue-600 shadow-xl' : 'border-gray-100 hover:border-gray-200 shadow-sm'}`}
              onClick={() => setSelected(t.id)}
            >
              {t.id === 'plumbing' && (
                <div className="absolute -top-3 right-4 z-10 glass px-3 py-1 rounded-full text-[10px] font-bold text-blue-700 shadow-lg border border-blue-100">
                  ⚡ Recommended for you
                </div>
              )}

              {/* Template Preview Card */}
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-50 relative mb-4">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{t.emoji}</div>
                  <div className="w-12 h-1 bg-gray-200 rounded-full mb-3" style={{ background: t.color }}></div>
                  <div className="w-20 h-1 bg-gray-100 rounded-full mb-1"></div>
                  <div className="w-16 h-1 bg-gray-100 rounded-full mb-1"></div>
                  <div className="w-24 h-1 bg-gray-100 rounded-full"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <button 
                    onClick={() => onSelect?.(t.id)}
                    className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl text-xs shadow-lg hover:bg-gray-50 active:scale-95 transition-all"
                  >
                    Use This Template
                  </button>
                </div>
              </div>

              <div className="px-4 pb-4">
                <div className="font-bold text-gray-900 mb-1">{t.name}</div>
                <p className="text-[11px] text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
