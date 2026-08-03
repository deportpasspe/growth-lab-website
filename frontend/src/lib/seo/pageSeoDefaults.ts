import type {Locale} from '../../i18n/routes'
import {SERVICE_SLUGS, SERVICE_TITLES} from '../../modules/servicePageFixtures'

export type SeoCopy = {
  metaTitle: string
  metaDescription: string
  /** Public asset path for OG upload, when available */
  ogImage?: string
}

export type LocalizedSeoCopy = Record<Locale, SeoCopy>

type ServiceKey = keyof typeof SERVICE_SLUGS

/** Singleton pages and site-wide defaults — titles omit “Growth Lab” (Layout adds suffix). */
export const SINGLETON_PAGE_SEO: Record<string, LocalizedSeoCopy> = {
  homePage: {
    es: {
      metaTitle: 'Consultoría de talento y desarrollo organizacional',
      metaDescription:
        'Reclutamiento ejecutivo, clima, cultura, desempeño y liderazgo con diagnóstico accionable. Growth Lab acompaña a empresas en Perú y LATAM.',
      ogImage: '/assets/figma/home/hero.webp',
    },
    en: {
      metaTitle: 'Talent and organizational development consulting',
      metaDescription:
        'Executive search, climate, culture, performance, and leadership with actionable diagnostics. Growth Lab partners with companies in Peru and LATAM.',
      ogImage: '/assets/figma/home/hero.webp',
    },
  },
  aboutPage: {
    es: {
      metaTitle: 'Sobre Growth Lab',
      metaDescription:
        'Consultoría boutique de talento y desarrollo organizacional. Conoce nuestro enfoque, valores y equipo en Perú y la región.',
      ogImage: '/assets/figma/about/hero.webp',
    },
    en: {
      metaTitle: 'About Growth Lab',
      metaDescription:
        'Boutique talent and organizational development consultancy. Meet our approach, values, and team in Peru and the region.',
      ogImage: '/assets/figma/about/hero.webp',
    },
  },
  methodologyPage: {
    es: {
      metaTitle: 'Metodología de consultoría',
      metaDescription:
        'Un método claro para reclutamiento y desarrollo organizacional: diagnóstico riguroso, prioridades accionables y acompañamiento hasta el resultado.',
      ogImage: '/assets/figma/methodology/hero.webp',
    },
    en: {
      metaTitle: 'Consulting methodology',
      metaDescription:
        'A clear method for search and organizational development: rigorous diagnosis, actionable priorities, and support through to results.',
      ogImage: '/assets/figma/methodology/hero.webp',
    },
  },
  recruitmentPage: {
    es: {
      metaTitle: 'Reclutamiento ejecutivo',
      metaDescription:
        'Headhunting ejecutivo con criterio de negocio. Entendemos tu empresa antes de buscar y cerramos procesos con candidatos que encajan.',
      ogImage: '/assets/figma/recruitment/hero.webp',
    },
    en: {
      metaTitle: 'Executive search',
      metaDescription:
        'Executive search with business judgment. We understand your company before we search and close roles with candidates who fit.',
      ogImage: '/assets/figma/recruitment/hero.webp',
    },
  },
  servicesIndexPage: {
    es: {
      metaTitle: 'Servicios de desarrollo organizacional',
      metaDescription:
        'Clima, cultura, gestión del desempeño, potencial y liderazgo. Intervenciones con método para que tu estrategia se ejecute.',
      ogImage: '/assets/figma/services/hero.webp',
    },
    en: {
      metaTitle: 'Organizational development services',
      metaDescription:
        'Climate, culture, performance management, talent mapping, and leadership. Method-driven interventions so strategy executes.',
      ogImage: '/assets/figma/services/hero.webp',
    },
  },
  contactPage: {
    es: {
      metaTitle: 'Contacto',
      metaDescription:
        'Agenda una reunión o solicita un diagnóstico. Cuéntanos tu situación de talento o desarrollo organizacional y vemos el siguiente paso.',
      ogImage: '/assets/figma/contact/hero.webp',
    },
    en: {
      metaTitle: 'Contact',
      metaDescription:
        'Book a meeting or request a diagnostic. Tell us about your talent or organizational development needs and we will find the right next step.',
      ogImage: '/assets/figma/contact/hero.webp',
    },
  },
  thankYouPage: {
    es: {
      metaTitle: 'Gracias por contactarnos',
      metaDescription:
        'Recibimos tu mensaje. El equipo de Growth Lab revisará tu consulta y se pondrá en contacto contigo pronto para coordinar el siguiente paso.',
    },
    en: {
      metaTitle: 'Thank you for reaching out',
      metaDescription:
        'We received your message. The Growth Lab team will review your inquiry and get back to you soon to coordinate the next step.',
    },
  },
  insightsIndexPage: {
    es: {
      metaTitle: 'Insights sobre talento y cultura',
      metaDescription:
        'Artículos y guías sobre reclutamiento ejecutivo, clima, cultura organizacional y liderazgo. Ideas accionables para líderes de RR.HH. y negocio.',
      ogImage: '/assets/figma/insights/hero.webp',
    },
    en: {
      metaTitle: 'Insights on talent and culture',
      metaDescription:
        'Articles and guides on executive search, climate, organizational culture, and leadership. Actionable ideas for HR and business leaders.',
      ogImage: '/assets/figma/insights/hero.webp',
    },
  },
  caseStudiesIndexPage: {
    es: {
      metaTitle: 'Casos de éxito',
      metaDescription:
        'Resultados reales en reclutamiento ejecutivo y desarrollo organizacional. Casos de manufactura, banca, consumo y más.',
      ogImage: '/assets/figma/cases/hero.webp',
    },
    en: {
      metaTitle: 'Case studies',
      metaDescription:
        'Real results in executive search and organizational development. Cases from manufacturing, banking, consumer goods, and more.',
      ogImage: '/assets/figma/cases/hero.webp',
    },
  },
  'legalPage-privacy': {
    es: {
      metaTitle: 'Política de privacidad',
      metaDescription:
        'Política de privacidad y tratamiento de datos personales de Growth Lab Consulting. Conoce cómo recopilamos, usamos y protegemos tu información.',
    },
    en: {
      metaTitle: 'Privacy policy',
      metaDescription:
        'Privacy policy and personal data processing for Growth Lab Consulting. Learn how we collect, use, and protect your information.',
    },
  },
  siteSettings: {
    es: {
      metaTitle: 'Growth Lab Consulting',
      metaDescription:
        'Consultoría de talento y desarrollo organizacional en Perú y LATAM. Reclutamiento ejecutivo, clima, cultura, desempeño y liderazgo.',
      ogImage: '/assets/figma/home/hero.webp',
    },
    en: {
      metaTitle: 'Growth Lab Consulting',
      metaDescription:
        'Talent and organizational development consulting in Peru and LATAM. Executive search, climate, culture, performance, and leadership.',
      ogImage: '/assets/figma/home/hero.webp',
    },
  },
}

