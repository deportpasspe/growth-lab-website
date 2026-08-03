import type {Locale} from '../i18n/routes'
import {getLocalizedPath} from '../i18n/routes'
import type {SanityImageSource} from '@sanity/image-url'

export type Cta = {label: string; href: string}
export type ImageSource = SanityImageSource | string
export type ContentCard = {
  _key?: string
  title: string
  description?: string
  items?: string[]
  tone?: 'dark' | 'teal' | 'magenta'
  icon?:
    | ImageSource
    | 'arrow'
    | 'calendar'
    | 'process'
    | 'market'
    | 'marketBrand'
    | 'industryCalendar'
    | 'industryPlanning'
    | 'industryMoney'
    | 'planning'
    | 'money'
    | 'relationship'
  emphasis?: string
  cta?: Cta
}

export type ServiceCatalogItem = {
  _key?: string
  title: string
  description: string
  icon?: 'calendar' | 'planning' | 'money'
  cta?: Cta
}

export type ServiceCategory = {
  _key?: string
  title: string
  summary: string
  cta?: Cta
  image?: ImageSource
  bodyLines?: string[]
  items?: ServiceCatalogItem[]
}

export type PageSection =
  | {_type: 'hero'; _key: string; variant?: 'home' | 'recruitment' | 'services' | 'servicePage' | 'about' | 'methodology' | 'insights'; eyebrow?: string; heading: string; subheading?: string; image?: ImageSource; primaryCta?: Cta; secondaryCta?: Cta}
  | {
      _type: 'aboutStory'
      _key: string
      heading: string
      body: string
      purposeTitle: string
      purposeBody: string
      image?: ImageSource
    }
  | {
      _type: 'worldMap'
      _key: string
      heading: string
      intro?: string
      mapImage?: ImageSource
      markers: {
        _key?: string
        country: string
        organizations: string[]
        countryPreset?: 'us' | 'mx' | 'co' | 'ec' | 'br' | 'uy' | 'cl' | 'es' | 'it' | 'custom'
        flag?: ImageSource
        top?: number
        left?: number
        active?: boolean
      }[]
    }
  | {
      _type: 'teamCards'
      _key: string
      heading: string
      intro?: string
      members: {
        _key?: string
        name: string
        role: string
        bio: string
        photo?: ImageSource
        linkedInUrl?: string
      }[]
    }
  | {_type: 'logoMarquee'; _key: string; title?: string; logos: {name: string; image?: ImageSource}[]}
  | {_type: 'metrics'; _key: string; title?: string; columns?: 3 | 4; items: {value: string; label: string; icon?: 'calendar' | 'process' | 'cost'}[]}
  | {_type: 'serviceSplit'; _key: string; title?: string; intro?: string; cardImages?: ImageSource[]; cards?: {title: string; summary?: string; page?: {_type?: string; slug?: string}}[]; services?: {title: string; summary?: string; slug: string; href?: string}[]}
  | {
      _type: 'methodSteps'
      _key: string
      layout?: 'diagram' | 'grid'
      diagramImage?: ImageSource
      title?: string
      intro?: string
      featuredTitle?: string
      featuredDescription?: string
      showCta?: boolean
      steps: {title: string; description: string}[]
    }
  | {_type: 'caseCards'; _key: string; variant?: 'carousel' | 'featured'; title?: string; intro?: string; showHeader?: boolean; cases: {title: string; summary?: string; industry?: string; slug: string; challenge?: string; intervention?: string; result?: string; cover?: ImageSource}[]}
  | {_type: 'insightCards'; _key: string; title?: string; intro?: string; insights: {title: string; excerpt: string; slug: string; categories: string[]; cover?: ImageSource}[]}
  | {_type: 'faqSection'; _key: string; variant?: 'default' | 'roomy'; title?: string; items: {question: string; answer: string}[]}
  | {_type: 'ctaBanner'; _key: string; variant?: 'default' | 'recruitment' | 'services'; heading: string; subheading?: string; cta?: Cta; secondaryCta?: Cta}
  | {_type: 'contactFormSection'; _key: string; title?: string; intro?: string}
  | {_type: 'narrativeCards'; _key: string; cards: ContentCard[]}
  | {_type: 'contentCards'; _key: string; variant?: 'lists' | 'deliverables' | 'industries' | 'values' | 'principles'; eyebrow?: string; heading: string; intro?: string; cards: ContentCard[]}
  | {_type: 'splitStatement'; _key: string; variant?: 'default' | 'methodIntro' | 'successBanner'; eyebrow?: string; heading: string; body: string; decoration?: 'magentaGlow'; image?: ImageSource}
  | {_type: 'serviceCatalog'; _key: string; categories: ServiceCategory[]}
  | {
      _type: 'processCards'
      _key: string
      id?: string
      heading: string
      layout?:
        | 'accordionRow'
        | 'accordionColumns'
        | 'accordionSplit'
        | 'dualPaths'
        | 'threeEqual'
        | 'threeMixed'
        | 'twoWide'
      steps: {title: string; description?: string}[]
    }
  | {
      _type: 'serviceIncludes'
      _key: string
      heading?: string
      layout?: 'dualColumns' | 'splitImage'
      items: string[]
      secondaryHeading?: string
      secondaryItems?: string[]
      image?: ImageSource
    }
  | {_type: 'relatedServices'; _key: string; heading: string; items: {title: string; description?: string; icon?: 'calendar' | 'planning' | 'money'; href?: string; cta?: Cta}[]}

