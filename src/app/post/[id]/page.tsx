'use client'
import { useState, useRef, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function MobileUpdatePage() {
  const { id } = useParams()
  const router = useRouter()
  const [step, setStep] = useState<'input' | 'processing' | 'review'>('input')
  const [inputType, setInputType] = useState<'photo' | 'voice' | 'text' | null>(null)
  
  // Media States
  const [image, setImage] = useState<string | null>(null)
  const [isEnhanced, setIsEnhanced] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [textContent, setTextContent] = useState('')
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  
  // AI Results State
  const [aiResult, setAiResult] = useState<any>(null)

  // Simulation: Business Data
  const business = {
    name: "Rodriguez Plumbing",
    trade: "Plumber",
    city: "Austin",
    state: "TX",
    license: "TX Master Plumber #44821",
    experience: "14 years",
    street: "South Congress Ave",
    neighborhoods: "Bouldin Creek, Travis Heights, South Lamar",
    zipCodes: "78701, 78702, 78704",
    phone: "(512) 555-0199"
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setStep('processing')
      const webpData = await processToWebP(file)
      setImage(webpData)
      simulateProcessing()
    }
  }

  const processToWebP = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image()
      img.src = URL.createObjectURL(file)
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        ctx?.drawImage(img, 0, 0)
        // Auto-Enhance: Simulate enhancement by tweaking canvas brightness/contrast
        if (ctx) {
          ctx.filter = 'brightness(1.1) contrast(1.1) saturate(1.2)'
          ctx.drawImage(img, 0, 0)
        }
        const dataUrl = canvas.toDataURL('image/webp', 0.8)
        resolve(dataUrl)
      }
    })
  }

  const simulateProcessing = () => {
    setTimeout(() => {
      setIsEnhanced(true)
      generateAdvancedAIResult()
      setStep('review')
    }, 4000)
  }

  const generateAdvancedAIResult = () => {
    // Implementing the specific AI instruction set
    const meta = {
      title: `Expert ${business.trade} in ${business.city}, ${business.state} | ${business.name}`,
      description: `Looking for a licensed ${business.trade} in ${business.city}? ${business.name} (License ${business.license}) provides fast local service. Call ${business.phone} now!`,
      focusKeyword: `${business.trade} in ${business.city}`,
      schema: ["LocalBusiness", "Service", "FAQPage", "Review"]
    }

    const schemaJson = {
      "@context": "https://schema.org",
      "@type": "PlumbingBusiness",
      "name": business.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": business.street,
        "addressLocality": business.city,
        "addressRegion": business.state,
        "postalCode": business.zipCodes.split(', ')[0]
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "30.2672", "longitude": "-97.7431" },
      "areaServed": business.neighborhoods.split(', '),
      "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": business.license }
    }

    const articleHtml = `
      <div class="prose prose-slate max-w-none px-6 py-8">
        <h1 class="text-3xl font-black mb-2 text-slate-900 leading-tight">Trusted ${business.trade} in ${business.city} — Fast, Licensed & Local</h1>
        
        <div class="flex items-center gap-2 mb-8 p-3 bg-slate-50 border border-slate-100 rounded-xl">
           <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-[10px]">MR</div>
           <div class="text-[10px] text-slate-500 font-medium">
             By <strong>Marco Rodriguez</strong> (License ${business.license}) · ${business.experience} serving ${business.city}. I grew up here — these are my neighbors.
           </div>
        </div>

        <p class="text-lg text-slate-700 mb-8 leading-relaxed font-medium italic">
          If you are looking for a ${business.trade} near ${business.street} right now, we are here to help. We treat every job like it's for our own family.
        </p>

        <h2 class="text-xl font-black mt-12 mb-6 text-slate-900 border-b-4 border-primary/20 pb-2 inline-block">${business.trade} Services in ${business.city} — What We Fix</h2>
        <div class="grid gap-4 mb-10">
           <div class="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
              <h4 class="font-bold text-slate-900 mb-1">Drain Cleaning</h4>
              <p class="text-sm text-slate-600">We clear blocked drains fast using a drain snake or hydro-jet. (P-trap, sewer lateral, hydro-jetting)</p>
           </div>
           <div class="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
              <h4 class="font-bold text-slate-900 mb-1">Pipe Leak Repair</h4>
              <p class="text-sm text-slate-600">Permanent fixes for burst or leaking pipes including PEX transformations. (Anode rod, backflow preventer, slab leak)</p>
           </div>
        </div>

        <h2 class="text-xl font-black mt-12 mb-6 text-slate-900">Serving ${business.city} and Surrounding Areas</h2>
        <div class="flex flex-wrap gap-2 mb-4">
           ${business.zipCodes.split(', ').map(zip => `<span class="bg-slate-100 text-slate-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">${zip}</span>`).join('')}
        </div>
        <p class="text-sm text-slate-600 mb-10">We cover ${business.neighborhoods}, and everything in between. We are often near ${business.street} and secondary ZIP codes like ${business.zipCodes}.</p>

        <h2 class="text-xl font-black mt-12 mb-6 text-slate-900 border-b-4 border-emerald-500/20 pb-2 inline-block">Signs You Need a Emergency ${business.trade}</h2>
        <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-2xl mb-8">
           <h4 class="text-red-900 font-bold mb-3 uppercase text-xs tracking-widest">Red Alert Signs</h4>
           <ul class="space-y-2 text-red-800 text-sm font-medium">
              <li>• Sewage is backing up into your ${business.city} home.</li>
              <li>• You smell gas near your water heater or pipes.</li>
              <li>• Major flooding is occurring from a burst supply line.</li>
           </ul>
        </div>

        <h2 class="text-xl font-black mt-12 mb-6 text-slate-900">How Much Does a ${business.trade} Cost in ${business.city}?</h2>
        <div class="overflow-hidden border border-slate-200 rounded-2xl mb-8 shadow-sm">
           <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-500 uppercase text-[10px] font-black tracking-widest">
                 <tr>
                    <th class="px-4 py-3">Service</th>
                    <th class="px-4 py-3">${business.city} Price</th>
                    <th class="px-4 py-3">Urgency</th>
                 </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 font-medium text-slate-700">
                 <tr><td class="px-4 py-3">Drain Snaking</td><td class="px-4 py-3">$150 - $350</td><td class="px-4 py-3 text-amber-600">High</td></tr>
                 <tr><td class="px-4 py-3">Leak Search</td><td class="px-4 py-3">$200 - $600</td><td class="px-4 py-3 text-red-600">Critical</td></tr>
                 <tr><td class="px-4 py-3">PEX Repiping</td><td class="px-4 py-3">$4k - $15k</td><td class="px-4 py-3 text-slate-400">Planned</td></tr>
                 <tr><td class="px-4 py-3">Water Heater</td><td class="px-4 py-3">$1.2k - $3k</td><td class="px-4 py-3 text-amber-600">High</td></tr>
              </tbody>
           </table>
        </div>

        <h2 class="text-xl font-black mt-12 mb-6 text-slate-900">Questions People Ask About ${business.trade} Near ${business.street}, ${business.city}</h2>
        <div class="space-y-6 mb-12">
           <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h4 class="font-bold text-slate-900 mb-2">How much does a ${business.trade} cost in ${business.city}?</h4>
              <p class="text-sm text-slate-600">Standard ${business.trade} repairs in ${business.city} typically range from $150 to $600. The short answer is that complex jobs like sewer line work will cost more.</p>
           </div>
           <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h4 class="font-bold text-slate-900 mb-2">Is there a ${business.trade} near ${business.street} open right now?</h4>
              <p class="text-sm text-slate-600">Yes, ${business.name} serves ${business.city} 24 hours a day for emergencies. We are often working near ${business.street} and can arrive quickly.</p>
           </div>
        </div>

        <div class="bg-primary text-white p-8 rounded-[32px] text-center shadow-2xl shadow-primary/30">
          <h2 class="text-2xl font-black mb-2 leading-none">Call ${business.name} in ${business.city}</h2>
          <p class="opacity-80 text-sm mb-6">Expert ${business.trade} services done right the first time.</p>
          <div class="text-3xl font-black mb-2">${business.phone}</div>
          <p class="text-[10px] opacity-60 font-medium uppercase tracking-[2px]">Licensed ${business.license} · ${business.experience} serving ${business.city}</p>
        </div>
      </div>
    `

    setAiResult({
      meta,
      schema: JSON.stringify(schemaJson, null, 2),
      article: articleHtml,
      gmb: `🚀 New Project Live in ${business.city}! Just finished an emergency ${business.trade} call in ${business.street}. Our AI system converted this update to a full SEO optimized post automatically. Need a licensed pro? #LocalSEO #SEOJunction #${business.city}`,
      score: 96
    })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter pb-20 overflow-x-hidden">
      {/* HEADER */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-white/5 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-sm">S</div>
          <span className="font-bold tracking-tight">SEO Junction</span>
        </Link>
        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 px-3 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
           Live Link
        </div>
      </header>

      <main className="max-w-xl mx-auto p-6 pt-12">
        
        {step === 'input' && (
          <div className="animate-fade-in text-center">
            <h1 className="text-5xl font-black mb-4 tracking-tighter decoration-primary decoration-[6px] underline-offset-[12px]">
              Post Update
            </h1>
            <p className="text-slate-400 mb-12 font-medium">Hello {business.name}! Send your latest work post.</p>

            <div className="grid gap-4">
              {/* PHOTO UPLOAD */}
              <label className="relative group overflow-hidden cursor-pointer shadow-lg">
                <input type="file" accept="image/*" capture="environment" className="hidden" onChange={handleFileChange} />
                <div className="bg-slate-900/50 backdrop-blur-sm border-2 border-white/5 p-8 rounded-[40px] flex flex-col items-center gap-4 group-hover:border-primary/50 transition-all active:scale-95">
                   <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl transition-transform group-hover:scale-110">📸</div>
                   <div className="text-xl font-bold">Capture Photo</div>
                   <div className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-loose">
                      <span className="text-primary">WEB P</span> AUTO-CONVERT<br />
                      <span className="text-emerald-500">AI QUALITY</span> ENHANCE
                   </div>
                </div>
              </label>

              <div className="grid grid-cols-2 gap-4">
                {/* VOICE RECORDER */}
                <button 
                  onClick={() => { setStep('processing'); simulateProcessing(); }}
                  className="bg-slate-900/50 backdrop-blur-sm border-2 border-white/5 p-8 rounded-[40px] flex flex-col items-center gap-4 hover:border-blue-500/50 transition-all active:scale-95 group shadow-lg"
                >
                   <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl transition-transform group-hover:scale-110">🎙️</div>
                   <div className="text-base font-bold">Voice</div>
                   <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest">AEO Optimized</div>
                </button>

                {/* TEXT INPUT */}
                <button 
                  onClick={() => { setStep('processing'); simulateProcessing(); }}
                  className="bg-slate-900/50 backdrop-blur-sm border-2 border-white/5 p-8 rounded-[40px] flex flex-col items-center gap-4 hover:border-purple-500/50 transition-all active:scale-95 group shadow-lg"
                >
                   <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center text-2xl transition-transform group-hover:scale-110">✍️</div>
                   <div className="text-base font-bold">Text</div>
                   <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest">SEO Draft</div>
                </button>
              </div>
            </div>
            
            <p className="mt-16 text-[9px] font-black text-slate-700 uppercase tracking-[4px]">Verified Business ID: {id}</p>
          </div>
        )}

        {step === 'processing' && (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in h-[60vh]">
             <div className="relative mb-12">
                <div className="w-40 h-40 border-[6px] border-primary/10 border-t-primary rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center text-4xl animate-bounce">🛡️</div>
             </div>
             <h2 className="text-3xl font-black mb-4 tracking-tighter">SEO Strategist Operating...</h2>
             <p className="text-slate-500 max-w-[280px] mx-auto text-sm font-medium leading-relaxed">
               Applying <span className="text-white">Answer Engine Optimization</span> and <span className="text-white">Generative Engine Optimization</span> signals.
             </p>
             <div className="mt-8 flex gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse delay-75"></span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150"></span>
             </div>
          </div>
        )}

        {step === 'review' && aiResult && (
          <div className="animate-fade-in pb-20">
             
             {/* HEADER SCORE */}
             <div className="bg-primary rounded-[32px] p-8 mb-12 shadow-2xl shadow-primary/20 flex items-center justify-between group overflow-hidden relative">
                <div className="relative z-10">
                   <div className="text-[10px] font-black text-white/60 uppercase tracking-[2px] mb-1">AI Content Quality</div>
                   <div className="text-6xl font-black text-white leading-none">{aiResult.score}<span className="text-2xl opacity-40">%</span></div>
                </div>
                <div className="relative z-10 text-right">
                   <div className="text-[10px] font-black text-white/60 uppercase tracking-[2px] mb-2 leading-none">Ranking Potential</div>
                   <div className="bg-white/20 text-white px-4 py-2 rounded-full text-xs font-bold ring-1 ring-white/30 backdrop-blur-sm">EXCELLENT (A+)</div>
                </div>
                <div className="absolute top-0 right-0 text-9xl opacity-10 rotate-12 -translate-y-8 translate-x-8 transition-transform group-hover:scale-110 duration-1000">✨</div>
             </div>

             <div className="space-y-12">
                {/* PHOTO PREVIEW (If any) */}
                {image && (
                  <section className="animate-in slide-in-from-bottom-4">
                    <div className="flex items-center justify-between mb-4">
                       <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                          Enhanced Media
                       </h3>
                       <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-500/30">Auto-Enhanced WebP</span>
                    </div>
                    <div className="rounded-[40px] overflow-hidden border-4 border-white/5 shadow-2xl relative group">
                       <img src={image} alt="Work Update" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8">
                          <div className="text-xs font-bold text-white/50">${business.name} • ${business.city}</div>
                       </div>
                    </div>
                  </section>
                )}

                {/* GMB Post */}
                <section className="animate-in slide-in-from-bottom-8">
                   <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Google My Business Sync</h3>
                   <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-[32px] border border-white/10 text-sm leading-relaxed italic text-slate-300">
                      "{aiResult.gmb}"
                   </div>
                </section>

                {/* Full Article */}
                <section className="animate-in slide-in-from-bottom-12">
                   <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Main Website SEO Page</h3>
                   <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden ring-1 ring-black/5">
                      <div className="p-4 bg-slate-100/50 flex gap-2 border-b border-slate-200">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      </div>
                      <div className="bg-white min-h-[400px]" dangerouslySetInnerHTML={{ __html: aiResult.article }} />
                   </div>
                </section>

                {/* SEO Meta Block */}
                <section className="animate-in slide-in-from-bottom-12 opacity-80">
                   <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">SEO/AEO Signal Block</h3>
                   <div className="bg-slate-900 border border-white/5 p-6 rounded-3xl space-y-4">
                      <div>
                         <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Title Tag</div>
                         <div className="text-xs text-primary font-bold">{aiResult.meta.title}</div>
                      </div>
                      <div>
                         <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Meta Description</div>
                         <div className="text-xs text-slate-300">{aiResult.meta.description}</div>
                      </div>
                      <div className="flex gap-4">
                         <div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Focus Keyword</div>
                            <div className="text-xs font-black text-white">{aiResult.meta.focusKeyword}</div>
                         </div>
                         <div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Schema</div>
                            <div className="text-xs text-slate-400">{aiResult.meta.schema.join(', ')}</div>
                         </div>
                      </div>
                   </div>
                </section>

                <div className="flex flex-col gap-6 sticky bottom-8 z-40 backdrop-blur-sm p-4 -m-4">
                   <button 
                     onClick={() => {
                        alert('Your SEO Article, GMB Post, and Schema Markup are now LIVE on your platform!');
                        router.push('/dashboard?update=success');
                     }}
                     className="w-full bg-primary text-white font-black py-7 rounded-[28px] text-2xl shadow-[0_20px_50px_-20px_rgba(21,101,192,0.8)] hover:scale-[1.02] active:scale-95 transition-all ring-4 ring-primary/20 animate-pulse-slow"
                   >
                     Approve & Publish Post →
                   </button>
                   <button 
                     onClick={() => setStep('input')} 
                     className="text-slate-500 font-black text-xs uppercase tracking-[4px] hover:text-white transition-colors text-center"
                   >
                     ← Back to Start
                   </button>
                </div>
             </div>
          </div>
        )}

      </main>
    </div>
  )
}
