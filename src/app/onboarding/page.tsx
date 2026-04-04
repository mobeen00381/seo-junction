'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import TemplateGallery from '@/components/TemplateGallery'

const TRADES = ['Plumber','Electrician','HVAC','Roofer','Landscaper','Dentist','Auto Shop','Locksmith','Cleaner','Other']

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [trade, setTrade] = useState('')
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [template, setTemplate] = useState('plumbing')
  const [isSuccess, setIsSuccess] = useState(false)

  // Emotional feedback messages
  const [feedback, setFeedback] = useState('')
  useEffect(() => {
    if (step === 2) setFeedback("Looks great! Now choose a style.")
    if (step === 3) setFeedback("Almost there! Your business is coming online.")
  }, [step])

  const nextStep = () => setStep(s => s + 1)
  const prevStep = () => setStep(s => s - 1)

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 animate-fade-in text-center">
        <div className="text-8xl mb-8 animate-bounce">🎉</div>
        <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
          Your business is now online!
        </h1>
        <p className="text-xl text-gray-500 mb-12 max-w-lg">
          We&apos;ve built your professional presence. Customers can now find {name} on Google.
        </p>
        
        <div className="w-full max-w-md bg-white rounded-[32px] border-4 border-blue-50 p-8 shadow-2xl mb-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
           </div>
           <div className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">Website Live Preview</div>
           <div className="aspect-video bg-gray-50 rounded-2xl flex flex-col items-center justify-center border border-dashed border-gray-200 mb-6 font-bold text-gray-300">
              {name}<br />
              <span className="text-[10px] mt-2 font-medium">Template: {template}</span>
           </div>
           <Link href="/" className="block w-full bg-navy text-white font-black py-5 rounded-2xl text-xl hover:scale-[1.02] transition-all">
             View Your Website
           </Link>
        </div>
        
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
           No technical skills required • You stay in control
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <nav className="px-6 py-6 border-b border-gray-50 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm" style={{ background: 'var(--premium-gradient)' }}>S</div>
          <span className="font-black text-gray-900 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>SEO Junction</span>
        </Link>
        <div className="flex items-center gap-4">
           <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Step {step} of 3</div>
           <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${(step/3)*100}%` }}></div>
           </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        
        {feedback && (
          <div className="mb-12 animate-fade-in text-center">
             <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-tight">
                ✨ {feedback}
             </span>
          </div>
        )}

        {/* STEP 1: BUSINESS INFO */}
        {step === 1 && (
          <div className="max-w-xl mx-auto animate-fade-in">
            <h1 className="text-4xl font-black text-gray-900 mb-8 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
               Tell us about your business
            </h1>
            <div className="space-y-6">
               <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Business Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="e.g. Smith Plumbing Services"
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-6 py-5 text-lg font-bold transition-all outline-none"
                  />
               </div>
               <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Your Trade</label>
                    <select 
                      value={trade} 
                      onChange={e => setTrade(e.target.value)}
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-6 py-5 text-lg font-bold transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select...</option>
                      {TRADES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">City & State</label>
                    <input 
                      type="text" 
                      value={city} 
                      onChange={e => setCity(e.target.value)} 
                      placeholder="e.g. Austin, TX"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-6 py-5 text-lg font-bold transition-all outline-none"
                    />
                  </div>
               </div>
               <button 
                 disabled={!name || !trade || !city}
                 onClick={nextStep}
                 className="w-full bg-navy text-white font-black py-5 rounded-2xl text-xl mt-8 disabled:opacity-20 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-100"
               >
                 Continue →
               </button>
            </div>
          </div>
        )}

        {/* STEP 2: TEMPLATE SELECTION */}
        {step === 2 && (
          <div className="animate-fade-in">
             <TemplateGallery onSelect={(id) => { setTemplate(id); nextStep(); }} />
             <div className="text-center mt-12">
                <button onClick={prevStep} className="text-xs font-black text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors">
                   ← Back to business info
                </button>
             </div>
          </div>
        )}

        {/* STEP 3: ACCOUNT SETUP */}
        {step === 3 && (
          <div className="max-w-xl mx-auto animate-fade-in">
            <h1 className="text-4xl font-black text-gray-900 mb-8 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
               Ready to go live?
            </h1>
            <p className="text-gray-500 mb-10 font-bold leading-relaxed">
              We&apos;ll notify you when your first customer calls. Just enter your email to finish.
            </p>
            <div className="space-y-6">
               <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Email Address</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="you@yourbusiness.com"
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-6 py-5 text-lg font-bold transition-all outline-none"
                  />
               </div>
               <button 
                 disabled={!email}
                 onClick={() => setIsSuccess(true)}
                 className="w-full bg-navy text-white font-black py-5 rounded-2xl text-xl mt-8 disabled:opacity-20 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-100"
               >
                 Start My Business Site Free →
               </button>
               <div className="text-center mt-8">
                  <button onClick={prevStep} className="text-xs font-black text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors">
                    ← Back to style
                  </button>
               </div>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER INFO */}
      <footer className="text-center py-10 opacity-40 select-none">
         <p className="text-[10px] font-black uppercase tracking-[3px]">Secure Checkout • Cancel Anytime • No Tech Required</p>
      </footer>
    </div>
  )
}
