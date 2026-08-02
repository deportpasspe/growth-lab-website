import {defineQuery} from 'groq'
import {pageBuilderProjection, seoProjection} from '../fragments'

export const homePageQuery = defineQuery(`
  *[_type == "homePage" && language == $locale][0] {
    _id,
    title,
    language,
    seo ${seoProjection},
    pageBuilder[] ${pageBuilderProjection}
  }
`)
