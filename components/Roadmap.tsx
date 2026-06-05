import SectionFade from './SectionFade';
import { useTranslations } from 'next-intl';

export default function Roadmap() {
  const t = useTranslations('Roadmap');

  const upcoming = [
    { label: t('i1'), status: 'soon' },
    { label: t('i2'), status: 'soon' },
    { label: t('i3'), status: 'planned' },
    { label: t('i4'), status: 'planned' },
    { label: t('i5'), status: 'planned' },
    { label: t('i6'), status: 'planned' },
  ];

  return (
    <section className="bg-[#080e1a] py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFade anim="zoom">
          <div className="bg-[#0d1526] border border-indigo-500/15 rounded-3xl p-8 sm:p-10 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              {t('badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t('heading')}</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">{t('desc')}</p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {upcoming.map((item) => (
                <span key={item.label}
                  className={`inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border ${
                    item.status === 'soon'
                      ? 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300'
                      : 'bg-white/4 border-white/8 text-slate-400'
                  }`}>
                  {item.status === 'soon' && <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />}
                  {item.label}
                </span>
              ))}
            </div>

            <a href="https://aiohub.pro/register"
              className="inline-block text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
              {t('link')}
            </a>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