export function homeFixtures(locale: Locale): PageSection[] {
  if (locale === 'en') {
    return [
      {
        _type: 'hero',
        _key: 'hero',
        heading: 'Strategy with measurable results.',
        subheading:
          'We help companies find, develop, and retain talent—with methodology, judgment, and real partnership.',
        image: '/assets/figma/home/hero.webp',
        primaryCta: {label: 'Book a meeting', href: '/en/contact'},
        secondaryCta: {label: 'View case studies', href: '/en/case-studies'},
      },
      {
        _type: 'logoMarquee',
        _key: 'logos',
        title: 'Trusted by',
        logos: [
          {name: 'Andes Corp'},
          {name: 'Norte Salud'},
          {name: 'Vita Retail'},
          {name: 'Laguna Tech'},
          {name: 'Costa Foods'},
          {name: 'Atlas Energy'},
        ],
      },
      {
        _type: 'metrics',
        _key: 'metrics',
        items: [
          {value: '7 days', label: 'Average shortlist delivery', icon: 'calendar'},
          {value: '+30', label: 'Completed searches', icon: 'process'},
          {value: '−15%', label: 'Cost reduction', icon: 'cost'},
        ],
      },
      {
        _type: 'serviceSplit',
        _key: 'services',
        title: 'Two ways to grow through talent',
        intro: 'We help companies find, develop, and retain it—with methodology, judgment, and real partnership.',
        cardImages: [
          '/assets/figma/home/service-organization.webp',
          '/assets/figma/home/service-recruitment.webp',
        ],
        services: [
          {
            title: 'Executive search',
            summary: 'Confidential searches for leadership roles with calibrated judgment.',
            slug: 'executive-search',
            href: getLocalizedPath('en', 'recruitment'),
          },
          {
            title: 'Organizational development',
            summary: 'Structures, rituals, and capability plans aligned to strategy.',
            slug: 'organizational-development',
            href: getLocalizedPath('en', 'services'),
          },
          {
            title: 'Assessment & succession',
            summary: 'Clear maps of potential, readiness, and development bets.',
            slug: 'assessment-succession',
          },
        ],
      },
      {
        _type: 'methodSteps',
        _key: 'method',
        title: 'A method. Not intuition.',
        intro: '50% of executive hires without a structured methodology fail within the first 18 months. We designed our process so it does not happen to your company.',
        steps: [
          {
            title: 'Diagnose',
            description: 'We clarify the role, context, and constraints before we move.',
          },
          {
            title: 'Design',
            description: 'We co-create the search brief or OD intervention with stakeholders.',
          },
          {
            title: 'Deliver',
            description: 'We execute with rigor, feedback loops, and transparent trade-offs.',
          },
          {
            title: 'Embed',
            description: 'We leave behind practices the team can own after we step back.',
          },
        ],
      },
      {
        _type: 'caseCards',
        _key: 'cases',
        title: 'Cases with tangible impact',
        intro: 'Every project starts from a real business problem. These are some of the results.',
        cases: [
          {
            title: 'Rebuilding a commercial leadership bench',
            summary: 'Three critical hires and a succession map for a regional retailer.',
            industry: 'Retail',
            slug: 'talent-mapping-banking',
          },
          {
            title: 'Scaling people practices for a growth stage',
            summary: 'Performance and feedback systems that kept pace with headcount.',
            industry: 'Technology',
            slug: 'performance-management-energy',
          },
        ],
      },
      {
        _type: 'insightCards',
        _key: 'insights',
        title: 'Insights',
        intro: 'Actionable ideas for HR teams and leaders who want to make better decisions about their people.',
        insights: [
          {
            title: 'What “culture fit” usually gets wrong',
            excerpt: 'Hiring for sameness is not the same as hiring for contribution.',
            slug: 'culture-fit-gets-wrong',
            categories: ['Talent'],
          },
          {
            title: 'Succession without the theater',
            excerpt: 'Practical signals that someone is ready for the next seat.',
            slug: 'succession-without-theater',
            categories: ['Leadership'],
          },
          {
            title: 'From diagnosis to action without losing momentum',
            excerpt: 'Why climate assessments often stall and how to turn findings into visible action.',
            slug: 'organizational-climate-diagnosis-action',
            categories: ['Webinars'],
          },
        ],
      },
      {
        _type: 'ctaBanner',
        _key: 'cta',
        heading: 'Does your organization need talent?',
        subheading: 'Tell us where you are. No commitment—just a conversation to see whether we can help.',
        cta: {label: 'Book a meeting', href: '/en/contact'},
      },
      {
        _type: 'faqSection',
        _key: 'faq',
        title: 'Frequently asked questions',
        items: [
          {question: 'Do you work on one-off projects or ongoing engagements?', answer: 'Both. We define the right format together based on what your organization needs.'},
          {question: 'How do you measure process success?', answer: 'We agree on clear operational and business indicators before starting.'},
          {question: 'Which sectors do you know best?', answer: 'We work across industries and adapt each process to the company context.'},
          {question: 'How does AI affect your selection process?', answer: 'We use technology to accelerate analysis, while keeping human judgment where it matters.'},
          {question: 'Do you work with companies outside Lima?', answer: 'Yes. We support organizations throughout Peru and across Latin America.'},
        ],
      },
    ]
  }

  return [
    {
      _type: 'hero',
      _key: 'hero',
      heading: 'Estrategia con resultados medibles.',
      subheading:
        'Ayudamos a las empresas a encontrarlo, desarrollarlo y retenerlo — con metodología, criterio y acompañamiento real.',
      image: '/assets/figma/home/hero.webp',
      primaryCta: {label: 'Agenda una reunión', href: '/es/contacto'},
      secondaryCta: {label: 'Ver casos de éxito', href: '/es/casos-de-exito'},
    },
    {
      _type: 'logoMarquee',
      _key: 'logos',
      title: 'Quienes confían en nosotros',
      logos: [
        {name: 'Andes Corp'},
        {name: 'Norte Salud'},
        {name: 'Vita Retail'},
        {name: 'Laguna Tech'},
        {name: 'Costa Foods'},
        {name: 'Atlas Energy'},
      ],
    },
    {
      _type: 'metrics',
      _key: 'metrics',
      items: [
        {value: '7 días', label: 'Entrega promedio de shortlist', icon: 'calendar'},
        {value: '+30', label: 'Procesos cerrados', icon: 'process'},
        {value: '−15%', label: 'Reducción de costos', icon: 'cost'},
      ],
    },
    {
      _type: 'serviceSplit',
      _key: 'services',
      title: 'Dos maneras de crecer a través del talento',
      intro: 'Ayudamos a las empresas a encontrarlo, desarrollarlo y retenerlo — con metodología, criterio y acompañamiento real.',
      cardImages: [
        '/assets/figma/home/service-organization.webp',
        '/assets/figma/home/service-recruitment.webp',
      ],
      services: [
        {
          title: 'Reclutamiento ejecutivo',
          summary:
            'Encontramos al candidato que tu organización necesita — no al que está disponible. Nuestro proceso parte por entender tu empresa antes de salir a buscar.',
          slug: 'reclutamiento-ejecutivo',
          href: getLocalizedPath('es', 'recruitment'),
        },
        {
          title: 'Desarrollo organizacional: clima, cultura, desempeño, potencial y liderazgo.',
          summary: 'Intervenimos donde el equipo necesita crecer para que la estrategia pueda ejecutarse.',
          slug: 'desarrollo-organizacional',
          href: getLocalizedPath('es', 'services'),
        },
        {
          title: 'Assessment y sucesión',
          summary: 'Mapas claros de potencial, preparación y apuestas de desarrollo.',
          slug: 'assessment-sucesion',
        },
      ],
    },
    {
      _type: 'methodSteps',
      _key: 'method',
      title: 'Un método. No intuición.',
      intro: 'El 50% de las contrataciones ejecutivas sin metodología estructurada fracasa en los primeros 18 meses. Nosotros lo sabemos y diseñamos nuestro proceso para que eso no le pase a tu empresa.',
      steps: [
        {
          title: 'Diagnóstico exhaustivo',
          description: 'Antes de buscar un candidato, entendemos tu empresa: el momento del negocio, la cultura, el liderazgo y los retos reales del rol.',
        },
        {
          title: 'Evaluación en múltiples capas',
          description: 'Evaluamos experiencia, capacidades y ajuste al contexto.',
        },
        {
          title: 'Recomendaciones con criterio',
          description: 'Presentamos evidencia y una recomendación clara.',
        },
        {
          title: 'Seguimiento real',
          description: 'Acompañamos la incorporación y el aterrizaje.',
        },
      ],
    },
    {
      _type: 'caseCards',
      _key: 'cases',
      title: 'Casos con impacto tangible',
      intro: 'Cada proyecto parte de un problema real. Estos son algunos resultados.',
      cases: [
        {
          title: 'Reconstruir la banca comercial de liderazgo',
          summary:
            'Tres contrataciones críticas y un mapa de sucesión para un retailer regional.',
          industry: 'Retail',
          slug: 'potencial-talento-banca',
        },
        {
          title: 'Escalar prácticas de gente en etapa de crecimiento',
          summary:
            'Sistemas de desempeño y feedback que acompañaron el aumento de headcount.',
          industry: 'Tecnología',
          slug: 'gestion-desempeno-energia',
        },
      ],
    },
    {
      _type: 'insightCards',
      _key: 'insights',
      title: 'Insights',
      intro: 'Ideas accionables para equipos de RRHH y líderes que quieren tomar mejores decisiones sobre su gente.',
      insights: [
        {
          title: 'Lo que suele equivocarse el “culture fit”',
          excerpt: 'Contratar por semejanza no es lo mismo que contratar por contribución.',
          slug: 'culture-fit-equivocado',
          categories: ['Talento'],
        },
        {
          title: 'Sucesión sin teatro',
          excerpt: 'Señales prácticas de que alguien está listo para el siguiente asiento.',
          slug: 'sucesion-sin-teatro',
          categories: ['Liderazgo'],
        },
        {
          title: 'Cómo pasar del diagnóstico a la acción sin perder el impulso',
          excerpt: 'Los diagnósticos de clima suelen terminar en presentaciones que nadie ejecuta. Aquí explicamos por qué pasa y cómo evitarlo.',
          slug: 'clima-organizacional-diagnostico-accion',
          categories: ['Webinars'],
        },
      ],
    },
    {
      _type: 'ctaBanner',
      _key: 'cta',
      heading: '¿Tu organización necesita talentos?',
      subheading:
        'Cuéntanos dónde estás parado. Sin compromisos, solo una conversación para ver si podemos ayudarte.',
      cta: {label: 'Agenda una reunión', href: '/es/contacto'},
    },
    {
      _type: 'faqSection',
      _key: 'faq',
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Trabajan proyectos puntuales o acompañamiento continuo?',
          answer: 'Ambos. En reclutamiento trabajamos por proceso, con entrega definida y garantía de incorporación. En desarrollo organizacional podemos hacer una intervención acotada o acompañar de forma continua. Lo definimos juntos según lo que necesita tu organización.',
        },
        {question: '¿Cómo miden el éxito de un proceso?', answer: 'Definimos indicadores operativos y de negocio claros antes de comenzar.'},
        {question: '¿En qué sectores tienen experiencia?', answer: 'Trabajamos en múltiples industrias y adaptamos cada proceso al contexto de la empresa.'},
        {question: '¿Cómo impacta la inteligencia artificial en sus procesos de selección?', answer: 'Usamos tecnología para acelerar el análisis, manteniendo el criterio humano donde realmente importa.'},
        {question: '¿Trabajan con empresas fuera de Lima?', answer: 'Sí. Acompañamos organizaciones en todo el Perú y Latinoamérica.'},
      ],
    },
  ]
}

