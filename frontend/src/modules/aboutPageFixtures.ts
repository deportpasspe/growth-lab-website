import type {Locale} from '../i18n/routes'
import {getLocalizedPath} from '../i18n/routes'
import type {PageSection} from './fixtures'

export function aboutFixtures(locale: Locale): PageSection[] {
  const isEn = locale === 'en'
  const contactHref = getLocalizedPath(locale, 'contact')
  const caseStudiesHref = getLocalizedPath(locale, 'caseStudies')

  return [
    {
      _type: 'hero',
      _key: 'hero',
      variant: 'about',
      eyebrow: isEn ? 'About us' : 'Nosotros',
      heading: isEn
        ? 'We help companies grow through talent.'
        : 'Hacemos crecer empresas a través del talento.',
      subheading: isEn
        ? 'With methodology, judgment, and real partnership. No canned recipes or valueless intermediation.'
        : 'Con método, con criterio y con acompañamiento real. Sin recetas enlatadas ni intermediación sin valor.',
      image: '/assets/figma/about/hero.webp',
    },
    {
      _type: 'aboutStory',
      _key: 'story',
      heading: isEn ? 'Why Growth Lab exists.' : 'Por qué existe Growth Lab.',
      body: isEn
        ? 'We saw a market where talent consultancies did one of two things: sent CVs without criteria or delivered diagnostics nobody executed. We created Growth Lab to do something different — a boutique consultancy that understands the business before searching for a candidate, stays until something changes, and builds long-term relationships with the organizations that trust us.'
        : 'Vimos un mercado donde las consultoras de talento hacían una de dos cosas: enviaban CVs sin criterio o entregaban diagnósticos que nadie ejecutaba. Creamos Growth Lab para hacer algo distinto. Una consultora boutique que entiende el negocio antes de buscar al candidato, que se queda hasta que algo cambia y que construye relaciones de largo plazo con las organizaciones que confían en nosotros.',
      purposeTitle: isEn ? 'Our purpose.' : 'Nuestro propósito.',
      purposeBody: isEn
        ? 'Empower organizational growth by connecting the right people with the right place.'
        : 'Empoderar el crecimiento de las organizaciones conectando a las personas correctas con el lugar correcto.',
      image: '/assets/figma/about/story.webp',
    },
    {
      _type: 'contentCards',
      _key: 'values',
      variant: 'values',
      heading: isEn ? 'How we behave.' : 'Cómo nos comportamos.',
      cards: [
        {
          title: isEn ? 'Judgment before speed' : 'Criterio antes que velocidad',
          description: isEn
            ? 'We would rather take the time needed to recommend well than deliver fast and recommend poorly.'
            : 'Preferimos tomarnos el tiempo necesario para recomendar bien antes que entregar rápido y recomendar mal.',
          icon: 'calendar',
        },
        {
          title: isEn ? 'Diagnosis before solution' : 'Diagnóstico antes que solución',
          description: isEn
            ? 'We propose nothing without understanding first. Every intervention starts from the organization’s reality.'
            : 'No proponemos nada sin entender primero. Cada intervención parte de la realidad de la organización.',
          icon: 'planning',
        },
        {
          title: isEn ? 'Real accountability' : 'Accountability real',
          description: isEn
            ? 'If something does not work, we say so and fix it. We do not disappear when things get complicated.'
            : 'Si algo no funciona, lo decimos y lo corregimos. No desaparecemos cuando las cosas se complican.',
          icon: 'money',
        },
        {
          title: isEn ? 'Long-term relationships' : 'Relaciones de largo plazo',
          description: isEn
            ? 'We do not sell one-off projects. We build lasting bonds with the organizations we work with.'
            : 'No vendemos proyectos sueltos. Construimos vínculos con las organizaciones que trabajan con nosotros.',
          icon: 'relationship',
        },
      ],
    },
    {
      _type: 'worldMap',
      _key: 'world',
      heading: isEn ? 'The world is small' : 'El mundo es pequeño',
      intro: isEn
        ? 'We have worked with organizations from different parts of the world'
        : 'Hemos trabajado con organizaciones de diferentes partes del mundo',
      markers: [
        {
          countryPreset: 'us',
          country: isEn ? 'United States' : 'Estados unidos',
          organizations: [
            isEn ? 'Organization 1' : 'Organización 1',
            isEn ? 'Organization 2' : 'Organización 2',
            isEn ? 'Organization 3' : 'Organización 3',
          ],
          active: true,
        },
        {
          countryPreset: 'mx',
          country: isEn ? 'Mexico' : 'México',
          organizations: [isEn ? 'Organization 1' : 'Organización 1'],
        },
        {
          countryPreset: 'co',
          country: isEn ? 'Colombia' : 'Colombia',
          organizations: [isEn ? 'Organization 1' : 'Organización 1'],
        },
        {
          countryPreset: 'ec',
          country: isEn ? 'Ecuador' : 'Ecuador',
          organizations: [isEn ? 'Organization 1' : 'Organización 1'],
        },
        {
          countryPreset: 'br',
          country: isEn ? 'Brazil' : 'Brasil',
          organizations: [isEn ? 'Organization 1' : 'Organización 1'],
        },
        {
          countryPreset: 'uy',
          country: isEn ? 'Uruguay' : 'Uruguay',
          organizations: [isEn ? 'Organization 1' : 'Organización 1'],
        },
        {
          countryPreset: 'cl',
          country: isEn ? 'Chile' : 'Chile',
          organizations: [isEn ? 'Organization 1' : 'Organización 1'],
        },
        {
          countryPreset: 'es',
          country: isEn ? 'Spain' : 'España',
          organizations: [isEn ? 'Organization 1' : 'Organización 1'],
        },
        {
          countryPreset: 'it',
          country: isEn ? 'Italy' : 'Italia',
          organizations: [isEn ? 'Organization 1' : 'Organización 1'],
        },
      ],
    },
    {
      _type: 'teamCards',
      _key: 'team',
      heading: isEn ? 'The team behind every process.' : 'El equipo detrás de cada proceso.',
      intro: isEn
        ? 'Direct access to partners on every project. No intermediaries, no juniors executing what a senior sold.'
        : 'Acceso directo a los socios en cada proyecto. Sin intermediarios, sin juniors ejecutando lo que un senior vendió.',
      members: [
        {
          _key: 'member-1',
          name: isEn ? 'First Last' : 'Nombre Apellido',
          role: isEn ? 'Senior Partner' : 'Partner Senior',
          bio: isEn
            ? '15 years in executive search and organizational development. He has led processes for companies in financial services, retail, and technology across Latin America.'
            : '15 años en búsqueda ejecutiva y desarrollo organizacional. Ha liderado procesos para empresas de servicios financieros, retail y tecnología en Latinoamérica.',
          photo: '/assets/figma/about/team-member.webp',
          linkedInUrl: 'https://www.linkedin.com/',
        },
        {
          _key: 'member-2',
          name: isEn ? 'First Last' : 'Nombre Apellido',
          role: isEn ? 'Senior Partner' : 'Partner Senior',
          bio: isEn
            ? '15 years in executive search and organizational development. He has led processes for companies in financial services, retail, and technology across Latin America.'
            : '15 años en búsqueda ejecutiva y desarrollo organizacional. Ha liderado procesos para empresas de servicios financieros, retail y tecnología en Latinoamérica.',
          photo: '/assets/figma/about/team-member.webp',
          linkedInUrl: 'https://www.linkedin.com/',
        },
        {
          _key: 'member-3',
          name: isEn ? 'First Last' : 'Nombre Apellido',
          role: isEn ? 'Senior Partner' : 'Partner Senior',
          bio: isEn
            ? '15 years in executive search and organizational development. He has led processes for companies in financial services, retail, and technology across Latin America.'
            : '15 años en búsqueda ejecutiva y desarrollo organizacional. Ha liderado procesos para empresas de servicios financieros, retail y tecnología en Latinoamérica.',
          photo: '/assets/figma/about/team-member.webp',
          linkedInUrl: 'https://www.linkedin.com/',
        },
        {
          _key: 'member-4',
          name: isEn ? 'First Last' : 'Nombre Apellido',
          role: isEn ? 'Senior Partner' : 'Partner Senior',
          bio: isEn
            ? '15 years in executive search and organizational development. He has led processes for companies in financial services, retail, and technology across Latin America.'
            : '15 años en búsqueda ejecutiva y desarrollo organizacional. Ha liderado procesos para empresas de servicios financieros, retail y tecnología en Latinoamérica.',
          photo: '/assets/figma/about/team-member.webp',
          linkedInUrl: 'https://www.linkedin.com/',
        },
      ],
    },
    {
      _type: 'logoMarquee',
      _key: 'logos',
      title: isEn ? 'Organizations that trust us.' : 'Organizaciones que confían en nosotros.',
      logos: [
        {name: 'Santander'},
        {name: 'Primax'},
        {name: 'ICBC'},
        {name: 'Tasa'},
        {name: 'Andes Corp'},
        {name: 'Norte Salud'},
      ],
    },
    {
      _type: 'ctaBanner',
      _key: 'cta',
      heading: isEn
        ? 'Want to meet the team before you start?'
        : '¿Quieres conocer al equipo antes de arrancar?',
      subheading: isEn
        ? 'One conversation is enough to understand if we are the partner your organization needs.'
        : 'Una conversación es suficiente para entender si somos el socio que tu organización necesita.',
      cta: {label: isEn ? 'Book a meeting' : 'Agenda una reunión', href: contactHref},
      secondaryCta: {
        label: isEn ? 'View case studies' : 'Ver casos de éxito',
        href: caseStudiesHref,
      },
    },
  ]
}
