import { useTranslations } from 'next-intl';

const moduleIcons = [
  { emoji: '📋', color: 'bg-blue-100 text-blue-600' },
  { emoji: '📁', color: 'bg-purple-100 text-purple-600' },
  { emoji: '📅', color: 'bg-green-100 text-green-600' },
  { emoji: '📊', color: 'bg-orange-100 text-orange-600' },
  { emoji: '🖥️', color: 'bg-cyan-100 text-cyan-600' },
  { emoji: '⏱️', color: 'bg-pink-100 text-pink-600' },
];

export default function Solution() {
  const t = useTranslations('Solution');

  const modules = [
    { ...moduleIcons[0], title: t('m1_title'), desc: t('m1_desc') },
    { ...moduleIcons[1], title: t('m2_title'), desc: t('m2_desc') },
    { ...moduleIcons[2], title: t('m3_title'), desc: t('m3_desc') },
    { ...moduleIcons[3], title: t('m4_title'), desc: t('m4_desc') },
    { ...moduleIcons[4], title: t('m5_title'), desc: t('m5_desc') },
    { ...moduleIcons[5], title: t('m6_title'), desc: t('m6_desc') },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t('title')}
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            Шість потужних модулів, що працюють як єдина система
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${mod.color} flex items-center justify-center text-2xl mb-4`}>
                {mod.emoji}
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-1">
                {mod.title}
              </h3>
              <p className="text-gray-500 text-sm">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
