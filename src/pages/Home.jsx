import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-light-grid pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0F172A] mb-6 tracking-tight leading-tight opacity-0 animate-fade-in-up">
                {t('home.heroTitle')}
              </h1>
              <p className="text-lg sm:text-xl text-[#475569] max-w-xl leading-relaxed opacity-0 animate-fade-in-up animate-stagger-1">
                {t('home.heroSubtitle')}
              </p>
            </div>

            {/* Right - Geometric 3D placeholder */}
            <div className="flex-1 flex justify-center opacity-0 animate-fade-in-up animate-stagger-2">
              <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-3xl bg-[#8B5CF6]/12 rotate-6 animate-float"></div>
                <div className="absolute inset-4 rounded-3xl bg-[#06B6D4]/12 -rotate-3"></div>
                <div className="absolute inset-8 rounded-3xl bg-[#8B5CF6]/6 rotate-2 flex items-center justify-center">
                  <span className="font-mono text-6xl lg:text-8xl text-[#0F172A]/8 font-bold select-none">{'{ }'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Big Cards */}
      <section className="pb-16 lg:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {/* Card 1 - Tuple Marketing */}
            <Link
              to="/marketing"
              className="group relative overflow-hidden rounded-3xl p-8 lg:p-10 bg-[#8B5CF6] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#8B5CF6]/25 opacity-0 animate-fade-in-up animate-stagger-2"
            >
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">📢</span>
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 text-white text-sm font-medium">
                  {t('home.card1Badge')}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  {t('home.card1Title')}
                </h2>
                <p className="text-white/80 mb-6 text-base lg:text-lg">
                  {t('home.card1Text')}
                </p>
                <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/20 text-white text-sm font-semibold group-hover:bg-white/30 transition-all duration-300">
                  {t('home.card1Btn')}
                </span>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
            </Link>

            {/* Card 2 - Tuple Labs */}
            <Link
              to="/labs"
              className="group relative overflow-hidden rounded-3xl p-8 lg:p-10 bg-[#06B6D4] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#06B6D4]/25 opacity-0 animate-fade-in-up animate-stagger-3"
            >
              <div className="relative z-10">
                <span className="text-4xl mb-4 block font-mono text-white/90">{'{ }'}</span>
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 text-white text-sm font-medium">
                  {t('home.card2Badge')}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  {t('home.card2Title')}
                </h2>
                <p className="text-white/80 mb-6 text-base lg:text-lg">
                  {t('home.card2Text')}
                </p>
                <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/20 text-white text-sm font-semibold group-hover:bg-white/30 transition-all duration-300">
                  {t('home.card2Btn')}
                </span>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
            </Link>

          </div>
        </div>
      </section>

      {/* Footer Text */}
      <section className="pb-20 lg:pb-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#475569] text-lg lg:text-xl leading-relaxed opacity-0 animate-fade-in-up animate-stagger-4">
            {t('home.footerText')}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
