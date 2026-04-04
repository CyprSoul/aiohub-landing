import { useTranslations } from 'next-intl';

const icons = ['🗂️', '👁️', '💸', '🔔'];

export default function Problem() {
  const t = useTranslations('Problem');

  const cards = [
    { icon: icons[0], text: t('card1') },
    { icon: icons[1], text: t('card2') },
    { icon: icons[2], text: t('card3') },
    { icon: icons[3], text: t('card4') },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t('title')}
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            Більшість команд щодня стикаються з цими проблемами
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-colors group"
            >
              <div className="text-3xl shrink-0 mt-0.5">{card.icon}</div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
