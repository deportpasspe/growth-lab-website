import {defineLocations} from 'sanity/presentation'
import {localizedPreviewValue} from './lib/localized'

function esTitle(title: Parameters<typeof localizedPreviewValue>[0]) {
  return localizedPreviewValue(title, 'Untitled')
}

function enTitle(title: Parameters<typeof localizedPreviewValue>[0]) {
  if (typeof title === 'string') return title
  if (!Array.isArray(title) || !title.length) return undefined
  const item =
    title.find((v) => v.language === 'en') ??
    title.find((v) => v._key === 'en') ??
    title[0]
  return typeof item?.value === 'string' ? item.value : undefined
}

type LocalizedSlug = {es?: {current?: string}; en?: {current?: string}}

export const presentationLocations = {
  homePage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [
        {title: esTitle(doc?.title) || 'Home', href: '/es/'},
        {title: enTitle(doc?.title) || 'Home', href: '/en/'},
      ],
    }),
  }),
  aboutPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [
        {title: esTitle(doc?.title) || 'Nosotros', href: '/es/nosotros'},
        {title: enTitle(doc?.title) || 'About', href: '/en/about'},
      ],
    }),
  }),
  methodologyPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [
        {title: esTitle(doc?.title) || 'Metodología', href: '/es/metodologia'},
        {title: enTitle(doc?.title) || 'Methodology', href: '/en/methodology'},
      ],
    }),
  }),
  recruitmentPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [
        {title: esTitle(doc?.title) || 'Reclutamiento', href: '/es/reclutamiento'},
        {title: enTitle(doc?.title) || 'Recruitment', href: '/en/recruitment'},
      ],
    }),
  }),
  servicesIndexPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [
        {title: esTitle(doc?.title) || 'Servicios', href: '/es/servicios'},
        {title: enTitle(doc?.title) || 'Services', href: '/en/services'},
      ],
    }),
  }),
  contactPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [
        {title: esTitle(doc?.title) || 'Contacto', href: '/es/contacto'},
        {title: enTitle(doc?.title) || 'Contact', href: '/en/contact'},
      ],
    }),
  }),
  thankYouPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [
        {title: esTitle(doc?.title) || 'Gracias', href: '/es/gracias'},
        {title: enTitle(doc?.title) || 'Thank you', href: '/en/thank-you'},
      ],
    }),
  }),
  insightsIndexPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [
        {title: esTitle(doc?.title) || 'Insights', href: '/es/insights'},
        {title: enTitle(doc?.title) || 'Insights', href: '/en/insights'},
      ],
    }),
  }),
  caseStudiesIndexPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [
        {title: esTitle(doc?.title) || 'Casos', href: '/es/casos-de-exito'},
        {title: enTitle(doc?.title) || 'Case studies', href: '/en/case-studies'},
      ],
    }),
  }),
  siteSettings: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [
        {title: esTitle(doc?.title) || 'Site settings', href: '/es/'},
        {title: enTitle(doc?.title) || 'Site settings', href: '/en/'},
      ],
    }),
  }),
  legalPage: defineLocations({
    select: {title: 'title', slug: 'slug'},
    resolve: (doc) => {
      const slug = doc?.slug as LocalizedSlug | undefined
      const locations = []
      if (slug?.es?.current) {
        locations.push({
          title: esTitle(doc?.title) || 'Legal',
          href: `/es/${slug.es.current}`,
        })
      }
      if (slug?.en?.current) {
        locations.push({
          title: enTitle(doc?.title) || 'Legal',
          href: `/en/${slug.en.current}`,
        })
      }
      return {locations}
    },
  }),
  service: defineLocations({
    select: {title: 'title', slug: 'slug'},
    resolve: (doc) => {
      const slug = doc?.slug as LocalizedSlug | undefined
      const locations = []
      if (slug?.es?.current) {
        locations.push({
          title: esTitle(doc?.title) || 'Servicio',
          href: `/es/servicios/${slug.es.current}`,
        })
      }
      if (slug?.en?.current) {
        locations.push({
          title: enTitle(doc?.title) || 'Service',
          href: `/en/services/${slug.en.current}`,
        })
      }
      return {locations}
    },
  }),
  insight: defineLocations({
    select: {title: 'title', slug: 'slug'},
    resolve: (doc) => {
      const slug = doc?.slug as LocalizedSlug | undefined
      const locations = []
      if (slug?.es?.current) {
        locations.push({
          title: esTitle(doc?.title) || 'Insight',
          href: `/es/insights/${slug.es.current}`,
        })
      }
      if (slug?.en?.current) {
        locations.push({
          title: enTitle(doc?.title) || 'Insight',
          href: `/en/insights/${slug.en.current}`,
        })
      }
      return {locations}
    },
  }),
  caseStudy: defineLocations({
    select: {title: 'title', slug: 'slug'},
    resolve: (doc) => {
      const slug = doc?.slug as LocalizedSlug | undefined
      const locations = []
      if (slug?.es?.current) {
        locations.push({
          title: esTitle(doc?.title) || 'Caso',
          href: `/es/casos-de-exito/${slug.es.current}`,
        })
      }
      if (slug?.en?.current) {
        locations.push({
          title: enTitle(doc?.title) || 'Case',
          href: `/en/case-studies/${slug.en.current}`,
        })
      }
      return {locations}
    },
  }),
}
