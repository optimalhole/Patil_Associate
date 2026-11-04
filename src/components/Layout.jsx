import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import Footer from './Footer.jsx'

const links = [
  ['/', 'navHome'],
  ['/properties', 'navProperties'],
  ['/about', 'navAbout'],
  ['/videos', 'navVideos'],
  ['/contact', 'navContact'],
]

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Patil Associate">
      <span className="brandmark">P</span>
      <span>
        PATIL
        <br />
        ASSOCIATE
      </span>
    </Link>
  )
}

export default function Layout() {
  const { t, lang, toggleLang, isAdmin, toast } = useApp()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0 })
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Scroll-reveal for any element with .reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  })

  return (
    <>
      <header className="header">
        <div className="wrap header-row">
          <Brand />
          <nav className="nav" aria-label="Main">
            {links.map(([to, key]) => (
              <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                {t(key)}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <button className="btn btn-sm" onClick={toggleLang} aria-label="Change language">
              {lang === 'mr' ? 'EN' : 'मराठी'}
            </button>
            <Link to={isAdmin ? '/admin' : '/login'} className="btn btn-sm btn-dark hide-md">
              {isAdmin ? t('admin') : t('login')}
            </Link>
            <button
              className={`menu-btn ${open ? 'open' : ''}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={open}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${open ? 'open' : ''}`}>
        {links.map(([to, key]) => (
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
            {t(key)}
          </NavLink>
        ))}
        <div className="drawer-actions">
          <Link to="/login" className="btn btn-dark">
            {t('login')}
          </Link>
          <Link to="/admin" className="btn">
            {t('admin')}
          </Link>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
      <Footer />
      <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  )
}
