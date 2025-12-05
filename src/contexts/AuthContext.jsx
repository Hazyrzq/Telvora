import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const init = async () => {
      try {
        const { data } = await supabase.auth.getSession()
        if (mounted) {
          setUser(data?.session?.user ?? null)
        }
      } finally {
        if (mounted) setLoading(false)
      }
    }

    init()

    let authListener = null
    try {
      const authSubscription = supabase.auth.onAuthStateChange((_event, session) => {
        if (mounted) {
          setUser(session?.user ?? null)
        }
      })
      
      // Handle different return formats from Supabase
      // Supabase v2 returns: { data: { subscription }, error }
      // Stub returns: { unsubscribe: () => {} }
      if (authSubscription) {
        if (authSubscription.data?.subscription) {
          authListener = authSubscription.data.subscription
        } else if (authSubscription.subscription) {
          authListener = authSubscription.subscription
        } else if (authSubscription.unsubscribe && typeof authSubscription.unsubscribe === 'function') {
          authListener = authSubscription
        } else if (typeof authSubscription === 'function') {
          authListener = { unsubscribe: authSubscription }
        }
      }
    } catch (err) {
      console.warn('Error setting up auth listener:', err)
    }

    return () => {
      mounted = false
      try {
        if (authListener) {
          if (typeof authListener.unsubscribe === 'function') {
            authListener.unsubscribe()
          } else if (typeof authListener === 'function') {
            authListener()
          }
        }
      } catch (err) {
        console.warn('Error unsubscribing auth listener:', err)
      }
    }
  }, [])

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    setUser(data?.user ?? null)
    return data?.user ?? null
  }

  const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
    setUser(data?.user ?? null)
    return data?.user ?? null
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContext
