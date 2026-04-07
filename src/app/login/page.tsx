'use client'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'#1565C0'}}>S</div>
          <span className="font-bold" style={{fontFamily:'Syne,sans-serif'}}>Neerzy</span>
        </Link>
        <Link href="/onboarding" className="text-sm font-semibold text-primary">Create account →</Link>
      </nav>
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-sm shadow-sm">
          <h1 className="text-2xl font-black text-gray-900 mb-2 text-center" style={{fontFamily:'Syne,sans-serif'}}>Welcome back</h1>
          <p className="text-gray-500 text-sm text-center mb-8">Log in to your Neerzy dashboard</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
              <input type="email" placeholder="you@yourbusiness.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"/>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <input type="password" placeholder="••••••••" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"/>
            </div>
            <button className="w-full font-bold text-white py-3.5 rounded-xl text-sm" style={{background:'#1565C0'}}>Log In</button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            No account yet? <Link href="/onboarding" className="text-primary font-semibold">Start free trial →</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
