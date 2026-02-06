import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const serviceAnchors = [
  'branding',
  'content-strategy',
  'social-media',
  'growth-marketing',
  'email-marketing',
  'analytics',
]

const icons = [
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
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

function Marketing() {
  const { t } = useTranslation()
  const location = useLocation()
  const sectionRef = useScrollReveal()

  const services = [
    { title: t('marketing.service1.title'), desc: t('marketing.service1.desc'), icon: icons[0], anchor: serviceAnchors[0] },
    { title: t('marketing.service2.title'), desc: t('marketing.service2.desc'), icon: icons[1], anchor: serviceAnchors[1] },
    { title: t('marketing.service3.title'), desc: t('marketing.service3.desc'), icon: icons[2], anchor: serviceAnchors[2] },
    { title: t('marketing.service4.title'), desc: t('marketing.service4.desc'), icon: icons[3], anchor: serviceAnchors[3] },
    { title: t('marketing.service5.title'), desc: t('marketing.service5.desc'), icon: icons[4], anchor: serviceAnchors[4] },
    { title: t('marketing.service6.title'), desc: t('marketing.service6.desc'), icon: icons[5], anchor: serviceAnchors[5] },
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
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-violet-50 border border-violet-200 opacity-0 animate-fade-in-up">
            <span className="text-violet-600 text-sm font-medium">
              {t('marketing.partOf')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 tracking-tight opacity-0 animate-fade-in-up animate-stagger-1">
            {t('marketing.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animate-stagger-2">
            {t('marketing.subtitle')}
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
                className={`scroll-reveal scroll-delay-${index + 1} p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-violet-300 hover:shadow-md transition-all duration-300 hover:scale-[1.02] scroll-translate`}
              >
                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center mb-4 text-violet-500">
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
            <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25">
              {t('marketing.cta')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Marketing
