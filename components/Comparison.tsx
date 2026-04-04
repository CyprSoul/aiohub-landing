import { useTranslations } from 'next-intl';

const YES = () => (
  <span className="text-green-500 text-lg font-bold">✓</span>
);
const NO = () => (
  <span className="text-gray-300 text-lg font-bold">✗</span>
);

export default function Comparison() {
  const t = useTranslations('Comparison');

  const rows = [
    { feature: t('inventory'),    aio: true,  jira: false, clickup: false },
    { feature: t('wiki'),         aio: true,  jira: false, clickup: true  },
    { feature: t('analytics'),    aio: true,  jira: true,  clickup: true  },
    { feature: t('darkTheme'),    aio: true,  jira: true,  clickup: true  },
    { feature: t('timeTracking'), aio: true,  jira: false, clickup: true  },
    {
      feature: t('price'),
      aioText: t('aioPrice'),
      jiraText: t('jiraPrice'),
      clickupText: t('clickupPrice'),
    },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t('title')}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full min-w-[480px] bg-white">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-gray-500 font-medium text-sm">
                  {t('feature')}
                </th>
                <th className="px-6 py-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-blue-600 font-bold text-base">AIOHub</span>
                    <span className="text-xs text-blue-400 font-medium">наш сервіс</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-semibold">
                  Jira
                </th>
                <th className="px-6 py-4 text-center text-gray-600 font-semibold">
                  ClickUp
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-50 ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}
                >
                  <td className="px-6 py-4 text-gray-700 font-medium text-sm">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50/40">
                    {row.aioText ? (
                      <span className="text-blue-600 font-bold text-sm">
                        {row.aioText}
                      </span>
                    ) : row.aio ? (
                      <YES />
                    ) : (
                      <NO />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.jiraText ? (
                      <span className="text-gray-600 text-sm">{row.jiraText}</span>
                    ) : row.jira ? (
                      <YES />
                    ) : (
                      <NO />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.clickupText ? (
                      <span className="text-gray-600 text-sm">{row.clickupText}</span>
                    ) : row.clickup ? (
                      <YES />
                    ) : (
                      <NO />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
