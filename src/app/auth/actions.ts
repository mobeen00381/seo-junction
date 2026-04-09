'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getGoogleAuthUrl } from '@/lib/google/auth'
import { createGMBPost } from '@/lib/google/business'
import { generateAIDraft as generateOpenAIDraft } from '@/lib/openai'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { data: authData, error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/login?error=' + encodeURIComponent(error.message))
  }

  if (authData.user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', authData.user.id)
      .single()
    
    if (profile?.role === 'admin') {
      revalidatePath('/', 'layout')
      redirect('/admin')
    }
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/login?error=' + encodeURIComponent(error.message))
  }

  revalidatePath('/', 'layout')
  redirect('/login?message=Check your email to confirm your account')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function initiateGoogleGMB() {
  const url = getGoogleAuthUrl()
  redirect(url)
}

export async function linkGmbLocation(locationId: string, locationName: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return { error: 'Not authenticated' }

  const { error } = await supabase
    .from('profiles')
    .update({
      gmb_location_id: locationId,
      gmb_location_name: locationName,
      gmb_connected: true
    })
    .eq('id', user.id)

  if (error) return { error: error.message }
  
  revalidatePath('/dashboard')
  return { success: true }
}

export async function syncPostToGMB(content: string, mediaUrl?: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return { error: 'Not authenticated' }

  const { data: profile } = await supabase
    .from('profiles')
    .select('google_refresh_token, gmb_location_id, gmb_connected')
    .eq('id', user.id)
    .single()

  if (!profile?.gmb_connected || !profile?.google_refresh_token || !profile?.gmb_location_id) {
    return { error: 'GMB not fully connected' }
  }

  try {
    await createGMBPost(
      profile.google_refresh_token,
      profile.gmb_location_id,
      content,
      mediaUrl
    )
    return { success: true }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to sync to Google';
    return { error: errorMessage }
  }
}

export async function generateAIDraft(contentType: 'image' | 'voice' | 'text', inputData: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Not authenticated' }

  const { data: profile } = await supabase
    .from('profiles')
    .select('business_name, city, trade')
    .eq('id', user.id)
    .single()

  if (!profile) return { error: 'Profile not found' }

  try {
    const draft = await generateOpenAIDraft({
      businessName: profile.business_name || 'Our Business',
      city: profile.city || 'local area',
      trade: profile.trade || 'Professional Services',
      contentType,
      inputData
    })
    return { success: true, draft }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate AI draft';
    return { error: errorMessage }
  }
}
