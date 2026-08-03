import {
  defaultLocale,
  getLocalizedPath,
  locales,
  type Locale,
  type PathnameKey,
} from '../../i18n/routes'
import {SERVICE_SLUGS} from '../../modules/servicePageFixtures'
import {insightsFixtures} from '../../modules/insightsFixtures'
import {caseStudiesFixtures} from '../../modules/caseStudiesFixtures'
import {absoluteUrl, getSiteUrl} from './siteUrl'

export type SitemapEntry = {
  loc: string
  lastmod?: string
  alternates: Array<{hreflang: string; href: string}>
}

type SlugEntry = {
  slugs?: Partial<Record<Locale, string | null>>
  _updatedAt?: string
  publishedAt?: string
}

const STATIC_INDEX_KEYS: PathnameKey[] = [
  'home',
  'services',
  'recruitment',
  'about',
  'methodology',
  'insights',
  'caseStudies',
  'contact',
  'privacy',
]

function buildAlternates(buildPath: (locale: Locale) => string | null, siteUrl: string) {
  const alternates: SitemapEntry['alternates'] = []
  for (const locale of locales) {
    const path = buildPath(locale)
    if (!path) continue
    alternates.push({hreflang: locale, href: absoluteUrl(path, siteUrl)})
  }
  const defaultPath = buildPath(defaultLocale)
  if (defaultPath) {
    alternates.push({hreflang: 'x-default', href: absoluteUrl(defaultPath, siteUrl)})
  }
  return alternates
}

function entryForPaths(
  buildPath: (locale: Locale) => string | null,
  siteUrl: string,
  lastmod?: string,
): SitemapEntry[] {
  const entries: SitemapEntry[] = []
  for (const locale of locales) {
    const path = buildPath(locale)
    if (!path) continue
    entries.push({
      loc: absoluteUrl(path, siteUrl),
      lastmod,
      alternates: buildAlternates(buildPath, siteUrl),
    })
  }
  return entries
}

function cmsSlugEntries(
  routeKey: PathnameKey,
  items: SlugEntry[] | undefined,
  siteUrl: string,
): SitemapEntry[] {
  if (!items?.length) return []
  const entries: SitemapEntry[] = []

  for (const item of items) {
    const buildPath = (locale: Locale) => {
      const slug = item.slugs?.[locale]
      return slug ? getLocalizedPath(locale, routeKey, slug) : null
    }
    const lastmod = item.publishedAt || item._updatedAt
    entries.push(...entryForPaths(buildPath, siteUrl, lastmod))
  }
  return entries
}

function fixtureServiceEntries(siteUrl: string): SitemapEntry[] {
  const entries: SitemapEntry[] = []
  for (const slugs of Object.values(SERVICE_SLUGS)) {
    const buildPath = (locale: Locale) => getLocalizedPath(locale, 'service', slugs[locale])
    entries.push(...entryForPaths(buildPath, siteUrl))
  }
  return entries
}

function fixtureInsightEntries(siteUrl: string): SitemapEntry[] {
  const seen = new Set<string>()
  const entries: SitemapEntry[] = []

  for (const locale of locales) {
    for (const item of insightsFixtures(locale)) {
      const key = `${locale}:${item.slug}`
      if (seen.has(key)) continue
      seen.add(key)
      const buildPath = (loc: Locale) => {
        const match = insightsFixtures(loc).find((i) => i.slug === item.slug)
        if (match) return getLocalizedPath(loc, 'insight', match.slug)
        return loc === locale ? getLocalizedPath(loc, 'insight', item.slug) : null
      }
      entries.push(...entryForPaths(buildPath, siteUrl, item.publishedAt))
    }
  }
  return entries
}

function fixtureCaseStudyEntries(siteUrl: string): SitemapEntry[] {
  const entries: SitemapEntry[] = []
  for (const locale of locales) {
    for (const item of caseStudiesFixtures(locale)) {
      const buildPath = (loc: Locale) => {
        const match = caseStudiesFixtures(loc).find((c) => c.title === item.title)
        return match ? getLocalizedPath(loc, 'caseStudy', match.slug) : null
      }
      entries.push(...entryForPaths(buildPath, siteUrl))
    }
  }
  return entries
}

export type SitemapData = {
  services?: SlugEntry[]
  insights?: SlugEntry[]
  caseStudies?: SlugEntry[]
  legalPages?: SlugEntry[]
}

export function buildSitemapEntries(data: SitemapData | null, siteUrl?: string): SitemapEntry[] {
  const origin = siteUrl ?? getSiteUrl()
  const entries: SitemapEntry[] = []
  const seen = new Set<string>()

  const add = (items: SitemapEntry[]) => {
    for (const item of items) {
      if (seen.has(item.loc)) continue
      seen.add(item.loc)
      entries.push(item)
    }
  }

  for (const key of STATIC_INDEX_KEYS) {
    add(
      entryForPaths(
        (locale) => getLocalizedPath(locale, key),
        origin,
      ),
    )
  }

  const cmsServices = cmsSlugEntries('service', data?.services, origin)
  add(cmsServices.length ? cmsServices : fixtureServiceEntries(origin))

  const cmsInsights = cmsSlugEntries('insight', data?.insights, origin)
  add(cmsInsights.length ? cmsInsights : fixtureInsightEntries(origin))

  const cmsCases = cmsSlugEntries('caseStudy', data?.caseStudies, origin)
  add(cmsCases.length ? cmsCases : fixtureCaseStudyEntries(origin))

  add(cmsSlugEntries('privacy', data?.legalPages, origin))

  return entries
}

export function renderSitemapXml(entries: SitemapEntry[]): string {
  const urlNodes = entries
    .map((entry) => {
      const alternates = entry.alternates
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}" />`,
        )
        .join('\n')
      const lastmod = entry.lastmod
        ? `\n    <lastmod>${new Date(entry.lastmod).toISOString()}</lastmod>`
        : ''
      return `  <url>
    <loc>${escapeXml(entry.loc)}</loc>${lastmod}
${alternates}
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlNodes}
</urlset>`
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