export function servicesFixtures(locale: Locale): PageSection[] {
  const isEn = locale === 'en'
  const servicesHref = isEn ? '/en/services' : '/es/servicios'
  const recruitmentHref = isEn ? '/en/recruitment' : '/es/reclutamiento'
  const contactHref = isEn ? '/en/contact' : '/es/contacto'
  const learnMore = isEn ? 'Learn more' : 'Saber más'

  return [
    {
      _type: 'hero',
      _key: 'hero',
      variant: 'services',
      heading: isEn
        ? 'Talent is not an HR problem. It is a business problem.'
        : 'El talento no es un problema de HR. Es un problema de negocio.',
      subheading: isEn
        ? 'We work across both dimensions of talent: finding it and developing it.'
        : 'Trabajamos en las dos dimensiones del talento: encontrarlo y desarrollarlo.',
      image: '/assets/figma/services/hero.webp',
    },
    {
      _type: 'serviceCatalog',
      _key: 'service-catalog',
      categories: [
        {
          _key: 'organizational-development',
          title: isEn ? 'Organizational development' : 'Desarrollo organizacional',
          summary: isEn
            ? 'Five dimensions that help your team execute the business strategy.'
            : 'Cinco dimensiones para que tu equipo pueda ejecutar la estrategia del negocio.',
          items: [
            {
              _key: 'climate',
              title: isEn ? 'Organizational climate' : 'Clima organizacional',
              description: isEn
                ? 'If you do not know what is really happening in your organization, you cannot fix it.'
                : 'Si no sabes qué está pasando realmente en tu organización, no puedes arreglarlo.',
              icon: 'calendar',
              cta: {label: learnMore, href: getLocalizedPath(locale, 'service', locale === 'en' ? 'organizational-climate' : 'clima-organizacional')},
            },
            {
              _key: 'culture',
              title: isEn ? 'Organizational culture' : 'Cultura organizacional',
              description: isEn
                ? 'Every company has a culture. The question is whether it is the one needed to execute its strategy.'
                : 'Toda empresa tiene una cultura. La pregunta es si es la que necesita para ejecutar su estrategia.',
              icon: 'calendar',
              cta: {label: learnMore, href: getLocalizedPath(locale, 'service', locale === 'en' ? 'organizational-culture' : 'cultura-organizacional')},
            },
            {
              _key: 'performance',
              title: isEn ? 'Performance management' : 'Gestión del desempeño',
              description: isEn
                ? 'A performance system that nobody uses is not a system; it is bureaucracy.'
                : 'Un sistema de desempeño que nadie usa no es un sistema, es burocracia.',
              icon: 'planning',
              cta: {label: learnMore, href: getLocalizedPath(locale, 'service', locale === 'en' ? 'performance-management' : 'gestion-del-desempeno')},
            },
            {
              _key: 'potential',
              title: isEn ? 'Potential and talent mapping' : 'Potencial y mapeo de talento',
              description: isEn
                ? 'Do you know who the future leaders in your organization are, or are you finding out when it is already too late?'
                : '¿Sabes quiénes son los líderes del futuro en tu organización? ¿O lo estás descubriendo cuando ya es tarde?',
              icon: 'calendar',
              cta: {label: learnMore, href: getLocalizedPath(locale, 'service', locale === 'en' ? 'talent-mapping' : 'potencial-y-mapeo-de-talento')},
            },
            {
              _key: 'leadership',
              title: isEn ? 'Leadership and coaching' : 'Liderazgo y coaching',
              description: isEn
                ? 'Leaders are not born; they are developed. No recipes. No theory that never reaches practice.'
                : 'Los líderes no nacen, se desarrollan. Sin recetas. Sin teoría que no aterriza.',
              icon: 'planning',
              cta: {label: learnMore, href: getLocalizedPath(locale, 'service', locale === 'en' ? 'leadership-and-coaching' : 'liderazgo-y-coaching')},
            },
          ],
        },
        {
          _key: 'executive-recruitment',
          title: isEn ? 'Executive recruitment' : 'Reclutamiento ejecutivo',
          summary: isEn
            ? 'The right candidate is not on a job board. They are working. We find them.'
            : 'El candidato correcto no está en un portal. Está trabajando. Nosotros lo encontramos.',
          image: '/assets/figma/services/catalog-recruitment.jpg',
          bodyLines: isEn
            ? [
                'We find the candidate your organization needs — not whoever happens to be available.',
                'Our process starts by understanding your company before we start searching.',
              ]
            : [
                'Encontramos al candidato que tu organización necesita — no al que está disponible.',
                'Nuestro proceso parte por entender tu empresa antes de salir a buscar.',
              ],
          cta: {
            label: isEn ? 'Learn about the method' : 'Conocer el método',
            href: recruitmentHref,
          },
        },
      ],
    },
    {
      _type: 'splitStatement',
      _key: 'talent-cycle',
      heading: isEn
        ? 'One consulting firm. The entire talent cycle'
        : 'Una sola consultora. Todo el ciclo del talento',
      body: isEn
        ? 'Most consulting firms do one thing: either recruit or develop. We do both. Finding the right candidate and developing the team you already have are two sides of the same problem.'
        : 'La mayoría de las consultoras hacen una cosa: o reclutan o desarrollan. Nosotros hacemos las dos. Porque encontrar al candidato correcto y desarrollar el equipo que ya tienes son dos caras del mismo problema.',
    },
    {
      _type: 'contentCards',
      _key: 'industries',
      variant: 'industries',
      heading: isEn ? 'Experience in your industry.' : 'Experiencia en tu sector.',
      intro: isEn
        ? 'We work with companies across different industries. Context matters, and we understand it.'
        : 'Trabajamos con empresas de distintas industrias. El contexto importa y lo conocemos.',
      cards: [
        {
          _key: 'banking',
          title: isEn ? 'Banking and finance' : 'Banca y finanzas',
          description: isEn
            ? 'Executive talent and organizational development for an industry where cultural fit is everything.'
            : 'Talento ejecutivo y desarrollo organizacional para un sector donde el fit cultural lo es todo.',
          icon: 'industryCalendar',
        },
        {
          _key: 'energy',
          title: isEn ? 'Energy' : 'Energía',
          description: isEn
            ? 'Selection and development for highly demanding organizations in constant transformation.'
            : 'Selección y desarrollo para organizaciones de alta exigencia y transformación constante.',
          icon: 'industryPlanning',
        },
        {
          _key: 'agribusiness',
          title: isEn ? 'Agribusiness' : 'Agroindustria',
          description: isEn
            ? 'Senior talent and HR structures for companies scaling rapidly.'
            : 'Talento senior y estructuras de RRHH para empresas que escalan con rapidez.',
          icon: 'industryMoney',
        },
        {
          _key: 'manufacturing',
          title: isEn ? 'Industry and manufacturing' : 'Industria y manufactura',
          description: isEn
            ? 'Recruitment, climate, and performance for companies with complex structures and distributed teams.'
            : 'Reclutamiento, clima y desempeño para empresas con estructuras complejas y equipos distribuidos.',
          icon: 'industryCalendar',
        },
        {
          _key: 'consumer',
          title: isEn ? 'Consumer goods' : 'Consumo masivo',
          description: isEn
            ? 'Teams that perform in high-volume, highly competitive organizations.'
            : 'Equipos que rinden en organizaciones de alto volumen y alta competencia.',
          icon: 'industryMoney',
        },
      ],
    },
    {
      _type: 'ctaBanner',
      _key: 'cta',
      variant: 'services',
      heading: isEn ? 'Not sure where to start?' : '¿No sabes por dónde empezar?',
      subheading: isEn
        ? 'You do not need to have everything figured out before talking to us. Tell us the challenge and we will recommend what makes the most sense for your organization, with no commitment.'
        : 'No hace falta tener todo claro antes de hablar con nosotros. Cuéntanos el reto y te decimos qué tiene más sentido para tu organización, sin compromisos.',
      cta: {label: isEn ? 'Book a meeting' : 'Agenda una reunión', href: contactHref},
      secondaryCta: {
        label: isEn ? 'Request a free assessment' : 'Solicitar diagnóstico gratuito',
        href: 'https://wa.me/',
      },
    },
    {
      _type: 'faqSection',
      _key: 'faq',
      variant: 'roomy',
      title: isEn ? 'Frequently asked questions' : 'Preguntas frecuentes',
      items: [
        {
          question: isEn
            ? 'Do you work on one-off projects or ongoing engagements?'
            : '¿Trabajan proyectos puntuales o acompañamiento continuo?',
          answer: isEn
            ? 'Both. Recruitment is delivered as a defined process with a placement guarantee. Organizational development can be a focused intervention or an ongoing engagement, depending on what your organization needs.'
            : 'Ambos. En reclutamiento trabajamos por proceso, con entrega definida y garantía de incorporación. En desarrollo organizacional podemos hacer una intervención acotada o acompañar de forma continua. Lo definimos juntos según lo que necesita tu organización.',
        },
        {
          question: isEn ? 'How do you measure the success of a process?' : '¿Cómo miden el éxito de un proceso?',
          answer: isEn
            ? 'We define clear operational and business indicators before starting.'
            : 'Definimos indicadores operativos y de negocio claros antes de comenzar.',
        },
        {
          question: isEn ? 'Which industries do you have experience in?' : '¿En qué sectores tienen experiencia?',
          answer: isEn
            ? 'We work across multiple industries and adapt every process to the company context.'
            : 'Trabajamos en múltiples industrias y adaptamos cada proceso al contexto de la empresa.',
        },
        {
          question: isEn
            ? 'How does artificial intelligence affect your selection processes?'
            : '¿Cómo impacta la inteligencia artificial en sus procesos de selección?',
          answer: isEn
            ? 'We use technology to accelerate analysis while keeping human judgment where it matters.'
            : 'Usamos tecnología para acelerar el análisis, manteniendo el criterio humano donde realmente importa.',
        },
        {
          question: isEn ? 'Do you work with companies outside Lima?' : '¿Trabajan con empresas fuera de Lima?',
          answer: isEn
            ? 'Yes. We support organizations throughout Peru and Latin America.'
            : 'Sí. Acompañamos organizaciones en todo el Perú y Latinoamérica.',
        },
      ],
    },
  ]
}

