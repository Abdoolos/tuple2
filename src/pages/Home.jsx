import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center pt-16 hero-paper-bg">
      <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Side - Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-1">
            {/* Iconic Logo */}
            <div className="mb-8 opacity-0 hero-anim hero-anim-1">
              <div className="relative w-[56px] h-[56px] animate-pulse-slow">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Outer bracket left */}
                  <path d="M8 12C8 9.79 9.79 8 12 8H20V12H14C12.9 12 12 12.9 12 14V24L8 28L12 32V42C12 43.1 12.9 44 14 44H20V48H12C9.79 48 8 46.21 8 44V34L4 28L8 22V12Z" fill="url(#grad1)" />
                  {/* Outer bracket right */}
                  <path d="M48 12C48 9.79 46.21 8 44 8H36V12H42C43.1 12 44 12.9 44 14V24L48 28L44 32V42C44 43.1 43.1 44 42 44H36V48H44C46.21 48 48 46.21 48 44V34L52 28L48 22V12Z" fill="url(#grad2)" />
                  {/* Center T */}
                  <rect x="22" y="18" width="12" height="3.5" rx="1.5" fill="url(#grad3)" />
                  <rect x="26.25" y="18" width="3.5" height="20" rx="1.5" fill="url(#grad3)" />
                  <defs>
                    <linearGradient id="grad1" x1="4" y1="8" x2="20" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7c3aed" />
                      <stop offset="1" stopColor="#6366f1" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="36" y1="8" x2="52" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366f1" />
                      <stop offset="1" stopColor="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="grad3" x1="22" y1="18" x2="34" y2="38" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7c3aed" />
                      <stop offset="1" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight opacity-0 hero-anim hero-anim-2">
              Tuple.no
            </h1>

            {/* Image - Mobile only (between title and tagline) */}
            <div className="lg:hidden w-full flex justify-center my-8 opacity-0 hero-anim hero-anim-3">
              <div className="w-[280px] aspect-[4/3] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-500 border border-gray-100">
                <img src="/heroimage.png" alt="Tuple" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-lg lg:text-xl text-gray-500 mb-10 max-w-md leading-relaxed opacity-0 hero-anim hero-anim-4">
              {t('home.tagline')}
            </p>

            {/* CTA Buttons - Equal Width */}
            <div className="flex flex-col sm:flex-row gap-3 opacity-0 hero-anim hero-anim-5 w-full sm:w-auto">
              <Link
                to="/marketing"
                className="w-full sm:w-48 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg text-base transition-all duration-300 hover:scale-105 active:scale-[0.98] hover:shadow-lg hover:shadow-violet-500/25 text-center"
              >
                {t('home.marketing')}
              </Link>
              <Link
                to="/labs"
                className="w-full sm:w-48 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-base transition-all duration-300 hover:scale-105 active:scale-[0.98] hover:shadow-lg hover:shadow-indigo-500/25 text-center"
              >
                {t('home.labs')}
              </Link>
            </div>
          </div>

          {/* Right Side - Image (Desktop only) */}
          <div className="hidden lg:flex flex-1 justify-center order-2 opacity-0 hero-anim hero-anim-6">
            <div className="w-full max-w-[540px] aspect-[4/3] rounded-2xl shadow-lg overflow-hidden animate-float hover:scale-[1.02] hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100">
              <img src="/heroimage.png" alt="Tuple" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
