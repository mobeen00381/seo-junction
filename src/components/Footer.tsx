import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-24 px-6 border-t border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-lg transition-transform group-hover:scale-110 shadow-lg" style={{ background: 'var(--premium-gradient)' }}>S</div>
            <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight">SEO Junction</span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">Helping local service businesses grow their Google visibility with AI-powered marketing and automation.</p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Resources</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">About Mission</Link></li>
            <li><Link href="/demo" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Live Demo</Link></li>
            <li><Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-4">
            <li><Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
          <ul className="space-y-4">
             <li className="text-sm text-gray-500 dark:text-gray-400">Email: support@seojunction.com</li>
             <li className="text-sm text-gray-500 dark:text-gray-400">Hours: Mon-Fri, 9am - 5pm</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-200 dark:border-slate-800 flex justify-between items-center">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">&copy; 2026 SEO Junction Platform. All Rights Reserved.</p>
        <div className="flex gap-4 text-xs font-black tracking-widest text-gray-300">USA &bull; UK &bull; UAE</div>
      </div>
    </footer>
  )
}
