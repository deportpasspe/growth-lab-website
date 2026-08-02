import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {documentInternationalization} from '@sanity/document-internationalization'
import {defineDocuments, defineLocations, presentationTool} from 'sanity/presentation'
import {schemaTypes} from './src/schemaTypes'
import {structure} from './src/structure'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:4321'

const i18nTypes = [
  'homePage',
  'aboutPage',
  'methodologyPage',
  'recruitmentPage',
  'servicesIndexPage',
  'contactPage',
  'thankYouPage',
  'legalPage',
  'service',
  'insight',
  'caseStudy',
]

export default defineConfig({
  name: 'growth-lab',
  title: 'Growth Lab',
  projectId,
  dataset,
  plugins: [
    structureTool({structure}),
    presentationTool({
      previewUrl,
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/:locale',
            filter: ({params}) =>
              `_type == "homePage" && language == "${params.locale}"`,
          },
          {
            route: '/:locale/servicios/:slug',
            filter: ({params}) =>
              `_type == "service" && language == "${params.locale}" && slug.current == "${params.slug}"`,
          },
          {
            route: '/:locale/services/:slug',
            filter: ({params}) =>
              `_type == "service" && language == "${params.locale}" && slug.current == "${params.slug}"`,
          },
          {
            route: '/:locale/insights/:slug',
            filter: ({params}) =>
              `_type == "insight" && language == "${params.locale}" && slug.current == "${params.slug}"`,
          },
          {
            route: '/:locale/casos-de-exito/:slug',
            filter: ({params}) =>
              `_type == "caseStudy" && language == "${params.locale}" && slug.current == "${params.slug}"`,
          },
          {
            route: '/:locale/case-studies/:slug',
            filter: ({params}) =>
              `_type == "caseStudy" && language == "${params.locale}" && slug.current == "${params.slug}"`,
          },
          {
            route: '/:locale/metodologia',
            filter: ({params}) =>
              `_type == "methodologyPage" && language == "${params.locale}"`,
          },
          {
            route: '/:locale/methodology',
            filter: ({params}) =>
              `_type == "methodologyPage" && language == "${params.locale}"`,
          },
        ]),
        locations: {
          homePage: defineLocations({
            select: {title: 'title', language: 'language'},
            resolve: (doc) => ({
              locations: doc?.language
                ? [{title: doc.title || 'Home', href: `/${doc.language}/`}]
                : [],
            }),
          }),
          methodologyPage: defineLocations({
            select: {title: 'title', language: 'language'},
            resolve: (doc) => {
              if (!doc?.language) return {locations: []}
              const path = doc.language === 'es' ? 'metodologia' : 'methodology'
              return {
                locations: [
                  {title: doc.title || 'Methodology', href: `/${doc.language}/${path}`},
                ],
              }
            },
          }),
          service: defineLocations({
            select: {title: 'title', slug: 'slug.current', language: 'language'},
            resolve: (doc) => {
              if (!doc?.slug || !doc?.language) return {locations: []}
              const base = doc.language === 'es' ? 'servicios' : 'services'
              return {
                locations: [
                  {title: doc.title || 'Service', href: `/${doc.language}/${base}/${doc.slug}`},
                ],
              }
            },
          }),
          insight: defineLocations({
            select: {title: 'title', slug: 'slug.current', language: 'language'},
            resolve: (doc) =>
              doc?.slug && doc?.language
                ? {
                    locations: [
                      {
                        title: doc.title || 'Insight',
                        href: `/${doc.language}/insights/${doc.slug}`,
                      },
                    ],
                  }
                : {locations: []},
          }),
          caseStudy: defineLocations({
            select: {title: 'title', slug: 'slug.current', language: 'language'},
            resolve: (doc) => {
              if (!doc?.slug || !doc?.language) return {locations: []}
              const base = doc.language === 'es' ? 'casos-de-exito' : 'case-studies'
              return {
                locations: [
                  {title: doc.title || 'Case', href: `/${doc.language}/${base}/${doc.slug}`},
                ],
              }
            },
          }),
        },
      },
    }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'es', title: 'Español'},
        {id: 'en', title: 'English'},
      ],
      schemaTypes: i18nTypes,
    }),
  ],
  schema: {types: schemaTypes},
})
