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
  | {_type: 'splitStatement'; _key: string; variant?: 'default' | 'methodIntro' | 'successBanner'; eyebrow?: string; heading: string; body: string; decoration?: 'magentaGlow'; image?: ImageSource; bodyAlign?: 'left' | 'right'}
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

const homeFaqEs = [
  {
    question: '¿Trabajan proyectos puntuales o acompañamiento continuo?',
    answer:
      'Ambos. En reclutamiento trabajamos por proceso, con entrega definida y garantía de incorporación. En desarrollo organizacional podemos hacer una intervención acotada o acompañar de forma continua. Lo definimos juntos según lo que necesita tu organización.',
  },
  {
    question: '¿Cómo miden el éxito de un proceso?',
    answer:
      'Primero, nos aseguramos de cumplir en tiempo y cumplir las expectativas en calidad (filtro y entregables) de nuestros clientes. Segundo, que las organizaciones tomen la mejor decisión sobre talento a partir de toda la información que nuestra metodología les ofrece.',
  },
  {
    question: '¿En qué sectores tienen experiencia?',
    answer: 'Trabajamos en múltiples industrias y adaptamos cada proceso al contexto de la empresa.',
  },
  {
    question: '¿Cómo impacta la inteligencia artificial en sus procesos de selección?',
    answer:
      'Usamos tecnología para acelerar el análisis, manteniendo el criterio humano donde realmente importa.',
  },
  {
    question: '¿En qué zonas geográficas trabajan?',
    answer: 'Trabajamos con organizaciones en todo el Perú (Lima y provincia) y Latinoamérica.',
  },
]

const homeFaqEn = [
  {
    question: 'Do you work on one-off projects or ongoing engagements?',
    answer:
      'Both. Recruitment is delivered as a defined process with a placement guarantee. Organizational development can be a focused intervention or an ongoing engagement, depending on what your organization needs.',
  },
  {
    question: 'How do you measure process success?',
    answer:
      'First, we make sure we meet timelines and quality expectations (screening and deliverables) for our clients. Second, that organizations make the best talent decision from all the information our methodology provides.',
  },
  {
    question: 'Which sectors do you know best?',
    answer: 'We work across industries and adapt each process to the company context.',
  },
  {
    question: 'How does AI affect your selection process?',
    answer:
      'We use technology to accelerate analysis, while keeping human judgment where it matters.',
  },
  {
    question: 'Which geographic areas do you work in?',
    answer: 'We work with organizations across Peru (Lima and the provinces) and Latin America.',
  },
]

