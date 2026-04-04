'use client'
import { useState } from 'react'

interface StripePaymentProps {
  domainName: string
  onSuccess: () => void
  onBack: () => void
}

export default function StripePayment({ domainName, onSuccess, onBack }: StripePaymentProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setError('')
    
    // Simulate Stripe processing
    setTimeout(() => {
      setIsProcessing(false)
      onSuccess()
    }, 2500)
  }

  return (
    <div className="max-w-xl mx-auto animate-fade-in px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Secure Checkout</h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">Start your 30-day free trial & secure your domain.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[40px] shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden">
        {/* Order Summary */}
        <div className="p-8 bg-gray-50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
               <div className="text-sm font-bold text-gray-900 dark:text-white">SEO Junction Pro (Monthly)</div>
               <div className="text-sm font-bold text-emerald-600">30 Days Free</div>
            </div>
            <div className="flex justify-between items-center">
               <div className="text-sm font-bold text-gray-900 dark:text-white">Domain: <span className="text-blue-600">{domainName}</span></div>
               <div className="text-sm font-bold text-gray-900 dark:text-white">$19.99</div>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-slate-700 flex justify-between items-center">
               <div className="text-lg font-black text-gray-900 dark:text-white">Total Due Today</div>
               <div className="text-2xl font-black text-gray-900 dark:text-white">$19.99</div>
            </div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest text-center mt-4">
              Your subscription ($39/mo) will start after 30 days. Cancel anytime.
            </p>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handlePay} className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Card Information</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="1234 5678 1234 5678"
                  className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-slate-700 rounded-xl px-5 py-4 text-sm font-bold transition-all outline-none dark:text-white"
                  required
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                  <div className="w-8 h-5 bg-gray-200 rounded"></div>
                  <div className="w-8 h-5 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="MM / YY"
                className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-slate-700 rounded-xl px-5 py-4 text-sm font-bold transition-all outline-none dark:text-white"
                required
              />
              <input 
                type="text" 
                placeholder="CVC"
                className="w-full bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-slate-700 rounded-xl px-5 py-4 text-sm font-bold transition-all outline-none dark:text-white"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isProcessing}
            className="w-full bg-navy text-white font-bold py-6 rounded-2xl text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-100 dark:shadow-none flex items-center justify-center gap-3"
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              `Pay $19.99 & Start Trial →`
            )}
          </button>

          <div className="flex items-center justify-center gap-4 opacity-50 grayscale scale-75">
             <span className="font-bold text-xs tracking-tighter text-gray-400">POWERED BY</span>
             <div className="flex items-center gap-1 font-black text-gray-900 dark:text-white text-lg italic tracking-tighter">
                stripe
             </div>
          </div>
        </form>
      </div>

      <div className="mt-8 text-center">
         <button onClick={onBack} className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 dark:hover:text-white transition-colors">
            ← Back to domain choice
         </button>
      </div>
    </div>
  )
}