const SERVICE_SEO_OVERRIDES: Partial<
  Record<ServiceKey, Partial<Record<Locale, Pick<SeoCopy, 'metaDescription' | 'ogImage'>>>>
> = {
  clima: {
    es: {
      metaDescription:
        'Diagnóstico de clima organizacional con encuesta, focus groups y plan de acción ejecutable. Mide, prioriza e implementa mejoras reales.',
      ogImage: '/assets/figma/services/hero-clima.jpg',
    },
    en: {
      metaDescription:
        'Organizational climate diagnosis with surveys, focus groups, and an executable action plan. Measure, prioritize, and implement real improvement.',
      ogImage: '/assets/figma/services/hero-clima.jpg',
    },
  },
  cultura: {
    es: {
      metaDescription:
        'Transformación cultural con diagnóstico, valores observables y alineación con la estrategia. Cierra la brecha entre cultura declarada y vivida.',
      ogImage: '/assets/figma/services/hero-cultura.jpg',
    },
    en: {
      metaDescription:
        'Culture transformation with diagnosis, observable behaviors, and strategy alignment. Close the gap between declared and lived culture.',
      ogImage: '/assets/figma/services/hero-cultura.jpg',
    },
  },
  gestion: {
    es: {
      metaDescription:
        'Diseño e implementación de gestión del desempeño que los equipos usan: metas claras, feedback continuo y conversaciones que mejoran resultados.',
      ogImage: '/assets/figma/services/hero-gestion.jpg',
    },
    en: {
      metaDescription:
        'Performance management design and implementation teams actually use: clear goals, continuous feedback, and conversations that improve results.',
      ogImage: '/assets/figma/services/hero-gestion.jpg',
    },
  },
  potencial: {
    es: {
      metaDescription:
        'Mapeo de talento y potencial con 9-Box, sucesión y planes de desarrollo para roles críticos. Identifica y prepara a quienes sostienen el negocio.',
      ogImage: '/assets/figma/services/hero-potencial.jpg',
    },
    en: {
      metaDescription:
        'Talent and potential mapping with 9-Box, succession, and development plans for critical roles. Identify and prepare those who sustain the business.',
      ogImage: '/assets/figma/services/hero-potencial.jpg',
    },
  },
  liderazgo: {
    es: {
      metaDescription:
        'Talleres y coaching ejecutivo para líderes que necesitan modelar el cambio. Desarrollo de competencias con impacto en equipos y resultados.',
      ogImage: '/assets/figma/services/hero-liderazgo.jpg',
    },
    en: {
      metaDescription:
        'Workshops and executive coaching for leaders who need to model change. Capability building with impact on teams and results.',
      ogImage: '/assets/figma/services/hero-liderazgo.jpg',
    },
  },
}

