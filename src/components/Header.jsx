import { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const marketingServices = [
  { id: 'branding', key: 'marketing.service1.title' },
  { id: 'content-strategy', key: 'marketing.service2.title' },
  { id: 'social-media', key: 'marketing.service3.title' },
  { id: 'growth-marketing', key: 'marketing.service4.title' },
  { id: 'email-marketing', key: 'marketing.service5.title' },
  { id: 'analytics', key: 'marketing.service6.title' },
]

const labsServices = [
  { id: 'web-development', key: 'labs.service1.title' },
  { id: 'app-development', key: 'labs.service2.title' },
  { id: 'api-backend', key: 'labs.service3.title' },
  { id: 'ai-automation', key: 'labs.service4.title' },
  { id: 'cloud-devops', key: 'labs.service5.title' },
  { id: 'consulting', key: 'labs.service6.title' },
]

function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [marketingAccordion, setMarketingAccordion] = useState(false)
  const [labsAccordion, setLabsAccordion] = useState(false)
  const [desktopDropdown, setDesktopDropdown] = useState(null) // 'marketing' | 'labs' | null
  const [scrolled, setScrolled] = useState(false)
  const dropdownTimeout = useRef(null)

  // Header shrink on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const isActive = (path) => location.pathname === path

  const handleServiceClick = (basePath, sectionId) => {
    setMobileMenuOpen(false)
    setDesktopDropdown(null)
    if (location.pathname === basePath) {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`${basePath}#${sectionId}`)
    }
  }

  const openDropdown = (name) => {
    clearTimeout(dropdownTimeout.current)
    setDesktopDropdown(name)
  }

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDesktopDropdown(null), 150)
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setMarketingAccordion(false)
      setLabsAccordion(false)
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 animate-header-slide-down transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}>
            {/* Left - Home Link */}
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-900 font-bold text-lg tracking-tight hover:text-violet-600 transition-colors"
            >
              <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <path d="M8 12C8 9.79 9.79 8 12 8H20V12H14C12.9 12 12 12.9 12 14V24L8 28L12 32V42C12 43.1 12.9 44 14 44H20V48H12C9.79 48 8 46.21 8 44V34L4 28L8 22V12Z" fill="url(#hg1)" />
                <path d="M48 12C48 9.79 46.21 8 44 8H36V12H42C43.1 12 44 12.9 44 14V24L48 28L44 32V42C44 43.1 43.1 44 42 44H36V48H44C46.21 48 48 46.21 48 44V34L52 28L48 22V12Z" fill="url(#hg2)" />
                <rect x="22" y="18" width="12" height="3.5" rx="1.5" fill="url(#hg3)" />
                <rect x="26.25" y="18" width="3.5" height="20" rx="1.5" fill="url(#hg3)" />
                <defs>
                  <linearGradient id="hg1" x1="4" y1="8" x2="20" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#7c3aed" /><stop offset="1" stopColor="#6366f1" /></linearGradient>
                  <linearGradient id="hg2" x1="36" y1="8" x2="52" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#6366f1" /><stop offset="1" stopColor="#7c3aed" /></linearGradient>
                  <linearGradient id="hg3" x1="22" y1="18" x2="34" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#7c3aed" /><stop offset="1" stopColor="#4f46e5" /></linearGradient>
                </defs>
              </svg>
              Tuple
            </Link>

            {/* Center - Newspaper-style Nav Tabs (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              {/* Labs Tab */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown('labs')}
                onMouseLeave={closeDropdown}
              >
                <Link
                  to="/labs"
                  className={`nav-paper-btn w-[176px] h-[40px] justify-center text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 inline-flex items-center gap-2 ${
                    isActive('/labs')
                      ? 'nav-paper-active text-gray-900'
                      : 'text-gray-700'
                  }`}
                >
                  {t('header.labs')}
                  <svg className={`w-3 h-3 transition-transform duration-300 ${desktopDropdown === 'labs' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </Link>

                {/* Labs Mega Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white border border-gray-200 shadow-xl p-2 transition-all duration-300 ${
                  desktopDropdown === 'labs' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {labsServices.map((service, i) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick('/labs', service.id)}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 flex items-center gap-3 border-b border-gray-50 last:border-0"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <span className="w-1 h-4 bg-indigo-400 rounded-full"></span>
                      {t(service.key)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Marketing Tab */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown('marketing')}
                onMouseLeave={closeDropdown}
              >
                <Link
                  to="/marketing"
                  className={`nav-paper-btn w-[176px] h-[40px] justify-center text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 inline-flex items-center gap-2 ${
                    isActive('/marketing')
                      ? 'nav-paper-active text-gray-900'
                      : 'text-gray-700'
                  }`}
                >
                  {t('header.marketing')}
                  <svg className={`w-3 h-3 transition-transform duration-300 ${desktopDropdown === 'marketing' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </Link>

                {/* Marketing Mega Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white border border-gray-200 shadow-xl p-2 transition-all duration-300 ${
                  desktopDropdown === 'marketing' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {marketingServices.map((service, i) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick('/marketing', service.id)}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-violet-600 hover:bg-violet-50 transition-all duration-200 flex items-center gap-3 border-b border-gray-50 last:border-0"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <span className="w-1 h-4 bg-violet-400 rounded-full"></span>
                      {t(service.key)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Language Switcher (Desktop) */}
            <div className="hidden md:flex items-center gap-0">
              <button
                onClick={() => changeLanguage('no')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
                  i18n.language === 'no'
                    ? 'text-gray-900 bg-gray-100 border-gray-300'
                    : 'text-gray-400 hover:text-gray-900 border-transparent hover:border-gray-200'
                }`}
              >
                NO
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
                  i18n.language === 'en'
                    ? 'text-gray-900 bg-gray-100 border-gray-300'
                    : 'text-gray-400 hover:text-gray-900 border-transparent hover:border-gray-200'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
              <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-white/98 backdrop-blur-lg" />
        <div className={`relative h-full flex flex-col pt-20 transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          {/* Mobile Navigation */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-4 text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
              {t('header.home')}
            </Link>

            {/* Tulpe Marketing Accordion */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMarketingAccordion(!marketingAccordion)}
                className="flex items-center justify-between w-full py-4 text-xl font-semibold text-gray-900 hover:text-violet-600 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                  {t('header.tulpeMarketing')}
                </span>
                <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${marketingAccordion ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${marketingAccordion ? 'max-h-96 pb-3' : 'max-h-0'}`}>
                {marketingServices.map((service, i) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick('/marketing', service.id)}
                    className="w-full text-left pl-12 pr-4 py-2.5 text-base text-gray-600 hover:text-violet-600 hover:bg-violet-50/50 rounded-lg transition-all duration-200"
                    style={{ transitionDelay: marketingAccordion ? `${i * 50}ms` : '0ms' }}
                  >
                    {t(service.key)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tuple Labs Accordion */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setLabsAccordion(!labsAccordion)}
                className="flex items-center justify-between w-full py-4 text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
                  {t('header.tupleLabs')}
                </span>
                <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${labsAccordion ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${labsAccordion ? 'max-h-96 pb-3' : 'max-h-0'}`}>
                {labsServices.map((service, i) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick('/labs', service.id)}
                    className="w-full text-left pl-12 pr-4 py-2.5 text-base text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-lg transition-all duration-200"
                    style={{ transitionDelay: labsAccordion ? `${i * 50}ms` : '0ms' }}
                  >
                    {t(service.key)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-3 py-4">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              <button
                onClick={() => changeLanguage('no')}
                className={`px-4 py-2 text-base font-medium rounded-full transition-all duration-300 ${
                  i18n.language === 'no'
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                NO
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-4 py-2 text-base font-medium rounded-full transition-all duration-300 ${
                  i18n.language === 'en'
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
