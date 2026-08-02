import {defineQuery} from 'groq'
import {imageProjection, seoProjection} from '../fragments'

export const caseStudiesListQuery = defineQuery(`
  *[_type == "caseStudy" && language == $locale && defined(slug.current)] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    industry,
    service,
    summary,
    challenge,
    result,
    cover ${imageProjection},
    language
  }
`)

export const caseStudyBySlugQuery = defineQuery(`
  *[_type == "caseStudy" && language == $locale && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    industry,
    service,
    summary,
    challengeHeadline,
    challenge,
    interventionHeadline,
    intervention,
    result,
    metrics[] {
      label,
      value,
      icon
    },
    cover ${imageProjection},
    relatedService->{
      _id,
      title,
      "slug": slug.current
    },
    relatedCases[]->{
      _id,
      title,
      "slug": slug.current,
      industry,
      challenge,
      cover ${imageProjection}
    },
    body,
    language,
    seo ${seoProjection}
  }
`)
