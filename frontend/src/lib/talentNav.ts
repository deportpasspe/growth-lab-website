import {getLocalizedPath, type Locale} from '../i18n/routes'

const TALENT_SOLUTIONS = [
  {
    es: 'Clima organizacional',
    en: 'Organizational climate',
    slug: {es: 'clima-organizacional', en: 'organizational-climate'},
  },
  {
    es: 'Cultura organizacional',
    en: 'Organizational culture',
    slug: {es: 'cultura-organizacional', en: 'organizational-culture'},
  },
  {
    es: 'Gestión del desempeño',
    en: 'Performance management',
    slug: {es: 'gestion-del-desempeno', en: 'performance-management'},
  },
  {
    es: 'Potencial y mapeo de talento',
    en: 'Talent mapping',
    slug: {es: 'potencial-y-mapeo-de-talento', en: 'talent-mapping'},
  },
  {
    es: 'Liderazgo y coaching',
    en: 'Leadership and coaching',
    slug: {es: 'liderazgo-y-coaching', en: 'leadership-and-coaching'},
  },
] as const

export function talentSolutionNav(locale: Locale) {
  return TALENT_SOLUTIONS.map((item) => ({
    label: item[locale],
    href: getLocalizedPath(locale, 'service', item.slug[locale]),
  }))
}
