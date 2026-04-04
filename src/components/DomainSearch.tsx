'use client'
import { useState, useEffect } from 'react'

interface DomainSearchProps {
  businessName: string
  onSelect: (domain: string) => void
  onBack: () => void
}

export default function DomainSearch({ businessName, onSelect, onBack }: DomainSearchProps) {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<any[]>([])
  const [selectedDomain, setSelectedDomain] = useState('')

  useEffect(() => {
    if (businessName && !query) {
      setQuery(businessName.toLowerCase().replace(/\s+/g, ''))
    }
  }, [businessName])

  const generateDomains = (q: string) => {
    const base = q.replace(/[^a-zA-Z0-9]/g, '')
    return [
      { name: `${base}.com`, price: '$19.99/yr', tld: 'COM', badge: 'Popular' },
      { name: `${base}.net`, price: '$19.99/yr', tld: 'NET' },
      { name: `${base}.org`, price: '$19.99/yr', tld: 'ORG' },
      { name: `${base}.us`, price: '$19.99/yr', tld: 'US', badge: 'US Only' },
      { name: `${base}.co.uk`, price: '$19.99/yr', tld: 'UK' },
      { name: `${base}.eu`, price: '$19.99/yr', tld: 'EU' },
      { name: `${base}.com.au`, price: '$19.99/yr', tld: 'AU' },
    ]
  }

  const handleSearch = () => {
    if (!query) return
    setIsSearching(true)
    setTimeout(() => {
      setResults(generateDomains(query))
      setIsSearching(false)
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Choose Your Domain</h2>
        <p className="text-gray-500 dark:text-gray-400">Your web address on the world wide web.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[40px] shadow-2xl border border-gray-100 dark:border-slate-800 p-8 mb-12">
        <div className="flex gap-4 mb-10">
          <div className="flex-1 relative">
            <input 
              type="text" 
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Enter business name or keyword..."
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-8 py-6 text-xl font-bold transition-all outline-none dark:text-white"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">.com</div>
          </div>
          <button 
            onClick={handleSearch}
            className="bg-navy text-white px-10 rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center min-w-[160px]"
          >
            {isSearching ? (
              <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : 'Search'}
          </button>
        </div>

        {results.length > 0 && (
          <div className="space-y-4 animate-fade-in">
            {results.map((res, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedDomain(res.name)}
                className={`flex items-center justify-between p-6 rounded-3xl border-2 transition-all cursor-pointer ${selectedDomain === res.name ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/10' : 'border-gray-50 dark:border-slate-800 hover:border-gray-100 dark:hover:border-slate-700'}`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center font-black text-blue-600 dark:text-blue-400 text-xs tracking-tighter">.{res.tld}</div>
                  <div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{res.name}</div>
                    {res.badge && <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{res.badge}</span>}
                  </div>
                </div>
                <div className="text-right flex items-center gap-6">
                   <div className="text-lg font-black text-gray-900 dark:text-white">{res.price}</div>
                   <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${selectedDomain === res.name ? 'bg-blue-600 border-blue-600' : 'border-gray-200'}`}>
                      {selectedDomain === res.name && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                   </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {results.length === 0 && !isSearching && (
          <div className="py-20 text-center border-2 border-dashed border-gray-100 dark:border-slate-800 rounded-[32px]">
             <div className="text-6xl mb-6 opacity-20">🌐</div>
             <p className="text-gray-400 font-bold uppercase tracking-widest">Search to see availability</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <button 
          disabled={!selectedDomain}
          onClick={() => onSelect(selectedDomain)}
          className="w-full bg-navy text-white font-bold py-6 rounded-3xl text-2xl disabled:opacity-20 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-blue-200 dark:shadow-none"
        >
          Secure Domain & Continue →
        </button>
        <div className="flex justify-between items-center px-4">
           <button onClick={onBack} className="text-sm font-bold text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">← Back to style</button>
           <button className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">I already own a domain</button>
        </div>
      </div>
    </div>
  )
}
