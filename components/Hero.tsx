import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="bg-gray-900 pt-28 pb-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              All-in-one platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-br from-white via-white to-blue-200 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://app.aiohub.app/register"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                {t('cta')}
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">{t('subtext')}</p>
          </div>

          {/* Dashboard Mockup */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-gray-900 px-4 py-3 flex items-center gap-3 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 bg-gray-700/70 rounded-md py-1 px-3 text-gray-400 text-xs text-center">
                  app.aiohub.app
                </div>
              </div>

              {/* App Shell */}
              <div className="flex" style={{ height: '280px' }}>
                {/* Sidebar */}
                <div className="w-14 bg-gray-900 border-r border-gray-700/50 flex flex-col items-center py-4 gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-white rounded-sm" />
                  </div>
                  {['bg-gray-600', 'bg-gray-600', 'bg-gray-600', 'bg-gray-600', 'bg-gray-600'].map(
                    (color, i) => (
                      <div key={i} className={`w-6 h-6 rounded-md ${color}/60`} />
                    )
                  )}
                </div>

                {/* Main */}
                <div className="flex-1 bg-gray-850 p-4 bg-gray-800">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-4 w-28 bg-gray-600 rounded-md" />
                    <div className="h-7 w-24 bg-blue-600 rounded-lg" />
                  </div>

                  {/* Kanban */}
                  <div className="grid grid-cols-3 gap-3 h-full">
                    {/* Todo */}
                    <div className="bg-gray-700/60 rounded-xl p-3 space-y-2">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                        <div className="h-3 w-12 bg-gray-500 rounded" />
                      </div>
                      {[1, 2].map((i) => (
                        <div key={i} className="bg-gray-600/80 rounded-lg p-2.5 space-y-1.5">
                          <div className="h-2 w-full bg-gray-500 rounded" />
                          <div className="h-2 w-2/3 bg-gray-500 rounded" />
                        </div>
                      ))}
                    </div>

                    {/* In Progress */}
                    <div className="bg-gray-700/60 rounded-xl p-3 space-y-2">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <div className="h-3 w-16 bg-blue-500/60 rounded" />
                      </div>
                      <div className="bg-blue-900/40 border border-blue-700/40 rounded-lg p-2.5 space-y-1.5">
                        <div className="h-2 w-full bg-blue-400/50 rounded" />
                        <div className="h-2 w-1/2 bg-blue-400/50 rounded" />
                        <div className="h-1.5 w-full bg-gray-600 rounded-full mt-2">
                          <div className="h-1.5 w-2/3 bg-blue-500 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Done */}
                    <div className="bg-gray-700/60 rounded-xl p-3 space-y-2">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <div className="h-3 w-10 bg-green-500/60 rounded" />
                      </div>
                      {[1, 2].map((i) => (
                        <div key={i} className="bg-green-900/20 border border-green-700/30 rounded-lg p-2.5 space-y-1.5">
                          <div className="h-2 w-full bg-green-400/40 rounded" />
                          <div className="h-2 w-3/4 bg-green-400/40 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-4 bg-blue-500/5 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
