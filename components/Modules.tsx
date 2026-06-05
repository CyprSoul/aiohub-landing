import SectionFade from './SectionFade';
import { useTranslations } from 'next-intl';

export default function Modules() {
  const t = useTranslations('Modules');

  const modules = [
    { icon: '📋', name: t('m1_name'),  desc: t('m1_desc') },
    { icon: '🚀', name: t('m2_name'),  desc: t('m2_desc') },
    { icon: '💬', name: t('m3_name'),  desc: t('m3_desc') },
    { icon: '📅', name: t('m4_name'),  desc: t('m4_desc') },
    { icon: '📈', name: t('m5_name'),  desc: t('m5_desc') },
    { icon: '👥', name: t('m6_name'),  desc: t('m6_desc') },
    { icon: '📁', name: t('m7_name'),  desc: t('m7_desc') },
    { icon: '📖', name: t('m8_name'),  desc: t('m8_desc') },
    { icon: '⏱️', name: t('m9_name'),  desc: t('m9_desc') },
    { icon: '📦', name: t('m10_name'), desc: t('m10_desc') },
    { icon: '💰', name: t('m11_name'), desc: t('m11_desc') },
    { icon: '🔔', name: t('m12_name'), desc: t('m12_desc') },
    { icon: '🔑', name: t('m13_name'), desc: t('m13_desc') },
    { icon: '🛡️', name: t('m14_name'), desc: t('m14_desc') },
  ];

  return (
    <section id="modules" className="bg-[#060b16] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFade anim="up" className="text-center mb-14">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">{t('badge')}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('heading')}</h2>
          <p className="mt-3 text-slate-400 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
        </SectionFade>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {modules.map((m, i) => (
            <SectionFade key={i} delay={i * 35} anim="zoom">
              <div className="bg-[#0d1526] border border-white/6 rounded-xl p-4 flex flex-col items-center text-center h-[108px] justify-center hover:border-indigo-500/30 hover:bg-[#111d35] transition-all group">
                <div className="text-2xl leading-none mb-2 w-8 h-8 flex items-center justify-center">{m.icon}</div>
                <div className="text-white text-sm font-semibold mb-0.5 group-hover:text-indigo-300 transition-colors">{m.name}</div>
                <div className="text-slate-500 text-xs leading-snug">{m.desc}</div>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
