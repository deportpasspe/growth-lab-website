import type {Locale} from '../i18n/routes'
import {getLocalizedPath} from '../i18n/routes'
import type {PageSection} from './fixtures'

export const SERVICE_SLUGS = {
  clima: {es: 'clima-organizacional', en: 'organizational-climate'},
  cultura: {es: 'cultura-organizacional', en: 'organizational-culture'},
  gestion: {es: 'gestion-del-desempeno', en: 'performance-management'},
  potencial: {es: 'potencial-y-mapeo-de-talento', en: 'talent-mapping'},
  liderazgo: {es: 'liderazgo-y-coaching', en: 'leadership-and-coaching'},
} as const

/** Canonical service names (not hero headlines). */
export const SERVICE_TITLES: Record<keyof typeof SERVICE_SLUGS, Record<Locale, string>> = {
  clima: {es: 'Clima organizacional', en: 'Organizational climate'},
  cultura: {es: 'Cultura organizacional', en: 'Organizational culture'},
  gestion: {es: 'Gestión del desempeño', en: 'Performance management'},
  potencial: {es: 'Potencial y mapeo de talento', en: 'Talent mapping'},
  liderazgo: {es: 'Liderazgo y coaching', en: 'Leadership and coaching'},
}

type ServiceKey = keyof typeof SERVICE_SLUGS

const slugToKey = new Map<string, ServiceKey>()
for (const [key, slugs] of Object.entries(SERVICE_SLUGS)) {
  slugToKey.set(slugs.es, key as ServiceKey)
  slugToKey.set(slugs.en, key as ServiceKey)
}

function serviceHref(locale: Locale, key: ServiceKey) {
  return getLocalizedPath(locale, 'service', SERVICE_SLUGS[key][locale])
}

function sharedCtas(locale: Locale) {
  const isEn = locale === 'en'
  return {
    contactHref: getLocalizedPath(locale, 'contact'),
    methodHref: getLocalizedPath(locale, 'methodology'),
    recruitmentHref: getLocalizedPath(locale, 'recruitment'),
    learnMethod: isEn ? 'Learn about the method' : 'Conocer el método',
    learnProcess: isEn ? 'Learn about the process' : 'Conocer el proceso',
    bookMeeting: isEn ? 'Book a meeting' : 'Agenda una reunión',
    freeAssessment: isEn ? 'Request a free assessment' : 'Solicitar diagnóstico gratuito',
    whatsappHref: 'https://wa.me/',
  }
}

