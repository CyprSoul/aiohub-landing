import Image from 'next/image';
import SectionFade from './SectionFade';
import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('Features');

  const features = [
    {
      tag: t('f1_tag'), title: t('f1_title'), desc: t('f1_desc'),
      bullets: [t('f1_b1'), t('f1_b2'), t('f1_b3'), t('f1_b4')],
      img: '/screenshots/task.png', imgAlt: 'AIOHub Tasks', reverse: false,
    },
    {
      tag: t('f2_tag'), title: t('f2_title'), desc: t('f2_desc'),
      bullets: [t('f2_b1'), t('f2_b2'), t('f2_b3'), t('f2_b4')],
      img: '/screenshots/analytics.png', imgAlt: 'AIOHub Analytics', reverse: true,
    },
    {
      tag: t('f3_tag'), title: t('f3_title'), desc: t('f3_desc'),
      bullets: [t('f3_b1'), t('f3_b2'), t('f3_b3'), t('f3_b4')],
      img: '/screenshots/chat.png', imgAlt: 'AIOHub Chat', reverse: false,
    },
  ];

  return (
    <section id="features" className="bg-[#080e1a] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFade anim="zoom" className="text-center mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">{t('badge')}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('heading')}</h2>
          <p className="mt-3 text-slate-400 text-lg">{t('subtitle')}</p>
        </SectionFade>

        <div className="space-y-24">
          {features.map((f, i) => (
            <div key={i} className={`flex flex-col ${f.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}>
              <SectionFade anim={f.reverse ? 'right' : 'left'} className="flex-1 max-w-xl">
                <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">{f.tag}</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-4">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-2.5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <span className="w-5 h-5 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </SectionFade>

              <SectionFade anim={f.reverse ? 'left' : 'right'} className="flex-1 w-full max-w-2xl">
                <div className="relative">
                  <div className="absolute -inset-3 bg-indigo-500/8 rounded-2xl blur-xl" />
                  <div className="relative bg-[#0d1526] rounded-2xl border border-white/8 overflow-hidden shadow-2xl shadow-black/40">
                    <div className="bg-[#0a1020] px-3 py-2.5 flex items-center gap-2 border-b border-white/5">
                      <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                      </div>
                    </div>
                    <Image src={f.img} alt={f.imgAlt} width={800} height={500} className="w-full h-auto" />
                  </div>
                </div>
              </SectionFade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
