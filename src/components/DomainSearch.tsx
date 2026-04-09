'use client'
import { useState, useEffect } from 'react'

interface DomainResult {
  name: string
  price: string
  tld: string
  status: 'available' | 'taken'
  badge?: string
}

interface DomainSearchProps {
  businessName: string
  onSelect: (domain: string) => void
  onBack: () => void
}

export default function DomainSearch({ businessName, onSelect, onBack }: DomainSearchProps) {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<DomainResult[]>([])
  const [selectedDomain, setSelectedDomain] = useState('')

  useEffect(() => {
    if (businessName && !query) {
      setQuery(businessName.toLowerCase().replace(/\s+/g, ''))
    }
  }, [businessName])

  const generateDomains = (q: string): DomainResult[] => {
    const base = q.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    const tlds = [
      { tld: 'com', price: '$19/yr', badge: 'Popular' },
      { tld: 'net', price: '$19/yr' },
      { tld: 'org', price: '$19/yr' },
      { tld: 'us', price: '$19/yr', badge: 'US Only' },
      { tld: 'ca', price: '$19/yr', badge: 'Canada' },
      { tld: 'in', price: '$19/yr', badge: 'India' },
      { tld: 'pk', price: '$19/yr', badge: 'Pakistan' },
      { tld: 'biz', price: '$19/yr' },
      { tld: 'info', price: '$19/yr' }
    ]

    // Realistic simulation: Some common names are taken
    const takenPhrases = ['google', 'apple', 'facebook', 'amazon', 'test', 'demo', 'admin', 'plumbing', 'electrician']
    const isCommon = takenPhrases.some(p => base.includes(p))

    return tlds.map((t, index) => {
      // Deterministic "Taken" logic (e.g. .com for common names or every 4th result)
      let status: 'available' | 'taken' = 'available'
      if (isCommon && (t.tld === 'com' || t.tld === 'net' || t.tld === 'org')) {
        status = 'taken'
      } else if (base.length < 4 && (index % 2 === 0)) {
        status = 'taken'
      } else if (index === 3 || index === 6) {
        // Small random element for variety
        status = Math.sin(base.length + index) > 0.5 ? 'taken' : 'available'
      }

      return {
        name: `${base}.${t.tld}`,
        price: t.price,
        tld: t.tld.toUpperCase(),
        status,
        badge: t.badge
      }
    })
  }

  const handleSearch = () => {
    if (!query) return
    setIsSearching(true)
    setSelectedDomain('') // Reset selection on new search
    setTimeout(() => {
      setResults(generateDomains(query))
      setIsSearching(false)
    }, 1200)
  }

  const handleSelect = (res: DomainResult) => {
    if (res.status === 'taken') return
    setSelectedDomain(res.name)
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Claim Your Business Home</h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">Search for your perfect domain name below.</p>
      </div>

      <div className="bg-white dark:bg-[#0B1222] rounded-[32px] md:rounded-[60px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-slate-800 p-6 md:p-14 mb-8 md:mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-16 text-9xl opacity-[0.02] rotate-12 -translate-y-12 translate-x-12 pointer-events-none text-primary">🌐</div>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-10 md:mb-16 relative z-10">
          <div className="flex-1 relative group">
            <input 
              type="text" 
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Enter business name..."
              className="w-full bg-gray-50 dark:bg-slate-900 border-2 border-transparent focus:border-primary/40 focus:bg-white dark:focus:bg-slate-800 rounded-2xl md:rounded-[32px] px-6 md:px-10 py-5 md:py-8 text-lg md:text-2xl font-black transition-all outline-none dark:text-white placeholder:text-gray-200"
            />
            <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 text-gray-300 dark:text-slate-600 font-black pointer-events-none text-[10px] md:text-xs tracking-[2px]">CHECKING...</div>
          </div>
          <button 
            onClick={handleSearch}
            className="bg-primary text-white px-10 md:px-16 py-5 md:py-0 rounded-2xl md:rounded-[32px] font-black text-lg md:text-2xl hover:scale-[1.05] active:scale-95 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center sm:min-w-[180px] md:min-w-[220px] group overflow-hidden relative"
          >
            <span className="relative z-10">{isSearching ? (
              <div className="flex items-center gap-3">
                 <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                 <span className="text-sm">Scanning...</span>
              </div>
            ) : 'Verify Availability'}</span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>

        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-10">
            {(() => {
              const firstAvailableIndex = results.findIndex(r => r.status === 'available');
              return results.map((res, i) => (
                <div 
                  key={i} 
                  onClick={() => handleSelect(res)}
                  className={`group flex flex-col p-6 md:p-8 rounded-[28px] md:rounded-[40px] border-2 transition-all relative overflow-hidden cursor-pointer ${
                    res.status === 'taken' 
                      ? 'border-gray-50 dark:border-slate-800/50 opacity-30 grayscale cursor-not-allowed bg-gray-50/20' 
                      : selectedDomain === res.name 
                        ? 'border-primary bg-primary/5 ring-[12px] ring-primary/5 shadow-2xl shadow-primary/20 scale-[1.02]' 
                        : i === firstAvailableIndex
                          ? 'border-emerald-400 bg-emerald-50/40 dark:bg-emerald-950/20 hover:border-emerald-500 shadow-lg shadow-emerald-500/5'
                          : 'border-gray-100 dark:border-slate-800 hover:border-primary/40 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl'
                  }`}
                >
                  {res.status === 'taken' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                       <span className="text-3xl font-black rotate-[-15deg] tracking-[8px]">TAKEN</span>
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-6">
                    <div className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-[2px] uppercase ${
                      res.status === 'taken' ? 'bg-gray-100 text-gray-400' : 'bg-primary/10 text-primary'
                    }`}>
                      {res.tld}
                    </div>
                    {res.status !== 'taken' && (
                       <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                         selectedDomain === res.name ? 'bg-primary border-primary text-white shadow-lg' : 'border-gray-100 group-hover:border-primary/40 text-transparent'
                       }`}>
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                       </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className={`text-xl md:text-2xl font-black tracking-tighter truncate ${res.status === 'taken' ? 'text-gray-400 line-through' : 'text-gray-900 dark:text-white'}`}>
                      {res.name}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                       <span className={`w-1.5 h-1.5 rounded-full ${res.status === 'taken' ? 'bg-rose-500' : 'bg-emerald-500 animate-pulse'}`}></span>
                       <span className={`text-[10px] font-black uppercase tracking-widest ${res.status === 'taken' ? 'text-rose-500' : 'text-emerald-500'}`}>
                          {res.status === 'taken' ? 'Unavailable' : 'Instantly Available'}
                       </span>
                    </div>
                  </div>

                  <div className="mt-auto flex justify-between items-center pt-6 border-t border-gray-50 dark:border-slate-800/50">
                    <div className={`text-lg font-black ${res.status === 'taken' ? 'text-gray-300' : 'text-slate-900 dark:text-white'}`}>
                      {res.status === 'taken' ? '—' : res.price}
                    </div>
                    {res.status !== 'taken' && (
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                        {selectedDomain === res.name ? 'SELECTED ✓' : 'SELECT NAME →'}
                      </span>
                    )}
                  </div>

                  {i === firstAvailableIndex && res.status !== 'taken' && (
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[8px] font-black px-4 py-1.5 rounded-bl-2xl shadow-sm tracking-[1px] uppercase">
                       Top Pick
                    </div>
                  )}
                </div>
              ));
            })()}
          </div>
        )}
              ));
            })()}
          </div>
        )}

        {results.length === 0 && !isSearching && (
          <div className="py-12 md:py-24 text-center border-4 border-dashed border-gray-50 dark:border-slate-800 rounded-[24px] md:rounded-[48px] relative z-10 transition-colors">
             <div className="text-5xl md:text-8xl mb-4 md:mb-8 opacity-20 grayscale">🛡️</div>
             <p className="text-gray-400 font-bold uppercase tracking-[2px] md:tracking-[4px] text-xs md:text-base">Enter business name to verify</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <button 
          disabled={!selectedDomain}
          onClick={() => onSelect(selectedDomain)}
          className="w-full bg-primary text-white font-black py-5 md:py-8 rounded-[20px] md:rounded-[32px] text-base md:text-2xl disabled:opacity-20 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/30 group relative overflow-hidden"
        >
          <span className="relative z-10">Secure Domain & Start Free Trial →</span>
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
        <div className="flex justify-between items-center px-6">
           <button onClick={onBack} className="text-xs font-black text-gray-400 uppercase tracking-widest hover:text-gray-900 dark:hover:text-white transition-colors">← Back to style</button>
           <button className="text-xs font-black text-primary hover:underline uppercase tracking-widest">Connect existing domain</button>
        </div>
      </div>
    </div>
  )
}
