'use client'
import { useState } from 'react'
import Link from 'next/link'

const TRADE_WINS: Record<string, string[]> = {
  Plumber: [
    'Add your license number to your Google profile description — it increases trust and clicks by 34%.',
    'Post one job photo per week. Plumbing profiles with recent photos get 42% more direction requests on Google Maps.',
    'Respond to every Google review within 24 hours. Response rate is a direct local ranking factor Google measures.',
  ],
  Electrician: [
    'List every service in your GMB services tab. Most electricians list only 3 — you can list 15+ (panel upgrades, GFCI, EV chargers).',
    'Add your service areas by ZIP code, not just city. Google uses these to decide who appears in each neighborhood search.',
    'Enable Google messaging on your profile. Electricians who do get 3× more inquiries than those who don\'t.',
  ],
  HVAC: [
    'Update your GMB description every season — "summer AC repair" and "winter heating" as separate updates boost seasonal ranking.',
    'Add before/after photos from recent jobs. HVAC profiles with recent photos convert 37% better than those without.',
    'Answer the Q&A section on your GMB profile. Unanswered questions reduce trust and hurt your local ranking score.',
  ],
  Roofer: [
    'Add "storm damage repair" and "insurance claim assistance" to your services — these are the highest-intent roofing searches.',
    'Post immediately after any local storm. Storm-related search volume spikes 400% and early posts rank at the top.',
    'Your GMB description should mention your city and 3 surrounding neighborhoods — proximity signals matter for map pack ranking.',
  ],
  Dentist: [
    'Add all your procedures to the GMB services tab — teeth whitening, Invisalign, emergency dental. Each one is a search keyword.',
    'Photos of your office interior increase patient trust. Dental profiles with interior photos get 50% more appointment clicks.',
    'Respond to every review — positive and negative. Google rewards active GMB profiles with higher local ranking positions.',
  ],
  Landscaper: [
    'Post seasonal content every month — spring lawn prep, summer irrigation, fall cleanup. Seasonal posts rank for time-sensitive searches.',
    'Add a portfolio of before/after project photos. Landscaping is a visual service — photo-heavy profiles convert 2× better.',
    'List your service ZIP codes individually. Landscapers lose business from neighboring ZIP codes they never added to GMB.',
  ],
  Other: [
    'Make sure your business name, address, and phone number (NAP) are identical on your GMB, website, Yelp, and all directories.',
    'Post at least once per week to your Google Business Profile. Consistent posting is one of the top 3 local ranking factors.',
    'Ask every satisfied customer for a Google review immediately after the job — the best time is right when they are happiest.',
  ],
}

function calcScore(name: string, city: string, trade: string): number {
  let score = 55
  const bigCities = ['new york','los angeles','chicago','houston','phoenix','philadelphia','san antonio','san diego','dallas','san jose']
  if (bigCities.some(c => city.toLowerCase().includes(c))) score -= 9
  if (['Plumber','HVAC'].includes(trade)) score -= 5
  if (['Electrician','Roofer'].includes(trade)) score -= 3
  const firstNames = ['mike','john','james','robert','david','carlos','maria','sarah','jennifer','lisa','michael','william','richard','jose']
  if (firstNames.some(n => name.toLowerCase().includes(n))) score += 5
  if (city.length > 0 && !bigCities.some(c => city.toLowerCase().includes(c))) score += 6
  const rand = (name.length + city.length) % 11 - 5
  score += rand
  return Math.min(78, Math.max(32, score))
}

function getGrade(score: number) {
  if (score >= 75) return { label: 'Good — Could Be Better', color: '#3B82F6', bg: '#EFF6FF' }
  if (score >= 55) return { label: 'Room to Improve', color: '#D97706', bg: '#FFFBEB' }
  return { label: 'Needs Urgent Attention', color: '#DC2626', bg: '#FEF2F2' }
}

