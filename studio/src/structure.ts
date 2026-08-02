import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Growth Lab')
    .items([
      S.listItem()
        .title('Páginas')
        .child(
          S.list()
            .title('Páginas')
            .items([
              S.documentTypeListItem('homePage').title('Home'),
              S.documentTypeListItem('aboutPage').title('Nosotros'),
              S.documentTypeListItem('methodologyPage').title('Metodología'),
              S.documentTypeListItem('recruitmentPage').title('Reclutamiento'),
              S.documentTypeListItem('servicesIndexPage').title('Servicios (índice)'),
              S.documentTypeListItem('contactPage').title('Contacto'),
              S.documentTypeListItem('thankYouPage').title('Gracias'),
              S.documentTypeListItem('legalPage').title('Legales'),
            ]),
        ),
      S.listItem()
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
      S.listItem()
        .title('Ajustes')
        .child(
          S.list()
            .title('Ajustes')
            .items([
              S.listItem()
                .title('Site settings')
                .id('siteSettings')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            ]),
        ),
    ])
