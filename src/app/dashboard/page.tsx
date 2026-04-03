import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'#1565C0'}}>S</div>
          <span className="font-bold" style={{fontFamily:'Syne,sans-serif'}}>SEO Junction</span>
        </Link>
        <Link href="/login" className="text-sm font-semibold text-blue-600">Log in →</Link>
      </nav>
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="text-5xl mb-6">🔒</div>
        <h1 className="text-3xl font-black text-gray-900 mb-3" style={{fontFamily:'Syne,sans-serif'}}>Dashboard Coming Soon</h1>
        <p className="text-gray-500 mb-8">The full customer dashboard is in active development. Start your free trial to be first in line.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/onboarding" className="font-bold text-white px-6 py-3 rounded-xl text-sm" style={{background:'#1565C0'}}>Start Free Trial</Link>
          <Link href="/" className="font-semibold px-6 py-3 rounded-xl text-sm border border-gray-200 text-gray-700 hover:bg-gray-50">← Back Home</Link>
        </div>
      </div>
    </div>
  )
}
