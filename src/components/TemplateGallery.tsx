'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const TEMPLATES = [
  { id: 'plumbing', name: 'Plumbing Pro', color: '#1565C0', emoji: '🔧', desc: 'Trustworthy, solid blue for established trades.', demoLink: '/seo-for-plumbers', screenshot: '/templates/plumbing.png' },
  { id: 'electrician', name: 'Bright Spark', color: '#FACC15', emoji: '⚡', desc: 'High-visibility safety yellow with bold accents.', demoLink: '/seo-for-electricians', screenshot: '/templates/electrician.png' },
  { id: 'hvac', name: 'Climate Control', color: '#3B82F6', emoji: '❄️', desc: 'Modern, balanced blue for clean service vibes.', demoLink: '/seo-for-hvac', screenshot: '/templates/hvac.png' },
  { id: 'cleaning', name: 'Fresh Estate', color: '#10B981', emoji: '🧹', desc: 'Eco-friendly emerald for premium cleaning.', demoLink: '/seo-for-cleaning', screenshot: '/templates/cleaning.png' },
  { id: 'dentist', name: 'Pure Smile', color: '#06B6D4', emoji: '🦷', desc: 'Clinic-fresh Cyan focused on hygiene & trust.', demoLink: '/seo-for-dentists', screenshot: '/templates/dentist.png' },
  { id: 'landscaping', name: 'Green Canopy', color: '#15803D', emoji: '🌳', desc: 'Natural forest tones for outdoor mastery.', demoLink: '/seo-for-landscaping', screenshot: '/templates/landscaping.png' },
  { id: 'roofing', name: 'Slate Guard', color: '#4B5563', emoji: '🏠', desc: 'Rugged, reliable grey for construction power.', demoLink: '/seo-for-roofers', screenshot: '/templates/roofing.png' },
  { id: 'locksmith', name: 'Rapid Shield', color: '#B91C1C', emoji: '🔑', desc: 'Emergency red for immediate site confidence.', demoLink: '/seo-for-locksmith', screenshot: '/templates/locksmith.png' },
  { id: 'pet-grooming', name: 'Happy Paws', color: '#8B5CF6', emoji: '🐕', desc: 'Modern, playful tones for pet care professionals.', demoLink: '/seo-for-pet-grooming', screenshot: '/templates/pet-grooming.png' },
  { id: 'sanitary', name: 'Pro Scan', color: '#64748B', emoji: '🚽', desc: 'B2B and B2C sanitary services site with Cost per Lead focus.', demoLink: '/seo-for-sanitary', screenshot: '/templates/sanitary.png' },
  { id: 'grocery', name: 'Local Mart', color: '#F97316', emoji: '🛒', desc: 'Neighborhood inventory search and delivery focused.', demoLink: '/seo-for-grocery', screenshot: '/templates/grocery.png' },
  { id: 'hardware', name: 'Project Pro', color: '#475569', emoji: '🛠️', desc: 'Heavy-duty hardware site with contractor account features.', demoLink: '/seo-for-hardware', screenshot: '/templates/hardware.png' },
]

const BRAND_COLORS = [
  { name: 'SEO Blue', primary: '#1565C0', active: '#0D47A1', secondary: '#7C3AED', light: '#E3F2FD' },
  { name: 'Emerald', primary: '#10B981', active: '#065F46', secondary: '#059669', light: '#ECFDF5' },
  { name: 'Ambition', primary: '#F59E0B', active: '#B45309', secondary: '#D97706', light: '#FFFBEB' },
  { name: 'Electric', primary: '#7C3AED', active: '#5B21B6', secondary: '#2563EB', light: '#F5F3FF' },
  { name: 'Rose', primary: '#E11D48', active: '#9F1239', secondary: '#FB7185', light: '#FFF1F2' },
]

interface TemplateGalleryProps {
  onSelect?: (id: string, color?: string) => void
  showBranding?: boolean
  limit?: number
}

