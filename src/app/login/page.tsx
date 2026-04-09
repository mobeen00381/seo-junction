'use client'
import Link from 'next/link'
import { login } from '@/app/auth/actions'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const message = searchParams.get('message')

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'#1565C0'}}>S</div>
          <span className="font-bold" style={{fontFamily:'Syne,sans-serif'}}>Neerzy</span>
        </Link>
        <Link href="/signup" className="text-sm font-semibold text-primary">Create account →</Link>
      </nav>
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-sm shadow-sm">
          <h1 className="text-2xl font-black text-gray-900 mb-2 text-center" style={{fontFamily:'Syne,sans-serif'}}>Welcome back</h1>
          <p className="text-gray-500 text-sm text-center mb-8">Log in to your Neerzy dashboard</p>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-xs rounded-xl font-medium">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs rounded-xl font-medium">
              {message}
            </div>
          )}

          <form 
            action={async (formData) => {
              setIsLoading(true)
              await login(formData)
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
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          
          <p className="text-center text-xs text-gray-400 mt-6">
            No account yet? <Link href="/signup" className="text-primary font-semibold">Start free trial →</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div></div>}>
      <LoginForm />
    </Suspense>
  )
}

