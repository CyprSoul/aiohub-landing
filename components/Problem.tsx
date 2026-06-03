import SectionFade from './SectionFade';

const capabilities = [
  {
    icon: '🔄',
    title: 'Все синхронізовано',
    desc: 'Задача отримала дедлайн — вона вже в Календарі. Залогований час — вже в Аналітиці. Модулі обмінюються даними автоматично.',
  },
  {
    icon: '🎯',
    title: 'Один контекст для команди',
    desc: 'Обговорення, файли, задачі й рішення — в одному місці. Новий член команди розбирається за годину, не за тиждень.',
  },
  {
    icon: '📊',
    title: 'Повна картина для керівника',
    desc: 'Хто що робить, які дедлайни горять, як завантажена команда — все видно в реальному часі без ручних звітів.',
  },
  {
    icon: '⚡',
    title: 'Старт за 2 хвилини',
    desc: 'Реєстрація, перші задачі, запрошення команди — і ви вже працюєте. Жодних складних налаштувань і тривалого онбордингу.',
  },
];

export default function Problem() {
  return (
    <section className="bg-[#080e1a] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFade anim="up" className="text-center mb-14">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">Як це працює</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Один застосунок — повний робочий процес</h2>
          <p className="mt-3 text-slate-400 text-lg max-w-xl mx-auto">Від задачі до аналітики без переключення між інструментами</p>
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
