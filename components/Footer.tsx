import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/logo.svg" alt="AIOHub logo" width={28} height={28} />
              <span className="text-white font-bold text-lg">AIOHub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t('description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('product')}</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://app.aiohub.app" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t('product')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t('pricing')}
                </a>
              </li>
              <li>
                <a href="https://app.aiohub.app/docs" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t('docs')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t('terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm text-center">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
