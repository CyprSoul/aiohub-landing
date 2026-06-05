import SectionFade from './SectionFade';
import { useTranslations } from 'next-intl';

export default function Comparison() {
  const t = useTranslations('Comparison');

  const benefits = [
    { icon: '🔗', title: t('b1_title'), desc: t('b1_desc') },
    { icon: '🌍', title: t('b2_title'), desc: t('b2_desc') },
    { icon: '🧭', title: t('b3_title'), desc: t('b3_desc') },
    { icon: '🛠️', title: t('b4_title'), desc: t('b4_desc') },
    { icon: '🔐', title: t('b5_title'), desc: t('b5_desc') },
    { icon: '🚀', title: t('b6_title'), desc: t('b6_desc') },
  ];

  return (
    <section id="comparison" className="bg-[#060b16] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFade anim="up" className="text-center mb-14">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">{t('badge')}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('heading')}</h2>
          <p className="mt-3 text-slate-400 text-lg">{t('subtitle')}</p>
        </SectionFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {benefits.map((b, i) => {
            const anims = ['left', 'up', 'right', 'left', 'up', 'right'] as const;
            return (
              <SectionFade key={i} delay={i * 60} anim={anims[i]}>
                <div className="bg-[#0d1526] border border-white/6 rounded-2xl p-6 h-full hover:border-indigo-500/25 hover:bg-[#111d35] transition-all">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </SectionFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
