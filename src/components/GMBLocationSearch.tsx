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

  const handlePlaceSelected = async (place: any) => {
    if (!place.place_id) return
    
    setIsLinking(true)
    setError(null)
    
    try {
      const result = await linkGmbLocation(place.place_id, place.name || place.formatted_address)
      if (result.error) {
        setError(result.error)
      } else {
        onSuccess()
      }
    } catch (err) {
      setError('Failed to link business profile')
    } finally {
      setIsLinking(false)
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
        <h4 className="text-xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-lg">🗺️</span>
          Find Your Business on Google Maps
        </h4>
        <p className="text-sm text-slate-400 font-medium mb-8 leading-relaxed">
          Search for your exact business name and location. This links your Neerzy updates to the correct Google Business Profile.
        </p>

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

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-500 rounded-xl text-xs font-bold border border-red-100 flex items-center gap-2">
            <span>⚠️</span> {error}
          </div>
        )}
      </div>
    </div>
  )
}
