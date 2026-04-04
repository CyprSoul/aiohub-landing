import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import '../globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Hero' });
  return {
    title: `AIOHub — ${t('title')}`,
    description: t('subtitle'),
    metadataBase: new URL('https://aiohub.app'),
    openGraph: {
      title: `AIOHub — ${t('title')}`,
      description: t('subtitle'),
      siteName: 'AIOHub',
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
