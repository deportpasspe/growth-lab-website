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
        ? 'We saw a market where talent consultancies did one of two things: sent CVs without judgment or delivered diagnostics nobody executed. We created Growth Lab to do it differently. A boutique consultancy that understands your business before searching, stays until results show, and builds long-term relationships with the companies that trust us.'
        : 'Vimos un mercado donde las consultoras de talento hacían una de dos cosas: mandaban CVs sin criterio o entregaban diagnósticos que nadie ejecutaba. Creamos Growth Lab para hacerlo distinto. Una consultora boutique que entiende tu negocio antes de buscar, que se queda hasta ver resultados y que construye relaciones de largo plazo con las empresas que confían en nosotros.',
      purposeTitle: isEn ? 'Our purpose.' : 'Nuestro propósito.',
      purposeBody: isEn
        ? 'Grow organizations through the talent they truly need.'
        : 'Hacer crecer organizaciones a través del talento que realmente necesitan.',
      image: '/assets/figma/about/story.webp',
    },
    {
      _type: 'contentCards',
      _key: 'values',
      variant: 'values',
      heading: isEn ? 'How we work' : 'Así trabajamos',
      cards: [
        {
          title: isEn
            ? 'Agility with judgment, before speed'
            : 'Agilidad con criterio, antes que velocidad',
          description: isEn
            ? 'We move fast, but not blindly. Every step has a why, so we get it right the first time.'
            : 'Nos movemos rápido, pero no a ciegas. Cada paso tiene un porqué, para acertar a la primera.',
          icon: 'calendar',
        },
        {
          title: isEn ? 'Diagnosis before solution' : 'Diagnóstico antes que solución',
          description: isEn
            ? 'We propose nothing without understanding first. The solution comes from your problem, not from a catalog.'
            : 'No proponemos nada sin entender primero. La solución sale de tu problema, no de un catálogo.',
          icon: 'planning',
        },
        {
          title: isEn ? 'Real accountability' : 'Accountability real',
          description: isEn
            ? 'If something does not work, we say so upfront and fix it. Problems are not hidden — they are solved.'
            : 'Si algo no funciona, lo decimos de frente y lo corregimos. Los problemas no se esconden, se resuelven.',
          icon: 'money',
        },
        {
          title: isEn ? 'Long-term relationships' : 'Relaciones de largo plazo',
          description: isEn
            ? 'We are not looking for one-off projects. We want to be the partner you call every time your team grows.'
            : 'No buscamos proyectos sueltos. Queremos ser el partner al que llamas cada vez que tu equipo crece.',
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
      mapImage: '/assets/figma/about/map-dots.svg',
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
