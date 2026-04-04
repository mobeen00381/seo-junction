'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 relative p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle dark mode"
    >
      <div 
        className={`w-4 h-4 rounded-full bg-white dark:bg-blue-400 shadow-md transform transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
      >
        {theme === 'light' ? (
          <svg className="w-2.5 h-2.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20 shadow">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0V3a1 1 0 102 0v2zm4.5 .5a1 1 0 10-1.414-1.414l-1.414 1.414a1 1 0 101.414 1.414l1.414-1.414zM17 11a1 1 0 100-2h-2a1 1 0 100 2h2zm-1.5 4.5a1 1 0 101.414-1.414l-1.414-1.414a1 1 0 10-1.414 1.414l1.414 1.414zM11 17a1 1 0 10-2 0v2a1 1 0 102 0v-2zm-4.5-.5a1 1 0 101.414 1.414l1.414-1.414a1 1 0 10-1.414-1.414l-1.414 1.414zM3 11a1 1 0 100-2H1a1 1 0 100 2h2zM4.5 5.5a1 1 0 101.414 1.414L4.5 4.086A1 1 0 103.086 5.5L4.5 5.5z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </div>
    </button>
  )
}
