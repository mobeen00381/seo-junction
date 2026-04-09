'use client'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import TemplateGallery from '@/components/TemplateGallery'
import BusinessDetails from '@/components/BusinessDetails'
import DomainSearch from '@/components/DomainSearch'
import StripePayment from '@/components/StripePayment'
import LivePreview from '@/components/LivePreview'

const TRADES = ['Plumber','Electrician','HVAC','Roofer','Landscaper','Dentist','Auto Shop','Locksmith','Cleaner','Other']

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [trade, setTrade] = useState('')
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [template, setTemplate] = useState('plumbing')
  const [isSuccess, setIsSuccess] = useState(false)
  
  // New Business Detail States
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('US')
  const [phone, setPhone] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [description, setDescription] = useState('')
  const [domain, setDomain] = useState('')
  const [hasPaid, setHasPaid] = useState(false)

  // Emotional feedback messages
  const [feedback, setFeedback] = useState('')
  useEffect(() => {
    if (step === 2) setFeedback("Great! Now let’s get your local details.")
    if (step === 3) setFeedback("Awesome. Pick a style that fits your brand.")
    if (step === 4) setFeedback("Perfect. Now let’s find your web address.")
    if (step === 5) setFeedback("Secure your domain and start your 30-day trial.")
    if (step === 6) setFeedback("Final step! Your business is coming online.")
  }, [step])

  const nextStep = () => setStep(s => s + 1)
  const prevStep = () => setStep(s => s - 1)

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

  const handleDetailsComplete = (data: BusinessData) => {
    setAddress(data.address)
    setCity(data.city)
    setState(data.state)
    setZip(data.zip)
    setCountry(data.country)
    setPhone(data.phone)
    setWhatsapp(data.whatsapp)
    setDescription(data.description)
    nextStep()
  }

  const handleDomainSelect = (d: string) => {
    setDomain(d)
    nextStep()
  }

  const handlePaymentSuccess = () => {
    setHasPaid(true)
    nextStep()
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-6 animate-fade-in text-center transition-colors duration-300">
        <div className="text-8xl mb-8 animate-bounce">🎉</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          Your business is now online!
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-lg">
          We&apos;ve built your professional presence. Customers can now find {name} at <span className="font-bold text-primary dark:text-primary-light underline">{domain}</span>
        </p>
        
        <div className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[48px] border-4 border-primary-light dark:border-slate-800 p-2 shadow-2xl mb-12 relative overflow-hidden animate-in slide-in-from-bottom-8 duration-1000">
           <div className="absolute top-8 right-8 z-20">
              <span className="flex h-4 w-4 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
              </span>
           </div>
           
           <div className="p-8 pb-0 text-center">
             <div className="text-[10px] font-black text-primary dark:text-primary-light uppercase tracking-[4px] mb-2">Build Analysis Complete</div>
             <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase italic tracking-tighter mb-8">Your {template} System is Live</h2>
           </div>

           <div className="scale-90 md:scale-100 origin-top">
              <LivePreview 
                businessName={name}
                domain={domain}
                whatsapp={whatsapp}
                templateId={template}
              />
           </div>

           <div className="p-10 pt-0">
             <Link href="/" className="block w-full bg-navy text-white font-black py-6 rounded-3xl text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-blue-900/20 uppercase tracking-widest text-center">
               🚀 Launch My Full Dashboard
             </Link>
           </div>
        </div>
        
        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-relaxed">
           No technical skills required • {domain} is registered in your name<br />
           30-Day Free Trial Started • Change style anytime
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-slate-950 transition-colors duration-300 selection:bg-primary/10">
      {/* HEADER */}
      <nav className="px-6 py-4 md:py-6 border-b border-gray-100 dark:border-slate-900 flex justify-between items-center bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-base shadow-lg shadow-primary/20 transition-transform group-hover:rotate-12" style={{ background: 'var(--premium-gradient)' }}>N</div>
          <span className="font-black text-gray-900 dark:text-white tracking-tighter text-xl">Neerzy</span>
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
           <div className="hidden sm:block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Setup Progress</div>
           <div className="w-24 md:w-40 h-1.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
              <div className="h-full bg-primary transition-all duration-700 ease-out shadow-[0_0_12px_rgba(29,158,117,0.5)]" style={{ width: `${(step/6)*100}%` }}></div>
           </div>
           <div className="text-[10px] font-black text-primary dark:text-primary-light bg-primary/5 px-2 py-1 rounded-md border border-primary/10 whitespace-nowrap uppercase tracking-widest">Step {step}/6</div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-12 md:py-24 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-primary/5 blur-[120px] pointer-events-none rounded-full"></div>
        
        {feedback && (
          <div className="mb-12 md:mb-20 animate-fade-in text-center relative z-10">
             <span className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[2px] border border-emerald-100 dark:border-emerald-900/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {feedback}
             </span>
          </div>
        )}

        {/* STEP 1: BASIC INFO */}
        {step === 1 && (
          <div className="max-w-xl mx-auto animate-fade-in relative z-10">
            <div className="text-center mb-12">
               <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-none italic uppercase">
                  Build Your Digital Presence
               </h1>
               <p className="text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[2px] text-xs">
                  Premium SEO System • 30-Day Free Access
               </p>
            </div>
            <div className="space-y-10 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[48px] border border-gray-100 dark:border-slate-800 shadow-2xl shadow-gray-200/50 dark:shadow-none">
               <div>
                  <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">What is your business called?</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="e.g. Smith & Sons Plumbing"
                    className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-3xl px-8 py-6 text-xl md:text-2xl font-black transition-all outline-none text-gray-900 dark:text-white placeholder:text-gray-200"
                  />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Your Industry</label>
                    <div className="relative group">
                      <select 
                        value={trade} 
                        onChange={e => setTrade(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-sm font-black transition-all outline-none appearance-none cursor-pointer text-gray-900 dark:text-white uppercase tracking-widest"
                      >
                        <option value="">Choose Industry...</option>
                        {TRADES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300 font-bold">↓</div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Primary Service City</label>
                    <input 
                      type="text" 
                      value={city} 
                      onChange={e => setCity(e.target.value)} 
                      placeholder="e.g. Austin"
                      className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-sm font-black transition-all outline-none text-gray-900 dark:text-white uppercase tracking-widest placeholder:text-gray-200"
                    />
                  </div>
               </div>
               <button 
                 disabled={!name || !trade || !city}
                 onClick={nextStep}
                 className="w-full bg-primary text-white font-black py-7 rounded-[28px] text-xl mt-4 disabled:opacity-20 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/30 dark:shadow-none group relative overflow-hidden"
               >
                 <span className="relative z-10">Construct My Website →</span>
                 <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
               </button>
            </div>
          </div>
        )}

        {/* STEP 2: DETAILED BUSINESS INFO */}
        {step === 2 && (
          <BusinessDetails 
            onBack={prevStep} 
            onComplete={handleDetailsComplete}
            initialData={{ address, city, state, zip, country, phone, whatsapp, description }}
          />
        )}

        {/* STEP 3: TEMPLATE SELECTION */}
        {step === 3 && (
          <div className="animate-fade-in">
             <TemplateGallery showBranding={true} onSelect={(id, color) => { 
                setTemplate(id); 
                if (color) localStorage.setItem('theme-color', color);
                nextStep(); 
             }} />
             <div className="text-center mt-12">
                <button onClick={prevStep} className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest hover:text-gray-900 dark:hover:text-white transition-colors">
                   ← Back to details
                </button>
             </div>
          </div>
        )}

        {/* STEP 4: DOMAIN SEARCH */}
        {step === 4 && (
          <DomainSearch 
            businessName={name} 
            onBack={prevStep} 
            onSelect={handleDomainSelect} 
          />
        )}

        {/* STEP 5: SECURE PAYMENT (STRIPE MOCK) */}
        {step === 5 && (
          <StripePayment 
            domainName={domain}
            onBack={prevStep}
            onSuccess={handlePaymentSuccess}
          />
        )}

        {/* STEP 6: ACCOUNT SETUP */}
        {step === 6 && (
          <div className="max-w-xl mx-auto animate-fade-in px-6">
            <div className="text-center mb-12">
               <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                  Welcome aboard!
               </h1>
               <p className="text-gray-500 dark:text-gray-400 font-medium">Final step: create your secure login password.</p>
            </div>
            <div className="space-y-8 bg-white dark:bg-slate-900 p-8 rounded-[38px] border border-gray-100 dark:border-slate-800 shadow-2xl shadow-gray-100 dark:shadow-none">
               <div className="flex items-center gap-4 p-5 bg-primary-light dark:bg-primary-dark/10 rounded-3xl border border-primary/20">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-3xl shadow-sm">🚀</div>
                  <div className="flex-1">
                    <div className="text-[10px] font-black text-primary dark:text-primary-light uppercase tracking-widest mb-1">Registration Complete</div>
                    <div className="text-lg font-black text-gray-900 dark:text-white leading-none">{domain}</div>
                  </div>
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">Paid</div>
               </div>
               <div>
                  <label className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Login Email</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="you@yourbusiness.com"
                    className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-xl font-bold transition-all outline-none text-gray-900 dark:text-white"
                  />
               </div>
               <button 
                 disabled={!email}
                 onClick={() => setIsSuccess(true)}
                 className="w-full bg-navy text-white font-bold py-6 rounded-2xl text-xl mt-4 disabled:opacity-20 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-blue-200 dark:shadow-none"
               >
                 Launch My Website Now →
               </button>
               <div className="text-center mt-8">
                  <button onClick={prevStep} className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest hover:text-gray-900 dark:hover:text-white transition-colors">
                    ← Back to payment info
                  </button>
               </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  )
}
