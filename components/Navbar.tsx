'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/navigation';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo.svg" alt="AIOHub logo" width={32} height={32} />
            <span className="text-white text-lg font-bold tracking-tight">
              AIOHub
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language switcher */}
            <div className="flex items-center bg-gray-800 rounded-lg p-0.5">
              <Link
                href={pathname}
                locale="uk"
                className={`px-2.5 py-1 rounded-md text-sm font-medium transition-colors ${
                  locale === 'uk'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                UA
              </Link>
              <Link
                href={pathname}
                locale="en"
                className={`px-2.5 py-1 rounded-md text-sm font-medium transition-colors ${
                  locale === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </Link>
            </div>

            {/* Login */}
            <a
              href="https://app.aiohub.app/login"
              className="hidden sm:block text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              {t('login')}
            </a>

            {/* Register */}
            <a
              href="https://app.aiohub.app/register"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-3 sm:px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              <span className="hidden sm:inline">{t('register')}</span>
              <span className="sm:hidden">Старт</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
