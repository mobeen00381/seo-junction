'use client'
import { useState } from 'react'

interface LivePreviewProps {
  businessName?: string
  whatsapp?: string
  domain?: string
  templateId?: string
  primaryColor?: string
}

const TEMPLATE_CONFIGS: Record<string, {
  emoji: string
  gradient: string
  accent: string
  keywords: string[]
  heroTitle: string
  heroDesc: string
}> = {
  'plumbing': {
    emoji: '🔧',
    gradient: 'linear-gradient(135deg, #1565C0, #0D47A1)',
    accent: '#1565C0',
    keywords: ['P-trap', 'hydro-jetting', 'sewer lateral', 'supply line'],
    heroTitle: 'Fast, Reliable Plumbing Services',
    heroDesc: 'Expert plumbing solutions for your home or business. 24/7 emergency service available.'
  },
  'electrician': {
    emoji: '⚡',
    gradient: 'linear-gradient(135deg, #FACC15, #EAB308)',
    accent: '#FACC15',
    keywords: ['EV Charger', 'Panel Upgrade', 'Safety Audit', 'Rewiring'],
    heroTitle: 'High-Voltage Electrical Excellence',
    heroDesc: 'Safe and certified electrical work from your local masters of the spark.'
  },
  'hvac': {
    emoji: '❄️',
    gradient: 'linear-gradient(135deg, #3B82F6, #2563EB)',
    accent: '#3B82F6',
    keywords: ['AC Install', 'Furnace Repair', 'Duct Cleaning', 'Tune-up'],
    heroTitle: 'Perfect Climate, Guaranteed',
    heroDesc: 'Stay cool in summer and warm in winter with our expert HVAC solutions.'
  },
  'cleaning': {
    emoji: '🧹',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    accent: '#10B981',
    keywords: ['Residential', 'Commercial', 'Deep Clean', 'Eco-Friendly'],
    heroTitle: 'Sparkling Clean, Every Time',
    heroDesc: 'Professional cleaning services that bring the fresh back to your space.'
  },
  'dentist': {
    emoji: '🦷',
    gradient: 'linear-gradient(135deg, #06B6D4, #0891B2)',
    accent: '#06B6D4',
    keywords: ['Checkup', 'Whitening', 'Implants', 'Emergency'],
    heroTitle: 'Pure Smile, Clinical Excellence',
    heroDesc: 'Compassionate dental care for the whole family in a modern atmosphere.'
  },
  'landscaping': {
    emoji: '🌳',
    gradient: 'linear-gradient(135deg, #15803D, #166534)',
    accent: '#15803D',
    keywords: ['Hardscape', 'Pruning', 'Turf Install', 'Maintenance'],
    heroTitle: 'Outdoor Mastery & Lush Gardens',
    heroDesc: 'Transforming your yard into a professional landscape project.'
  },
  'roofing': {
    emoji: '🏠',
    gradient: 'linear-gradient(135deg, #4B5563, #374151)',
    accent: '#4B5563',
    keywords: ['Slate', 'Shingle', 'Leak Repair', 'Inspection'],
    heroTitle: 'Rugged Slate Guard Protection',
    heroDesc: 'Reliable construction power for your most important asset—your roof.'
  },
  'locksmith': {
    emoji: '🔑',
    gradient: 'linear-gradient(135deg, #B91C1C, #991B1B)',
    accent: '#B91C1C',
    keywords: ['24/7 Access', 'Smart Locks', 'Deadbolt', 'Rapid Shield'],
    heroTitle: 'Safe Haven, Rapid Shield Security',
    heroDesc: 'Immediate site confidence and security solutions for when it matters most.'
  },
  'pet-grooming': {
    emoji: '🐕',
    gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    accent: '#8B5CF6',
    keywords: ['Poodle Cut', 'Deshedding', 'Nails', 'Happy Paws'],
    heroTitle: 'Happy Paws, Modern Pet Care',
    heroDesc: 'Playful tones and expert grooming for your favorite furry professionals.'
  },
  'sanitary': {
    emoji: '🚽',
    gradient: 'linear-gradient(135deg, #64748B, #475569)',
    accent: '#64748B',
    keywords: ['B2B Services', 'Clogged Drain', 'Commercial', 'Repair'],
    heroTitle: 'Pro Scan Sanitary Solutions',
    heroDesc: 'B2B and B2C services focused on hygiene, excellence, and facility maintenance.'
  },
  'grocery': {
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #F97316, #EA580C)',
    accent: '#F97316',
    keywords: ['Local Mart', 'Delivery', 'Fresh Stock', 'Organic'],
    heroTitle: 'Local Mart Neighborhood Delivery',
    heroDesc: 'Inventory search and delivery focused on your local community needs.'
  },
  'hardware': {
    emoji: '🛠️',
    gradient: 'linear-gradient(135deg, #475569, #334155)',
    accent: '#475569',
    keywords: ['Contractor', 'Account', 'Tool Rental', 'Hard-duty'],
    heroTitle: 'Project Pro Heavy-Duty Hardware',
    heroDesc: 'Contractor account features and heavyweight tools for your biggest projects.'
  }
}

