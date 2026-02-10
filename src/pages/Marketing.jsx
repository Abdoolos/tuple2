import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    const el = ref.current
    if (el) {
      const children = el.querySelectorAll('.scroll-reveal')
      children.forEach((child) => observer.observe(child))
    }
    return () => observer.disconnect()
  }, [])
  return ref
}

function Marketing() {
  const { t } = useTranslation()
  const sectionRef = useScrollReveal()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-mkt-grid pt-16" ref={sectionRef}>

      {/* Section 1 - Hero */}
      <section className="py-20 lg:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 lg:max-w-[60%]">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F172A] mb-6 tracking-tight leading-tight opacity-0 animate-fade-in-up">
                {t('mkt.heroTitle')}
              </h1>
              <p className="text-[#475569] text-base lg:text-lg mb-3 leading-relaxed opacity-0 animate-fade-in-up animate-stagger-1">
                {t('mkt.heroSub1')}
              </p>
              <p className="text-[#475569] text-base lg:text-lg mb-8 leading-relaxed opacity-0 animate-fade-in-up animate-stagger-1">
                {t('mkt.heroSub2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-in-up animate-stagger-2">
                <a href="#cta" className="px-6 py-3 bg-[#7C3AED] hover:bg-[#A78BFA] text-white font-semibold rounded-full text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7C3AED]/25">
                  {t('mkt.heroBtn1')}
                </a>
                <a href="#focus" className="px-6 py-3 bg-white border-2 border-[#E2E8F0] hover:border-[#7C3AED]/30 text-[#0F172A] font-semibold rounded-full text-center transition-all duration-300 hover:scale-105">
                  {t('mkt.heroBtn2')}
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center opacity-0 animate-fade-in-up animate-stagger-2">
              <div className="relative w-[280px] h-[280px] lg:w-[350px] lg:h-[350px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 rotate-6"></div>
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-purple-500/15 to-pink-400/15 -rotate-3"></div>
                <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <span className="text-6xl">📢</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Focus on Health & Lifestyle */}
      <section id="focus" className="py-16 lg:py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="scroll-reveal scroll-translate text-2xl lg:text-4xl font-bold text-[#0F172A] mb-3">{t('mkt.focusTitle')}</h2>
            <p className="scroll-reveal scroll-translate text-[#64748B]">{t('mkt.focusSub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`scroll-reveal scroll-delay-${i} scroll-translate bg-white border border-[#E2E8F0] border-l-4 border-l-[#7C3AED] rounded-2xl p-6 hover:shadow-lg hover:border-[#7C3AED]/30 transition-all duration-300`}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#10B981]/10 text-[#10B981] mb-4 text-lg font-bold">✓</span>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{t(`mkt.focus${i}Title`)}</h3>
                <p className="text-[#475569] text-sm mb-4">{t(`mkt.focus${i}Text`)}</p>
                <span className="text-[#7C3AED] text-sm font-medium hover:underline cursor-pointer">{t('mkt.focusLink')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Principles */}
      <section className="py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-reveal scroll-translate text-2xl lg:text-4xl font-bold text-[#0F172A] mb-10 text-center">{t('mkt.principlesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`scroll-reveal scroll-delay-${i} scroll-translate bg-white border border-[#E2E8F0] border-l-4 border-l-[#7C3AED] rounded-2xl p-6 hover:shadow-lg hover:border-[#7C3AED]/30 transition-all duration-300`}>
                <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] flex items-center justify-center mb-4 text-[#7C3AED] font-bold">{i}</div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{t(`mkt.pr${i}Title`)}</h3>
                <p className="text-[#475569] text-sm">{t(`mkt.pr${i}Text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - How we help */}
      <section className="py-16 lg:py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-reveal scroll-translate text-2xl lg:text-4xl font-bold text-[#0F172A] mb-10 text-center">{t('mkt.helpTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`scroll-reveal scroll-delay-${i} scroll-translate bg-white border border-[#E2E8F0] border-l-4 border-l-[#7C3AED] rounded-2xl p-6 hover:shadow-lg hover:border-[#7C3AED]/30 transition-all duration-300`}>
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{t(`mkt.help${i}Title`)}</h3>
                <p className="text-[#475569] text-sm">{t(`mkt.help${i}Text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - CTA */}
      <section id="cta" className="py-16 lg:py-24 px-4 bg-[#F5F3FF]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="scroll-reveal scroll-translate text-2xl lg:text-4xl font-bold text-[#0F172A] mb-8">{t('mkt.ctaTitle')}</h2>
          <a href="#" className="scroll-reveal scroll-translate inline-block px-10 py-4 bg-[#7C3AED] hover:bg-[#A78BFA] text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7C3AED]/30">
            {t('mkt.ctaBtn')}
          </a>
        </div>
      </section>

      {/* Section 6 - Why choose us */}
      <section className="py-16 lg:py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-reveal scroll-translate text-2xl lg:text-4xl font-bold text-[#0F172A] mb-10 text-center">{t('mkt.whyTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`scroll-reveal scroll-delay-${i} scroll-translate bg-white border border-[#E2E8F0] border-l-4 border-l-[#7C3AED] rounded-2xl p-6 hover:shadow-lg hover:border-[#7C3AED]/30 transition-all duration-300`}>
                <div className="w-10 h-10 rounded-full bg-[#F5F3FF] flex items-center justify-center mb-4 text-[#7C3AED]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{t(`mkt.why${i}Title`)}</h3>
                <p className="text-[#475569] text-sm">{t(`mkt.why${i}Text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-1">{t('mkt.footerTitle')}</h3>
            <p className="text-[#475569] text-sm">{t('mkt.footerEmail')}</p>
            <p className="text-[#475569] text-sm">{t('mkt.footerLocation')}</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#F5F3FF] flex items-center justify-center transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#F5F3FF] flex items-center justify-center transition-colors" aria-label="TikTok">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.44V13.1a8.16 8.16 0 005.58 2.2V11.9a4.85 4.85 0 01-3.77-1.87V6.69h3.77z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#F5F3FF] flex items-center justify-center transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#E2E8F0] text-center">
          <p className="text-[#94A3B8] text-sm">{t('mkt.footerCopy')}</p>
        </div>
      </footer>
    </div>
  )
}

export default Marketing