export function recruitmentFixtures(locale: Locale): PageSection[] {
  const isEn = locale === 'en'
  const contactHref = isEn ? '/en/contact' : '/es/contacto'
  const methodHref = isEn ? '/en/methodology' : '/es/metodologia'

  return [
    {
      _type: 'hero',
      _key: 'hero',
      variant: 'recruitment',
      eyebrow: isEn ? 'Executive recruitment' : 'Reclutamiento ejecutivo',
      heading: isEn
        ? 'The right candidate is not looking for a job. They are working.'
        : 'El candidato correcto no está buscando trabajo. Está trabajando.',
      subheading: isEn
        ? 'Posting a job is not enough. We access the passive talent market with method and judgment.'
        : 'Por eso no alcanza con publicar un aviso. Nosotros accedemos al mercado de talento pasivo con método y criterio.',
      image: '/assets/figma/recruitment/hero.webp',
      primaryCta: {label: isEn ? 'Learn about the method' : 'Conocer el método', href: methodHref},
      secondaryCta: {label: isEn ? 'Book a meeting' : 'Agenda una reunión', href: contactHref},
    },
    {
      _type: 'narrativeCards',
      _key: 'problem-method',
      cards: [
        {
          _key: 'problem',
          icon: 'calendar',
          emphasis: '50%',
          title: isEn
            ? '50% of executive hires fail within the first 18 months.'
            : 'El 50% de las contrataciones ejecutivas fracasa en los primeros 18 meses.',
          description: isEn
            ? 'Not because the candidate is bad, but because the process was. The search started without diagnosis, evaluation relied on one interview, and the final decision was based on intuition. We designed our process so that does not happen to your organization.'
            : 'No porque el candidato sea malo. Sino porque el proceso fue malo. Se buscó sin diagnosticar, se evaluó con una sola entrevista y se eligió por intuición. Nosotros diseñamos nuestro proceso para que eso no le pase a tu organización.',
        },
        {
          _key: 'method',
          icon: 'process',
          emphasis: isEn ? 'not to fail.' : 'para no fallar.',
          title: isEn ? 'A method built not to fail.' : 'Un método construido para no fallar.',
          description: isEn
            ? 'Behind every search is the Growth Talent Method™, our proprietary seven-phase process. It goes from understanding your company to supporting the first ninety days of the hired candidate.'
            : 'Detrás de cada búsqueda está el Growth Talent Method™, nuestro proceso propietario de siete fases. Va desde entender tu empresa hasta acompañar los primeros noventa días del candidato incorporado.',
          cta: {label: isEn ? 'Book a meeting' : 'Agenda una reunión', href: contactHref},
        },
      ],
    },
    {
      _type: 'contentCards',
      _key: 'target',
      variant: 'lists',
      eyebrow: isEn ? 'Who it is for' : 'Para quién es',
      heading: isEn ? 'Roles where getting it wrong is expensive.' : 'Roles donde equivocarse sale caro.',
      intro: isEn
        ? 'High-responsibility positions where the hiring decision has direct business impact.'
        : 'Posiciones de alta responsabilidad donde la decisión de contratación tiene impacto directo en el negocio.',
      cards: [
        {
          _key: 'profiles',
          title: isEn ? 'Profiles we frequently work with:' : 'Perfiles que trabajamos con frecuencia:',
          tone: 'teal',
          icon: 'arrow',
          items: isEn
            ? ['Commercial Manager', 'Operations Manager', 'Digital Transformation Manager', 'Country Manager', 'Regional Manager', 'Second-line leaders in complex organizations']
            : ['Gerente Comercial', 'Gerente de Operaciones', 'Gerente de Transformación Digital', 'Country Manager', 'Gerente Regional', 'Líderes de segunda línea en organizaciones complejas'],
        },
        {
          _key: 'sectors',
          title: isEn ? 'Industries where we have experience' : 'Sectores con experiencia',
          tone: 'magenta',
          icon: 'arrow',
          items: isEn
            ? ['Banking and finance', 'Energy', 'Agribusiness', 'Consumer goods', 'Industry and manufacturing']
            : ['Banca y finanzas', 'Energía', 'Agroindustria', 'Consumo masivo', 'Industria y manufactura'],
        },
      ],
    },
    {
      _type: 'contentCards',
      _key: 'deliverables',
      variant: 'deliverables',
      eyebrow: isEn ? 'What the process includes' : 'Lo que incluye el proceso',
      heading: isEn ? 'Seven deliverables. One for each phase.' : 'Siete entregables. Uno por cada fase.',
      intro: isEn
        ? 'Each stage of the process has a supporting document. Because transparency is not a stated value. It is a practice.'
        : 'Cada etapa del proceso tiene un documento de respaldo. Porque la transparencia no es un valor declarado. Es una práctica.',
      cards: [
        {title: 'Business Brief™', description: isEn ? 'diagnosis of your organization and the role' : 'diagnóstico de tu organización y del rol', icon: 'calendar'},
        {title: 'Role Scorecard™', description: isEn ? 'profile with objective, measurable criteria' : 'perfil con criterios objetivos y medibles', icon: 'process'},
        {title: 'Talent Market Map™', description: isEn ? 'map of the relevant talent market' : 'mapa del mercado de talento relevante', icon: 'marketBrand'},
        {title: 'Candidate Assessment Report™', description: isEn ? 'individual candidate assessment' : 'evaluación individual por candidato', icon: 'market'},
        {title: 'Reference Intelligence Report™', description: isEn ? 'structured reference report' : 'informe de referencias estructurado', icon: 'calendar'},
        {title: 'Consultive Candidate Report™', description: isEn ? 'evidence-based shortlist recommendation' : 'recomendación fundada de la terna', icon: 'process'},
        {title: '30-60-90 Day Pulse™', description: isEn ? 'post-hire follow-up' : 'seguimiento post-incorporación', icon: 'market'},
      ],
    },
    {
      _type: 'splitStatement',
      _key: 'guarantees',
      eyebrow: isEn ? 'Our guarantees' : 'Nuestras garantías',
      heading: isEn ? 'We only charge when the process works.' : 'Solo cobramos cuando el proceso funciona.',
      body: isEn
        ? 'We work 100% on success. We only invoice once the candidate has joined. We provide a replacement guarantee of up to 12 months depending on role level and support onboarding with our 30-60-90 Day Pulse™. If the candidate does not complete the guarantee period, we restart the search at no additional cost.'
        : 'Trabajamos 100% al éxito. Facturamos únicamente cuando el candidato ha sido incorporado. Otorgamos una garantía de reemplazo de hasta 12 meses según el nivel del rol y acompañamos el ingreso con nuestro 30-60-90 Day Pulse™. Si el candidato no supera el período de garantía, reiniciamos la búsqueda sin costo adicional.',
      decoration: 'magentaGlow',
    },
    {
      _type: 'caseCards',
      _key: 'case',
      variant: 'featured',
      showHeader: false,
      cases: [{
        title: isEn ? 'Overstock at 22% in the plant.' : 'Sobreinventario 22% en planta.',
        challenge: isEn ? 'Challenge' : 'Reto',
        intervention: 'S&OP + parametrización MRP + tablero OEE.',
        result: isEn ? 'Inventory −15% | Service level +6 p.p.' : 'Inventario −15% | Nivel de servicio +6 p.p.',
        industry: isEn ? 'Guides' : 'Guías',
        slug: isEn ? 'executive-recruitment-banking' : 'reclutamiento-ejecutivo-banca',
        cover: '/assets/figma/recruitment/case.webp',
      }],
    },
    {
      _type: 'ctaBanner',
      _key: 'cta',
      variant: 'recruitment',
      heading: isEn ? 'Do you have a critical role to fill?' : '¿Tienes un rol crítico por cubrir?',
      subheading: isEn
        ? 'Tell us about the profile and context. No commitment, just a conversation to see if we can help.'
        : 'Cuéntanos el perfil y el contexto. Sin compromisos, solo una conversación para ver si podemos ayudarte.',
      cta: {label: isEn ? 'Book a meeting' : 'Agenda una reunión', href: contactHref},
      secondaryCta: {label: isEn ? 'Request proposal' : 'Solicitar propuesta', href: 'https://wa.me/'},
    },
    {
      _type: 'faqSection',
      _key: 'faq',
      variant: 'roomy',
      title: isEn ? 'Frequently asked questions' : 'Preguntas frecuentes',
      items: [
        {question: isEn ? 'How long does an executive search process take?' : '¿Cuánto tiempo toma un proceso de búsqueda ejecutiva?', answer: isEn ? 'It depends on the level and complexity of the profile. On average, we deliver a qualified shortlist within seven business days from kick-off. The full process through hiring takes between three and six weeks.' : 'Depende del nivel y la complejidad del perfil. En promedio entregamos un shortlist calificado en siete días hábiles desde el kick-off. El proceso completo hasta la incorporación varía entre tres y seis semanas.'},
        {question: isEn ? 'What happens if the hired candidate does not work out?' : '¿Qué pasa si el candidato incorporado no funciona?', answer: isEn ? 'We provide a replacement guarantee of up to 12 months depending on role level. If the candidate does not complete the guarantee period, we restart the search at no additional cost.' : 'Otorgamos una garantía de reemplazo de hasta 12 meses según el nivel del rol. Si el candidato no supera el período de garantía, reiniciamos la búsqueda sin costo adicional.'},
        {question: isEn ? 'Do you work on confidential searches?' : '¿Trabajan con búsquedas confidenciales?', answer: isEn ? 'Yes. Confidentiality is part of our standard process from day one.' : 'Sí. La confidencialidad es parte de nuestro proceso estándar desde el primer día.'},
        {question: isEn ? 'How do you use artificial intelligence in the process?' : '¿Cómo usan la inteligencia artificial en el proceso?', answer: isEn ? 'We use technology to accelerate analysis while keeping human judgment where it matters.' : 'Usamos tecnología para acelerar el análisis, manteniendo el criterio humano donde realmente importa.'},
        {question: isEn ? 'Do you work on searches outside Lima?' : '¿Trabajan con búsquedas fuera de Lima?', answer: isEn ? 'Yes. We support organizations throughout Peru and Latin America.' : 'Sí. Acompañamos organizaciones en todo el Perú y Latinoamérica.'},
      ],
    },
  ]
}