export default function LivePreview({ 
  businessName = 'Smith Plumbing', 
  whatsapp, 
  domain = 'smith-plumbing.com',
  templateId = 'plumbing',
  primaryColor
}: LivePreviewProps) {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop')
  const config = TEMPLATE_CONFIGS[templateId] || TEMPLATE_CONFIGS['plumbing']
  const activeColor = primaryColor || config.accent

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 font-inter">
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
            <div className="flex-1 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-md py-1 px-3 text-[10px] text-gray-400 truncate tracking-tight uppercase font-black">
              {domain}
            </div>
          </div>

          {/* Content Preview */}
          <div className="h-full overflow-y-auto scrollbar-hide bg-white dark:bg-slate-950 pb-20 relative text-left">
            
            {/* FLOATING WHATSAPP ICON (REQUESTED) */}
            {whatsapp && (
              <div className="fixed bottom-6 right-6 z-50 animate-bounce cursor-pointer group" style={{ position: 'absolute' }}>
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-25"></div>
                <div className="relative bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.411-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                </div>
                <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-2 rounded-xl text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap pointer-events-none uppercase tracking-widest">
                  Chat on WhatsApp
                </div>
              </div>
            )}

            <header className="px-6 py-4 flex justify-between items-center bg-white dark:bg-slate-950 border-b border-gray-50 dark:border-slate-900 sticky top-0 z-10">
              <div className="font-black text-gray-900 dark:text-white uppercase tracking-tighter italic text-lg" style={{ color: activeColor }}>{businessName}</div>
              <button className="text-white px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95" style={{ background: activeColor }}>Call Now</button>
            </header>

            <section className="px-6 py-12 relative overflow-hidden" style={{ background: config.gradient }}>
               <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
               <div className="relative z-10">
                 <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[8px] font-black uppercase tracking-[2px] mb-6 border border-white/20">{config.emoji} Industry Leader</div>
                 <h3 className="text-2xl font-black text-white mb-4 leading-none tracking-tighter uppercase italic">{config.heroTitle}</h3>
                 <p className="text-white/80 text-[11px] mb-8 leading-relaxed font-medium">{config.heroDesc}</p>
                 <div className="flex flex-wrap gap-2">
                    {config.keywords.map((k, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 text-white rounded-full text-[8px] font-black uppercase tracking-widest border border-white/10">{k}</span>
                    ))}
                 </div>
               </div>
            </section>

            <section className="px-6 py-10 bg-white dark:bg-slate-950">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-amber-400 text-sm">★★★★★</span>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">4.9 Satisfied Clients</span>
              </div>
              <div className="w-full h-40 bg-gray-50 dark:bg-slate-900/50 rounded-[32px] overflow-hidden relative border border-gray-100 dark:border-slate-800 flex items-center justify-center p-8 group">
                <div className="text-5xl group-hover:scale-125 transition-all duration-700">{config.emoji}</div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.03),transparent)] pointer-events-none"></div>
              </div>
            </section>

            <section className="px-6 py-8">
              <div className="text-[9px] font-black text-gray-900 dark:text-white mb-6 uppercase tracking-[3px] italic">Recent Projects</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-50 dark:bg-slate-900 rounded-3xl overflow-hidden relative border border-gray-100 dark:border-slate-800 flex items-center justify-center text-3xl hover:bg-gray-100 transition-colors">🛠️</div>
                <div className="aspect-square bg-gray-50 dark:bg-slate-900 rounded-3xl overflow-hidden relative border border-gray-100 dark:border-slate-800 flex items-center justify-center text-3xl hover:bg-gray-100 transition-colors">🏘️</div>
              </div>
              <div className="mt-6 p-6 rounded-3xl border border-gray-50 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/30">
                <div className="text-[8px] font-black mb-2 uppercase tracking-widest" style={{ color: activeColor }}>New Update · Just Published</div>
                <div className="text-[10px] text-gray-600 dark:text-gray-400 font-bold leading-relaxed">Just finished a premium {templateId} project. We used advanced techniques to ensure a high-quality finish and expert results!</div>
              </div>
            </section>

            {/* Google Snippet */}
            <section className="px-6 py-10 pb-24 border-t border-gray-50 dark:border-slate-900">
               <div className="text-[9px] text-gray-300 font-black mb-4 uppercase tracking-[4px] text-center">Google Map Preview</div>
               <div className="p-6 rounded-[32px] border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <div className="text-blue-700 dark:text-blue-400 font-black text-xs mb-1 uppercase italic tracking-tight">{businessName} · 5.0 Highly Rated</div>
                  <div className="text-green-700 dark:text-green-500 text-[8px] mb-2 uppercase font-black">{domain} › {templateId}-pro</div>
                  <p className="text-[9px] text-gray-400 leading-relaxed font-bold">The #1 Choice for {templateId} services in your area. Professional craftsmanship, safety certified, and 24/7 availability...</p>
               </div>
            </section>
          </div>
        </div>

        {/* Floating Badge */}
        <div className={`absolute -right-4 top-1/4 glass p-4 rounded-3xl shadow-3xl max-w-[150px] hidden lg:block transition-all z-20 ${view === 'mobile' ? 'translate-x-32 opacity-0' : 'translate-x-0 opacity-1'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-sm">✓</div>
            <div className="text-[9px] font-black text-gray-900 dark:text-white uppercase tracking-tight">System Built</div>
          </div>
          <p className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter leading-tight italic">Matched exactly to your chosen template mockup.</p>
        </div>
      </div>
    </div>
  )
}
