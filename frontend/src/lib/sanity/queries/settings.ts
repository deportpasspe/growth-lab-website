import {defineQuery} from 'groq'
import {linkProjection, seoProjection} from '../fragments'

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    _id,
    title,
    whatsapp,
    defaultSeo ${seoProjection},
    nav[] {
      label,
      link ${linkProjection}
    },
    footer {
      tagline,
      links[] {
        label,
        link ${linkProjection}
      }
    }
  }
`)