export function methodologyFixtures(locale: Locale): PageSection[] {
  const isEn = locale === 'en'
  const contactHref = isEn ? '/en/contact' : '/es/contacto'

  return [
    {
      _type: 'hero',
      _key: 'hero',
      variant: 'methodology',
      eyebrow: isEn ? 'Methodology' : 'Metodología',
      heading: isEn ? 'Talent with judgment.' : 'Talento con criterio.',
      subheading: isEn
        ? 'Behind every decision we make is a process. Because judgment without method is just intuition.'
        : 'Detrás de cada decisión que tomamos hay un proceso. Porque el criterio sin método es solo intuición.',
      image: '/assets/figma/methodology/hero.webp',
    },
    {
      _type: 'splitStatement',
      _key: 'intro',
      variant: 'methodIntro',
      heading: isEn
        ? '50% of executive hires fail within the first 18 months.'
        : 'El 50% de las contrataciones ejecutivas fracasa en los primeros 18 meses.',
      body: isEn
        ? 'Not because the candidate is bad, but because the process was. The search started without diagnosis, evaluation relied on one interview, and the final decision was based on intuition. In organizational development the same thing happens: climate is measured, a presentation is delivered, and nothing gets executed. We designed our processes so that does not happen to your organization.'
        : 'No porque el candidato sea malo. Sino porque el proceso fue malo. Se buscó sin diagnosticar, se evaluó con una sola entrevista y se eligió por intuición. En desarrollo organizacional pasa lo mismo: se mide el clima, se entrega una presentación y nadie ejecuta nada. Nosotros diseñamos nuestros procesos para que eso no le pase a tu organización.',
    },
    {
      _type: 'methodSteps',
      _key: 'growth-talent-method',
      layout: 'grid',
      diagramImage: '/assets/figma/methodology/grid-path.svg',
      title: isEn ? 'Two methodologies. One principle.' : 'Dos metodologías. Un mismo principio.',
      intro: isEn
        ? 'At Growth Lab we work on two dimensions of talent: finding it and developing it. Each has its own method, but both start from the same place: understand first, act second.'
        : 'En Growth Lab trabajamos dos dimensiones del talento: encontrarlo y desarrollarlo. Cada una tiene su propio método, pero las dos parten del mismo lugar: entender primero, actuar después.',
      featuredTitle: 'Growth Talent Method™',
      featuredDescription: isEn
        ? 'Our proprietary executive search process. Seven phases from understanding your company to supporting the first ninety days of the hired candidate. Built on the best global recruitment methodologies and adapted to the Peruvian market.'
        : 'Nuestro proceso propietario de búsqueda ejecutiva. Siete fases que van desde entender tu empresa hasta acompañar los primeros noventa días del candidato incorporado. Construido sobre las mejores metodologías globales de reclutamiento y adaptado a la realidad del mercado peruano.',
      showCta: false,
      steps: [
        {
          title: 'Business Diagnostic™',
          description: isEn
            ? 'We understand your organization before we start searching.'
            : 'Entendemos tu organización antes de salir a buscar.',
        },
        {
          title: 'Role Scorecard™',
          description: isEn
            ? 'We translate the profile into objective, measurable criteria.'
            : 'Traducimos el perfil en criterios objetivos y medibles.',
        },
        {
          title: 'Talent Intelligence Hunting™',
          description: isEn
            ? 'We actively map the market. We do not wait for candidates to apply.'
            : 'Mapeamos activamente el mercado. No esperamos que los candidatos apliquen.',
        },
        {
          title: 'Talent Intelligence Hunting™',
          description: isEn
            ? 'We evaluate in three layers: structured interview, psychometrics, and situational business case.'
            : 'Evaluamos en tres capas: entrevista estructurada, psicometría y business case situacional.',
        },
        {
          title: 'Reference Intelligence™',
          description: isEn
            ? 'References are not a formality. They are a source of truth.'
            : 'Las referencias no son un trámite. Son una fuente de verdad.',
        },
        {
          title: 'Consultive Presentation™',
          description: isEn
            ? 'We do not send a list of CVs. We recommend with grounded judgment.'
            : 'No mandamos una lista de CVs. Recomendamos con criterio fundado.',
        },
        {
          title: 'Onboarding Intelligence™',
          description: isEn
            ? 'We support the first 30, 60, and 90 days. The process does not end when the candidate signs.'
            : 'Acompañamos los primeros 30, 60 y 90 días. El proceso no termina cuando el candidato firma.',
        },
      ],
    },
    {
      _type: 'contentCards',
      _key: 'principles',
      variant: 'principles',
      heading: isEn
        ? 'Our organizational development approach.'
        : 'Nuestro enfoque de desarrollo organizacional.',
      cards: [
        {
          title: isEn ? 'Data-driven, not perception-based' : 'Basado en datos, no en percepciones',
          description: isEn
            ? 'Before we intervene, we measure. Every process starts with a real diagnosis.'
            : 'Antes de intervenir, medimos. Cada proceso parte de un diagnóstico real.',
          icon: 'industryCalendar',
        },
        {
          title: isEn ? 'Tailored, not canned' : 'Diseñado a medida, no enlatado',
          description: isEn
            ? 'Each intervention is designed for the organization’s reality and moment.'
            : 'Cada intervención se diseña según la realidad y el momento de la organización.',
          icon: 'industryPlanning',
        },
        {
          title: isEn ? 'Support until results' : 'Acompañamiento hasta el resultado',
          description: isEn
            ? 'We do not deliver reports and leave. We stay until something changes.'
            : 'No entregamos informes y nos vamos. Nos quedamos hasta que algo cambia.',
          icon: 'industryMoney',
        },
      ],
    },
    {
      _type: 'metrics',
      _key: 'metrics',
      title: isEn ? 'The numbers that back our method.' : 'Los números que respaldan nuestro método.',
      columns: 4,
      items: [
        {value: '+300', label: isEn ? 'closed processes' : 'procesos cerrados', icon: 'calendar'},
        {value: '0%', label: isEn ? 'cancellation rate' : 'tasa de cancelación', icon: 'process'},
        {value: isEn ? '7 days' : '7 días', label: isEn ? 'average shortlist delivery' : 'promedio de entrega de shortlist', icon: 'cost'},
        {value: '+30', label: isEn ? 'organizations served' : 'organizaciones atendidas', icon: 'cost'},
      ],
    },
    {
      _type: 'splitStatement',
      _key: 'success',
      variant: 'successBanner',
      image: '/assets/figma/methodology/success-banner.webp',
      heading: isEn
        ? 'We trust our process. That is why we work on success.'
        : 'Confiamos en nuestro proceso. Por eso trabajamos al éxito.',
      body: isEn
        ? 'We only invoice once the candidate has been selected and onboarded. We offer flexible cultural-fit guarantees and support the first ninety days. If something does not work within the guarantee period, we restart the search at no additional cost.'
        : 'Facturamos únicamente cuando el candidato ha sido seleccionado e incorporado. Ofrecemos garantías flexibles de fit cultural y acompañamos los primeros noventa días. Si algo no funciona dentro del período de garantía, reiniciamos la búsqueda sin costo adicional.',
    },
    {
      _type: 'ctaBanner',
      _key: 'cta',
      variant: 'recruitment',
      heading: isEn
        ? 'Want to understand how we work before starting?'
        : '¿Quieres entender cómo trabajamos antes de arrancar?',
      subheading: isEn
        ? 'A thirty-minute conversation is enough to explain the process and see if it makes sense for your organization.'
        : 'Una conversación de treinta minutos es suficiente para explicarte el proceso y ver si tiene sentido para tu organización.',
      cta: {label: isEn ? 'Book a meeting' : 'Agenda una reunión', href: contactHref},
      secondaryCta: {
        label: isEn ? 'Request a free diagnosis' : 'Solicitar diagnóstico gratuito',
        href: 'https://wa.me/',
      },
    },
    {
      _type: 'faqSection',
      _key: 'faq',
      title: isEn ? 'Frequently asked questions' : 'Preguntas frecuentes',
      items: [
        {
          question: isEn ? 'What is the Growth Talent Method™?' : '¿Qué es el Growth Talent Method™?',
          answer: isEn
            ? 'Growth Lab’s proprietary executive search process. Seven phases from diagnosing the organization to post-hire follow-up.'
            : 'El proceso propietario de búsqueda ejecutiva de Growth Lab. Siete fases desde el diagnóstico de la organización hasta el seguimiento post-incorporación.',
        },
        {
          question: isEn ? 'Why does Growth Lab work 100% on success?' : '¿Por qué Growth Lab trabaja 100% al éxito?',
          answer: isEn
            ? 'Because we only invoice once the candidate has joined. Our incentives are aligned with the outcome, not with activity.'
            : 'Porque facturamos únicamente cuando el candidato ha sido incorporado. Nuestros incentivos están alineados al resultado, no a la actividad.',
        },
        {
          question: isEn ? 'How do you use artificial intelligence in your processes?' : '¿Cómo usan la inteligencia artificial en sus procesos?',
          answer: isEn
            ? 'We use technology to accelerate analysis and pattern recognition while keeping human judgment in every critical decision.'
            : 'Usamos tecnología para acelerar el análisis y el reconocimiento de patrones, manteniendo el criterio humano en cada decisión crítica.',
        },
        {
          question: isEn ? 'What methodologies do you use for organizational development?' : '¿Qué metodologías usan para el desarrollo organizacional?',
          answer: isEn
            ? 'Each intervention is tailored from real diagnostics. We combine measurement, co-design, and follow-through until something changes.'
            : 'Cada intervención se diseña a medida a partir de diagnósticos reales. Combinamos medición, co-diseño y acompañamiento hasta que algo cambia.',
        },
      ],
    },
  ]
}
