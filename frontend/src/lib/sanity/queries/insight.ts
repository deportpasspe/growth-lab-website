import {defineQuery} from 'groq'
import {imageProjection, seoProjection} from '../fragments'

export const insightsListQuery = defineQuery(`
  *[_type == "insight" && language == $locale && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    contentType,
    categories,
    publishedAt,
    readTimeMinutes,
    downloadUrl,
    cover ${imageProjection},
    language
  }
`)

export const insightBySlugQuery = defineQuery(`
  *[_type == "insight" && language == $locale && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    contentType,
    categories,
    publishedAt,
    readTimeMinutes,
    downloadUrl,
    author,
    cover ${imageProjection},
    body,
    related[]->{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      contentType,
      categories,
      downloadUrl,
      cover ${imageProjection}
    },
    language,
    seo ${seoProjection}
  }
`)
