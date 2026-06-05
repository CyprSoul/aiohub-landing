import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  const links = {
    [t('col1')]: [
      { label: t('modules'),  href: '#modules' },
      { label: t('features'), href: '#features' },
      { label: t('pricing'),  href: '#pricing' },
      { label: t('roadmap'),  href: '#roadmap' },
    ],
    [t('col2')]: [
      { label: t('login'),     href: 'https://aiohub.pro/login' },
      { label: t('register'),  href: 'https://aiohub.pro/register' },
      { label: t('whats_new'), href: 'https://aiohub.pro/changelog' },
    ],
    [t('col3')]: [
      { label: t('privacy'), href: 'https://aiohub.pro/privacy' },
    ],
  };

  return (
    <footer className="bg-[#060b16] border-t border-white/5 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.svg" alt="AIOHub" width={28} height={28} />
              <span className="text-white font-bold text-lg">AIOHub</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{t('brand_desc')}</p>
          </div>

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
          <p className="text-slate-600 text-sm">{t('copyright')}</p>
          <p className="text-slate-700 text-xs">{t('made_in')}</p>
        </div>
      </div>
    </footer>
  );
}
