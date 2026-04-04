import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('Features');

  const features = [
    {
      icon: '🔗',
      title: t('f1_title'),
      desc: t('f1_desc'),
      color: 'from-blue-500/10 to-blue-600/5 border-blue-500/20',
      iconBg: 'bg-blue-100',
    },
    {
      icon: '⚡',
      title: t('f2_title'),
      desc: t('f2_desc'),
      color: 'from-green-500/10 to-green-600/5 border-green-500/20',
      iconBg: 'bg-green-100',
    },
    {
      icon: '📈',
      title: t('f3_title'),
      desc: t('f3_desc'),
      color: 'from-purple-500/10 to-purple-600/5 border-purple-500/20',
      iconBg: 'bg-purple-100',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t('title')}
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">
            Дані в AIOHub не ізольовані — кожен модуль збагачує інший
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 bg-gradient-to-br ${f.color} border text-center`}
            >
              <div className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
