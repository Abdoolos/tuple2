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

function Labs() {
  const { t } = useTranslation()
  const sectionRef = useScrollReveal()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const comparisons = [1, 2, 3, 4]

  return (
    <div className="min-h-screen pt-16" ref={sectionRef}>

      {/* Section 1 - Hero (Dark) */}
      <section className="bg-dark-grid py-20 lg:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight leading-tight opacity-0 animate-fade-in-up">
                {t('labs.heroTitle')}
              </h1>
              <p className="text-[#CBD5E1] text-base lg:text-lg mb-3 leading-relaxed opacity-0 animate-fade-in-up animate-stagger-1">
                {t('labs.heroText1')}
              </p>
              <p className="text-[#14B8A6] text-base lg:text-lg font-medium opacity-0 animate-fade-in-up animate-stagger-1">
                {t('labs.heroText2')}
              </p>
            </div>
            <div className="flex-1 flex justify-center opacity-0 animate-fade-in-up animate-stagger-2">
              <div className="relative w-[280px] h-[280px] lg:w-[350px] lg:h-[350px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 rotate-6"></div>
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-teal-500/15 to-blue-400/15 -rotate-3"></div>
                <div className="absolute inset-8 rounded-3xl bg-[#1E293B] border border-white/10 flex items-center justify-center">
                  <span className="font-mono text-5xl lg:text-7xl text-[#14B8A6]/40 font-bold select-none">{'{ }'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Comparison Table (Light) */}
      <section className="py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="scroll-reveal scroll-translate text-2xl lg:text-4xl font-bold text-[#0F172A] mb-10 text-center">{t('labs.compareTitle')}</h2>
          <div className="scroll-reveal scroll-translate rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
              <div className="px-6 py-4 text-sm font-bold text-[#64748B] uppercase tracking-wider">{t('labs.compareOther')}</div>
              <div className="px-6 py-4 text-sm font-bold text-[#14B8A6] uppercase tracking-wider">{t('labs.compareTuple')}</div>
            </div>
            {comparisons.map((i) => (
              <div key={i} className={`grid grid-cols-2 ${i < 4 ? 'border-b border-gray-100' : ''}`}>
                <div className="px-6 py-4 text-[#475569] text-sm lg:text-base">{t(`labs.compare${i}Other`)}</div>
                <div className="px-6 py-4 text-[#0F172A] text-sm lg:text-base font-medium bg-[#F0FDFA]">{t(`labs.compare${i}Tuple`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Services (Light) */}
      <section className="py-16 lg:py-20 px-4 bg-[#F0FDFA]">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-reveal scroll-translate text-2xl lg:text-4xl font-bold text-[#0F172A] mb-10 text-center">{t('labs.servicesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`scroll-reveal scroll-delay-${i} scroll-translate bg-white border border-[#E2E8F0] border-l-4 border-l-[#14B8A6] rounded-2xl p-6 hover:shadow-lg hover:border-[#14B8A6]/30 transition-all duration-300`}>
                <div className="w-10 h-10 rounded-xl bg-[#14B8A6] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">{t(`labs.svc${i}Title`)}</h3>
                <ul className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <li key={j} className="flex items-start gap-2 text-[#475569] text-sm">
                      <span className="text-[#14B8A6] mt-0.5">•</span>
                      {t(`labs.svc${i}Item${j}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Security (Dark) */}
      <section className="py-16 lg:py-20 px-4 bg-dark-grid">
        <div className="max-w-4xl mx-auto">
          <h2 className="scroll-reveal scroll-translate text-2xl lg:text-4xl font-bold text-white mb-10 text-center">{t('labs.securityTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`scroll-reveal scroll-delay-${i} scroll-translate flex items-start gap-3 p-4 rounded-xl bg-[#1E293B] border border-white/10`}>
                <span className="text-[#10B981] mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <p className="text-[#CBD5E1] text-sm lg:text-base">{t(`labs.sec${i}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - CTA (Dark) */}
      <section className="py-16 lg:py-24 px-4 bg-dark-grid">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="scroll-reveal scroll-translate text-2xl lg:text-4xl font-bold text-white mb-8">{t('labs.ctaTitle')}</h2>
          <div className="scroll-reveal scroll-translate flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="px-8 py-4 bg-[#14B8A6] hover:bg-[#5EEAD4] text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#14B8A6]/30">
              → {t('labs.ctaBtn')}
            </a>
            <a href="#" className="text-[#14B8A6] hover:text-[#5EEAD4] font-medium transition-colors">
              → {t('labs.ctaLink')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer (Dark) */}
      <footer className="py-12 px-4 bg-[#0F172A] border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-1">
              <span className="font-mono text-[#14B8A6]">{'{ }'}</span>
              {t('labs.footerTitle')}
            </h3>
            <p className="text-[#94A3B8] text-sm">{t('labs.footerEmail')}</p>
            <p className="text-[#94A3B8] text-sm">{t('labs.footerLocation')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Labs
