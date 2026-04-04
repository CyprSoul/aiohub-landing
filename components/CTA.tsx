import { useTranslations } from 'next-intl';

export default function CTA() {
  const t = useTranslations('CTA');

  return (
    <section className="bg-blue-600 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          {t('title')}
        </h2>
        <p className="mt-4 text-blue-100 text-lg">{t('subtext')}</p>
        <a
          href="https://app.aiohub.app/register"
          className="mt-8 inline-block bg-white hover:bg-blue-50 text-blue-600 font-bold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  );
}
