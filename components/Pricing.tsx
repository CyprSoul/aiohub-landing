import SectionFade from './SectionFade';
import { useTranslations } from 'next-intl';

const Check = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2.5 text-sm text-slate-300">
    <svg className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    {text}
  </li>
);

export default function Pricing() {
  const t = useTranslations('Pricing');

  const features = [t('f1'), t('f2'), t('f3'), t('f4'), t('f5'), t('f6')];

  return (
    <section id="pricing" className="bg-[#080e1a] py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFade anim="up" className="text-center mb-12">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">{t('badge')}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('heading')}</h2>
          <p className="mt-3 text-slate-400 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
        </SectionFade>

        <SectionFade anim="zoom">
          <div className="bg-[#0d1526] border border-indigo-500/25 rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  {t('early_access')}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">{t('price')}</span>
                  <span className="text-slate-400">{t('price_note')}</span>
                </div>
              </div>
              <a href="https://aiohub.pro/register"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5 text-center">
                {t('cta')}
              </a>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => <Check key={f} text={f} />)}
            </ul>

            <p className="mt-6 text-xs text-slate-600 text-center">{t('footnote')}</p>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
