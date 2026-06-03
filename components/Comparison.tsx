import SectionFade from './SectionFade';

const benefits = [
  {
    icon: '🔗',
    title: 'Модулі знають одне про одного',
    desc: 'Дедлайн задачі — це подія в Календарі. Час у задачі — це рядок в Аналітиці. Файл з Чату — це запис у Файлах. Дані течуть самостійно.',
  },
  {
    icon: '🌍',
    title: 'Мультімовність і локалізація',
    desc: 'Інтерфейс кількома мовами, дата і час у вашому часовому поясі, повна підтримка темної теми. Застосунок адаптується до команди, а не навпаки.',
  },
  {
    icon: '🧭',
    title: 'Прозорість для керівника',
    desc: 'Burndown, завантаження команди, активність, аудит дій — все в одному дашборді. Рішення приймаються на основі даних, а не інтуїції.',
  },
  {
    icon: '🛠️',
    title: 'Гнучке налаштування',
    desc: 'Вмикайте тільки потрібні модулі. Налаштовуйте ролі на рівні проєкту. API і вебхуки для інтеграції з вашими існуючими інструментами.',
  },
  {
    icon: '🔐',
    title: 'Безпека і контроль',
    desc: 'Ролі з гранулярними правами, аудит кожної дії, API-ключі з обмеженнями по scope і IP. Ваші дані залишаються під вашим контролем.',
  },
  {
    icon: '🚀',
    title: 'В активній розробці',
    desc: 'AIOHub розвивається разом з вашою командою. Нові модулі, інтеграції і функції — регулярно. Ваш фідбек напряму впливає на roadmap.',
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="bg-[#060b16] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFade anim="up" className="text-center mb-14">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">Як влаштований AIOHub</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Продумано від початку</h2>
          <p className="mt-3 text-slate-400 text-lg">Модулі, які працюють разом, а не просто поруч</p>
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