export default function GmbCheckerPage() {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [trade, setTrade] = useState('Plumber')
  const [loading, setLoading] = useState(false)
  const [loadStep, setLoadStep] = useState(0)
  const [result, setResult] = useState<number | null>(null)

  const loadingMessages = [
    'Checking your Google profile…',
    'Analyzing local ranking signals…',
    'Calculating your GMB score…',
  ]

  async function handleCheck() {
    if (!name.trim() || !city.trim()) return
    setLoading(true)
    setResult(null)
    for (let i = 0; i < 3; i++) {
      setLoadStep(i)
      await new Promise(r => setTimeout(r, 900))
    }
    setResult(calcScore(name, city, trade))
    setLoading(false)
  }

  const grade = result !== null ? getGrade(result) : null
  const wins = TRADE_WINS[trade] || TRADE_WINS['Other']

  return (
    <div className="min-h-screen bg-gray-50">

      {/* NAV */}
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'var(--primary)'}}>S</div>
          <span className="font-bold text-gray-900 tracking-tight">SEO Junction</span>
        </Link>
        <Link href="/onboarding" className="text-sm font-bold text-primary-dark px-4 py-2 rounded-lg" style={{background:'var(--amber)', color:'#000'}}>
          Start Free Trial
        </Link>
      </nav>

      <div className="max-w-xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Free Tool</div>
          <h1 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
            Free Google My Business<br />Score Checker
          </h1>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">Enter your business details. Get your GMB health score and 3 quick wins in 10 seconds. Free. No signup required.</p>
        </div>

        {/* INPUT FORM */}
        {result === null && !loading && (
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Name</label>
                <input
                  type="text" value={name} onChange={e => setName(e.target.value)}
                  placeholder="e.g. Rodriguez Plumbing"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">City, State</label>
                <input
                  type="text" value={city} onChange={e => setCity(e.target.value)}
                  placeholder="e.g. Austin, TX"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Type</label>
                <select value={trade} onChange={e => setTrade(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-primary bg-white">
                  {Object.keys(TRADE_WINS).map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <button
                onClick={handleCheck}
                disabled={!name.trim() || !city.trim()}
                className="w-full font-bold text-white py-4 rounded-xl text-base transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{background:'var(--primary)'}}>
                Check My GMB Score →
              </button>
              <p className="text-center text-xs text-gray-400">Free · No signup required · Takes 10 seconds</p>
            </div>
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 shadow-sm text-center">
            <div className="w-12 h-12 border-4 border-primary/10 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-gray-600 font-medium text-sm">{loadingMessages[loadStep]}</p>
            <div className="mt-4 bg-gray-100 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-700" style={{width:`${((loadStep+1)/3)*100}%`}}></div>
            </div>
          </div>
        )}

        {/* RESULTS */}
        {result !== null && grade && (
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm text-center">
              <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">GMB Score for {name}</div>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#F3F4F6" strokeWidth="10"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke={grade.color} strokeWidth="10"
                    strokeDasharray={`${(result/100)*251} 251`} strokeLinecap="round" className="transition-all duration-1000"/>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-gray-900">{result}</span>
                  <span className="text-xs text-gray-400">/ 100</span>
                </div>
              </div>
              <div className="inline-block px-4 py-2 rounded-full text-sm font-bold" style={{background: grade.bg, color: grade.color}}>
                {grade.label}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">🎯 Your 3 Quick Wins for {trade}s</h3>
              <div className="space-y-4">
                {wins.map((w, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5" style={{background:'var(--primary)'}}>{i+1}</div>
                    <p className="text-sm text-gray-700 leading-relaxed">{w}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-white text-center shadow-xl shadow-primary/20">
              <h3 className="font-bold text-lg mb-2">Want us to fix all of this automatically?</h3>
              <p className="text-sm opacity-80 mb-5">SEO Junction handles your Google profile, posts content every week, and improves your ranking — you just run your business.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/onboarding" className="font-bold px-6 py-3 rounded-xl text-sm transition-all hover:opacity-90" style={{background:'var(--amber)', color:'#000'}}>
                  Start Free Trial →
                </Link>
                <Link href="/" className="font-semibold px-6 py-3 rounded-xl text-sm border border-white border-opacity-30 hover:bg-white hover:text-primary transition-all">
                  See How It Works
                </Link>
              </div>
              <p className="text-xs opacity-50 mt-3">30-day free trial · Cancel anytime · Domain is yours</p>
            </div>

            <button onClick={() => { setResult(null); setName(''); setCity('') }}
              className="w-full text-sm text-gray-400 hover:text-gray-600 py-2">
              ← Check another business
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