export default function TemplateGallery({ onSelect, showBranding = false, limit }: TemplateGalleryProps) {
  const [selectedTemplate, setSelectedTemplate] = useState('plumbing')
  const [selectedColor, setSelectedColor] = useState(BRAND_COLORS[0].primary)
  const [previewTemplate, setPreviewTemplate] = useState<typeof TEMPLATES[0] | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('theme-color')
    if (saved) {
      setSelectedColor(saved)
    }
  }, [])

  const applyColor = (color: typeof BRAND_COLORS[0]) => {
    setSelectedColor(color.primary)
    document.documentElement.style.setProperty('--primary', color.primary)
    document.documentElement.style.setProperty('--primary-active', color.active)
    document.documentElement.style.setProperty('--primary-light', color.light)
    document.documentElement.style.setProperty('--secondary', color.secondary)
    localStorage.setItem('theme-color', color.primary)
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto font-inter">
        
        {/* BRAND COLOR SELECTION (ONLY SHOW IN ONBOARDING) */}
        {showBranding && (
          <>
            <div className="text-center mb-16 md:mb-24 animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[3px] mb-8 border border-primary/10">Step 1: Visual Identity</div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter italic uppercase leading-none">Pick Your Brand Aura</h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Select the signature color for your business excellence</p>
              
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                  {BRAND_COLORS.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => applyColor(c)}
                      className={`group relative flex flex-col items-center gap-4 transition-all ${selectedColor === c.primary ? 'scale-110' : 'opacity-40 hover:opacity-100 hover:scale-105'}`}
                    >
                      <div 
                        className={`w-16 h-16 rounded-[22px] border-4 shadow-3xl transition-all ${selectedColor === c.primary ? 'border-gray-900 dark:border-white' : 'border-transparent'}`}
                        style={{ backgroundColor: c.primary }}
                      />
                      <span className={`text-[10px] font-black uppercase tracking-widest ${selectedColor === c.primary ? 'text-gray-900 dark:text-white opacity-100' : 'text-gray-400 opacity-0 group-hover:opacity-100'}`}>{c.name}</span>
                    </button>
                  ))}
              </div>
            </div>
            <div className="h-px bg-gray-100 dark:bg-slate-800 mb-24"></div>
          </>
        )}

        {/* TEMPLATE GRID */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight italic uppercase leading-none">
            {showBranding ? '2. Choose Your Structure' : 'Our Industry Templates'}
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Optimized for high-intent local conversion</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
          {(limit ? TEMPLATES.slice(0, limit) : TEMPLATES).map((t) => (
            <div 
              key={t.id} 
              className={`group relative rounded-[48px] border-2 transition-all duration-500 p-4 cursor-pointer overflow-hidden ${selectedTemplate === t.id ? 'border-primary bg-white dark:bg-slate-900 shadow-2xl shadow-primary/20 scale-[1.02]' : 'border-gray-50 dark:border-slate-800/50 hover:border-primary/30 hover:shadow-xl'}`}
              onClick={() => setPreviewTemplate(t)}
            >
              {/* Template Preview Card */}
              <div className="rounded-[36px] overflow-hidden aspect-[3/4] bg-gray-50 dark:bg-slate-950/80 relative mb-6">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-7xl mb-8 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 drop-shadow-2xl">{t.emoji}</div>
                  <div className="w-16 h-2 rounded-full mb-4 opacity-20" style={{ background: (showBranding ? selectedColor : t.color) }}></div>
                  <div className="w-24 h-1 bg-gray-200/40 rounded-full mb-1"></div>
                  <div className="w-28 h-1 bg-gray-200/40 rounded-full"></div>
                </div>
                
                {/* ACTION OVERLAY */}
                <div className="absolute inset-0 bg-navy/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 gap-4">
                   <div className="text-white font-black text-[9px] uppercase tracking-[4px] mb-4 opacity-60">High-Tech Mockup</div>
                   <button 
                     className="w-full bg-white text-navy font-black py-4 rounded-2xl text-[10px] shadow-lg hover:bg-white/95 transition-all uppercase tracking-widest border border-white/20"
                   >
                     Preview Style
                   </button>
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       setSelectedTemplate(t.id);
                       onSelect?.(t.id, selectedColor);
                     }}
                     className="w-full bg-primary text-white font-black py-5 rounded-2xl text-[11px] shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
                   >
                     Select Layout
                   </button>
                </div>

                {selectedTemplate === t.id && (
                  <div className="absolute top-6 right-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-xl animate-in zoom-in border-4 border-white dark:border-slate-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                  </div>
                )}
              </div>

              <div className="px-4 pb-4">
                <div className="font-black text-gray-900 dark:text-white mb-2 tracking-tighter text-lg uppercase italic">{t.name}</div>
                <div className="flex flex-wrap gap-2">
                   <span className="text-[8px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md uppercase tracking-widest border border-emerald-500/10">AEO Ready</span>
                   <span className="text-[8px] font-black text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md uppercase tracking-widest border border-slate-200 dark:border-slate-700">Mobile Vitals</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-16 text-center animate-in fade-in duration-1000 slide-in-from-bottom-4">
            <Link 
              href="/examples" 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-black text-xs uppercase tracking-[3px] border border-gray-100 dark:border-slate-800 shadow-xl hover:scale-105 active:scale-95 transition-all group"
            >
              View More Industries 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        )}
      </div>

      {/* PREVIEW MODAL */}
      {previewTemplate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-navy/80 backdrop-blur-2xl"
            onClick={() => setPreviewTemplate(null)}
          />
          
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-5xl rounded-[48px] shadow-4xl overflow-hidden border border-white/10 flex flex-col md:flex-row animate-in slide-in-from-bottom-12 duration-500">
            {/* CLOSE BUTTON */}
            <button 
              onClick={() => setPreviewTemplate(null)}
              className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all active:scale-90"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

            {/* SCREENSHOT SECTION */}
            <div className="md:w-2/3 bg-gray-100 dark:bg-slate-950 p-4 md:p-8 flex items-center justify-center">
               <div className="relative w-full aspect-[16/10] bg-white dark:bg-slate-900 rounded-2xl shadow-3xl overflow-hidden border border-gray-200 dark:border-slate-800 group">
                  <img 
                    src={previewTemplate.screenshot} 
                    alt={previewTemplate.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
               </div>
            </div>

            {/* INFO SECTION */}
            <div className="md:w-1/3 p-10 md:p-12 flex flex-col justify-center">
               <div className="text-4xl mb-6">{previewTemplate.emoji}</div>
               <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[8px] font-black uppercase tracking-[2.4px] mb-4 border border-primary/10">Industry Certified</div>
               <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 uppercase italic tracking-tighter">{previewTemplate.name}</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-bold uppercase tracking-widest text-[10px] italic">"{previewTemplate.desc}"</p>
               
               <div className="space-y-4 mb-12">
                  {[
                    "Optimized for High-Intent Leads",
                    "Voice-to-Text Project Updates",
                    "Automatic GMB Weekly Posts",
                    "Premium Design Aesthetics"
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold text-gray-600 dark:text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-[10px]">✓</span>
                      {f}
                    </div>
                  ))}
               </div>

               <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => {
                      setSelectedTemplate(previewTemplate.id);
                      onSelect?.(previewTemplate.id, selectedColor);
                      setPreviewTemplate(null);
                    }}
                    className="w-full bg-primary text-white font-black py-6 rounded-2xl text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
                  >
                    🚀 Use This Style
                  </button>
                  <a 
                    href={previewTemplate.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-4 text-[10px] font-black text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors uppercase tracking-[3px]"
                  >
                    View Live Example →
                  </a>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
