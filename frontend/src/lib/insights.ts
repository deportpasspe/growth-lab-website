import type {Locale} from '../i18n/routes'
import {t} from '../i18n'
import {urlFor} from './sanity/image'
import type {SanityImageSource} from '@sanity/image-url'

export type InsightContentType = 'article' | 'guide'

export type InsightAuthor = {
  name?: string
  role?: string
}

export type InsightItem = {
  _id?: string
  title: string
  excerpt?: string
  slug: string
  categories?: string[]
  contentType?: InsightContentType
  publishedAt?: string
  readTimeMinutes?: number
  downloadUrl?: string
  cover?: string | SanityImageSource
  author?: InsightAuthor
}

const GRID_IMAGE_CLASS =
  'inset-x-0 top-[-6%] !h-[112%] !w-full object-cover object-center'

const GRID_IMAGE_FALLBACKS = [
  {
    src: '/assets/figma/home/insight-one.webp',
    className: GRID_IMAGE_CLASS,
  },
  {
    src: '/assets/figma/home/insight-two.webp',
    className: GRID_IMAGE_CLASS,
  },
  {
    src: '/assets/figma/home/insight-three.webp',
    className: GRID_IMAGE_CLASS,
  },
] as const

export function insightContentTypeLabel(
  locale: Locale,
  contentType: InsightContentType = 'article',
): string {
  return contentType === 'guide' ? t(locale, 'insights.guide') : t(locale, 'insights.article')
}

export function insightCtaLabel(
  locale: Locale,
  contentType: InsightContentType = 'article',
): string {
  return contentType === 'guide'
    ? t(locale, 'insights.downloadFree')
    : t(locale, 'insights.readArticle')
}

export function insightCoverUrl(
  cover: string | SanityImageSource | undefined,
  fallback = '/assets/figma/insights/featured.webp',
): string {
  if (!cover) return fallback
  if (typeof cover === 'string') return cover
  return urlFor(cover).width(900).height(600).fit('crop').auto('format').url()
}

export function insightGridImage(index: number) {
  return GRID_IMAGE_FALLBACKS[index % GRID_IMAGE_FALLBACKS.length]
}

export function formatInsightDate(locale: Locale, publishedAt?: string): string {
  if (!publishedAt) return ''
  const date = new Date(publishedAt)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-PE' : 'en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export function formatReadTime(locale: Locale, minutes?: number): string {
  if (!minutes) return ''
  const unit = t(locale, 'insights.readTime')
  return `${minutes} ${unit}`
}
