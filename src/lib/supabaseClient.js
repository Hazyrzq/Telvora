// Minimal Supabase client wrapper.
// If VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not set, export a safe stub
// so the UI can run in "UI-only" mode without a Supabase connection.
// To enable real Supabase: `npm install @supabase/supabase-js` and set env vars.

import { createClient } from '@supabase/supabase-js'

let supabase

const globalConfig = typeof window !== 'undefined' ? window : {}
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || globalConfig.__SB_URL__ || ''
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY || globalConfig.__SB_KEY__ || ''
const isValidUrl = /^https:\/\/[a-zA-Z0-9-]+\.supabase\.co$/.test(SUPABASE_URL)
const isWrongKeyPrefix = /^(sb_|pk_|sk_)/.test(SUPABASE_ANON_KEY)
const isJwt = SUPABASE_ANON_KEY.startsWith('ey') && SUPABASE_ANON_KEY.includes('.')
const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY) && isValidUrl && isJwt && !isWrongKeyPrefix

if (isSupabaseConfigured) {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
} else {
  console.warn('Supabase env vars not set — running in UI-only mode (supabase stub).')
  supabase = {
    auth: {
      session: () => null,
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: (_cb) => ({ unsubscribe: () => {} }),
      signIn: async () => ({ data: null, error: new Error('Supabase not configured') }),
      signInWithPassword: async () => ({ data: null, error: new Error('Supabase not configured') }),
      signUp: async () => ({ data: null, error: new Error('Supabase not configured') }),
      signOut: async () => ({ error: null }),
    },
    _stub: true,
  }
}

export { supabase, isSupabaseConfigured, isValidUrl, isJwt, isWrongKeyPrefix }
export default supabase
