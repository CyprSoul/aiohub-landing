import SectionFade from './SectionFade';

const features = [
  'Всі 14 модулів без обмежень',
  'Необмежена кількість користувачів',
  'Необмежене сховище файлів',
  'Реальний час, чат, сповіщення',
  'Аналітика, HR, аудит лог',
  'Оновлення кожного тижня',
];

const Check = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2.5 text-sm text-slate-300">
    <svg className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    {text}
  </li>
);

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#080e1a] py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFade anim="up" className="text-center mb-12">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">Ціни</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Зараз — безкоштовно</h2>
          <p className="mt-3 text-slate-400 text-lg max-w-xl mx-auto">
            AIOHub на стадії раннього доступу. Всі функції відкриті повністю — поки ми будуємо продукт разом з першими користувачами.
          </p>
        </SectionFade>

        <SectionFade anim="zoom">
          <div className="bg-[#0d1526] border border-indigo-500/25 rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Ранній доступ
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <span className="text-slate-400">/ назавжди поки в Early Access</span>
                </div>
              </div>
              <a href="https://aiohub.pro/register"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5 text-center">
                Зареєструватись →
              </a>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => <Check key={f} text={f} />)}
            </ul>

            <p className="mt-6 text-xs text-slate-600 text-center">
              У майбутньому з'являться платні плани з розширеними можливостями. Поточні користувачі отримають спеціальні умови.
            </p>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