export function homeFixtures(locale: Locale): PageSection[] {
  if (locale === 'en') {
    return [
      {
        _type: 'hero',
        _key: 'hero',
        heading: 'Real growth, through talent',
        subheading:
          'We help companies make talent decisions that drive high business impact — through our Growth Talent Method and personalized service.',
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
          {value: '+15 years', label: 'Experience in Peru and Latam', icon: 'process'},
          {
            value: '+500 companies',
            label: 'Have trusted us with a 9.8/10 satisfaction score',
            icon: 'cost',
          },
        ],
      },
      {
        _type: 'serviceSplit',
        _key: 'services',
        title: 'Two ways to grow through talent',
        intro:
          'Whatever talent need you have, we cover it with the same network of experts and a first-class methodology.',
        cardImages: [
          '/assets/figma/home/service-organization.webp',
          '/assets/figma/home/service-recruitment.webp',
        ],
        services: [
          {
            title: 'Headhunting / Executive Recruitment',
            summary:
              'Search for C-level, top management, middle management, and entry-level roles — all under a methodology adapted to each company’s need.',
            slug: 'executive-search',
            href: getLocalizedPath('en', 'recruitment'),
          },
          {
            title: 'Talent Solutions',
            summary:
              'When the problem is not bringing talent from outside, but understanding, evaluating, and developing what is already inside. We cover: organizational climate, culture, performance, potential, leadership, and coaching.',
            slug: 'organizational-development',
            href: getLocalizedPath('en', 'services'),
          },
        ],
      },
      {
        _type: 'methodSteps',
        _key: 'method',
        title: 'A method. Not intuition.',
        intro:
          '50% of executive hires without a structured methodology fail within the first 18 months. We designed our process so it does not happen to your company.',
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
            title: 'Evidence- and data-backed recommendations',
            description: 'We present evidence and a clear recommendation.',
          },
          {
            title: 'END-TO-END support',
            description: 'We support onboarding and landing.',
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
            industry: 'Banking',
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
        _type: 'ctaBanner',
        _key: 'cta',
        heading: 'Want to find the talent that best fits your organization?',
        subheading:
          'Let’s schedule a free meeting to understand your current situation and decide together whether we can help.',
        cta: {label: 'Book a meeting', href: '/en/contact'},
      },
      {
        _type: 'faqSection',
        _key: 'faq',
        title: 'Frequently asked questions',
        items: homeFaqEn,
      },
    ]
  }

  return [
    {
      _type: 'hero',
      _key: 'hero',
      heading: 'Crecimiento real, a través del talento',
      subheading:
        'Ayudamos a empresas a que tomen las decisiones de talento que generen un alto impacto en el negocio - a través de nuestro "Growth Talent Method" y un servicio personalizado.',
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
        {value: '+15 años', label: 'Experiencia en Perú y Latam', icon: 'process'},
        {
          value: '+500 empresas',
          label: 'Han confiado en nosotros con un score del 9.8/10 de satisfacción',
          icon: 'cost',
        },
      ],
    },
    {
      _type: 'serviceSplit',
      _key: 'services',
      title: 'Dos maneras de crecer a través del talento',
      intro:
        'La necesidad de talento que tengas, la cubrimos con la misma red de expertos y una metodología de primer nivel.',
      cardImages: [
        '/assets/figma/home/service-organization.webp',
        '/assets/figma/home/service-recruitment.webp',
      ],
      services: [
        {
          title: 'Headhunting / Reclutamiento Ejecutivo',
          summary:
            'Búsqueda de posiciones C-level, top management, middle management y entry level — todo bajo una metodología adaptada a la necesidad de cada empresa.',
          slug: 'reclutamiento-ejecutivo',
          href: getLocalizedPath('es', 'recruitment'),
        },
        {
          title: 'Talent Solutions',
          summary:
            'Cuando el problema no es traer talento de afuera, sino entender, evaluar y desarrollar el que ya está adentro. Cubrimos: Clima organizacional, cultura, desempeño, potencial, liderazgo y coaching.',
          slug: 'desarrollo-organizacional',
          href: getLocalizedPath('es', 'services'),
        },
      ],
    },
    {
      _type: 'methodSteps',
      _key: 'method',
      title: 'Un método. No intuición.',
      intro:
        'El 50% de las contrataciones ejecutivas sin metodología estructurada fracasa en los primeros 18 meses. Nosotros lo sabemos y diseñamos nuestro proceso para que eso no le pase a tu empresa.',
      steps: [
        {
          title: 'Diagnóstico exhaustivo',
          description:
            'Antes de buscar un candidato, entendemos tu empresa: el momento del negocio, la cultura, el liderazgo y los retos reales del rol.',
        },
        {
          title: 'Evaluación en múltiples capas',
          description: 'Evaluamos experiencia, capacidades y ajuste al contexto.',
        },
        {
          title: 'Recomendaciones con evidencia y data',
          description: 'Presentamos evidencia y una recomendación clara.',
        },
        {
          title: 'Acompañamiento END-TO-END',
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
          industry: 'Banca',
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
      _type: 'ctaBanner',
      _key: 'cta',
      heading: '¿Quieres encontrar al talento que haga mejor fit con tu organización?',
      subheading:
        'Agendemos una reunión gratuita para conocer tu situación actual y definir juntos si podemos ayudarte',
      cta: {label: 'Agenda una reunión', href: '/es/contacto'},
    },
    {
      _type: 'faqSection',
      _key: 'faq',
      title: 'Preguntas frecuentes',
      items: homeFaqEs,
    },
  ]
}