function buildSections(locale: Locale, key: ServiceKey): PageSection[] {
  const isEn = locale === 'en'
  const ctas = sharedCtas(locale)

  const pages: Record<ServiceKey, PageSection[]> = {
    clima: [
      {
        _type: 'hero',
        _key: 'hero',
        variant: 'servicePage',
        eyebrow: isEn ? 'Organizational climate' : 'Clima organizacional',
        heading: isEn
          ? 'What is not measured cannot be improved.'
          : 'Lo que no se mide no se puede mejorar.',
        subheading: isEn
          ? 'Climate is your company\'s thermometer. We help you understand what is really happening and do something concrete with that information.'
          : 'El clima es el termómetro de tu empresa. Nosotros te ayudamos a entender qué está pasando realmente y a hacer algo concreto con esa información.',
        image: '/assets/figma/services/hero-clima.jpg',
        primaryCta: {label: ctas.learnMethod, href: ctas.methodHref},
        secondaryCta: {label: ctas.bookMeeting, href: ctas.contactHref},
      },
      {
        _type: 'splitStatement',
        _key: 'intro',
        heading: isEn
          ? 'A diagnosis that gets filed away is useless.'
          : 'El diagnóstico que se archiva no sirve de nada.',
        body: isEn
          ? 'Many organizations measure climate once a year, receive a presentation with charts, and stop there. The problem is not measurement. It is that nobody knows what to do with the results. We do not deliver data. We deliver an action plan that can be executed.'
          : 'Muchas organizaciones miden el clima una vez al año, reciben una presentación con gráficas y no pasan de ahí. El problema no es la medición. Es que nadie sabe qué hacer con los resultados. Nosotros no entregamos datos. Entregamos un plan de acción que se puede ejecutar.',
      },
      {
        _type: 'processCards',
        _key: 'process',
        heading: isEn
          ? 'Three steps from data to real improvement.'
          : 'Tres pasos para pasar del dato a la mejora real.',
        layout: 'accordionRow',
        steps: [
          {
            title: isEn ? 'Quantitative diagnosis' : 'Diagnóstico cuantitativo',
            description: isEn
              ? 'We design and run a tailored climate survey and analyze the results with statistical rigor.'
              : 'Diseñamos y aplicamos una encuesta de clima a medida y analizamos los resultados con rigor estadístico.',
          },
          {
            title: isEn ? 'Qualitative diagnosis' : 'Diagnóstico cualitativo',
            description: isEn
              ? 'Focus groups with collaborators at different levels to understand root causes behind the numbers.'
              : 'Focus groups con colaboradores de distintos niveles para entender las causas raíz detrás de los números.',
          },
          {
            title: isEn ? 'Action plan' : 'Plan de acción',
            description: isEn
              ? 'We prioritize concrete interventions and support implementation with clear owners and follow-up.'
              : 'Priorizamos intervenciones concretas y acompañamos la implementación con responsables claros y seguimiento.',
          },
        ],
      },
      {
        _type: 'serviceIncludes',
        _key: 'includes',
        layout: 'dualColumns',
        items: isEn
          ? [
              'Tailored climate survey',
              'Quantitative report with executive dashboard',
              'Focus groups with collaborators at different levels',
              'Final report with prioritized conclusions and recommendations',
              'Consulting on action plan design and implementation',
              'Post-intervention indicator follow-up',
            ]
          : [
              'Encuesta de clima diseñada a medida',
              'Reporte cuantitativo con dashboard ejecutivo',
              'Focus groups con colaboradores de distintos niveles',
              'Informe final con conclusiones y recomendaciones priorizadas',
              'Consultoría en diseño e implementación del plan de acción',
              'Seguimiento de indicadores post-intervención',
            ],
        secondaryHeading: isEn ? 'How we measure that it worked.' : 'Cómo medimos que funcionó.',
        secondaryItems: isEn
          ? [
              'Increase in overall climate index',
              'Reduction in voluntary turnover',
              'Improvement in leadership and communication perception',
              'Action plans implemented with owners and defined timelines',
            ]
          : [
              'Aumento en el índice de clima general',
              'Reducción de rotación voluntaria',
              'Mejora en la percepción de liderazgo y comunicación',
              'Planes de acción implementados con responsables y plazos definidos',
            ],
      },
      {
        _type: 'caseCards',
        _key: 'case',
        variant: 'featured',
        showHeader: false,
        cases: [{
          title: isEn ? 'Case study' : 'Caso de éxito',
          industry: isEn ? 'Industry and manufacturing' : 'Industria y manufactura',
          slug: isEn ? 'organizational-climate-manufacturing' : 'clima-organizacional-manufactura',
          challenge: isEn
            ? '23% mid-management turnover with no clarity on root cause.'
            : 'Rotación de mandos medios al 23% sin claridad sobre la causa raíz.',
          intervention: isEn
            ? 'Quantitative climate diagnosis plus six focus groups plus action plan.'
            : 'Diagnóstico de clima cuantitativo más seis focus groups más plan de acción.',
          result: isEn
            ? 'Turnover reduced to 14% in six months.'
            : 'Rotación redujo a 14% en seis meses.',
          cover: '/assets/figma/services/hero.webp',
        }],
      },
      {
        _type: 'relatedServices',
        _key: 'related',
        heading: isEn
          ? 'Climate is the starting point. This is what usually comes next.'
          : 'El clima es el punto de partida. Esto es lo que suele venir después.',
        items: [
          {
            title: isEn ? 'Organizational culture' : 'Cultura organizacional',
            description: isEn
              ? 'When the problem runs deeper than atmosphere.'
              : 'Cuando el problema es más profundo que el ambiente.',
            icon: 'calendar',
            href: serviceHref(locale, 'cultura'),
          },
          {
            title: isEn ? 'Performance management' : 'Gestión del desempeño',
            description: isEn
              ? 'When lack of feedback shows up as a root cause.'
              : 'Cuando la falta de feedback aparece como causa raíz.',
            icon: 'planning',
            href: serviceHref(locale, 'gestion'),
          },
          {
            title: isEn ? 'Leadership and coaching' : 'Liderazgo y coaching',
            description: isEn
              ? 'When leaders are part of the problem.'
              : 'Cuando los líderes son parte del problema.',
            icon: 'money',
            href: serviceHref(locale, 'liderazgo'),
          },
        ],
      },
      {
        _type: 'ctaBanner',
        _key: 'cta',
        variant: 'services',
        heading: isEn
          ? 'Do you really know how your organization is doing?'
          : '¿Sabes realmente cómo está tu organización?',
        subheading: isEn
          ? 'If you have doubts, it is probably time to measure it. Let us talk about your situation and see what makes sense.'
          : 'Si tienes dudas, probablemente ya es momento de medirlo. Conversemos sobre tu situación y veamos qué tiene sentido hacer.',
        cta: {label: ctas.bookMeeting, href: ctas.contactHref},
        secondaryCta: {label: ctas.freeAssessment, href: ctas.whatsappHref},
      },
      {
        _type: 'faqSection',
        _key: 'faq',
        variant: 'roomy',
        title: isEn ? 'Frequently asked questions' : 'Preguntas frecuentes',
        items: isEn
          ? [
              {
                question: 'How long does a climate diagnosis take?',
                answer: 'It depends on organization size and study scope. On average, a full process from survey design to final report takes six to eight weeks.',
              },
              {
                question: 'What is the minimum company size for a diagnosis?',
                answer: 'We adapt the methodology to each context. We have worked with teams from 50 collaborators upward.',
              },
              {
                question: 'Are results confidential?',
                answer: 'Yes. Individual responses are handled with strict confidentiality; reports show aggregated results only.',
              },
              {
                question: 'What if results are very negative?',
                answer: 'That is exactly when a structured process matters most. We focus on actionable priorities, not blame.',
              },
            ]
          : [
              {
                question: '¿Cuánto tiempo toma un diagnóstico de clima?',
                answer: 'Depende del tamaño de la organización y el alcance del estudio. En promedio un proceso completo, desde el diseño de la encuesta hasta la entrega del informe final, toma entre seis y ocho semanas.',
              },
              {
                question: '¿Qué tamaño mínimo de empresa necesitan para hacer el diagnóstico?',
                answer: 'Adaptamos la metodología a cada contexto. Hemos trabajado con equipos desde 50 colaboradores en adelante.',
              },
              {
                question: '¿Los resultados son confidenciales?',
                answer: 'Sí. Las respuestas individuales se manejan con estricta confidencialidad; los reportes muestran solo resultados agregados.',
              },
              {
                question: '¿Qué pasa si los resultados son muy negativos?',
                answer: 'Precisamente ahí importa más un proceso estructurado. Nos enfocamos en prioridades accionables, no en culpas.',
              },
            ],
      },
    ],
    cultura: [
      {
        _type: 'hero',
        _key: 'hero',
        variant: 'servicePage',
        eyebrow: isEn ? 'Organizational culture' : 'Cultura organizacional',
        heading: isEn
          ? 'Culture is not what hangs framed on the wall.'
          : 'La cultura no es lo que está en los valores enmarcados en la pared.',
        subheading: isEn
          ? 'It is what happens when no one is watching. If that culture is not aligned with your strategy, no plan will work as it should.'
          : 'Es lo que pasa cuando nadie está mirando. Si esa cultura no está alineada con tu estrategia, ningún plan va a funcionar como debería.',
        image: '/assets/figma/services/hero-cultura.jpg',
        primaryCta: {label: ctas.learnMethod, href: ctas.methodHref},
        secondaryCta: {label: ctas.bookMeeting, href: ctas.contactHref},
      },
      {
        _type: 'splitStatement',
        _key: 'intro',
        heading: isEn
          ? 'Every company has a culture. The question is whether it is the one it needs.'
          : 'Toda empresa tiene una cultura. La pregunta es si es la que necesita.',
        body: isEn
          ? 'Many organizations invest in strategy, technology, and processes and then wonder why results do not follow. The answer almost always involves culture. We work the gap between declared and lived culture because closing it is what makes everything else work.'
          : 'Muchas organizaciones invierten en estrategia, en tecnología, en procesos y después se preguntan por qué los resultados no llegan. La respuesta casi siempre tiene que ver con la cultura. Trabajamos la brecha entre la cultura declarada y la cultura vivida, porque cerrar esa brecha es lo que permite que todo lo demás funcione.',
      },
      {
        _type: 'processCards',
        _key: 'process',
        heading: isEn
          ? 'From the culture you have to the culture you need.'
          : 'De la cultura que tienes a la cultura que necesitas.',
        layout: 'accordionColumns',
        steps: [
          {
            title: isEn ? 'Cultural diagnosis' : 'Diagnóstico cultural',
            description: isEn
              ? 'We identify your organization\'s real culture: dominant traits, strengths, and tensions using quantitative and qualitative methods.'
              : 'Identificamos la cultura real de tu organización: sus rasgos dominantes, sus fortalezas y sus tensiones, usando metodologías cuantitativas y cualitativas.',
          },
          {
            title: isEn ? 'Values and behaviors definition' : 'Definición de valores y comportamientos',
            description: isEn
              ? 'We facilitate participatory processes to define or redefine organizational values and translate them into observable behaviors that leaders can model and collaborators can recognize.'
              : 'Facilitamos procesos participativos para definir o redefinir los valores de la organización y traducirlos en conductas observables. Algo que los líderes puedan modelar y los colaboradores puedan reconocer.',
          },
          {
            title: isEn ? 'Culture and strategy alignment' : 'Alineación cultura y estrategia',
            description: isEn
              ? 'We identify the gap between current and needed culture and design a concrete plan to close it.'
              : 'Identificamos la brecha entre la cultura actual y la que necesita tu negocio, y diseñamos un plan concreto para cerrarla.',
          },
          {
            title: isEn ? 'Cultural change management' : 'Gestión del cambio cultural',
            description: isEn
              ? 'Cultural change is not decreed; it is supported. We work with leaders as change agents and design rituals that reinforce the desired culture.'
              : 'El cambio cultural no se decreta, se acompaña. Trabajamos con los líderes como agentes de cambio y diseñamos rituales y prácticas que refuerzan la cultura deseada.',
          },
        ],
      },
      {
        _type: 'serviceIncludes',
        _key: 'includes',
        layout: 'splitImage',
        items: isEn
          ? [
              'Quantitative and qualitative cultural diagnosis',
              'Current culture report with findings and tensions',
              'Participatory values definition workshops',
              'Values translated into observable behaviors',
              'Transformation plan with milestones and owners',
              'Support for leaders as change agents',
            ]
          : [
              'Diagnóstico cultural cuantitativo y cualitativo',
              'Informe de cultura actual con hallazgos y tensiones',
              'Talleres participativos de definición de valores',
              'Valores traducidos en comportamientos observables',
              'Plan de transformación con hitos y responsables',
              'Acompañamiento a líderes como agentes de cambio',
            ],
        image: '/assets/figma/services/includes/includes-cultura.jpg',
      },
      {
        _type: 'caseCards',
        _key: 'case',
        variant: 'featured',
        showHeader: false,
        cases: [{
          title: isEn ? 'Case study' : 'Caso de éxito',
          industry: isEn ? 'Consumer goods' : 'Consumo masivo',
          slug: isEn ? 'organizational-culture-consumer' : 'cultura-organizacional-consumo',
          challenge: isEn
            ? 'Merger of two business units with different cultures and high internal tension.'
            : 'Fusión de dos unidades de negocio con culturas distintas y alta tensión interna.',
          intervention: isEn
            ? 'Comparative cultural diagnosis, values alignment workshops, and change management program.'
            : 'Diagnóstico cultural comparativo, talleres de alineación de valores y programa de gestión del cambio.',
          result: isEn
            ? 'Conflicts between teams reduced by 40% in the first four months.'
            : 'Conflictos entre equipos reducidos en 40% en los primeros cuatro meses.',
          cover: '/assets/figma/services/hero.webp',
        }],
      },
      {
        _type: 'relatedServices',
        _key: 'related',
        heading: isEn ? 'Culture connects to everything else' : 'La cultura conecta con todo lo demás',
        items: [
          {
            title: isEn ? 'Organizational climate' : 'Clima organizacional',
            description: isEn
              ? 'When you need to measure atmosphere before intervening on culture.'
              : 'Cuando necesitas medir el ambiente antes de intervenir la cultura.',
            icon: 'calendar',
            href: serviceHref(locale, 'clima'),
          },
          {
            title: isEn ? 'Performance management' : 'Gestión del desempeño',
            description: isEn
              ? 'When cultural behaviors need to show up in the evaluation system.'
              : 'Cuando los comportamientos culturales necesitan reflejarse en el sistema de evaluación.',
            icon: 'planning',
            href: serviceHref(locale, 'gestion'),
          },
          {
            title: isEn ? 'Leadership and coaching' : 'Liderazgo y coaching',
            description: isEn ? 'When leaders are part of the problem.' : 'Cuando los líderes son parte del problema.',
            icon: 'money',
            href: serviceHref(locale, 'liderazgo'),
          },
        ],
      },
      {
        _type: 'ctaBanner',
        _key: 'cta',
        variant: 'services',
        heading: isEn
          ? 'Is your culture supporting your strategy?'
          : '¿Tu cultura está acompañando tu estrategia?',
        subheading: isEn
          ? 'If something is not working in your organization and you are not sure why, the answer is probably in the culture. Let\'s talk.'
          : 'Si hay algo que no está funcionando en tu organización y no sabes bien por qué, probablemente la respuesta está en la cultura. Conversemos.',
        cta: {label: ctas.bookMeeting, href: ctas.contactHref},
        secondaryCta: {label: ctas.freeAssessment, href: ctas.whatsappHref},
      },
      {
        _type: 'faqSection',
        _key: 'faq',
        variant: 'roomy',
        title: isEn ? 'Frequently asked questions' : 'Preguntas frecuentes',
        items: isEn
          ? [
              {
                question: 'How long does a cultural transformation process take?',
                answer: 'A full diagnosis takes six to eight weeks. A transformation process with support can extend between six months and a year. Visible first results usually appear within the first ninety days if leaders are committed.',
              },
              {
                question: 'Where do you start when culture is severely deteriorated?',
                answer: 'With diagnosis and quick wins that rebuild trust, then deeper work on values, behaviors, and leadership practices.',
              },
              {
                question: 'What role do leaders play in cultural change?',
                answer: 'They are the main agents of change. Without leader modeling, any cultural initiative stalls.',
              },
              {
                question: 'What is the difference between climate and organizational culture?',
                answer: 'Climate is how people feel today; culture is the deeper set of beliefs and behaviors that persist over time.',
              },
            ]
          : [
              {
                question: '¿Cuánto tiempo toma un proceso de transformación cultural?',
                answer: 'Un diagnóstico completo toma entre seis y ocho semanas. Un proceso de transformación con acompañamiento puede extenderse entre seis meses y un año. Los primeros resultados visibles suelen aparecer en los primeros noventa días si los líderes están comprometidos.',
              },
              {
                question: '¿Por dónde se empieza cuando la cultura está muy deteriorada?',
                answer: 'Con diagnóstico y victorias rápidas que reconstruyan confianza, luego trabajo profundo en valores, comportamientos y prácticas de liderazgo.',
              },
              {
                question: '¿Qué rol juegan los líderes en un cambio cultural?',
                answer: 'Son los principales agentes de cambio. Sin modelado de líderes, cualquier iniciativa cultural se estanca.',
              },
              {
                question: '¿Qué diferencia hay entre clima y cultura organizacional?',
                answer: 'El clima es cómo se siente la gente hoy; la cultura es el conjunto más profundo de creencias y comportamientos que perdura en el tiempo.',
              },
            ],
      },
    ],
    gestion: [
      {
        _type: 'hero',
        _key: 'hero',
        variant: 'servicePage',
        eyebrow: isEn ? 'Performance management' : 'Gestión del desempeño',
        heading: isEn
          ? 'An evaluation nobody uses is not a process. It is bureaucracy.'
          : 'Una evaluación que nadie usa no es un proceso. Es burocracia.',
        subheading: isEn
          ? 'We design performance systems leaders actually want to use.'
          : 'Diseñamos sistemas de desempeño que los líderes realmente quieren usar.',
        image: '/assets/figma/services/hero-gestion.jpg',
        primaryCta: {label: ctas.learnMethod, href: ctas.methodHref},
        secondaryCta: {label: ctas.learnProcess, href: '#proceso'},
      },
      {
        _type: 'splitStatement',
        _key: 'intro',
        heading: isEn
          ? 'The problem is not measuring. It is measuring what does not matter.'
          : 'El problema no es medir. Es medir lo que no importa.',
        body: isEn
          ? 'Many organizations have performance systems that generate data but not conversations. Forms filled once a year and filed away. Evaluations leaders do out of obligation and collaborators receive without clarity. We design models leaders want to use because they connect individual performance to real business strategy.'
          : 'Muchas organizaciones tienen sistemas de desempeño que generan datos pero no generan conversaciones. Formularios que se llenan una vez al año y se archivan. Evaluaciones que los líderes hacen por obligación y los colaboradores reciben sin entender qué se espera de ellos. Diseñamos modelos que los líderes realmente quieren usar porque conectan el desempeño individual con la estrategia real del negocio.',
      },
      {
        _type: 'processCards',
        _key: 'process',
        id: 'proceso',
        heading: isEn
          ? 'A model designed for your organization, not any organization.'
          : 'Un modelo diseñado para tu organización, no para cualquier organización.',
        layout: 'accordionSplit',
        steps: [
          {
            title: isEn ? 'Performance model design' : 'Diseño del modelo de desempeño',
            description: isEn
              ? 'We build or redesign your system from scratch: cycles, evaluation instruments, scales, calibrations, and integration with compensation and development.'
              : 'Construimos o rediseñamos tu sistema desde cero: ciclos, instrumentos de evaluación, escalas, calibraciones e integración con compensaciones y desarrollo.',
          },
          {
            title: isEn ? 'Objective definition' : 'Definición de objetivos',
            description: isEn
              ? 'We cascade strategic business objectives to each area and person, with clear measurement criteria and alignment across teams.'
              : 'Cascadeamos los objetivos estratégicos del negocio hasta cada área y colaborador, con criterios claros de medición y alineación entre equipos.',
          },
          {
            title: isEn ? 'End-to-end evaluation' : 'Evaluación end-to-end',
            description: isEn
              ? 'We implement the full cycle: evaluations, calibrations, results delivery, and adoption tracking so the system actually gets used.'
              : 'Implementamos el ciclo completo: evaluaciones, calibraciones, devolución de resultados y seguimiento de adopción para que el sistema realmente se use.',
          },
          {
            title: isEn ? 'Feedback culture' : 'Cultura de feedback',
            description: isEn
              ? 'We train leaders and collaborators for effective feedback conversations and facilitate calibration sessions so evaluations are fair and actionable.'
              : 'Capacitamos a líderes y colaboradores para conversaciones de feedback efectivas y facilitamos sesiones de calibración para evaluaciones justas y accionables.',
          },
        ],
      },
      {
        _type: 'serviceIncludes',
        _key: 'includes',
        layout: 'splitImage',
        items: isEn
          ? [
              'Design or redesign of the performance management model',
              'Strategic objectives cascaded by area and person',
              '90°, 180°, or 360° evaluation implementation',
              'Feedback workshops for leaders and collaborators',
              'Consulting on underperformance and difficult conversations',
              'Full cycle follow-up with adoption metrics',
            ]
          : [
              'Diseño o rediseño del modelo de gestión del desempeño',
              'Definición de objetivos estratégicos cascadeados por área y persona',
              'Implementación de evaluaciones 90°, 180° o 360°',
              'Talleres de feedback para líderes y colaboradores',
              'Consultoría en gestión de bajo desempeño y conversaciones difíciles',
              'Seguimiento del ciclo completo con métricas de adopción',
            ],
        image: '/assets/figma/services/includes/includes-gestion.jpg',
      },
      {
        _type: 'caseCards',
        _key: 'case',
        variant: 'featured',
        showHeader: false,
        cases: [{
          title: isEn ? 'Case study' : 'Caso de éxito',
          industry: isEn ? 'Energy' : 'Energía',
          slug: isEn ? 'performance-management-energy' : 'gestion-desempeno-energia',
          challenge: isEn
            ? 'Annual evaluation system with low leader adoption and no connection to strategic company objectives.'
            : 'Sistema de evaluación anual con baja adopción por parte de los líderes y sin conexión con los objetivos estratégicos de la empresa.',
          intervention: isEn
            ? 'Performance model redesign with OKRs, feedback workshops, and full cycle support.'
            : 'Rediseño del modelo de desempeño con OKRs, talleres de feedback y acompañamiento al ciclo completo.',
          result: isEn
            ? 'System adoption rose from 45% to 91% in the first cycle. 80% of collaborators reported clarity on objectives in the follow-up survey.'
            : 'Adopción del sistema subió de 45% a 91% en el primer ciclo. 80% de colaboradores reportó claridad sobre sus objetivos en la encuesta de seguimiento.',
          cover: '/assets/figma/services/case-gestion.jpg',
        }],
      },
      {
        _type: 'relatedServices',
        _key: 'related',
        heading: isEn ? 'Performance does not exist in a vacuum.' : 'El desempeño no existe en el vacío.',
        items: [
          {
            title: isEn ? 'Organizational climate' : 'Clima organizacional',
            description: isEn
              ? 'When you need to measure atmosphere before intervening on culture.'
              : 'Cuando necesitas medir el ambiente antes de intervenir la cultura.',
            icon: 'calendar',
            href: serviceHref(locale, 'clima'),
          },
          {
            title: isEn ? 'Organizational culture' : 'Cultura organizacional',
            description: isEn
              ? 'When cultural behaviors need to show up in the evaluation system.'
              : 'Cuando los comportamientos culturales necesitan reflejarse en el sistema de evaluación.',
            icon: 'planning',
            href: serviceHref(locale, 'cultura'),
          },
          {
            title: isEn ? 'Leadership and coaching' : 'Liderazgo y coaching',
            description: isEn
              ? 'When leaders are part of the problem.'
              : 'Cuando los líderes son parte del problema.',
            icon: 'money',
            href: serviceHref(locale, 'liderazgo'),
          },
        ],
      },
      {
        _type: 'ctaBanner',
        _key: 'cta',
        variant: 'services',
        heading: isEn
          ? 'Is your performance system generating conversations or forms?'
          : '¿Tu sistema de desempeño está generando conversaciones o formularios?',
        subheading: isEn
          ? 'If the answer is forms, it is time to change something. Let us talk about your situation.'
          : 'Si la respuesta es formularios, es momento de cambiar algo. Conversemos sobre tu situación.',
        cta: {label: ctas.bookMeeting, href: ctas.contactHref},
        secondaryCta: {label: ctas.freeAssessment, href: ctas.whatsappHref},
      },
      {
        _type: 'faqSection',
        _key: 'faq',
        variant: 'roomy',
        title: isEn ? 'Frequently asked questions' : 'Preguntas frecuentes',
        items: isEn
          ? [
              {
                question: 'How long does it take to implement a performance management system?',
                answer: 'A full diagnosis takes six to eight weeks. A transformation with ongoing support can extend six months to a year, with visible results often in the first ninety days.',
              },
              {
                question: 'OKRs or KPIs — which is better for managing performance?',
                answer: 'It depends on your context. We recommend what fits your strategy, maturity, and leadership culture — often a hybrid.',
              },
              {
                question: 'How is underperformance handled within the process?',
                answer: 'With clear criteria, documented conversations, support plans, and escalation paths leaders can actually follow.',
              },
              {
                question: 'Does this work for companies that never had a formal performance system?',
                answer: 'Yes. Starting from scratch often makes adoption easier because there are no bad habits to unlearn.',
              },
            ]
          : [
              {
                question: '¿Cuánto tiempo toma implementar un sistema de gestión del desempeño?',
                answer: 'Un diagnóstico completo toma entre seis y ocho semanas. Un proceso de transformación con acompañamiento puede extenderse entre seis meses y un año. Los primeros resultados visibles suelen aparecer en los primeros noventa días si los líderes están comprometidos.',
              },
              {
                question: '¿OKRs o KPIs, cuál es mejor para gestionar el desempeño?',
                answer: 'Depende del contexto. Recomendamos lo que encaje con tu estrategia, madurez y cultura de liderazgo — a menudo un híbrido.',
              },
              {
                question: '¿Cómo se maneja el bajo desempeño dentro del proceso?',
                answer: 'Con criterios claros, conversaciones documentadas, planes de apoyo y rutas de escalamiento que los líderes puedan seguir.',
              },
              {
                question: '¿Sirve para empresas que nunca han tenido un sistema de desempeño formal?',
                answer: 'Sí. Empezar desde cero suele facilitar la adopción porque no hay malos hábitos que desaprender.',
              },
            ],
      },
    ],
    potencial: [
      {
        _type: 'hero',
        _key: 'hero',
        variant: 'servicePage',
        eyebrow: isEn ? 'Talent mapping' : 'Potencial y mapeo de talento',
        heading: isEn
          ? 'Do you know who your future leaders are?'
          : '¿Sabes quiénes son los líderes del futuro en tu organización?',
        subheading: isEn
          ? 'We help you see it before the problem shows up.'
          : 'Nosotros te ayudamos a verlo antes de que el problema aparezca.',
        image: '/assets/figma/services/hero-potencial.jpg',
        primaryCta: {label: ctas.bookMeeting, href: ctas.contactHref},
        secondaryCta: {label: ctas.learnProcess, href: '#proceso'},
      },
      {
        _type: 'splitStatement',
        _key: 'intro',
        heading: isEn
          ? 'Talent you cannot see does not develop. Sooner or later, it leaves.'
          : 'El talento que no se ve, no se desarrolla. Y tarde o temprano se va.',
        body: isEn
          ? 'Most organizations identify key talent when they are already losing it. Without structured mapping, decisions about who grows are made by intuition, visibility, or tenure. That is not talent management. It is luck. We use rigorous methodologies that reduce bias and produce reliable information for better people decisions.'
          : 'La mayoría de las organizaciones identifica a sus talentos clave cuando ya los está perdiendo. Sin un proceso estructurado de mapeo, las decisiones sobre quién crece y quién no se toman por intuición, por visibilidad o por antigüedad. Eso no es gestión del talento. Es azar. Trabajamos con metodologías rigurosas que eliminan sesgos y producen información confiable para tomar mejores decisiones sobre las personas.',
      },
      {
        _type: 'processCards',
        _key: 'process',
        id: 'proceso',
        heading: isEn
          ? 'Four steps to map the talent you already have.'
          : 'Cuatro pasos para mapear el talento que ya tienes.',
        layout: 'accordionColumns',
        steps: [
          {
            title: isEn ? 'Potential assessment' : 'Evaluación de potencial',
            description: isEn
              ? 'We apply learning agility models to identify who has the greatest capacity to learn, adapt, and grow in new challenges. We complement this with structured competency interviews led by specialized consultants.'
              : 'Aplicamos modelos basados en learning agility para identificar quiénes tienen mayor capacidad de aprender, adaptarse y crecer ante nuevos desafíos. Complementamos con entrevistas estructuradas por competencias conducidas por consultores especializados.',
          },
          {
            title: isEn ? 'Potential matrices' : 'Matrices de potencial',
            description: isEn
              ? '9-Box Grid segmentation to map performance versus potential across your workforce and prioritize development investments.'
              : 'Segmentación con 9-Box Grid para mapear desempeño versus potencial en tu fuerza laboral y priorizar inversiones en desarrollo.',
          },
          {
            title: isEn ? 'Succession plans' : 'Planes de sucesión',
            description: isEn
              ? 'We identify critical roles, analyze continuity risks, and design dynamic succession plans with bench strength prepared at each level.'
              : 'Identificamos roles críticos, analizamos riesgos de continuidad y diseñamos planes de sucesión dinámicos con relevos preparados por nivel.',
          },
          {
            title: isEn ? 'High-potential support' : 'Acompañamiento a high potentials',
            description: isEn
              ? 'Individual coaching for key talents to connect potential with concrete, measurable goals.'
              : 'Coaching individual para talentos clave y conexión del potencial con objetivos concretos y medibles.',
          },
        ],
      },
      {
        _type: 'serviceIncludes',
        _key: 'includes',
        layout: 'splitImage',
        items: isEn
          ? [
              'Potential assessments with learning agility models',
              'Structured competency interviews with individual feedback',
              '9-Box Grid matrix with strategic workforce segmentation',
              'Critical role identification and continuity risk analysis',
              'Dynamic succession plans with bench strength prepared by level',
              'Individual 1:1 coaching for key talents',
            ]
          : [
              'Evaluaciones de potencial con modelos de learning agility',
              'Entrevistas estructuradas por competencias con devolución individual',
              'Matriz 9-Box Grid con segmentación estratégica de la fuerza laboral',
              'Identificación de roles críticos y análisis de riesgo de continuidad',
              'Planes de sucesión dinámicos con relevos preparados por nivel',
              'Coaching individual 1 a 1 para talentos clave',
            ],
        image: '/assets/figma/services/includes/includes-potencial.jpg',
      },
      {
        _type: 'caseCards',
        _key: 'case',
        variant: 'featured',
        showHeader: false,
        cases: [{
          title: isEn ? 'Case study' : 'Caso de éxito',
          industry: isEn ? 'Banking and financial services' : 'Banca y servicios financieros',
          slug: isEn ? 'talent-mapping-banking' : 'potencial-talento-banca',
          challenge: isEn
            ? 'High dependence on three key leaders with no defined succession plans and real risk of losing critical knowledge.'
            : 'Alta dependencia de tres líderes clave sin planes de sucesión definidos y riesgo real de pérdida de conocimiento crítico.',
          intervention: isEn
            ? 'Talent mapping with 9-Box Grid, high-potential identification, and executive coaching program for the three priority successors.'
            : 'Mapeo de talento con 9-Box Grid, identificación de high potentials y programa de coaching ejecutivo para los tres relevos prioritarios.',
          result: isEn
            ? 'Two second-line positions filled internally within eight months. Active succession plan for 100% of identified critical roles.'
            : 'Dos posiciones de segunda línea cubiertas internamente en los siguientes ocho meses. Plan de sucesión activo para el 100% de los roles críticos identificados.',
          cover: '/assets/figma/services/case-potencial.jpg',
        }],
      },
      {
        _type: 'relatedServices',
        _key: 'related',
        heading: isEn
          ? 'Potential needs an ecosystem to develop.'
          : 'El potencial necesita un ecosistema para desarrollarse.',
        items: [
          {
            title: isEn ? 'Leadership and coaching' : 'Liderazgo y coaching',
            description: isEn
              ? 'When leaders are part of the problem.'
              : 'Cuando los líderes son parte del problema.',
            icon: 'calendar',
            href: serviceHref(locale, 'liderazgo'),
          },
          {
            title: isEn ? 'Performance management' : 'Gestión del desempeño',
            description: isEn
              ? 'To connect potential with concrete, measurable goals.'
              : 'Para conectar el potencial con objetivos concretos y medibles.',
            icon: 'planning',
            href: serviceHref(locale, 'gestion'),
          },
          {
            title: isEn ? 'Executive recruitment' : 'Reclutamiento ejecutivo',
            description: isEn
              ? 'When internal talent is not enough and you need to look outside.'
              : 'Cuando el talento interno no alcanza y hay que buscar afuera.',
            icon: 'money',
            href: ctas.recruitmentHref,
          },
        ],
      },
      {
        _type: 'ctaBanner',
        _key: 'cta',
        variant: 'services',
        heading: isEn
          ? 'Do you know who your future leaders are?'
          : '¿Tienes claro quiénes son los líderes del futuro en tu organización?',
        subheading: isEn
          ? 'If the answer is no or not quite, it is time to work on it. Let us talk.'
          : 'Si la respuesta es no o no del todo, es momento de trabajarlo. Conversemos.',
        cta: {label: ctas.bookMeeting, href: ctas.contactHref},
        secondaryCta: {label: ctas.freeAssessment, href: ctas.whatsappHref},
      },
      {
        _type: 'faqSection',
        _key: 'faq',
        variant: 'roomy',
        title: isEn ? 'Frequently asked questions' : 'Preguntas frecuentes',
        items: isEn
          ? [
              {
                question: 'What is the 9-Box Grid and what is it for?',
                answer: 'It crosses current performance with future potential in a nine-quadrant matrix. It lets you segment collaborators strategically and make more objective decisions about who to invest in, who to develop, and who is ready for the next step.',
              },
              {
                question: 'How is a person\'s potential evaluated?',
                answer: 'With learning agility models, structured interviews, and calibrated assessments — not intuition alone.',
              },
              {
                question: 'How often should talent mapping be done?',
                answer: 'At least annually for critical roles; every eighteen to twenty-four months for broader populations.',
              },
              {
                question: 'What happens to people not in high-potential quadrants?',
                answer: 'They still receive clear development paths. The matrix guides investment, it does not label people as disposable.',
              },
            ]
          : [
              {
                question: '¿Qué es el 9-Box Grid y para qué sirve?',
                answer: 'Es una herramienta que cruza el desempeño actual de una persona con su potencial futuro en una matriz de nueve cuadrantes. Permite segmentar estratégicamente a los colaboradores y tomar decisiones más objetivas sobre en quién invertir, a quién desarrollar y quién está listo para el siguiente paso.',
              },
              {
                question: '¿Cómo se evalúa el potencial de una persona?',
                answer: 'Con modelos de learning agility, entrevistas estructuradas y evaluaciones calibradas — no solo intuición.',
              },
              {
                question: '¿Cada cuánto tiempo se debería hacer un mapeo de talento?',
                answer: 'Al menos anualmente para roles críticos; cada dieciocho a veinticuatro meses para poblaciones más amplias.',
              },
              {
                question: '¿Qué pasa con las personas que no quedan en los cuadrantes de alto potencial?',
                answer: 'Siguen teniendo rutas de desarrollo claras. La matriz orienta inversión, no etiqueta personas como prescindibles.',
              },
            ],
      },
    ],
    liderazgo: [
      {
        _type: 'hero',
        _key: 'hero',
        variant: 'servicePage',
        eyebrow: isEn ? 'Leadership and coaching' : 'Liderazgo y coaching',
        heading: isEn
          ? 'A leader who does not develop does not stay the same. They fall behind.'
          : 'Un líder que no se desarrolla no se queda igual. Retrocede.',
        subheading: isEn
          ? 'We work with them to become the kind of leader their teams need.'
          : 'Trabajamos con ellos para que se conviertan en el tipo de líder que sus equipos necesitan.',
        image: '/assets/figma/services/hero-liderazgo.jpg',
        primaryCta: {label: ctas.bookMeeting, href: ctas.contactHref},
        secondaryCta: {label: ctas.learnProcess, href: '#proceso'},
      },
      {
        _type: 'splitStatement',
        _key: 'intro',
        heading: isEn
          ? 'The problem is not always the team. Sometimes it is whoever leads it.'
          : 'El problema no siempre es el equipo. A veces es quien lo lidera.',
        body: isEn
          ? 'Many organizations invest in processes, technology, and strategy, and forget to develop the people who must execute all of it. A leader without the right competencies creates demotivated teams, deteriorated climate, and costly turnover. We work with leaders at every level so their development has a direct impact on their teams\' results.'
          : 'Muchas organizaciones invierten en procesos, en tecnología y en estrategia, y se olvidan de desarrollar a las personas que tienen que ejecutar todo eso. Un líder sin las competencias adecuadas genera equipos desmotivados, clima deteriorado y rotación que cuesta caro. Trabajamos con líderes en todos los niveles para que su desarrollo tenga impacto directo en los resultados de sus equipos.',
      },
      {
        _type: 'processCards',
        _key: 'process',
        id: 'proceso',
        heading: isEn
          ? 'Two paths to develop the leadership your organization needs.'
          : 'Dos caminos para desarrollar el liderazgo que tu organización necesita.',
        layout: 'dualPaths',
        steps: [
          {
            title: isEn ? 'Workshops for leaders' : 'Talleres para líderes',
            description: isEn
              ? 'Tailored training programs designed for leadership level and organizational challenges. We work with emerging leaders, middle managers, and senior executives. Experiential methodologies combining frameworks, practice, and reflection. No theory that does not land.'
              : 'Programas formativos diseñados a medida del nivel de liderazgo y de los desafíos específicos de la organización. Trabajamos con líderes emergentes, mandos medios y alta dirección. Metodologías vivenciales que combinan marcos conceptuales, práctica y reflexión. Sin teoría que no aterriza.',
          },
          {
            title: isEn ? 'Individual coaching with the GROW model' : 'Coaching individual con metodología GROW',
            description: isEn
              ? 'Structured 1:1 coaching using the GROW model: Goal, Reality, Options, Will. We help leaders clarify objectives, understand their current reality, explore options, and commit to concrete actions. We do not tell them what to do. We help them discover what they are capable of.'
              : 'Procesos de coaching 1 a 1 estructurados bajo el modelo GROW: Goal, Reality, Options, Will. Ayudamos al líder a clarificar sus objetivos, tomar conciencia de su realidad actual, explorar opciones y comprometerse con acciones concretas. No le decimos qué hacer. Lo ayudamos a descubrir de qué es capaz.',
          },
        ],
      },
      {
        _type: 'serviceIncludes',
        _key: 'includes',
        layout: 'splitImage',
        items: isEn
          ? [
              'Development needs diagnosis by leadership level',
              'Tailored training workshops with experiential methodologies',
              'Individual executive coaching with the GROW model',
              'Follow-up sessions and progress measurement',
              'Individual development plans for leaders in coaching',
              'Soft skills workshops for leadership teams',
            ]
          : [
              'Diagnóstico de necesidades de desarrollo por nivel de liderazgo',
              'Talleres formativos diseñados a medida con metodologías vivenciales',
              'Coaching ejecutivo individual con metodología GROW',
              'Sesiones de seguimiento y medición de avance',
              'Planes de desarrollo individuales para líderes en proceso de coaching',
              'Talleres de habilidades blandas para equipos de liderazgo',
            ],
        image: '/assets/figma/services/includes/includes-liderazgo.jpg',
      },
      {
        _type: 'caseCards',
        _key: 'case',
        variant: 'featured',
        showHeader: false,
        cases: [{
          title: isEn ? 'Case study' : 'Caso de éxito',
          industry: isEn ? 'Industry and manufacturing' : 'Industria y manufactura',
          slug: isEn ? 'leadership-coaching-manufacturing' : 'liderazgo-coaching-manufactura',
          challenge: isEn
            ? 'Middle managers with strong technical expertise but no leadership competencies to manage growing teams.'
            : 'Mandos medios con alta expertise técnica pero sin competencias de liderazgo para gestionar equipos en crecimiento.',
          intervention: isEn
            ? 'Experiential workshop program for middle managers plus individual coaching for the three leaders with the greatest operational impact.'
            : 'Programa de talleres vivenciales para mandos medios más coaching individual para los tres líderes con mayor impacto en la operación.',
          result: isEn
            ? 'Team internal NPS rose 22 points in six months. Turnover in the intervened areas dropped by 30%.'
            : 'NPS interno del equipo subió 22 puntos en seis meses. Rotación en las áreas intervenidas redujo en un 30%.',
          cover: '/assets/figma/services/case-liderazgo.jpg',
        }],
      },
      {
        _type: 'relatedServices',
        _key: 'related',
        heading: isEn
          ? 'Leadership impacts everything else.'
          : 'El liderazgo impacta en todo lo demás.',
        items: [
          {
            title: isEn ? 'Organizational climate' : 'Clima organizacional',
            description: isEn
              ? 'When leadership style is the root cause of poor climate.'
              : 'Cuando el estilo de liderazgo es la causa raíz del mal clima.',
            icon: 'calendar',
            href: serviceHref(locale, 'clima'),
          },
          {
            title: isEn ? 'Talent mapping' : 'Potencial y mapeo de talento',
            description: isEn
              ? 'To identify future leaders before developing them.'
              : 'Para identificar a los líderes del futuro antes de desarrollarlos.',
            icon: 'planning',
            href: serviceHref(locale, 'potencial'),
          },
          {
            title: isEn ? 'Performance management' : 'Gestión del desempeño',
            description: isEn
              ? 'When leaders need to learn how to hold effective performance conversations.'
              : 'Cuando los líderes necesitan aprender a tener conversaciones de desempeño efectivas.',
            icon: 'money',
            href: serviceHref(locale, 'gestion'),
          },
        ],
      },
      {
        _type: 'ctaBanner',
        _key: 'cta',
        variant: 'services',
        heading: isEn
          ? 'Are your leaders developing their teams or just managing tasks?'
          : '¿Tus líderes están desarrollando a sus equipos o solo gestionando tareas?',
        subheading: isEn
          ? 'If the answer gives you doubts, there is probably work to do. Let us talk about your situation.'
          : 'Si la respuesta te genera dudas, probablemente hay trabajo por hacer. Conversemos sobre tu situación.',
        cta: {label: ctas.bookMeeting, href: ctas.contactHref},
        secondaryCta: {label: ctas.freeAssessment, href: ctas.whatsappHref},
      },
      {
        _type: 'faqSection',
        _key: 'faq',
        variant: 'roomy',
        title: isEn ? 'Frequently asked questions' : 'Preguntas frecuentes',
        items: isEn
          ? [
              {
                question: 'What is the GROW model and why do you use it?',
                answer: 'GROW is a coaching methodology that works through four dimensions: Goal (what the leader wants to achieve), Reality (the current situation and obstacles), Options (available alternatives), and Will (commitment to action). We use it because it is oriented toward concrete results, not endless introspection.',
              },
              {
                question: 'How many coaching sessions does a process include?',
                answer: 'Typically between six and twelve sessions over three to six months, depending on scope and the leader\'s availability.',
              },
              {
                question: 'Are leadership workshops standard or tailored?',
                answer: 'They are always tailored. We design content, exercises, and cases based on your organization\'s level, culture, and specific challenges.',
              },
              {
                question: 'Is executive coaching confidential?',
                answer: 'Yes. Individual coaching sessions are confidential between the leader and the coach. We only share aggregate progress indicators agreed with the organization.',
              },
            ]
          : [
              {
                question: '¿Qué es el modelo GROW y por qué lo usan?',
                answer: 'GROW es una metodología de coaching que trabaja cuatro dimensiones: Goal (el objetivo que quiere alcanzar el líder), Reality (la situación actual y los obstáculos), Options (las alternativas disponibles) y Will (el compromiso con la acción). Lo usamos porque está orientado a resultados concretos, no a la introspección sin fin.',
              },
              {
                question: '¿Cuántas sesiones de coaching tiene un proceso?',
                answer: 'Típicamente entre seis y doce sesiones en un periodo de tres a seis meses, según el alcance y la disponibilidad del líder.',
              },
              {
                question: '¿Los talleres de liderazgo son estándar o se diseñan a medida?',
                answer: 'Siempre se diseñan a medida. Construimos contenido, ejercicios y casos según el nivel, la cultura y los desafíos específicos de tu organización.',
              },
              {
                question: '¿El coaching ejecutivo es confidencial?',
                answer: 'Sí. Las sesiones de coaching individual son confidenciales entre el líder y el coach. Solo compartimos indicadores agregados de avance acordados con la organización.',
              },
            ],
      },
    ],
  }

  return pages[key]
}

export function serviceFixtures(slug: string, locale: Locale): PageSection[] | null {
  const key = slugToKey.get(slug)
  if (!key) return null
  return buildSections(locale, key)
}

export function serviceMeta(slug: string, locale: Locale): {title: string; description: string} | null {
  const key = slugToKey.get(slug)
  if (!key) return null
  const sections = serviceFixtures(slug, locale)
  if (!sections) return null
  const hero = sections.find((s) => s._type === 'hero')
  if (!hero || hero._type !== 'hero') return null
  return {
    title: SERVICE_TITLES[key][locale],
    description: hero.subheading || hero.heading,
  }
}

export function serviceAlternateSlugs(slug: string): Partial<Record<Locale, string>> | undefined {
  const key = slugToKey.get(slug)
  if (!key) return undefined
  return {...SERVICE_SLUGS[key]}
}
