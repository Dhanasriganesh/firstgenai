import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { COMPANY, NAV_LINKS } from '../../data/constants'
import logo from '../../assets/firstgenai-logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass py-3 shadow-lg shadow-indigo-500/5'
          : 'bg-white/40 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="group shrink-0">
            <img
              src={logo}
              alt={`${COMPANY.fullName} logo`}
              className="h-14 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50/80'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {COMPANY.phone}
            </a>
            <Link to="/contact" className="btn-primary text-sm !py-2.5 !px-5">
              Get a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden relative z-10 p-2 rounded-lg text-slate-700 hover:bg-indigo-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="glass mx-4 mt-2 rounded-2xl p-4 space-y-1">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-indigo-100/50">
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="block px-4 py-2 text-sm text-slate-500">
              {COMPANY.phone}
            </a>
            <Link to="/contact" className="btn-primary w-full mt-2 text-sm">
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
