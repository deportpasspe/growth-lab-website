import type {StructureResolver} from 'sanity/structure'

const singletonTitles: Record<string, string> = {
  homePage: 'Home',
  aboutPage: 'Nosotros',
  methodologyPage: 'Metodología',
  recruitmentPage: 'Reclutamiento',
  servicesIndexPage: 'Servicios (índice)',
  insightsIndexPage: 'Insights (índice)',
  caseStudiesIndexPage: 'Casos (índice)',
  contactPage: 'Contacto',
  thankYouPage: 'Gracias',
  siteSettings: 'Site settings',
}

function singletonItem(S: Parameters<StructureResolver>[0], typeName: string) {
  return S.listItem()
    .id(typeName)
    .title(singletonTitles[typeName] || typeName)
    .child(
      S.document().schemaType(typeName).documentId(typeName).title(singletonTitles[typeName] || typeName),
    )
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Growth Lab')
    .items([
      S.listItem()
        .id('paginas')
        .title('Páginas')
        .child(
          S.list()
            .title('Páginas')
            .items([
              singletonItem(S, 'homePage'),
              singletonItem(S, 'aboutPage'),
              singletonItem(S, 'methodologyPage'),
              singletonItem(S, 'recruitmentPage'),
              singletonItem(S, 'servicesIndexPage'),
              singletonItem(S, 'insightsIndexPage'),
              singletonItem(S, 'caseStudiesIndexPage'),
              singletonItem(S, 'contactPage'),
              singletonItem(S, 'thankYouPage'),
              S.documentTypeListItem('legalPage').title('Legales'),
            ]),
        ),
      S.listItem()
        .id('colecciones')
        .title('Colecciones')
        .child(
          S.list()
            .title('Colecciones')
            .items([
              S.documentTypeListItem('service').title('Servicios'),
              S.documentTypeListItem('insight').title('Insights'),
              S.documentTypeListItem('caseStudy').title('Casos de éxito'),
            ]),
        ),
      S.divider(),
      singletonItem(S, 'siteSettings'),
    ])
