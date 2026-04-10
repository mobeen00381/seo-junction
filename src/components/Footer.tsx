import Link from 'next/link'

export default function Footer() {
  const socials = [
    { name: 'FB', href: '#' },
    { name: 'IG', href: '#' },
    { name: 'TK', href: '#' },
    { name: 'IN', href: '#' },
    { name: 'YT', href: '#' },
  ]

  return (
    <footer className="py-10 md:py-16 px-6 md:px-12 border-t border-white/5 bg-slate-950 text-slate-400" >
      <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-16 text-left">
        <div className="col-span-3 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <svg className="w-8 h-8 transition-transform group-hover:scale-110" viewBox="0 0 30 30" fill="none">
              <rect width="30" height="30" rx="8" fill="#1d9e75"/>
              <circle cx="15" cy="13" r="5" fill="none" stroke="#a8f0c8" strokeWidth="1.8"/>
              <circle cx="15" cy="13" r="2" fill="#a8f0c8"/>
              <path d="M10 21 Q15 17 20 21" stroke="#a8f0c8" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            </svg>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Neer<span style={{color:'var(--mint)'}}>zy</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-[200px] mb-6 text-slate-400">Helping local service businesses get found by neighbours — with zero tech skills needed.</p>
          
          <div className="flex gap-2">
             {socials.map((s) => (
                <Link 
                  key={s.name} 
                  href={s.href}
                  className="w-9 h-9 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all hover:scale-110 bg-white/5 border border-white/10 text-slate-400"
                >
                   {s.name}
                </Link>
             ))}
          </div>
        </div>

        <div>
            <h4 className="text-[9px] md:text-[10px] font-bold tracking-[2px] uppercase mb-3 text-slate-500">Quick Links</h4>
           <ul className="space-y-2">
               <li><Link href="/" className="text-[12px] md:text-[13px] transition-colors hover:text-white text-slate-400">Home</Link></li>
               <li><Link href="/about" className="text-[12px] md:text-[13px] transition-colors hover:text-white text-slate-400">About Us</Link></li>
               <li><Link href="/pricing" className="text-[12px] md:text-[13px] transition-colors hover:text-white text-slate-400">Pricing</Link></li>
               <li><Link href="/blog" className="text-[12px] md:text-[13px] transition-colors hover:text-white text-slate-400">Blog</Link></li>
           </ul>
        </div>

        <div>
            <h4 className="text-[9px] md:text-[10px] font-bold tracking-[2px] uppercase mb-3 text-slate-500">Tools</h4>
           <ul className="space-y-2">
               <li><Link href="/gmb-checker" className="text-[12px] md:text-[13px] transition-colors hover:text-white text-slate-400">Checker</Link></li>
               <li><Link href="/examples" className="text-[12px] md:text-[13px] transition-colors hover:text-white text-slate-400">Examples</Link></li>
               <li><Link href="/contact" className="text-[12px] md:text-[13px] transition-colors hover:text-white text-slate-400">Support</Link></li>
           </ul>
        </div>

        <div>
            <h4 className="text-[9px] md:text-[10px] font-bold tracking-[2px] uppercase mb-3 text-slate-500">Legal</h4>
           <ul className="space-y-2">
               <li><Link href="/terms" className="text-[12px] md:text-[13px] transition-colors hover:text-white text-slate-400">Terms</Link></li>
               <li><Link href="/privacy-policy" className="text-[12px] md:text-[13px] transition-colors hover:text-white text-slate-400">Privacy</Link></li>
              <li className="pt-2 mt-2 border-t border-white/5">
                 <div className="text-[10px] leading-snug text-slate-600 uppercase font-bold tracking-tighter">Mon-Fri: 9-6 EST</div>
              </li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap border-t border-white/5">
        <div className="text-[12px] text-slate-500">© 2026 Neerzy. Built for Trades.</div>
        <div className="text-[11px] tracking-wide font-bold uppercase text-slate-600">Served Worldwide</div>
        <div className="flex gap-4">
           <Link href="/terms" className="text-[12px] transition-colors hover:text-white text-slate-500">Terms</Link>
           <Link href="/privacy-policy" className="text-[12px] transition-colors hover:text-white text-slate-500">Privacy</Link>
        </div>
      </div>
    </footer>
  )
}