/** Insight document IDs → optional SEO copy overrides (meta fields only). */
export const INSIGHT_SEO_OVERRIDES: Partial<Record<string, Partial<LocalizedSeoCopy>>> = {
  'insight-culture-fit': {
    es: {
      metaTitle: 'Lo que suele equivocarse el culture fit',
      metaDescription:
        'Contratar por semejanza no es contratar por contribución. Señales de un culture fit mal usado y cómo evaluar encaje sin clonar al equipo actual.',
    },
    en: {
      metaTitle: 'What culture fit usually gets wrong',
      metaDescription:
        'Hiring for sameness is not hiring for contribution. Signs of misused culture fit and how to assess fit without cloning your current team.',
    },
  },
  'insight-sucesion': {
    es: {
      metaTitle: 'Sucesión sin teatro',
      metaDescription:
        'Señales prácticas de que alguien está listo para el siguiente asiento. Cómo distinguir sucesión real de presentaciones de comité sin sustancia.',
    },
    en: {
      metaTitle: 'Succession without the theater',
      metaDescription:
        'Practical signals someone is ready for the next seat. How to tell real succession from committee slides with no substance behind them.',
    },
  },
  'insight-playbook-hiring': {
    es: {
      metaTitle: 'Playbook de hiring con métricas accionables',
      metaDescription:
        'Define KPIs, arma tu embudo de selección y calcula Time to Hire y Quality of Hire. Guía práctica para medir reclutamiento con criterio de negocio.',
    },
    en: {
      metaTitle: 'Hiring playbook with actionable metrics',
      metaDescription:
        'Define KPIs, build your selection funnel, and calculate Time to Hire and Quality of Hire. A practical guide to measuring recruitment with business judgment.',
    },
  },
}

