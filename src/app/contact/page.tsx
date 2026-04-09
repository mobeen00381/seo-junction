import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Neerzy — Get Expert Support',
  description: 'Need help automating your Google presence? Reach out to the Neerzy team. We help local businesses turn every job into a Google post.',
  openGraph: {
    title: 'Contact Neerzy — Expert Local SEO Support',
    description: 'Our team of SEO experts is one message away. Let us help you automate your growth.',
    url: 'https://www.neerzy.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />
      
      <header className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">Need <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--premium-gradient)' }}>Support</span>?</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed italic">"Our team of SEO experts is one message away."</p>
        </div>
      </header>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-widest text-xs">Direct Contact</h2>
              <div className="text-4xl font-black text-gray-900 dark:text-white mb-2 pb-2 inline-block border-b-4 border-amber-400">support@seojunction.com</div>
              <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">We typical respond within 2-4 business hours for all priority plan customers.</p>
            </div>
            
            <div className="pt-8 border-t border-gray-200 dark:border-slate-800">
               <h3 className="font-bold text-gray-900 dark:text-white mb-4">Support Hours</h3>
               <p className="text-gray-500 dark:text-gray-400 text-sm italic">Monday - Friday: 9:00 AM - 6:00 PM EST<br />Saturday: 10:00 AM - 2:00 PM EST</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[40px] p-10 shadow-2xl border border-gray-100 dark:border-slate-800">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-gray-50 dark:bg-slate-800/50 border-none rounded-2xl p-4 text-sm font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 shadow-inner" />
                <input type="email" placeholder="Work Email" className="w-full bg-gray-50 dark:bg-slate-800/50 border-none rounded-2xl p-4 text-sm font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 shadow-inner" />
              </div>
              <select className="w-full bg-gray-50 dark:bg-slate-800/50 border-none rounded-2xl p-4 text-sm font-bold text-gray-400 focus:ring-2 focus:ring-blue-500/20 shadow-inner">
                <option>Interested in Google Ranking</option>
                <option>Billing Support</option>
                <option>Technical Question</option>
              </select>
              <textarea placeholder="How can we help?" rows={5} className="w-full bg-gray-50 dark:bg-slate-800/50 border-none rounded-2xl p-4 text-sm font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 shadow-inner"></textarea>
              <button className="w-full py-5 rounded-2xl text-white font-black text-lg shadow-2xl transition-transform hover:scale-[1.02]" style={{ background: 'var(--premium-gradient)' }}>Send Inquiry &rarr;</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
