import { useTranslations } from 'next-intl';

function Check() {
  return (
    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  const t = useTranslations('Pricing');

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t('title')}
          </h2>
          <p className="mt-3 text-gray-500 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free */}
          <div className="rounded-2xl border border-gray-200 p-8 flex flex-col">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{t('free_name')}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">{t('free_price')}</span>
                <span className="text-gray-500 text-sm">/ {t('free_period')}</span>
              </div>
            </div>
            <ul className="mt-8 space-y-3 flex-1">
              {[t('free_f1'), t('free_f2'), t('free_f3')].map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                  <Check /> {f}
                </li>
              ))}
            </ul>
            <a
              href="https://app.aiohub.app/register"
              className="mt-8 block text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 rounded-xl transition-colors"
            >
              {t('free_cta')}
            </a>
          </div>

          {/* Pro — highlighted */}
          <div className="rounded-2xl border-2 border-blue-500 p-8 flex flex-col relative shadow-lg shadow-blue-500/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                {t('popular')}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{t('pro_name')}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">{t('pro_price')}</span>
                <span className="text-gray-500 text-sm">/ {t('pro_period')}</span>
              </div>
            </div>
            <ul className="mt-8 space-y-3 flex-1">
              {[t('pro_f1'), t('pro_f2'), t('pro_f3'), t('pro_f4')].map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                  <Check /> {f}
                </li>
              ))}
            </ul>
            <a
              href="https://app.aiohub.app/register"
              className="mt-8 block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {t('pro_cta')}
            </a>
          </div>

          {/* Business */}
          <div className="rounded-2xl border border-gray-200 p-8 flex flex-col">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{t('biz_name')}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">{t('biz_price')}</span>
                <span className="text-gray-500 text-sm">/ {t('biz_period')}</span>
              </div>
            </div>
            <ul className="mt-8 space-y-3 flex-1">
              {[t('biz_f1'), t('biz_f2'), t('biz_f3'), t('biz_f4')].map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                  <Check /> {f}
                </li>
              ))}
            </ul>
            <a
              href="https://app.aiohub.app/register"
              className="mt-8 block text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 rounded-xl transition-colors"
            >
              {t('biz_cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
