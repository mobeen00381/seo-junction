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

      <div className="bg-white dark:bg-slate-900 rounded-[48px] shadow-2xl border border-gray-100 dark:border-slate-800 p-10 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 text-9xl opacity-[0.03] rotate-12 -translate-y-8 translate-x-8 pointer-events-none">🌐</div>
        
        <div className="flex gap-4 mb-12 relative z-10">
          <div className="flex-1 relative group">
            <input 
              type="text" 
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Enter your business name..."
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-700 rounded-3xl px-8 py-6 text-xl font-bold transition-all outline-none dark:text-white"
            />
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-300 dark:text-slate-600 font-black pointer-events-none">TRY .COM</div>
          </div>
          <button 
            onClick={handleSearch}
            className="bg-primary text-white px-12 rounded-3xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center min-w-[180px]"
          >
            {isSearching ? (
              <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : 'Check Names'}
          </button>
        </div>

        {results.length > 0 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
            {(() => {
              const firstAvailableIndex = results.findIndex(r => r.status === 'available');
              return results.map((res, i) => (
                <div 
                  key={i} 
                  onClick={() => handleSelect(res)}
                  className={`flex items-center justify-between p-6 rounded-[32px] border-2 transition-all relative overflow-hidden ${
                    res.status === 'taken' 
                      ? 'border-gray-50 dark:border-slate-800 opacity-40 cursor-not-allowed bg-gray-50/50 dark:bg-slate-900/50 grayscale' 
                      : selectedDomain === res.name 
                        ? 'border-primary bg-primary/5 ring-4 ring-primary/5' 
                        : i === firstAvailableIndex
                          ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/10 hover:border-emerald-400 cursor-pointer shadow-sm animate-pulse-subtle'
                          : 'border-gray-100 dark:border-slate-800 hover:border-primary/30 bg-white dark:bg-slate-900 cursor-pointer shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Visual indicator for taken domains */}
                  {res.status === 'taken' && (
                    <div className="absolute top-0 right-0 p-4 rotate-12 opacity-5 pointer-events-none">
                      <span className="text-6xl font-black">TAKEN</span>
                    </div>
                  )}

                  {/* Recommendation badge for first available */}
                  {i === firstAvailableIndex && res.status !== 'taken' && (
                    <div className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[8px] font-black uppercase tracking-tighter px-3 py-1 rounded-bl-xl shadow-sm z-20">
                      Top Recommendation
                    </div>
                  )}

                <div className="flex items-center gap-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-black transition-colors ${
                    res.status === 'taken' ? 'bg-gray-200 dark:bg-slate-700 text-gray-500' : 'bg-primary/10 text-primary'
                  }`}>
                    <span className="text-[10px] opacity-70 uppercase tracking-tighter">TLD</span>
                    <span className="text-sm">.{res.tld.toLowerCase()}</span>
                  </div>
                  <div>
                    <div className={`text-xl font-black tracking-tight ${res.status === 'taken' ? 'text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                      {res.name}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                       <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 ${
                         res.status === 'taken' 
                           ? 'bg-rose-50 text-rose-600 border border-rose-100 dark:bg-rose-950/20 dark:border-rose-900/30' 
                           : 'bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/30'
                       }`}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: res.status === 'taken' ? '#e11d48' : '#10b981' }}></span>
                          {res.status === 'taken' ? 'Unavailable' : 'Available'}
                       </span>
                       {res.badge && res.status !== 'taken' && (
                         <span className="text-[10px] font-bold text-primary opacity-60 uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded-lg border border-primary/10">{res.badge}</span>
                       )}
                    </div>
                  </div>
                </div>
                <div className="text-right flex items-center gap-8 relative z-10">
                   <div className={`text-lg font-black ${res.status === 'taken' ? 'text-gray-400' : 'text-slate-900 dark:text-white'}`}>
                      {res.status === 'taken' ? 'N/A' : res.price}
                   </div>
                   <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                     res.status === 'taken' ? 'border-gray-200 bg-gray-100 text-gray-400' : 
                     selectedDomain === res.name ? 'bg-primary border-primary shadow-lg shadow-primary/30 text-white' : 'border-gray-200 group-hover:border-primary text-transparent hover:text-primary/30'
                   }`}>
                      {selectedDomain === res.name ? (
                        <svg className="w-5 h-5 animate-in zoom-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : res.status === 'taken' ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                   </div>
                </div>
              </div>
              ));
            })()}
          </div>
        )}

        {results.length === 0 && !isSearching && (
          <div className="py-24 text-center border-4 border-dashed border-gray-50 dark:border-slate-800 rounded-[48px] relative z-10 transition-colors">
             <div className="text-8xl mb-8 opacity-20 grayscale">🛡️</div>
             <p className="text-gray-400 font-bold uppercase tracking-[4px]">Enter business name to verify</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <button 
          disabled={!selectedDomain}
          onClick={() => onSelect(selectedDomain)}
          className="w-full bg-primary text-white font-black py-8 rounded-[32px] text-2xl disabled:opacity-20 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/30 group relative overflow-hidden"
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
