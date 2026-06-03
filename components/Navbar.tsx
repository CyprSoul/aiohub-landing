'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#080e1a]/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo.svg" alt="AIOHub" width={30} height={30} />
            <span className="text-white text-lg font-bold tracking-tight">AIOHub</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <a href="#features" className="text-slate-400 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all">Функції</a>
            <a href="#modules" className="text-slate-400 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all">Модулі</a>
            <a href="#comparison" className="text-slate-400 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all">Порівняння</a>
            <a href="#pricing" className="text-slate-400 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all">Ціни</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5">
              <Link href={pathname} locale="uk" className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${locale === 'uk' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>UA</Link>
              <Link href={pathname} locale="en" className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${locale === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>EN</Link>
            </div>
            <a href="https://aiohub.pro/login" className="hidden sm:block text-slate-300 hover:text-white text-sm font-medium px-3 py-2 transition-colors">Увійти</a>
            <a href="https://aiohub.pro/register" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/25 whitespace-nowrap">Спробувати</a>
          </div>
        </div>
      </div>
    </header>
  );
}
