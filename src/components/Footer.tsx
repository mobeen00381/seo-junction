import Link from 'next/link'

export default function Footer() {
  const socials = [
    { name: 'FB', href: '#', icon: 'facebook' },
    { name: 'IG', href: '#', icon: 'instagram' },
    { name: 'TK', href: '#', icon: 'tiktok' },
    { name: 'IN', href: '#', icon: 'linkedin' },
    { name: 'YT', href: '#', icon: 'youtube' },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-24 px-6 border-y border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 text-left">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-8 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl transition-transform group-hover:scale-110 shadow-xl" style={{ background: 'var(--premium-gradient)' }}>S</div>
            <span className="font-bold text-gray-900 dark:text-white text-xl tracking-tight">SEO Junction</span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mb-8 font-medium">Helping local service businesses grow their Google visibility with AI-powered marketing and automation.</p>
          
          {/* Social Media Links */}
          <div className="flex gap-4">
             {socials.map((s) => (
                <Link 
                  key={s.name} 
                  href={s.href}
                  className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-[10px] font-black text-gray-400 hover:text-primary dark:hover:text-white hover:border-primary/50 transition-all active:scale-90"
                >
                   {s.name}
                </Link>
             ))}
          </div>
        </div>

        <div>
           <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-[3px] text-[10px]">Quick Links</h4>
           <ul className="space-y-4">
              <li><Link href="/" className="text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Blog</Link></li>
           </ul>
        </div>

        <div>
           <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-[3px] text-[10px]">Tools & Support</h4>
           <ul className="space-y-4">
              <li><Link href="/gmb-checker" className="text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">GMB Checker</Link></li>
              <li><Link href="/examples" className="text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Examples</Link></li>
              <li><Link href="/contact" className="text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Contact Support</Link></li>
           </ul>
        </div>

        <div>
           <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-[3px] text-[10px]">Legal System</h4>
           <ul className="space-y-4">
              <li><Link href="/terms" className="text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/privacy-policy" className="text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
              <li className="pt-4 mt-4 border-t border-gray-200 dark:border-slate-800">
                 <div className="text-[10px] text-gray-400 uppercase tracking-widest font-black mb-1">Office Hours</div>
                 <div className="text-xs text-gray-500 dark:text-gray-400 font-bold italic leading-relaxed">Mon-Fri: 9am - 6pm EST<br />Sat: 10am - 2pm EST</div>
              </li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[4px]">&copy; 2026 SEO Junction. Built for Trades.</p>
          <div className="flex gap-4">
             <Link href="/terms" className="text-[10px] font-black text-gray-300 dark:text-gray-600 hover:text-primary transition-colors uppercase tracking-widest leading-none">Terms</Link>
             <Link href="/privacy-policy" className="text-[10px] font-black text-gray-300 dark:text-gray-600 hover:text-primary transition-colors uppercase tracking-widest leading-none">Privacy</Link>
          </div>
        </div>
        <div className="flex gap-4 text-[10px] font-black tracking-[4px] text-gray-300 dark:text-gray-600 uppercase">
           USA &bull; UK &bull; UAE &bull; AU
        </div>
      </div>
    </footer>
  )
}
