import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const serviceAnchors = [
  'web-development',
  'app-development',
  'api-backend',
  'ai-automation',
  'cloud-devops',
  'consulting',
]

const icons = [
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
]

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
      { threshold: 0.15 }
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
  const location = useLocation()
  const sectionRef = useScrollReveal()

  const services = [
    { title: t('labs.service1.title'), desc: t('labs.service1.desc'), icon: icons[0], anchor: serviceAnchors[0] },
    { title: t('labs.service2.title'), desc: t('labs.service2.desc'), icon: icons[1], anchor: serviceAnchors[1] },
    { title: t('labs.service3.title'), desc: t('labs.service3.desc'), icon: icons[2], anchor: serviceAnchors[2] },
    { title: t('labs.service4.title'), desc: t('labs.service4.desc'), icon: icons[3], anchor: serviceAnchors[3] },
    { title: t('labs.service5.title'), desc: t('labs.service5.desc'), icon: icons[4], anchor: serviceAnchors[4] },
    { title: t('labs.service6.title'), desc: t('labs.service6.desc'), icon: icons[5], anchor: serviceAnchors[5] },
  ]

  // Scroll to anchor on mount
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.hash])

  return (
    <div className="min-h-screen bg-white pt-16" ref={sectionRef}>
      {/* Hero Section */}
      <section className="py-20 sm:py-28 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Part of Tuple.no badge */}
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-indigo-50 border border-indigo-200 opacity-0 animate-fade-in-up">
            <span className="text-indigo-600 text-sm font-medium">
              {t('labs.partOf')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 tracking-tight opacity-0 animate-fade-in-up animate-stagger-1">
            {t('labs.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animate-stagger-2">
            {t('labs.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.anchor}
                className={`scroll-reveal scroll-delay-${index + 1} p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all duration-300 hover:scale-[1.02] scroll-translate`}
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 text-indigo-500">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal p-6 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-sm scroll-translate">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
              {t('labs.cta')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Labs