export function servicesFixtures(locale: Locale): PageSection[] {
  const isEn = locale === 'en'
  const recruitmentHref = isEn ? '/en/recruitment' : '/es/reclutamiento'
  const contactHref = isEn ? '/en/contact' : '/es/contacto'
  const learnMore = isEn ? 'Learn more' : 'Saber más'

  return [
    {
      _type: 'hero',
      _key: 'hero',
      variant: 'services',
      heading: isEn
        ? 'Talent is not only HR’s responsibility. It is one of the most important business decisions.'
        : 'El talento no es sólo responsabilidad de HR. Es una de las decisiones más importantes del negocio.',
      subheading: isEn
        ? 'We help organizations attract, develop, and strengthen the talent that drives their results.'
        : 'Ayudamos a las organizaciones a atraer, desarrollar y potenciar el talento que impulsa sus resultados.',
      image: '/assets/figma/services/hero.webp',
    },
    {
      _type: 'serviceCatalog',
      _key: 'service-catalog',
      categories: [
        {
          _key: 'organizational-development',
          title: 'Talent Solutions',
          summary: isEn
            ? 'Five dimensions that help your team execute the business strategy.'
            : 'Cinco dimensiones para que tu equipo pueda ejecutar la estrategia del negocio.',
          items: [
            {
              _key: 'climate',
              title: isEn ? 'Organizational climate' : 'Clima organizacional',
              description: isEn
                ? 'You cannot improve what you do not understand. Identify what is impacting engagement, productivity, and your teams’ experience.'
                : 'No puedes mejorar lo que no entiendes. Identifica qué está impactando el compromiso, la productividad y la experiencia de tus equipos.',
              icon: 'calendar',
              cta: {label: learnMore, href: getLocalizedPath(locale, 'service', locale === 'en' ? 'organizational-climate' : 'clima-organizacional')},
            },
            {
              _key: 'culture',
              title: isEn ? 'Organizational culture' : 'Cultura organizacional',
              description: isEn
                ? 'Culture is not a speech. It is how strategy gets executed. Understand whether your culture is driving or limiting business results.'
                : 'La cultura no es un discurso. Es la forma en que se ejecuta la estrategia. Entiende si tu cultura está impulsando o limitando los resultados del negocio.',
              icon: 'calendar',
              cta: {label: learnMore, href: getLocalizedPath(locale, 'service', locale === 'en' ? 'organizational-culture' : 'cultura-organizacional')},
            },
            {
              _key: 'performance',
              title: isEn ? 'Performance management' : 'Gestión del desempeño',
              description: isEn
                ? 'A performance system nobody uses does not drive results. Align goals, conversations, and metrics to strengthen execution.'
                : 'Un sistema de desempeño que nadie usa no genera resultados. Alinea objetivos, conversaciones y métricas para fortalecer la ejecución.',
              icon: 'planning',
              cta: {label: learnMore, href: getLocalizedPath(locale, 'service', locale === 'en' ? 'performance-management' : 'gestion-del-desempeno')},
            },
            {
              _key: 'potential',
              title: isEn ? 'Potential and talent mapping' : 'Potencial y mapeo del talento',
              description: isEn
                ? 'Critical talent is not always the most visible. Identify the people with the greatest potential to lead future growth.'
                : 'El talento crítico no siempre es el más visible. Identifica a las personas con mayor potencial para liderar el crecimiento futuro.',
              icon: 'calendar',
              cta: {label: learnMore, href: getLocalizedPath(locale, 'service', locale === 'en' ? 'talent-mapping' : 'potencial-y-mapeo-de-talento')},
            },
            {
              _key: 'leadership',
              title: isEn ? 'Leadership and coaching' : 'Liderazgo y coaching',
              description: isEn
                ? 'Leaders are neither born nor improvised. Develop the capabilities your organization needs to grow sustainably.'
                : 'Los líderes no nacen ni se improvisan. Desarrolla las capacidades que tu organización necesita para crecer de forma sostenible.',
              icon: 'planning',
              cta: {label: learnMore, href: getLocalizedPath(locale, 'service', locale === 'en' ? 'leadership-and-coaching' : 'liderazgo-y-coaching')},
            },
          ],
        },
        {
          _key: 'executive-recruitment',
          title: isEn ? 'Executive recruitment' : 'Reclutamiento ejecutivo',
          summary: isEn
            ? 'The right candidate does not arrive alone. You have to find them. We take care of that.'
            : 'El candidato correcto no llega solo. Hay que encontrarlo. Nosotros nos encargamos de eso.',
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
        ? 'We see talent as the main driver to accelerate results, strengthen cultures, and execute business strategy.\n\nThat is why every recommendation, diagnosis, or intervention is designed to achieve the highest engagement and the lowest possible turnover.'
        : 'Entendemos el talento como el elemento principal para acelerar resultados, fortalecer culturas y ejecutar la estrategia del negocio.\n\nPor eso cada recomendación, diagnóstico o intervención está diseñada para lograr el mayor engagement y menor rotación posible.',
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
            ? 'Leaders who combine technical rigor, commercial vision, and cultural fit, in a regulated sector where every hire counts.'
            : 'Líderes que combinan rigor técnico, visión comercial y fit cultural, en un sector regulado donde cada contratación pesa.',
          icon: 'industryCalendar',
        },
        {
          _key: 'energy',
          title: isEn ? 'Energy and Mining' : 'Energía y Minería',
          description: isEn
            ? 'Executive and technical talent for high-demand operations, long-term projects, and environments where safety is non-negotiable.'
            : 'Talento ejecutivo y técnico para operaciones de alta exigencia, proyectos de largo plazo y entornos donde la seguridad no se negocia.',
          icon: 'industryPlanning',
        },
        {
          _key: 'agribusiness',
          title: isEn ? 'Agribusiness' : 'Agroindustria',
          description: isEn
            ? 'Senior talent and HR structures for export companies that grow fast and need to scale without losing control.'
            : 'Talento senior y estructuras de RRHH para empresas exportadoras que crecen rápido y necesitan escalar sin perder control.',
          icon: 'industryMoney',
        },
        {
          _key: 'manufacturing',
          title: isEn ? 'Industry and manufacturing' : 'Industria y manufactura',
          description: isEn
            ? 'Recruitment, climate, and performance for organizations with plants, shifts, and teams distributed across multiple sites.'
            : 'Reclutamiento, clima y desempeño para organizaciones con plantas, turnos y equipos distribuidos en varias sedes.',
          icon: 'industryCalendar',
        },
        {
          _key: 'consumer',
          title: isEn ? 'Consumer goods' : 'Consumo masivo',
          description: isEn
            ? 'Commercial and marketing executives who sustain results in high-volume, intensely competitive markets.'
            : 'Ejecutivos comerciales y de marketing que sostienen resultados en mercados de alto volumen y competencia intensa.',
          icon: 'industryMoney',
        },
        {
          _key: 'construction',
          title: isEn ? 'Construction' : 'Construcción',
          description: isEn
            ? 'Project managers and site leaders who deliver on time, within budget, and with teams that change at every stage.'
            : 'Gerentes de proyecto y líderes de obra que entregan a tiempo, dentro del presupuesto y con equipos que cambian en cada etapa.',
          icon: 'industryPlanning',
        },
      ],
    },
    {
      _type: 'ctaBanner',
      _key: 'cta',
      variant: 'services',
      heading: isEn
        ? 'Want to find the talent that best fits your organization?'
        : '¿Quieres encontrar al talento que haga mejor fit con tu organización?',
      subheading: isEn
        ? 'Let’s schedule a free meeting to understand your current situation and decide together whether we can help.'
        : 'Agendemos una reunión gratuita para conocer tu situación actual y definir juntos si podemos ayudarte',
      cta: {label: isEn ? 'Book a meeting' : 'Agenda una reunión', href: contactHref},
      secondaryCta: {
        label: isEn ? 'Request a free assessment' : 'Solicitar diagnóstico gratuito',
        href: contactHref,
      },
    },
    {
      _type: 'faqSection',
      _key: 'faq',
      variant: 'roomy',
      title: isEn ? 'Frequently asked questions' : 'Preguntas frecuentes',
      items: isEn ? homeFaqEn : homeFaqEs,
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
        ? 'The right candidate does not arrive alone. The right method is required to find and hire them.'
        : 'El candidato correcto no llega solo. Se requiere del método correcto para encontrarlo y contratarlo.',
      subheading: isEn
        ? 'That is why posting a job and waiting is not enough. We go find them where they are: performing today at another company or actively searching.'
        : 'Por eso no basta con publicar un aviso y esperar. Salimos a buscarlo donde esté: rindiendo hoy en otra empresa o en búsqueda activa.',
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
            ? 'Not because the candidate is bad, but because the process was: the search started without diagnosis, evaluation relied on one interview, and the final decision was based on intuition. We designed our method so that does not happen to your company.'
            : 'No porque el candidato sea malo, sino porque el proceso lo fue: se buscó sin diagnóstico, se evaluó con una sola entrevista y se eligió por intuición. Diseñamos nuestro método para que eso no le pase a tu empresa.',
        },
        {
          _key: 'method',
          icon: 'process',
          emphasis: isEn ? 'to get it right.' : 'para acertar.',
          title: isEn ? 'A method built to get it right' : 'Un método construido para acertar',
          description: isEn
            ? 'Behind every search is the Growth Talent Method™: seven phases, from understanding your business to supporting the new executive’s first 90 days.'
            : 'Detrás de cada búsqueda está el Growth Talent Method™: siete fases, desde entender tu negocio hasta acompañar los primeros 90 días del nuevo ejecutivo.',
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
            ? ['Banking and finance', 'Energy and mining', 'Agribusiness', 'Consumer goods', 'Industry and manufacturing', 'Construction']
            : ['Banca y finanzas', 'Energía y minería', 'Agroindustria', 'Consumo masivo', 'Industria y manufactura', 'Construcción'],
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
        ? 'Each phase has a supporting document. Because transparency is not declared — it is demonstrated.'
        : 'Cada fase tiene un documento de respaldo. Porque la transparencia no se declara, se demuestra.',
      cards: [
        {
          title: 'Business Brief™',
          description: isEn
            ? 'Diagnosis of your organization and what the role truly needs.'
            : 'Diagnóstico de tu organización y de lo que el rol realmente necesita.',
          icon: 'calendar',
        },
        {
          title: 'Role Scorecard™',
          description: isEn
            ? 'Profile translated into objective, measurable criteria.'
            : 'Perfil traducido en criterios objetivos y medibles.',
          icon: 'process',
        },
        {
          title: 'Talent Market Map™',
          description: isEn
            ? 'Map of available talent in the market for your search.'
            : 'Mapa del talento disponible en el mercado para tu búsqueda.',
          icon: 'marketBrand',
        },
        {
          title: 'Candidate Assessment Report™',
          description: isEn
            ? 'Detailed evaluation of each finalist across three layers.'
            : 'Evaluación detallada de cada finalista en tres capas.',
          icon: 'market',
        },
        {
          title: 'Reference Intelligence Report™',
          description: isEn
            ? 'Structured references validated with people who worked with the candidate.'
            : 'Referencias estructuradas y validadas con quienes trabajaron con el candidato.',
          icon: 'calendar',
        },
        {
          title: 'Advisory Shortlist Report™',
          description: isEn
            ? 'The final shortlist with our grounded recommendation.'
            : 'La terna final con nuestra recomendación fundamentada.',
          icon: 'process',
        },
        {
          title: '30-60-90 Day Pulse™',
          description: isEn
            ? 'Follow-up of the new executive in their first 90 days.'
            : 'Seguimiento del nuevo ejecutivo en sus primeros 90 días.',
          icon: 'market',
        },
      ],
    },
    {
      _type: 'splitStatement',
      _key: 'guarantees',
      eyebrow: isEn ? 'Our guarantees' : 'Nuestras garantías',
      heading: isEn ? 'We only charge when the process works.' : 'Solo cobramos cuando el proceso funciona.',
      body: isEn
        ? 'We work 100% on success: we only invoice when the chosen candidate signs the offer letter. We provide a replacement guarantee of up to 12 months depending on role level and support onboarding with our 30-60-90 Day Pulse™. If the person does not complete the guarantee period, we restart the search at no additional cost.'
        : 'Trabajamos 100% al éxito: solo facturamos cuando el candidato elegido firma carta oferta. Damos una garantía de reemplazo de hasta 12 meses según el nivel del rol y acompañamos su ingreso con nuestro 30-60-90 Day Pulse™. Si la persona no supera el período de garantía, reiniciamos la búsqueda sin costo adicional.',
      decoration: 'magentaGlow',
      bodyAlign: 'left',
    },
    {
      _type: 'ctaBanner',
      _key: 'cta',
      variant: 'recruitment',
      heading: isEn
        ? 'Want to find the talent that best fits your organization?'
        : '¿Quieres encontrar al talento que haga mejor fit con tu organización?',
      subheading: isEn
        ? 'Let’s schedule a free meeting to understand your current situation and decide together whether we can help.'
        : 'Agendemos una reunión gratuita para conocer tu situación actual y definir juntos si podemos ayudarte',
      cta: {label: isEn ? 'Book a meeting' : 'Agenda una reunión', href: contactHref},
      secondaryCta: {
        label: isEn ? 'Request proposal' : 'Solicitar propuesta',
        href: contactHref,
      },
    },
    {
      _type: 'faqSection',
      _key: 'faq',
      variant: 'roomy',
      title: isEn ? 'Frequently asked questions' : 'Preguntas frecuentes',
      items: isEn ? homeFaqEn : homeFaqEs,
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
      heading: isEn ? 'Talent decisions, not bets.' : 'Decisiones de talento, no apuestas.',
      subheading: isEn
        ? 'The best talent decisions do not happen by chance or intuition. They happen when you combine experience, methodology, and data.'
        : 'Las mejores decisiones de talento no ocurren por casualidad o intuición. Ocurren cuando combinas experiencia, metodología y data.',
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
        ? 'Not because that person lacked talent or adaptability, but because the selection process was not the right one. Hiring decisions are often made with insufficient information.\n\nWe help our clients hire with greater clarity, stronger evidence, and lower risk.'
        : 'No porque a esa persona le haya faltado talento o adaptabilidad; sino porque el proceso de selección no fue el correcto. Las decisiones de contratación suelen tomarse con información insuficiente.\n\nAyudamos a nuestros clientes a contratar con mayor claridad, mejor sustento y asumir un menor riesgo.',
    },
    {
      _type: 'methodSteps',
      _key: 'growth-talent-method',
      layout: 'grid',
      diagramImage: '/assets/figma/methodology/grid-path.svg',
      title: isEn ? 'One methodology. Two approaches.' : 'Una misma metodología. Dos enfoques.',
      intro: isEn
        ? 'At Growth Lab we work on two dimensions of talent: finding it and developing it. Each has its own method, but both start from the same place: understand first, act second.'
        : 'En Growth Lab trabajamos dos dimensiones del talento: encontrarlo y desarrollarlo. Cada una tiene su propio método, pero las dos parten del mismo lugar: entender primero, actuar después.',
      featuredTitle: 'Growth Talent Method™',
      featuredDescription: isEn
        ? 'This is how we find the talent your company needs. Seven phases, from understanding your business to supporting the new leader’s first 90 days. Built on the best global methodologies and adapted to the Peruvian and Latin American market.'
        : 'Así encontramos el talento que tu empresa necesita. Siete fases, desde entender tu negocio hasta acompañar los primeros 90 días del nuevo líder. Basado en las mejores metodologías globales y adaptado al mercado peruano y latinoamericano.',
      showCta: false,
      steps: [
        {
          title: 'Business Diagnostic™',
          description: isEn
            ? 'Before searching, we understand your business, culture, and what the role truly needs.'
            : 'Antes de buscar, entendemos tu negocio, tu cultura y lo que el rol realmente necesita.',
        },
        {
          title: 'Role Scorecard™',
          description: isEn
            ? 'We turn the profile into objective, measurable criteria. Everyone evaluates with the same standard.'
            : 'Convertimos el perfil en criterios objetivos y medibles. Todos evalúan con la misma vara.',
        },
        {
          title: 'Talent Hunting™',
          description: isEn
            ? 'We map the market and go find them. The best talent is almost never applying.'
            : 'Mapeamos el mercado y salimos a buscar. El mejor talento casi nunca está postulando.',
        },
        {
          title: '3-Layer Assessment™',
          description: isEn
            ? 'We evaluate in three layers: structured interview, psychometrics, and a role business case.'
            : 'Evaluamos en tres capas: entrevista estructurada, psicometría y un business case del rol.',
        },
        {
          title: 'Reference Intelligence™',
          description: isEn
            ? 'References are not a formality. We validate with people who truly worked with the candidate.'
            : 'Las referencias no son un trámite. Validamos con quienes realmente trabajaron con el candidato.',
        },
        {
          title: 'Advisory Shortlist™',
          description: isEn
            ? 'We do not send a list of CVs. We present a shortlist with a grounded recommendation.'
            : 'No te mandamos una lista de CVs. Te presentamos una terna con una recomendación fundamentada.',
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
        ? 'Organizational development you can feel.'
        : 'Desarrollo organizacional que se nota.',
      cards: [
        {
          title: isEn ? 'Data-driven, not perception-based' : 'Basado en datos, no en percepciones',
          description: isEn
            ? 'Before we intervene, we measure. Every process starts from a real diagnosis of your organization.'
            : 'Antes de intervenir, medimos. Cada proceso parte de un diagnóstico real de tu organización.',
          icon: 'industryCalendar',
        },
        {
          title: isEn ? 'Tailored, not canned' : 'Diseñado a medida, no enlatado',
          description: isEn
            ? 'Every intervention responds to your company’s reality, culture, and moment.'
            : 'Cada intervención responde a la realidad, la cultura y el momento de tu empresa.',
          icon: 'industryPlanning',
        },
        {
          title: isEn ? 'Support until results' : 'Acompañamiento hasta el resultado',
          description: isEn
            ? 'We do not deliver a report and disappear. We stay until the change is noticeable.'
            : 'No entregamos un informe y desaparecemos. Nos quedamos hasta que el cambio se nota.',
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
        {value: '750', label: isEn ? 'closed processes' : 'procesos cerrados', icon: 'calendar'},
        {
          value: '9.8/10',
          label: isEn ? 'satisfaction with our service.' : 'de satisfacción sobre nuestro servicio.',
          icon: 'process',
        },
        {value: isEn ? '+15 years' : '+15 años', label: isEn ? 'Experience in Peru and Latam' : 'Experiencia en Perú y Latam', icon: 'cost'},
        {
          value: isEn ? '+500 companies' : '+500 empresas',
          label: isEn
            ? '9.8/10 satisfaction score from companies that trust us'
            : 'Score 9.8/10 de satisfacción de quienes confían en nosotros',
          icon: 'cost',
        },
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
        ? 'We only invoice when the chosen candidate signs the offer letter. And if within the guarantee period the person is not a fit, we restart the search at no additional cost.'
        : 'Solo facturamos cuando el candidato elegido firma la carta oferta. Y si dentro del período de garantía la persona no encaja, reiniciamos la búsqueda sin costo adicional.',
    },
    {
      _type: 'ctaBanner',
      _key: 'cta',
      variant: 'recruitment',
      heading: isEn
        ? 'Want to better understand how we work?'
        : '¿Quieres entender mejor cómo trabajamos?',
      subheading: isEn
        ? 'A thirty-minute conversation is enough to explain the process and see if it makes sense for your organization.'
        : 'Una conversación de treinta minutos es suficiente para explicarte el proceso y ver si tiene sentido para tu organización.',
      cta: {label: isEn ? 'Book a meeting' : 'Agenda una reunión', href: contactHref},
      secondaryCta: {
        label: isEn ? 'Request a free diagnosis' : 'Solicitar diagnóstico gratuito',
        href: contactHref,
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
