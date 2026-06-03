import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#080e1a] flex items-center pt-16 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col items-center text-center mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
            14 модулів · Один застосунок
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 max-w-4xl">
            <span className="text-white">Все для вашої команди</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              в одному місці
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
            Задачі, проєкти, чат, аналітика, HR, файли та інші модулі —
            зібрані в одному застосунку, який працює так, як зручно вашій команді.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="https://aiohub.pro/register"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5">
              Спробувати безкоштовно →
            </a>
            <a href="#modules"
              className="w-full sm:w-auto text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl text-base border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all">
              Переглянути модулі
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">Реєстрація займає хвилину · Безкоштовно</p>
        </div>

        {/* Screenshot */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow behind screenshot */}
          <div className="absolute -inset-4 bg-indigo-500/10 rounded-2xl blur-2xl" />

          {/* Browser frame */}
          <div className="relative bg-[#0d1526] rounded-2xl border border-white/10 shadow-2xl shadow-black/60 overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-[#0a1020] px-4 py-3 flex items-center gap-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 bg-white/5 rounded-md py-1 px-3 text-slate-500 text-xs text-center max-w-xs mx-auto">
                aiohub.pro
              </div>
            </div>
            <Image
              src="/screenshots/dashboard-dark.png"
              alt="AIOHub Dashboard"
              width={1200}
              height={720}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-14">
          {[
            { val: '14', label: 'модулів' },
            { val: '100%', label: 'безкоштовно зараз' },
            { val: '🇺🇦', label: 'зроблено в Україні' },
          ].map((s) => (
            <div key={s.val} className="text-center">
              <div className="text-2xl font-bold text-white">{s.val}</div>
              <div className="text-sm text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
