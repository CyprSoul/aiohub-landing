import Image from 'next/image';
import SectionFade from './SectionFade';

const features = [
  {
    tag: 'Завдання і Проєкти',
    title: 'Kanban, спринти, пріоритети — все в одному місці',
    desc: 'Управляйте задачами будь-яким способом: Kanban-дошка, список або беклог. Дедлайни автоматично з\'являються в Календарі. Прогрес проєкту видно на burndown-графіку в Аналітиці.',
    bullets: ['Kanban і беклог', 'Автоматичний burndown', 'Підзадачі і чеклісти', 'Фільтри і пошук'],
    img: '/screenshots/task.png',
    imgAlt: 'AIOHub Tasks',
    reverse: false,
  },
  {
    tag: 'Аналітика',
    title: 'Повна картина без зайвих дашбордів',
    desc: 'Burndown-графіки, завантаження команди, статистика задач — все оновлюється в реальному часі. Більше не потрібно збирати дані з різних джерел вручну.',
    bullets: ['Burndown і velocity', 'Завантаження команди', 'Статистика по статусах', 'Фільтр по тижню / місяцю'],
    img: '/screenshots/analytics.png',
    imgAlt: 'AIOHub Analytics',
    reverse: true,
  },
  {
    tag: 'Чат',
    title: 'Командна комунікація прямо в контексті роботи',
    desc: 'Канали, особисті повідомлення, треди, файли — і все це поряд із задачами. Перетвори будь-яке повідомлення на задачу одним кліком.',
    bullets: ['Канали і DM', 'Треди і відповіді', 'Файли і зображення', 'Статуси присутності'],
    img: '/screenshots/chat.png',
    imgAlt: 'AIOHub Chat',
    reverse: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#080e1a] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFade anim="zoom" className="text-center mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">Функції</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Все що потрібно команді</h2>
          <p className="mt-3 text-slate-400 text-lg">Модулі не ізольовані — вони збагачують один одного</p>
        </SectionFade>

        <div className="space-y-24">
          {features.map((f, i) => (
            <div key={i} className={`flex flex-col ${f.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}>
              {/* Text */}
              <SectionFade anim={f.reverse ? 'right' : 'left'} className="flex-1 max-w-xl">
                <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">
                  {f.tag}
                </div>
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

              {/* Screenshot */}
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
