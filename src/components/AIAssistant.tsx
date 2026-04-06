'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: "Hi! I'm your Growth Assistant. I can help explain how SEO Junction gets you more calls without you needing any tech skills. Got a quick question?" }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const quickQuestions = [
    "How do I get more calls?",
    "Do I need a laptop?",
    "Will I stay in control?",
    "How much does it cost?",
  ]

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  // Auto-popup after delay (longer on mobile to avoid obscuring headline)
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const delay = isMobile ? 12000 : 5000 // 12s for mobile, 5s for desktop
    
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [])

  const handleSend = async (text: string) => {
    if (!text.trim()) return
    
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: messages.slice(-5) })
      })
      const data = await res.json()
      
      const assistantMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: data.reply }
      setMessages(prev => [...prev, assistantMsg])
    } catch (err) {
      console.error(err)
      setMessages(prev => [...prev, { id: 'err', role: 'assistant', content: "Sorry, I'm having a bit of trouble connecting. Try again in a second!" }])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* ── FLOATING BUBBLE ── */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 rounded-full bg-navy shadow-3xl shadow-blue-400/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 animate-pulse-subtle"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
          <img 
            src="/assistant-avatar.png" 
            alt="Assistant" 
            className="w-full h-full rounded-full object-cover relative z-10 border-2 border-white/20"
          />
          {/* Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform"></div>
        </button>
      )}

      {/* ── CHAT WINDOW ── */}
      {isOpen && (
        <div className="w-[360px] md:w-[400px] h-[550px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-[32px] shadow-4xl flex flex-col overflow-hidden border border-gray-100 dark:border-slate-800 animate-in zoom-in-95 fade-in duration-300 origin-bottom-right">
          {/* Header */}
          <div className="bg-navy p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                <img src="/assistant-avatar.png" alt="AI" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm tracking-tight">Growth Assistant</div>
                <div className="text-[10px] opacity-60 flex items-center gap-1.5 font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Active Now
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-gray-50/30 dark:bg-slate-900/50"
          >
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
                <div className={`max-w-[85%] px-5 py-4 rounded-2xl text-sm font-medium leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-slate-700'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 px-5 py-4 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Controls */}
          <div className="p-6 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-[11px] font-bold text-primary dark:text-primary-light bg-primary/5 dark:bg-primary/10 px-4 py-2 rounded-full border border-primary/10 dark:border-primary/20 hover:bg-primary hover:text-white transition-all active:scale-95"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className="flex gap-3">
              <input 
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend(input)}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 rounded-xl px-5 py-3 text-sm font-medium transition-all outline-none dark:text-white"
              />
              <button 
                onClick={() => handleSend(input)}
                disabled={!input.trim() || isTyping}
                className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center disabled:opacity-30 hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                ➔
              </button>
            </div>
            {/* Disclaimer */}
            <div className="text-center mt-4 italic text-[10px] text-gray-400 uppercase tracking-widest font-bold">
               Powered by SEO Junction AI
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
