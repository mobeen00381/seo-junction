'use client'
import { useState } from 'react'
import Link from 'next/link'

const TRADES = ['Plumber','Electrician','HVAC','Roofer','Landscaper','Dentist','Auto Shop','Locksmith','Cleaner','Other']
const PLANS = [
  { id:'basic', name:'Basic', price:'$19/mo', posts:'10 posts/month', desc:'Perfect for getting started' },
  { id:'pro', name:'Pro', price:'$39/mo', posts:'30 posts/month', desc:'Most popular for growth', popular:true },
  { id:'agency', name:'Agency', price:'$79/mo', posts:'60 posts/month + 5 clients', desc:'For agencies and multi-location' },
]

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [plan, setPlan] = useState('pro')
  const [trade, setTrade] = useState('')
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'#1565C0'}}>S</div>
          <span className="font-bold" style={{fontFamily:'Syne,sans-serif'}}>SEO Junction</span>
        </Link>
        <span className="text-sm text-gray-400">Need help? <a href="mailto:hello@seo-junction.com" className="text-blue-600 font-medium">hello@seo-junction.com</a></span>
      </nav>

      <div className="max-w-xl mx-auto px-6 py-16">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-10">
          {[1,2,3].map(s=>(
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step>=s?'text-white':'text-gray-400 border-2 border-gray-200'}`} style={step>=s?{background:'#1565C0'}:{}}>
                {step>s?'✓':s}
              </div>
              {s<3&&<div className="flex-1 h-1 rounded" style={{background:step>s?'#1565C0':'#E5E7EB'}}></div>}
            </div>
          ))}
        </div>
        <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">Step {step} of 3</div>

        {/* Step 1 — Choose Plan */}
        {step===1&&(
          <div>
            <h1 className="text-2xl font-black text-gray-900 mb-2" style={{fontFamily:'Syne,sans-serif'}}>Choose Your Plan</h1>
            <p className="text-gray-500 text-sm mb-8">30-day free trial on all plans. Only pay the $19.99 domain fee today.</p>
            <div className="space-y-3 mb-8">
              {PLANS.map(p=>(
                <div key={p.id} onClick={()=>setPlan(p.id)} className={`relative cursor-pointer rounded-xl border-2 p-5 transition-all ${plan===p.id?'border-blue-500 bg-blue-50':'border-gray-200 bg-white hover:border-gray-300'}`}>
                  {p.popular&&<div className="absolute -top-2.5 left-4 text-xs font-bold text-white px-3 py-0.5 rounded-full" style={{background:'#1565C0'}}>Most Popular</div>}
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-gray-900">{p.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{p.posts} · {p.desc}</div>
                    </div>
                    <div className="font-black text-gray-900" style={{fontFamily:'Syne,sans-serif'}}>{p.price}</div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={()=>setStep(2)} className="w-full font-bold text-white py-4 rounded-xl text-base" style={{background:'#1565C0'}}>
              Continue →
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">30-day free trial · Cancel anytime · No contracts</p>
          </div>
        )}

        {/* Step 2 — Business Info */}
        {step===2&&(
          <div>
            <h1 className="text-2xl font-black text-gray-900 mb-2" style={{fontFamily:'Syne,sans-serif'}}>Tell Us About Your Business</h1>
            <p className="text-gray-500 text-sm mb-8">We use this to build your website and set up your Google profile.</p>
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. Rodriguez Plumbing" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Trade</label>
                <select value={trade} onChange={e=>setTrade(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 bg-white">
                  <option value="">Select your trade...</option>
                  {TRADES.map(t=><option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">City, State</label>
                <input value={city} onChange={e=>setCity(e.target.value)} placeholder="e.g. Austin, TX" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Phone</label>
                <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="(512) 555-0000" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"/>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={()=>setStep(1)} className="flex-1 font-semibold py-4 rounded-xl text-sm border border-gray-200 text-gray-700 hover:bg-gray-50">← Back</button>
              <button onClick={()=>setStep(3)} disabled={!name||!trade||!city} className="flex-[2] font-bold text-white py-4 rounded-xl text-base disabled:opacity-40" style={{background:'#1565C0'}}>Continue →</button>
            </div>
          </div>
        )}

        {/* Step 3 — Account */}
        {step===3&&(
          <div>
            <h1 className="text-2xl font-black text-gray-900 mb-2" style={{fontFamily:'Syne,sans-serif'}}>Create Your Account</h1>
            <p className="text-gray-500 text-sm mb-8">Your trial starts immediately. No payment needed until day 31.</p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
              <div className="text-sm font-semibold text-gray-900 mb-1">Your order summary</div>
              <div className="text-xs text-gray-600">{PLANS.find(p=>p.id===plan)?.name} Plan · {PLANS.find(p=>p.id===plan)?.price} · {name||'Your business'} · {city||'Your city'}</div>
              <div className="text-xs text-green-600 font-bold mt-1">✓ 30-day free trial included</div>
            </div>
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@yourbusiness.com" type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"/>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={()=>setStep(2)} className="flex-1 font-semibold py-4 rounded-xl text-sm border border-gray-200 text-gray-700">← Back</button>
              <button disabled={!email} className="flex-[2] font-bold text-black py-4 rounded-xl text-base disabled:opacity-40" style={{background:'#F59E0B'}}>Start Free Trial →</button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-3">By continuing you agree to our Terms of Service and Privacy Policy</p>
          </div>
        )}
      </div>
    </div>
  )
}
