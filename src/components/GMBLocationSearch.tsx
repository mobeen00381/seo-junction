'use client'
import { useState } from 'react'
import Autocomplete from 'react-google-autocomplete'
import { linkGmbLocation } from '@/app/auth/actions'

interface GMBLocationSearchProps {
  apiKey: string
  onSuccess: () => void
}

export default function GMBLocationSearch({ apiKey, onSuccess }: GMBLocationSearchProps) {
  const [isLinking, setIsLinking] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [showManual, setShowManual] = useState(false)
  const [manualId, setManualId] = useState('')
  const [manualName, setManualName] = useState('')

  interface GooglePlace {
    place_id: string;
    name?: string;
    formatted_address?: string;
  }

  const handlePlaceSelected = async (place: GooglePlace) => {
    if (!place.place_id) return
    setIsLinking(true)
    setError(null)
    try {
      const result = await linkGmbLocation(place.place_id, place.name || place.formatted_address || 'Unknown Location')
      if (result.error) setError(result.error)
      else onSuccess()
    } catch (err) {
      setError('Failed to link business profile')
    } finally {
      setIsLinking(false)
    }
  }

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!manualId || !manualName) return
    setIsLinking(true)
    try {
      const result = await linkGmbLocation(manualId, manualName)
      if (result.error) setError(result.error)
      else onSuccess()
    } catch (err) {
      setError('Failed to link business profile')
    } finally {
      setIsLinking(false)
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-lg">🗺️</span>
            {showManual ? 'Manual Location Link' : 'Find Your Business on Google Maps'}
          </h4>
          <button 
            onClick={() => setShowManual(!showManual)} 
            className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline"
          >
            {showManual ? '← Use Maps Search' : 'Manual Entry (if Maps fails) ⌨️'}
          </button>
        </div>

        <p className="text-sm text-slate-400 font-medium mb-8 leading-relaxed">
          {showManual 
            ? 'Enter your location details manually to link your profile without using the Google Maps API.'
            : 'Search for your exact business name and location. This links your Neerzy updates to the correct Google Business Profile.'
          }
        </p>

        {!showManual ? (
          <div className="relative group">
            <Autocomplete
              apiKey={apiKey}
              onPlaceSelected={handlePlaceSelected}
              options={{
                types: ['establishment'],
                fields: ['place_id', 'name', 'formatted_address']
              }}
              className="w-full bg-white border-2 border-slate-100 hover:border-primary/30 focus:border-primary rounded-2xl px-6 py-4 text-slate-900 font-bold placeholder:text-slate-300 transition-all outline-none shadow-sm focus:shadow-xl focus:shadow-primary/10"
              placeholder="Search for your business (e.g. Elite Plumbing Croydon)"
            />
            {isLinking && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">Linking...</span>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleManualSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                value={manualName}
                onChange={(e) => setManualName(e.target.value)}
                placeholder="Business Name (e.g. Elite Plumbing)" 
                className="w-full bg-white border-2 border-slate-100 focus:border-primary rounded-xl px-4 py-3 text-sm font-bold outline-none"
              />
              <input 
                value={manualId}
                onChange={(e) => setManualId(e.target.value)}
                placeholder="Place ID or Location ID" 
                className="w-full bg-white border-2 border-slate-100 focus:border-primary rounded-xl px-4 py-3 text-sm font-bold outline-none"
              />
            </div>
            <button 
              disabled={isLinking || !manualId || !manualName}
              className="w-full bg-slate-900 text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest hover:bg-black transition-all disabled:opacity-50"
            >
              {isLinking ? 'Linking...' : 'Connect Location Manually'}
            </button>
          </form>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-500 rounded-xl text-xs font-bold border border-red-100 flex items-center gap-2">
            <span>⚠️</span> {error}
          </div>
        )}
      </div>
    </div>
  )
}
