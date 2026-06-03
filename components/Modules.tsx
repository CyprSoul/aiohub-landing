import SectionFade from './SectionFade';

const modules = [
  { icon: '📋', name: 'Завдання',    desc: 'Kanban, дедлайни, пріоритети' },
  { icon: '🚀', name: 'Проєкти',     desc: 'Burndown, спринти, ролі' },
  { icon: '💬', name: 'Чат',         desc: 'Канали, DM, треди, файли' },
  { icon: '📅', name: 'Календар',    desc: 'Події, дедлайни, мітинги' },
  { icon: '📈', name: 'Аналітика',   desc: 'Workload, звіти, графіки' },
  { icon: '👥', name: 'HR',          desc: 'Відпустки, команда, профілі' },
  { icon: '📁', name: 'Файли',       desc: 'Сховище, версії, папки' },
  { icon: '📖', name: 'Wiki',        desc: 'Документація, нотатки' },
  { icon: '⏱️', name: 'Облік часу',  desc: 'Трекінг, логи, звіти' },
  { icon: '📦', name: 'Інвентар',    desc: 'Обладнання, ресурси' },
  { icon: '💰', name: 'Фінанси',     desc: 'Витрати, доходи, бюджети' },
  { icon: '🔔', name: 'Нотифікації', desc: 'Real-time, дайджести' },
  { icon: '🔑', name: 'API',         desc: 'Ключі, вебхуки, інтеграції' },
  { icon: '🛡️', name: 'Аудит лог',  desc: 'Дії команди, безпека' },
];

export default function Modules() {
  return (
    <section id="modules" className="bg-[#060b16] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFade anim="up" className="text-center mb-14">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">Модулі</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">14+ модулів. Один застосунок.</h2>
          <p className="mt-3 text-slate-400 text-lg max-w-xl mx-auto">
            Всі інструменти команди в одному місці — і всі вони знають одне про одного
          </p>
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
