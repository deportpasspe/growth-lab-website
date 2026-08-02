import {defineQuery} from 'groq'
import {pageBuilderProjection, seoProjection} from '../fragments'

export const servicesIndexQuery = defineQuery(`
  *[_type == "servicesIndexPage" && language == $locale][0] {
    _id,
    title,
    intro,
    language,
    seo ${seoProjection}
  }
`)

export const servicesListQuery = defineQuery(`
  *[_type == "service" && language == $locale && defined(slug.current)] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    language
  }
`)

export const serviceBySlugQuery = defineQuery(`
  *[_type == "service" && language == $locale && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    pageBuilder[] ${pageBuilderProjection},
    language,
    seo ${seoProjection}
  }
`)
