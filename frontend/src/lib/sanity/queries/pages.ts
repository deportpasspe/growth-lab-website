import {defineQuery} from 'groq'
import {pageBuilderProjection, seoProjection} from '../fragments'

export const aboutPageQuery = defineQuery(`
  *[_type == "aboutPage" && language == $locale][0] {
    _id,
    title,
    language,
    seo ${seoProjection},
    pageBuilder[] ${pageBuilderProjection}
  }
`)

export const methodologyPageQuery = defineQuery(`
  *[_type == "methodologyPage" && language == $locale][0] {
    _id,
    title,
    language,
    seo ${seoProjection},
    pageBuilder[] ${pageBuilderProjection}
  }
`)

export const recruitmentPageQuery = defineQuery(`
  *[_type == "recruitmentPage" && language == $locale][0] {
    _id,
    title,
    intro,
    language,
    seo ${seoProjection},
    pageBuilder[] ${pageBuilderProjection}
  }
`)

export const servicesIndexPageQuery = defineQuery(`
  *[_type == "servicesIndexPage" && language == $locale][0] {
    _id,
    title,
    intro,
    language,
    seo ${seoProjection},
    pageBuilder[] ${pageBuilderProjection}
  }
`)

export const contactPageQuery = defineQuery(`
  *[_type == "contactPage" && language == $locale][0] {
    _id,
    title,
    intro,
    language,
    seo ${seoProjection}
  }
`)

export const thankYouPageQuery = defineQuery(`
  *[_type == "thankYouPage" && language == $locale][0] {
    _id,
    title,
    message,
    language,
    seo ${seoProjection}
  }
`)

export const legalPageBySlugQuery = defineQuery(`
  *[_type == "legalPage" && language == $locale && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    body,
    language,
    seo ${seoProjection}
  }
`)
