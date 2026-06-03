import SectionFade from './SectionFade';

export default function CTA() {
  return (
    <section className="bg-[#060b16] py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionFade anim="zoom">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-[#0d1526] border border-indigo-500/20 rounded-3xl px-8 py-16">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                Ранній доступ відкрито
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Спробуйте AIOHub
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Реєстрація займає хвилину. Всі модулі відкриті. Якщо підійде — будемо раді бачити вашу команду.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://aiohub.pro/register"
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-10 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5">
                  Зареєструватись →
                </a>
                <a href="https://aiohub.pro/login"
                  className="w-full sm:w-auto text-slate-400 hover:text-white font-medium px-8 py-4 rounded-xl text-base border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all">
                  Вже є акаунт? Увійти
                </a>
              </div>
            </div>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
