import SectionFade from './SectionFade';
import { useTranslations } from 'next-intl';

export default function Problem() {
  const t = useTranslations('Problem');

  const capabilities = [
    { icon: '🔄', title: t('c1_title'), desc: t('c1_desc') },
    { icon: '🎯', title: t('c2_title'), desc: t('c2_desc') },
    { icon: '📊', title: t('c3_title'), desc: t('c3_desc') },
    { icon: '⚡', title: t('c4_title'), desc: t('c4_desc') },
  ];

  return (
    <section className="bg-[#080e1a] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFade anim="up" className="text-center mb-14">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">{t('badge')}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('heading')}</h2>
          <p className="mt-3 text-slate-400 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
        </SectionFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {capabilities.map((c, i) => {
            const anims = ['left', 'up', 'up', 'right'] as const;
            return (
              <SectionFade key={i} delay={i * 80} anim={anims[i]}>
                <div className="bg-[#0d1526] border border-white/8 rounded-2xl p-6 h-full hover:border-indigo-500/30 transition-colors">
                  <div className="text-3xl mb-4">{c.icon}</div>
                  <h3 className="text-white font-semibold text-base mb-2">{c.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </SectionFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
