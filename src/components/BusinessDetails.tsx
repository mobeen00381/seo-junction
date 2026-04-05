'use client'
import { useState } from 'react'

interface BusinessDetailsProps {
  onComplete: (data: any) => void
  onBack: () => void
  initialData?: any
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
    <div className="max-w-2xl mx-auto animate-fade-in px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Business Details</h2>
        <p className="text-gray-500 dark:text-gray-400">Complete your profile to build your professional presence.</p>
      </div>

      <div className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl shadow-gray-100 dark:shadow-none">
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Street Address</label>
            <input 
              type="text" 
              value={address} 
              onChange={e => setAddress(e.target.value)} 
              placeholder="123 Builder Lane"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-700 rounded-xl px-5 py-4 text-sm font-bold transition-all outline-none dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">City</label>
            <input 
              type="text" 
              value={city} 
              onChange={e => setCity(e.target.value)} 
              placeholder="Austin"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-700 rounded-xl px-5 py-4 text-sm font-bold transition-all outline-none dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">State / Region</label>
            <input 
              type="text" 
              value={state} 
              onChange={e => setState(e.target.value)} 
              placeholder="Texas"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-700 rounded-xl px-5 py-4 text-sm font-bold transition-all outline-none dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Zip / Postal Code</label>
            <input 
              type="text" 
              value={zip} 
              onChange={e => setZip(e.target.value)} 
              placeholder="78701"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-700 rounded-xl px-5 py-4 text-sm font-bold transition-all outline-none dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Country</label>
            <select 
              value={country} 
              onChange={e => setCountry(e.target.value)}
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-slate-700 rounded-xl px-5 py-4 text-sm font-bold transition-all outline-none dark:text-white appearance-none cursor-pointer"
            >
              {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Business Phone</label>
            <input 
              type="tel" 
              value={phone} 
              onChange={e => setPhone(e.target.value)} 
              placeholder="+1 (555) 000-0000"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-700 rounded-xl px-5 py-4 text-sm font-bold transition-all outline-none dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">WhatsApp Number</label>
            <input 
              type="tel" 
              value={whatsapp} 
              onChange={e => setWhatsapp(e.target.value)} 
              placeholder="+1 (555) 000-0000"
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-700 rounded-xl px-5 py-4 text-sm font-bold transition-all outline-none dark:text-white"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tell us about your business</label>
            <textarea 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              placeholder="Briefly describe what you do, who you serve, and your unique selling points."
              rows={4}
              className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-slate-700 rounded-xl px-5 py-4 text-sm font-bold transition-all outline-none dark:text-white resize-none"
            />
            <p className="text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-wider">
              Used by AI to generate your website content
            </p>
          </div>
        </div>

        <div className="pt-6 flex gap-4">
          <button 
            onClick={onBack}
            className="flex-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 font-bold py-5 rounded-2xl text-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
          >
            ← Back
          </button>
          <button 
            disabled={!isFormValid}
            onClick={() => onComplete({ address, city, state, zip, country, phone, whatsapp, description })}
            className="flex-[2] bg-primary text-white font-bold py-5 rounded-2xl text-lg disabled:opacity-20 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/10 dark:shadow-none"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  )
}
