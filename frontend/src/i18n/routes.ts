export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'es'

export const pathnames = {
  home: {es: '', en: ''},
  services: {es: 'servicios', en: 'services'},
  service: {es: 'servicios', en: 'services'},
  recruitment: {es: 'reclutamiento', en: 'recruitment'},
  about: {es: 'nosotros', en: 'about'},
  methodology: {es: 'metodologia', en: 'methodology'},
  insights: {es: 'insights', en: 'insights'},
  insight: {es: 'insights', en: 'insights'},
  caseStudies: {es: 'casos-de-exito', en: 'case-studies'},
  caseStudy: {es: 'casos-de-exito', en: 'case-studies'},
  contact: {es: 'contacto', en: 'contact'},
  thankYou: {es: 'gracias', en: 'thank-you'},
  privacy: {es: 'politica-de-privacidad', en: 'privacy-policy'},
} as const

export type PathnameKey = keyof typeof pathnames

/** Route keys that accept a trailing slug segment */
export const slugKeys = new Set<PathnameKey>(['service', 'insight', 'caseStudy', 'privacy'])

/** Index-style keys (no slug) that share a segment with a detail key */
export const indexKeys = new Set<PathnameKey>([
  'home',
  'services',
  'recruitment',
  'about',
  'methodology',
  'insights',
  'caseStudies',
  'contact',
  'thankYou',
  'privacy',
])

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getLocalizedPath(
  locale: Locale,
  key: PathnameKey,
  slug?: string,
): string {
  const segment = pathnames[key][locale]
  if (!segment) {
    return slug ? `/${locale}/${slug}` : `/${locale}/`
  }
  if (slug) {
    return `/${locale}/${segment}/${slug}`
  }
  return `/${locale}/${segment}`
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es'
}

/**
 * Path segments after the locale prefix, ignoring stray repeated locale codes
 * (e.g. `/en/en/privacy-policy` → `privacy-policy`).
 */
export function getPathAfterLocale(pathname: string, locale: Locale): string {
  const parts = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)
  const alternate = getAlternateLocale(locale)

  while (parts.length > 0 && (parts[0] === locale || parts[0] === alternate)) {
    parts.shift()
  }

  return parts.join('/')
}

/**
 * If the URL has stray locale segments or a privacy slug in the wrong language,
 * return the canonical localized path to redirect to.
 */
export function getCanonicalRedirectPath(pathname: string, locale: Locale): string | null {
  const rest = getPathAfterLocale(pathname, locale)
  const segments = rest.split('/').filter(Boolean)
  const rawSegments = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)
  const hadStrayLocales = rawSegments.length !== segments.length + 1

  if (segments.length === 0) {
    return hadStrayLocales ? getLocalizedPath(locale, 'home') : null
  }

  const route = resolveRoute(locale, segments)
  if (route.kind !== 'notFound') {
    return hadStrayLocales ? pathnameFromRoute(locale, route) : null
  }

  const [first, second] = segments
  for (const key of Object.keys(pathnames) as PathnameKey[]) {
    for (const loc of locales) {
      if (pathnames[key][loc] !== first) continue
      if (second && slugKeys.has(key)) {
        return getLocalizedPath(locale, key, second)
      }
      if (!second && (indexKeys.has(key) || key === 'privacy')) {
        return getLocalizedPath(locale, key)
      }
    }
  }

  return null
}

function pathnameFromRoute(locale: Locale, route: ResolvedRoute): string {
  switch (route.kind) {
    case 'home':
      return getLocalizedPath(locale, 'home')
    case 'service':
      return getLocalizedPath(locale, 'service', route.slug)
    case 'insight':
      return getLocalizedPath(locale, 'insight', route.slug)
    case 'caseStudy':
      return getLocalizedPath(locale, 'caseStudy', route.slug)
    case 'legal':
      return getLocalizedPath(locale, 'privacy', route.slug)
    default:
      return getLocalizedPath(locale, route.kind as PathnameKey)
  }
}

/**
 * Given the current pathname (without leading locale), return the path in the other locale.
 * Example: ('es', 'servicios/foo') → '/en/services/foo'
 */
export function getAlternateLocalePath(locale: Locale, restPath: string): string {
  const alternate = getAlternateLocale(locale)
  const parts = restPath.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)

  if (parts.length === 0) {
    return getLocalizedPath(alternate, 'home')
  }

  const [first, ...rest] = parts
  const slug = rest[0]

  for (const key of Object.keys(pathnames) as PathnameKey[]) {
    if (pathnames[key][locale] === first) {
      // Prefer index keys when no slug; detail keys when slug present
      if (slug && slugKeys.has(key)) {
        return getLocalizedPath(alternate, key, slug)
      }
      if (!slug && indexKeys.has(key)) {
        return getLocalizedPath(alternate, key)
      }
      if (!slug && slugKeys.has(key)) {
        continue
      }
      if (slug) {
        return getLocalizedPath(alternate, key, slug)
      }
      return getLocalizedPath(alternate, key)
    }
  }

  // Fallback: swap locale prefix only
  return `/${alternate}/${parts.join('/')}`
}

export type ResolvedRoute =
  | {kind: 'home'}
  | {kind: 'services'}
  | {kind: 'service'; slug: string}
  | {kind: 'recruitment'}
  | {kind: 'about'}
  | {kind: 'methodology'}
  | {kind: 'insights'}
  | {kind: 'insight'; slug: string}
  | {kind: 'caseStudies'}
  | {kind: 'caseStudy'; slug: string}
  | {kind: 'contact'}
  | {kind: 'thankYou'}
  | {kind: 'privacy'; slug?: string}
  | {kind: 'legal'; slug: string}
  | {kind: 'notFound'}

/**
 * Resolve path segments (after locale) to a route kind using the pathnames registry.
 */
export function resolveRoute(locale: Locale, segments: string[]): ResolvedRoute {
  if (segments.length === 0) return {kind: 'home'}

  const [first, second] = segments

  const matchKey = (key: PathnameKey) => pathnames[key][locale] === first

  if (matchKey('services') || matchKey('service')) {
    if (second) return {kind: 'service', slug: second}
    return {kind: 'services'}
  }
  if (matchKey('recruitment')) return {kind: 'recruitment'}
  if (matchKey('about')) return {kind: 'about'}
  if (matchKey('methodology')) return {kind: 'methodology'}
  if (matchKey('insights') || matchKey('insight')) {
    if (second) return {kind: 'insight', slug: second}
    return {kind: 'insights'}
  }
  if (matchKey('caseStudies') || matchKey('caseStudy')) {
    if (second) return {kind: 'caseStudy', slug: second}
    return {kind: 'caseStudies'}
  }
  if (matchKey('contact')) return {kind: 'contact'}
  if (matchKey('thankYou')) return {kind: 'thankYou'}
  if (matchKey('privacy')) {
    return second ? {kind: 'legal', slug: second} : {kind: 'privacy'}
  }

  return {kind: 'notFound'}
}