/** Case study document IDs → SEO copy overrides when fixture summaries are thin. */
export const CASE_STUDY_SEO_OVERRIDES: Partial<Record<string, LocalizedSeoCopy>> = {
  'case-clima-manufactura': {
    es: {
      metaTitle: 'Clima organizacional · Industria y manufactura',
      metaDescription:
        'Caso: rotación de mandos medios al 23% sin causa clara. Diagnóstico de clima y plan de acción que redujo la rotación al 14% en seis meses.',
    },
    en: {
      metaTitle: 'Organizational climate · Manufacturing',
      metaDescription:
        'Case: 23% middle-management turnover with no clear root cause. Climate diagnosis and action plan that cut turnover to 14% in six months.',
    },
  },
  'case-cultura-consumo': {
    es: {
      metaTitle: 'Cultura organizacional · Consumo masivo',
      metaDescription:
        'Caso: fusión de dos unidades con culturas distintas y alta tensión. Intervención cultural que redujo conflictos entre equipos un 40% en cuatro meses.',
    },
    en: {
      metaTitle: 'Organizational culture · Consumer goods',
      metaDescription:
        'Case: merger of two units with distinct cultures and high tension. Culture intervention that cut team conflicts by 40% in four months.',
    },
  },
  'case-gestion-energia': {
    es: {
      metaTitle: 'Gestión del desempeño · Energía',
      metaDescription:
        'Caso: evaluación anual con baja adopción y sin vínculo estratégico. Rediseño del sistema que llevó la adopción del 45% al 91% en un ciclo.',
    },
    en: {
      metaTitle: 'Performance management · Energy',
      metaDescription:
        'Case: annual reviews with low adoption and no strategic link. System redesign that raised adoption from 45% to 91% in one cycle.',
    },
  },
  'case-potencial-banca': {
    es: {
      metaTitle: 'Potencial y mapeo de talento · Banca',
      metaDescription:
        'Caso: dependencia de tres líderes clave sin sucesión. Mapeo de potencial y planes que cubrieron dos segundas líneas internamente en ocho meses.',
    },
    en: {
      metaTitle: 'Talent mapping · Banking',
      metaDescription:
        'Case: dependence on three key leaders with no succession. Potential mapping and plans that filled two second-line roles internally in eight months.',
    },
  },
  'case-liderazgo-manufactura': {
    es: {
      metaTitle: 'Liderazgo y coaching · Industria',
      metaDescription:
        'Caso: mandos medios con expertise técnica pero sin competencias de liderazgo. Coaching que subió el NPS interno 22 puntos y redujo rotación 30%.',
    },
    en: {
      metaTitle: 'Leadership and coaching · Manufacturing',
      metaDescription:
        'Case: middle managers with technical depth but weak leadership skills. Coaching that raised internal NPS by 22 points and cut turnover 30%.',
    },
  },
}

export function servicePageSeo(key: ServiceKey): LocalizedSeoCopy {
  const locales: Locale[] = ['es', 'en']
  const out = {} as LocalizedSeoCopy
  for (const locale of locales) {
    const title = SERVICE_TITLES[key][locale]
    const override = SERVICE_SEO_OVERRIDES[key]?.[locale]
    out[locale] = {
      metaTitle: title,
      metaDescription:
        override?.metaDescription ||
        (locale === 'es'
          ? `${title} con diagnóstico accionable y acompañamiento de Growth Lab.`
          : `${title} with actionable diagnosis and support from Growth Lab.`),
      ogImage: override?.ogImage,
    }
  }
  return out
}

export function truncateMetaDescription(text: string, max = 160): string {
  const trimmed = text.replace(/\s+/g, ' ').trim()
  if (trimmed.length <= max) return trimmed
  return `${trimmed.slice(0, max - 1).trimEnd()}…`
}

export function truncateMetaTitle(text: string, max = 60): string {
  const trimmed = text.replace(/\s+/g, ' ').trim()
  if (trimmed.length <= max) return trimmed
  return `${trimmed.slice(0, max - 1).trimEnd()}…`
}
