import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Neerzy — Our Mission to Help Local Trades',
  description: 'Neerzy was built to help plumber, electricians, and contractors get found on Google without technical headaches. Our AI-first mission.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />
      
      <header className="pt-40 pb-24 px-6 text-center border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Our Mission: <br /><span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--premium-gradient)' }}>Growth Without Headaches</span></h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed italic">"You run the business. We run the search engine."</p>
        </div>
      </header>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Why We Exist</h2>
            <div className="space-y-6 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              <p>For years, local trade businesses have been priced out of the search engine game. Big agencies charge thousands while delivering confusing reports and zero calls.</p>
              <p>We built **Neerzy** to flip the script. By using AI to automate the tedious work of local SEO—posts, updates, and site management—we bring professional results to every local contractor at a fraction of the cost.</p>
              <p>Today, we serve over 200+ local businesses spanning across 12 different industries, helping them rank where it matters most: the Google Map Pack.</p>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-slate-900 rounded-[40px] p-12 shadow-2xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
            <div className="text-6xl mb-8">🚀</div>
            <div className="font-black text-4xl text-gray-900 dark:text-white mb-4">12+</div>
            <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Industries Served</div>
            <Link href="/onboarding" className="mt-10 inline-block font-bold text-white px-8 py-3 rounded-xl shadow-xl transition-transform hover:scale-105" style={{ background: 'var(--premium-gradient)' }}>Join Our Mission &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
