import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isHome = location.pathname === '/'
  const isMarketing = location.pathname === '/marketing'
  const isLabs = location.pathname === '/labs'
  const isDark = isLabs

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const changeLanguage = (lng) => i18n.changeLanguage(lng)

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Logo component
  const Logo = () => (
    <Link to="/" className={`flex items-center gap-2 font-bold text-lg tracking-tight transition-colors ${isDark ? 'text-white hover:text-[#5EEAD4]' : 'text-[#0F172A] hover:text-[#7C3AED]'}`}>
      <span className={`font-mono text-xl ${isDark ? 'text-[#14B8A6]' : 'text-[#7C3AED]'}`}>{'{ }'}</span>
      {isHome && 'Tuple'}
      {isMarketing && t('header.tupleMarketing')}
      {isLabs && t('header.tupleLabs')}
    </Link>
  )

  // Language switcher
  const LangSwitcher = ({ mobile = false }) => (
    <div className={`flex items-center ${mobile ? 'gap-3' : 'gap-1'}`}>
      <button
        onClick={() => changeLanguage('no')}
        className={`${mobile ? 'px-4 py-2 text-base' : 'px-2.5 py-1 text-sm'} font-medium rounded transition-all duration-300 ${
          i18n.language === 'no'
            ? isDark ? 'text-white bg-white/10' : 'text-gray-900 bg-gray-100'
            : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-900'
        }`}
      >
        NO
      </button>
      <span className={isDark ? 'text-gray-600' : 'text-gray-300'}>|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`${mobile ? 'px-4 py-2 text-base' : 'px-2.5 py-1 text-sm'} font-medium rounded transition-all duration-300 ${
          i18n.language === 'en'
            ? isDark ? 'text-white bg-white/10' : 'text-gray-900 bg-gray-100'
            : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-900'
        }`}
      >
        EN
      </button>
    </div>
  )

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? 'bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-white/80 backdrop-blur-xl border-b border-[#E2E8F0]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>

            {/* Left - Logo */}
            <Logo />

            {/* Center - Navigation (Desktop, not on Home) */}
            {!isHome && (
              <nav className="hidden md:flex items-center gap-1">
                <Link
                  to="/labs"
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isLabs
                      ? 'text-white bg-white/10'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Labs
                </Link>
                <span className={isDark ? 'text-gray-600' : 'text-gray-300'}>|</span>
                <Link
                  to="/marketing"
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isMarketing
                      ? isDark ? 'text-white bg-white/10' : 'text-[#7C3AED] bg-[#F5F3FF]'
                      : isDark ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Marketing
                </Link>
                {isMarketing && (
                  <a
                    href="#cta"
                    className="ml-3 px-4 py-2 text-sm font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded-full transition-all duration-300 hover:scale-105"
                  >
                    {t('header.book')}
                  </a>
                )}
              </nav>
            )}

            {/* Right - Language + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <LangSwitcher />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 transition-colors relative w-10 h-10 flex items-center justify-center ${isDark ? 'text-white' : 'text-gray-700 hover:text-gray-900'}`}
                aria-label="Toggle menu"
              >
                <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
                <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className={`absolute inset-0 backdrop-blur-lg ${isDark ? 'bg-[#0F172A]/98' : 'bg-white/98'}`} />
        <div className={`relative h-full flex flex-col pt-20 transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-4 text-xl font-semibold border-b transition-colors ${isDark ? 'text-white border-white/10 hover:text-[#5EEAD4]' : 'text-[#0F172A] border-[#E2E8F0] hover:text-[#7C3AED]'}`}
            >
              Tuple
            </Link>
            <Link
              to="/marketing"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-4 text-xl font-semibold border-b transition-colors ${isDark ? 'text-white border-white/10 hover:text-[#A78BFA]' : 'text-[#0F172A] border-[#E2E8F0] hover:text-[#7C3AED]'}`}
            >
              Tuple Marketing
            </Link>
            <Link
              to="/labs"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-4 text-xl font-semibold border-b transition-colors ${isDark ? 'text-white border-white/10 hover:text-[#5EEAD4]' : 'text-[#0F172A] border-[#E2E8F0] hover:text-[#14B8A6]'}`}
            >
              Tuple Labs
            </Link>
            <div className="py-4">
              <LangSwitcher mobile />
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
