'use client'
import Link from 'next/link'
import { signup } from '@/app/auth/actions'
import { useState } from 'react'

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'#1565C0'}}>S</div>
          <span className="font-bold" style={{fontFamily:'Syne,sans-serif'}}>Neerzy</span>
        </Link>
        <Link href="/login" className="text-sm font-semibold text-primary">Login →</Link>
      </nav>
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-sm shadow-sm">
          <h1 className="text-2xl font-black text-gray-900 mb-2 text-center" style={{fontFamily:'Syne,sans-serif'}}>Create your account</h1>
          <p className="text-gray-500 text-sm text-center mb-8">Start your 30-day free trial today</p>
          
          <form 
            action={async (formData) => {
              setIsLoading(true)
              await signup(formData)
              setIsLoading(false)
            }} 
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
              <input 
                name="email"
                type="email" 
                required
                placeholder="you@yourbusiness.com" 
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <input 
                name="password"
                type="password" 
                required
                placeholder="••••••••" 
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full font-bold text-white py-3.5 rounded-xl text-sm transition-opacity disabled:opacity-50" 
              style={{background:'#1565C0'}}
            >
              {isLoading ? 'Creating account...' : 'Start Free Trial'}
            </button>
          </form>
          
          <p className="text-center text-xs text-gray-400 mt-6">
            Already have an account? <Link href="/login" className="text-primary font-semibold">Log in →</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
