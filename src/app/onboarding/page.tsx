'use client'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import TemplateGallery from '@/components/TemplateGallery'
import BusinessDetails from '@/components/BusinessDetails'
import DomainSearch from '@/components/DomainSearch'
import StripePayment from '@/components/StripePayment'

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

  const handleDetailsComplete = (data: any) => {
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
        
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[32px] border-4 border-primary-light dark:border-slate-800 p-8 shadow-2xl mb-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
           </div>
           <div className="text-xs font-bold text-primary dark:text-primary-light uppercase tracking-widest mb-4">Website Live Preview</div>
           <div className="aspect-video bg-gray-50 dark:bg-slate-800 rounded-2xl flex flex-col items-center justify-center border border-dashed border-gray-200 dark:border-slate-700 mb-6 px-6 font-bold text-gray-300 dark:text-gray-600 font-inter relative overflow-hidden">
              {/* MINI WHATSAPP ICON (REQUESTED) */}
              {whatsapp && (
                <div className="absolute bottom-3 right-3 bg-[#25D366] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg animate-bounce transform scale-75 origin-bottom-right">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.411-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                </div>
              )}
              <div className="text-lg text-blue-500 mb-2">{name}</div>
              <div className="text-[10px] text-gray-400 font-medium mb-4 uppercase tracking-[2px]">{domain}</div>
              <div className="w-full h-1 bg-gray-100 dark:bg-slate-800 rounded-full mb-1"></div>
              <div className="w-full h-1 bg-gray-100 dark:bg-slate-800 rounded-full mb-1"></div>
              <div className="w-2/3 h-1 bg-gray-100 dark:bg-slate-800 rounded-full"></div>
           </div>
           <Link href="/" className="block w-full bg-navy text-white font-bold py-5 rounded-2xl text-xl hover:scale-[1.02] transition-all">
             Launch Dashboard
           </Link>
        </div>
        
        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-relaxed">
           No technical skills required • {domain} is registered in your name<br />
           30-Day Free Trial Started • Change style anytime
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* HEADER */}
      <nav className="px-6 py-8 border-b border-gray-50 dark:border-slate-900 flex justify-between items-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: 'var(--premium-gradient)' }}>S</div>
          <span className="font-bold text-gray-900 dark:text-white tracking-tight">SEO Junction</span>
        </Link>
        <div className="flex items-center gap-6">
           <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Step {step} of 6</div>
           <div className="w-32 h-2 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all duration-500 ease-out shadow-sm shadow-primary/20" style={{ width: `${(step/6)*100}%` }}></div>
           </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-20">
        
        {feedback && (
          <div className="mb-16 animate-fade-in text-center">
             <span className="inline-block bg-primary-light dark:bg-primary-dark/20 text-primary-dark dark:text-primary-light px-5 py-2 rounded-full text-sm font-bold tracking-tight">
                ✨ {feedback}
             </span>
          </div>
        )}

        {/* STEP 1: BASIC INFO */}
        {step === 1 && (
          <div className="max-w-xl mx-auto animate-fade-in px-6">
            <div className="text-center mb-12">
               <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
                  Let&apos;s build your professional presence
               </h1>
               <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Start your 30-day free trial today
               </p>
            </div>
            <div className="space-y-8 bg-white dark:bg-slate-900 p-8 rounded-[38px] border border-gray-100 dark:border-slate-800 shadow-2xl shadow-gray-100 dark:shadow-none">
               <div>
                  <label className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Business Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="e.g. Smith Plumbing Services"
                    className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-lg font-bold transition-all outline-none text-gray-900 dark:text-white"
                  />
               </div>
               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Your Trade</label>
                    <div className="relative">
                      <select 
                        value={trade} 
                        onChange={e => setTrade(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-base font-bold transition-all outline-none appearance-none cursor-pointer text-gray-900 dark:text-white"
                      >
                        <option value="">Select your trade...</option>
                        {TRADES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">↓</div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Primary City</label>
                    <input 
                      type="text" 
                      value={city} 
                      onChange={e => setCity(e.target.value)} 
                      placeholder="e.g. Austin"
                      className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-5 text-base font-bold transition-all outline-none text-gray-900 dark:text-white"
                    />
                  </div>
               </div>
               <button 
                 disabled={!name || !trade || !city}
                 onClick={nextStep}
                 className="w-full bg-primary text-white font-bold py-6 rounded-2xl text-xl mt-4 disabled:opacity-20 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/20 dark:shadow-none"
               >
                 Continue →
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
             <TemplateGallery onSelect={(id) => { setTemplate(id); nextStep(); }} />
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
