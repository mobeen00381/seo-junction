'use client'
import { useState } from 'react'

interface BusinessData {
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  whatsapp: string;
  description: string;
}

interface BusinessDetailsProps {
  onComplete: (data: BusinessData) => void
  onBack: () => void
  initialData?: Partial<BusinessData>
}

export default function BusinessDetails({ onComplete, onBack, initialData }: BusinessDetailsProps) {
  const [address, setAddress] = useState(initialData?.address || '')
  const [city, setCity] = useState(initialData?.city || '')
  const [state, setState] = useState(initialData?.state || '')
  const [zip, setZip] = useState(initialData?.zip || '')
  const [country, setCountry] = useState(initialData?.country || 'US')
  const [phone, setPhone] = useState(initialData?.phone || '')
  const [whatsapp, setWhatsapp] = useState(initialData?.whatsapp || '')
  const [description, setDescription] = useState(initialData?.description || '')

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'EU', name: 'European Union' },
    { code: 'AU', name: 'Australia' },
  ]

  const isFormValid = address && city && state && zip && country && phone && description.length > 10

  return (
    <div className="max-w-2xl mx-auto animate-fade-in relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase italic tracking-tighter leading-none">Business Profile</h2>
        <p className="text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[2px] text-xs">Complete your brand identity</p>
      </div>

      <div className="space-y-10 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[48px] border border-gray-100 dark:border-slate-800 shadow-2xl shadow-gray-200/50 dark:shadow-none">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="md:col-span-2">
            <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Official Street Address</label>
            <input 
              type="text" 
              value={address} 
              onChange={e => setAddress(e.target.value)} 
              placeholder="e.g. 123 Industrial Way"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-[24px] px-8 py-6 text-lg font-black transition-all outline-none dark:text-white placeholder:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">City</label>
            <input 
              type="text" 
              value={city} 
              onChange={e => setCity(e.target.value)} 
              placeholder="Austin"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-sm font-black transition-all outline-none dark:text-white uppercase tracking-widest"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">State / Province</label>
            <input 
              type="text" 
              value={state} 
              onChange={e => setState(e.target.value)} 
              placeholder="Texas"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-sm font-black transition-all outline-none dark:text-white uppercase tracking-widest"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Postal Code</label>
            <input 
              type="text" 
              value={zip} 
              onChange={e => setZip(e.target.value)} 
              placeholder="78701"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-sm font-black transition-all outline-none dark:text-white uppercase tracking-widest"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Country</label>
            <div className="relative group">
              <select 
                value={country} 
                onChange={e => setCountry(e.target.value)}
                className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-sm font-black transition-all outline-none dark:text-white appearance-none cursor-pointer uppercase tracking-widest"
              >
                {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300 font-bold">↓</div>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Public Business Phone</label>
            <input 
              type="tel" 
              value={phone} 
              onChange={e => setPhone(e.target.value)} 
              placeholder="+1 (555) 000-0000"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-sm font-black transition-all outline-none dark:text-white"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">WhatsApp Contact</label>
            <input 
              type="tel" 
              value={whatsapp} 
              onChange={e => setWhatsapp(e.target.value)} 
              placeholder="+1 (555) 000-0000"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-emerald-500/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-sm font-black transition-all outline-none dark:text-white"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Business Description & Services</label>
            <textarea 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              placeholder="Tell our AI about your business, the services you provide, and what makes you special."
              rows={4}
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-[24px] px-8 py-6 text-sm font-black transition-all outline-none dark:text-white resize-none h-40"
            />
            <p className="text-[9px] text-gray-400 mt-4 font-black uppercase tracking-[2px] opacity-40">
              * Used by Neural Copy engine to generate your site
            </p>
          </div>
        </div>

        <div className="pt-10 flex gap-6">
          <button 
            onClick={onBack}
            className="flex-1 bg-gray-100 dark:bg-slate-800 text-gray-400 font-black py-6 rounded-[24px] text-xs uppercase tracking-[2px] hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
          >
            ← Back
          </button>
          <button 
            disabled={!isFormValid}
            onClick={() => onComplete({ address, city, state, zip, country, phone, whatsapp, description })}
            className="flex-[2] bg-primary text-white font-black py-6 rounded-[24px] text-lg disabled:opacity-20 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/30 dark:shadow-none uppercase tracking-widest relative overflow-hidden group"
          >
             <span className="relative z-10">Continue Progress →</span>
             <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </div>
  )
}
