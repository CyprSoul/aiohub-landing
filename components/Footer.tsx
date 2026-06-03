import Image from 'next/image';

const links = {
  'Продукт': [
    { label: 'Модулі', href: '#modules' },
    { label: 'Можливості', href: '#features' },
    { label: 'Ціни', href: '#pricing' },
    { label: 'Roadmap', href: '#roadmap' },
  ],
  'Застосунок': [
    { label: 'Увійти', href: 'https://aiohub.pro/login' },
    { label: 'Реєстрація', href: 'https://aiohub.pro/register' },
    { label: 'Що нового', href: 'https://aiohub.pro/changelog' },
  ],
  'Юридичне': [
    { label: 'Політика конфіденційності', href: 'https://aiohub.pro/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060b16] border-t border-white/5 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.svg" alt="AIOHub" width={28} height={28} />
              <span className="text-white font-bold text-lg">AIOHub</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Операційна система для вашої команди. Задачі, чат, аналітика та ще 11 модулів в одному місці.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">© 2026 AIOHub. Всі права захищені.</p>
          <p className="text-slate-700 text-xs">Made with ♥ in Ukraine</p>
        </div>
      </div>
    </footer>
  );
}
