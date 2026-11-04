import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { translations } from '../data/i18n'
import { initialProperties, initialVideos } from '../data/properties'

const AppContext = createContext(null)

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage unavailable */
  }
}

// Prototype credentials — replace with real server-side auth before deployment.
export const ADMIN_EMAIL = 'admin@patilassociate.in'
export const ADMIN_PASS = 'Patil@123'

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => load('pa_lang', 'mr'))
  const [properties, setProperties] = useState(() => load('pa_props', initialProperties))
  const [videos, setVideos] = useState(() => load('pa_videos', initialVideos))
  const [isAdmin, setIsAdmin] = useState(() => load('pa_admin', false))
  const [toast, setToast] = useState('')

  useEffect(() => {
    document.documentElement.lang = lang
    save('pa_lang', lang)
  }, [lang])
  useEffect(() => save('pa_props', properties), [properties])
  useEffect(() => save('pa_videos', videos), [videos])
  useEffect(() => save('pa_admin', isAdmin), [isAdmin])

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(''), 2600)
    return () => clearTimeout(id)
  }, [toast])

  const t = useCallback((k) => translations[lang][k] ?? k, [lang])

  const value = useMemo(
    () => ({
      lang,
      t,
      toggleLang: () => setLang((l) => (l === 'mr' ? 'en' : 'mr')),
      properties,
      addProperty: (p) => setProperties((list) => [{ ...p, id: Date.now() }, ...list]),
      deleteProperty: (id) => setProperties((list) => list.filter((p) => p.id !== id)),
      videos,
      addVideo: (v) => setVideos((list) => [{ ...v, id: Date.now() }, ...list]),
      deleteVideo: (id) => setVideos((list) => list.filter((v) => v.id !== id)),
      isAdmin,
      adminLogin: (email, pass) => {
        const ok = email === ADMIN_EMAIL && pass === ADMIN_PASS
        if (ok) setIsAdmin(true)
        return ok
      },
      adminLogout: () => setIsAdmin(false),
      toast,
      showToast: setToast,
    }),
    [lang, t, properties, videos, isAdmin, toast]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
