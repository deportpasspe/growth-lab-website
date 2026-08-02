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
        eyebrow: isEn ? 'Organizational development' : 'Desarrollo organizacional',
        heading: isEn
          ? 'If you do not know what is really happening in your organization, you cannot fix it.'
          : 'Si no sabes qué está pasando realmente en tu organización, no puedes arreglarlo.',
        subheading: isEn
          ? 'We measure climate with method and turn results into an action plan your team can execute.'
          : 'Medimos el clima con método y convertimos los resultados en un plan de acción que tu equipo puede ejecutar.',
        image: '/assets/figma/services/hero.webp',
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
          cover: '/assets/figma/services/includes-placeholder.webp',
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
        eyebrow: isEn ? 'Organizational development' : 'Desarrollo organizacional',
        heading: isEn
          ? 'Every company has a culture. The question is whether it is the one it needs.'
          : 'Toda empresa tiene una cultura. La pregunta es si es la que necesita.',
        subheading: isEn
          ? 'We close the gap between declared culture and lived culture so strategy can actually execute.'
          : 'Cerramos la brecha entre la cultura declarada y la cultura vivida para que la estrategia pueda ejecutarse.',
        image: '/assets/figma/services/hero.webp',
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
              ? 'We facilitate participatory processes to define values and translate them into observable behaviors leaders can model.'
              : 'Facilitamos procesos participativos para definir valores y traducirlos en conductas observables que los líderes puedan modelar.',
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
              'Participatory values definition workshops',
              'Values translated into observable behaviors',
              'Transformation plan with milestones and owners',
              'Support for leaders as change agents',
            ]
          : [
              'Diagnóstico cultural cuantitativo y cualitativo',
              'Talleres participativos de definición de valores',
              'Valores traducidos en comportamientos observables',
              'Plan de transformación con hitos y responsables',
              'Acompañamiento a líderes como agentes de cambio',
            ],
        image: '/assets/figma/services/includes/includes-cultura.webp',
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
          cover: '/assets/figma/services/includes-placeholder.webp',
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
          ? 'If there is a gap between what you declare and what people experience, we should talk.'
          : 'Si hay brecha entre lo que declaras y lo que la gente vive, deberíamos conversar.',
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
                answer: 'It depends on scope and starting point. Focused interventions can run three to six months; broader programs often extend twelve to eighteen months.',
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
                answer: 'Depende del alcance y el punto de partida. Intervenciones acotadas pueden durar tres a seis meses; programas más amplios suelen extenderse doce a dieciocho meses.',
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
        eyebrow: isEn ? 'Organizational development' : 'Desarrollo organizacional',
        heading: isEn
          ? 'A performance system nobody uses is not a system. It is bureaucracy.'
          : 'Un sistema de desempeño que nadie usa no es un sistema, es burocracia.',
        subheading: isEn
          ? 'We design models leaders actually want to use because they connect individual performance to business strategy.'
          : 'Diseñamos modelos que los líderes realmente quieren usar porque conectan el desempeño individual con la estrategia del negocio.',
        image: '/assets/figma/services/hero.webp',
        primaryCta: {label: ctas.learnMethod, href: ctas.methodHref},
        secondaryCta: {label: ctas.bookMeeting, href: ctas.contactHref},
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
            title: isEn ? 'End-to-end evaluation' : 'Evaluación end-to-end',
            description: isEn
              ? 'We implement the full cycle: objective setting, evaluations, calibrations, feedback, and adoption tracking so the system actually gets used.'
              : 'Implementamos el ciclo completo: definición de objetivos, evaluaciones, calibraciones, feedback y seguimiento de adopción para que el sistema realmente se use.',
          },
          {
            title: isEn ? 'Feedback and calibration' : 'Feedback y calibración',
            description: isEn
              ? 'We train leaders to hold effective feedback conversations and facilitate calibration sessions so evaluations are fair, consistent, and actionable.'
              : 'Capacitamos a los líderes para conversaciones de feedback efectivas y facilitamos sesiones de calibración para que las evaluaciones sean justas, consistentes y accionables.',
          },
          {
            title: isEn ? 'Adoption and continuous improvement' : 'Adopción y mejora continua',
            description: isEn
              ? 'We track adoption metrics, identify friction points, and iterate the model so performance management becomes a habit, not a yearly formality.'
              : 'Medimos la adopción, identificamos puntos de fricción e iteramos el modelo para que la gestión del desempeño sea un hábito, no un trámite anual.',
          },
        ],
      },
      {
        _type: 'serviceIncludes',
        _key: 'includes',
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
        image: '/assets/figma/services/includes-placeholder.webp',
      },
      {
        _type: 'caseCards',
        _key: 'case',
        variant: 'featured',
        showHeader: false,
        cases: [{
          title: isEn ? 'Case study' : 'Caso de éxito',
          industry: isEn ? 'Banking and finance' : 'Banca y finanzas',
          slug: isEn ? 'performance-management-energy' : 'gestion-desempeno-energia',
          challenge: isEn
            ? 'Performance system with 45% adoption and unclear objectives across teams.'
            : 'Sistema de desempeño con 45% de adopción y objetivos poco claros entre equipos.',
          intervention: isEn
            ? 'Model redesign, objective cascade workshops, and leader feedback training.'
            : 'Rediseño del modelo, talleres de cascadeo de objetivos y entrenamiento en feedback para líderes.',
          result: isEn
            ? 'System adoption rose from 45% to 91% in the first cycle. 80% of collaborators reported clarity on objectives.'
            : 'Adopción del sistema subió de 45% a 91% en el primer ciclo. 80% de colaboradores reportó claridad sobre sus objetivos.',
          cover: '/assets/figma/services/includes-placeholder.webp',
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
              ? 'When atmosphere issues block performance conversations.'
              : 'Cuando problemas de ambiente bloquean conversaciones de desempeño.',
            icon: 'calendar',
            href: serviceHref(locale, 'clima'),
          },
          {
            title: isEn ? 'Organizational culture' : 'Cultura organizacional',
            description: isEn
              ? 'When behaviors need to align before the system can work.'
              : 'Cuando los comportamientos deben alinearse antes de que el sistema funcione.',
            icon: 'calendar',
            href: serviceHref(locale, 'cultura'),
          },
          {
            title: isEn ? 'Leadership and coaching' : 'Liderazgo y coaching',
            description: isEn
              ? 'When leaders need to learn how to give feedback.'
              : 'Cuando los líderes necesitan aprender a dar feedback.',
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
        eyebrow: isEn ? 'Organizational development' : 'Desarrollo organizacional',
        heading: isEn
          ? 'Talent you cannot see does not develop. Sooner or later, it leaves.'
          : 'El talento que no se ve, no se desarrolla. Y tarde o temprano se va.',
        subheading: isEn
          ? 'Do you know who your future leaders are — or are you finding out when it is already too late?'
          : '¿Sabes quiénes son los líderes del futuro en tu organización? ¿O lo estás descubriendo cuando ya es tarde?',
        image: '/assets/figma/services/hero.webp',
        primaryCta: {label: ctas.learnMethod, href: ctas.methodHref},
        secondaryCta: {label: ctas.bookMeeting, href: ctas.contactHref},
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
        heading: isEn
          ? 'Four steps to map the talent you already have.'
          : 'Cuatro pasos para mapear el talento que ya tienes.',
        layout: 'accordionColumns',
        steps: [
          {
            title: isEn ? 'Potential assessment' : 'Evaluación de potencial',
            description: isEn
              ? 'We apply learning agility models and structured competency interviews conducted by specialized consultants.'
              : 'Aplicamos modelos basados en learning agility y entrevistas estructuradas por competencias conducidas por consultores especializados.',
          },
          {
            title: isEn ? 'Potential matrices' : 'Matrices de potencial',
            description: isEn
              ? '9-Box Grid segmentation to map performance versus potential across your workforce.'
              : 'Segmentación con 9-Box Grid para mapear desempeño versus potencial en tu fuerza laboral.',
          },
          {
            title: isEn ? 'Succession plans' : 'Planes de sucesión',
            description: isEn
              ? 'Critical role identification and continuity risk analysis with actionable succession paths.'
              : 'Identificación de roles críticos y análisis de riesgo de continuidad con rutas de sucesión accionables.',
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
        items: isEn
          ? [
              'Potential assessments with learning agility models',
              'Structured competency interviews with individual feedback',
              '9-Box Grid matrix with strategic workforce segmentation',
              'Critical role identification and continuity risk analysis',
              'Individual 1:1 coaching for key talents',
            ]
          : [
              'Evaluaciones de potencial con modelos de learning agility',
              'Entrevistas estructuradas por competencias con devolución individual',
              'Matriz 9-Box Grid con segmentación estratégica de la fuerza laboral',
              'Identificación de roles críticos y análisis de riesgo de continuidad',
              'Coaching individual 1 a 1 para talentos clave',
            ],
        image: '/assets/figma/services/includes-placeholder.webp',
      },
      {
        _type: 'caseCards',
        _key: 'case',
        variant: 'featured',
        showHeader: false,
        cases: [{
          title: isEn ? 'Case study' : 'Caso de éxito',
          industry: isEn ? 'Energy' : 'Energía',
          slug: isEn ? 'talent-mapping-banking' : 'potencial-talento-banca',
          challenge: isEn
            ? 'No visibility on bench strength for critical leadership roles.'
            : 'Sin visibilidad sobre la fuerza de relevo para roles de liderazgo críticos.',
          intervention: isEn
            ? 'Talent mapping with 9-Box Grid, high-potential identification, and executive coaching for top three successors.'
            : 'Mapeo de talento con 9-Box Grid, identificación de high potentials y programa de coaching ejecutivo para los tres relevos prioritarios.',
          result: isEn
            ? 'Two second-line positions filled internally within eight months. Active succession plan for 100% of critical roles.'
            : 'Dos posiciones de segunda línea cubiertas internamente en los siguientes ocho meses. Plan de sucesión activo para el 100% de los roles críticos identificados.',
          cover: '/assets/figma/services/includes-placeholder.webp',
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
              ? 'To connect potential with concrete, measurable goals.'
              : 'Para conectar el potencial con objetivos concretos y medibles.',
            icon: 'money',
            href: serviceHref(locale, 'liderazgo'),
          },
          {
            title: isEn ? 'Performance management' : 'Gestión del desempeño',
            description: isEn
              ? 'When current performance data must inform potential decisions.'
              : 'Cuando los datos de desempeño actual deben informar decisiones de potencial.',
            icon: 'planning',
            href: serviceHref(locale, 'gestion'),
          },
          {
            title: isEn ? 'Executive recruitment' : 'Reclutamiento ejecutivo',
            description: isEn
              ? 'When internal talent is not enough and you need to look outside.'
              : 'Cuando el talento interno no alcanza y hay que buscar afuera.',
            icon: 'calendar',
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
          ? 'If not, structured mapping is the first step. Let us talk about your situation.'
          : 'Si no, un mapeo estructurado es el primer paso. Conversemos sobre tu situación.',
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
                answer: 'It crosses current performance with future potential in a nine-quadrant matrix to segment collaborators and decide where to invest development.',
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
                answer: 'Es una herramienta que cruza el desempeño actual de una persona con su potencial futuro en una matriz de nueve cuadrantes. Permite segmentar estratégicamente a los colaboradores y tomar decisiones más objetivas sobre en quién invertir.',
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
        eyebrow: isEn ? 'Organizational development' : 'Desarrollo organizacional',
        heading: isEn
          ? 'Leaders are not born. They are developed.'
          : 'Los líderes no nacen, se desarrollan.',
        subheading: isEn
          ? 'No recipes. No theory that never reaches practice. Two paths to build the leadership your organization needs.'
          : 'Sin recetas. Sin teoría que no aterriza. Dos caminos para construir el liderazgo que tu organización necesita.',
        image: '/assets/figma/services/hero.webp',
        primaryCta: {label: ctas.learnMethod, href: ctas.methodHref},
        secondaryCta: {label: ctas.bookMeeting, href: ctas.contactHref},
      },
      {
        _type: 'splitStatement',
        _key: 'intro',
        heading: isEn
          ? 'Leadership development fails when it stays in the classroom.'
          : 'El desarrollo de liderazgo falla cuando se queda en el aula.',
        body: isEn
          ? 'Many organizations invest in leadership programs that generate enthusiasm in the workshop and disappear on Monday. The problem is not the content. It is that nobody translates it into daily practice. We work with experiential methodologies and structured coaching processes that connect insight with action.'
          : 'Muchas organizaciones invierten en programas de liderazgo que generan entusiasmo en el taller y desaparecen el lunes. El problema no es el contenido. Es que nadie lo traduce en práctica diaria. Trabajamos con metodologías vivenciales y procesos de coaching estructurados que conectan la reflexión con la acción.',
      },
      {
        _type: 'processCards',
        _key: 'process',
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
        items: isEn
          ? [
              'Leadership workshops tailored by level and challenge',
              'Experiential methodologies with practice and reflection',
              'Individual GROW coaching processes for leaders',
              'Competency-based feedback and development plans',
              'Follow-up sessions to sustain behavioral change',
            ]
          : [
              'Talleres de liderazgo diseñados a medida por nivel y desafío',
              'Metodologías vivenciales con práctica y reflexión',
              'Procesos de coaching individual GROW para líderes',
              'Feedback por competencias y planes de desarrollo',
              'Sesiones de seguimiento para sostener el cambio conductual',
            ],
        image: '/assets/figma/services/includes-placeholder.webp',
      },
      {
        _type: 'caseCards',
        _key: 'case',
        variant: 'featured',
        showHeader: false,
        cases: [{
          title: isEn ? 'Case study' : 'Caso de éxito',
          industry: isEn ? 'Financial services' : 'Servicios financieros',
          slug: isEn ? 'leadership-coaching-manufacturing' : 'liderazgo-coaching-manufactura',
          challenge: isEn
            ? 'Newly promoted managers struggling with team conversations and feedback.'
            : 'Mandos medios recién promovidos con dificultades para conversaciones de equipo y feedback.',
          intervention: isEn
            ? 'Leadership workshop series plus six-month GROW coaching program for twelve managers.'
            : 'Serie de talleres de liderazgo más programa de coaching GROW de seis meses para doce mandos medios.',
          result: isEn
            ? '87% of participants reported greater confidence in difficult conversations. Team engagement scores rose 18 points in four months.'
            : '87% de participantes reportó mayor confianza en conversaciones difíciles. Puntaje de engagement de equipos subió 18 puntos en cuatro meses.',
          cover: '/assets/figma/services/includes-placeholder.webp',
        }],
      },
      {
        _type: 'relatedServices',
        _key: 'related',
        heading: isEn
          ? 'Leadership connects with the rest of the system.'
          : 'El liderazgo conecta con el resto del sistema.',
        items: [
          {
            title: isEn ? 'Organizational culture' : 'Cultura organizacional',
            description: isEn
              ? 'When leaders must model the behaviors the culture requires.'
              : 'Cuando los líderes deben modelar los comportamientos que la cultura requiere.',
            icon: 'calendar',
            href: serviceHref(locale, 'cultura'),
          },
          {
            title: isEn ? 'Performance management' : 'Gestión del desempeño',
            description: isEn
              ? 'When leaders need tools to hold effective feedback conversations.'
              : 'Cuando los líderes necesitan herramientas para conversaciones de feedback efectivas.',
            icon: 'planning',
            href: serviceHref(locale, 'gestion'),
          },
          {
            title: isEn ? 'Talent mapping' : 'Potencial y mapeo de talento',
            description: isEn
              ? 'To connect leadership development with succession and high-potential plans.'
              : 'Para conectar el desarrollo de liderazgo con planes de sucesión y high potentials.',
            icon: 'money',
            href: serviceHref(locale, 'potencial'),
          },
        ],
      },
      {
        _type: 'ctaBanner',
        _key: 'cta',
        variant: 'services',
        heading: isEn
          ? 'Are your leaders ready for what comes next?'
          : '¿Tus líderes están listos para lo que viene?',
        subheading: isEn
          ? 'If development stays in the classroom, it will not change results. Let us talk about your situation.'
          : 'Si el desarrollo se queda en el aula, no cambiará resultados. Conversemos sobre tu situación.',
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
                question: 'What is the difference between workshops and coaching?',
                answer: 'Workshops build shared language and practice in groups. Coaching goes deeper with individual leaders on their specific challenges and commitments.',
              },
              {
                question: 'What is the GROW coaching model?',
                answer: 'Goal, Reality, Options, Will — a structured framework to clarify objectives, assess the current situation, explore alternatives, and commit to action.',
              },
              {
                question: 'How long does a coaching process take?',
                answer: 'Typically six to twelve sessions over three to six months, depending on scope and leader availability.',
              },
              {
                question: 'Can workshops and coaching be combined?',
                answer: 'Yes. Many organizations start with workshops to align language and follow with coaching for leaders who need individualized support.',
              },
            ]
          : [
              {
                question: '¿Cuál es la diferencia entre talleres y coaching?',
                answer: 'Los talleres construyen lenguaje compartido y práctica en grupo. El coaching profundiza con líderes individuales en sus desafíos y compromisos específicos.',
              },
              {
                question: '¿Qué es el modelo de coaching GROW?',
                answer: 'Goal, Reality, Options, Will — un marco estructurado para clarificar objetivos, evaluar la situación actual, explorar alternativas y comprometerse con acciones.',
              },
              {
                question: '¿Cuánto dura un proceso de coaching?',
                answer: 'Típicamente entre seis y doce sesiones en tres a seis meses, según el alcance y la disponibilidad del líder.',
              },
              {
                question: '¿Se pueden combinar talleres y coaching?',
                answer: 'Sí. Muchas organizaciones empiezan con talleres para alinear lenguaje y continúan con coaching para líderes que necesitan acompañamiento individual.',
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
  const sections = serviceFixtures(slug, locale)
  if (!sections) return null
  const hero = sections.find((s) => s._type === 'hero')
  if (!hero || hero._type !== 'hero') return null
  return {
    title: hero.heading,
    description: hero.subheading || hero.heading,
  }
}
