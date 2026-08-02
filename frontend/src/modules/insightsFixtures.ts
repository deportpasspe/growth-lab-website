import type {PortableTextBlock} from '@portabletext/types'
import type {Locale} from '../i18n/routes'
import type {InsightItem} from '../lib/insights'

export type InsightDetailItem = InsightItem & {
  body?: PortableTextBlock[]
  related?: InsightItem[]
}

const esInsights: InsightDetailItem[] = [
  {
    _id: 'insight-ia-reclutamiento',
    title: '¿Cómo está cambiando la IA el reclutamiento ejecutivo en Perú?',
    excerpt:
      'La inteligencia artificial automatiza el screening. Pero el criterio para elegir a un CFO o un Gerente General no se delega. Te explicamos dónde termina la tecnología y empieza el juicio.',
    slug: 'ia-reclutamiento-ejecutivo-peru',
    categories: ['Tendencias'],
    contentType: 'article',
    publishedAt: '2026-06-01T12:00:00.000Z',
    readTimeMinutes: 3,
    cover: '/assets/figma/insights/featured.webp',
    author: {
      name: '[Nombre del consultor]',
      role: 'Socio Growth Lab Consulting',
    },
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'intro-span',
            text: 'La inteligencia artificial puede encontrar mil CVs en segundos. Pero no puede leer una sala, entender la dinámica de un equipo directivo ni recomendar con criterio. Eso sigue siendo trabajo humano.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'h2-1',
        style: 'h2',
        markDefs: [],
        children: [{_type: 'span', _key: 'h2-1-span', text: 'Lo que la IA hace bien', marks: []}],
      },
      {
        _type: 'block',
        _key: 'p-1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'p-1-span',
            text: 'El screening masivo de candidatos es donde la tecnología tiene mayor impacto. Procesar CVs, identificar patrones en trayectorias profesionales y mapear el mercado de talento activo son tareas donde los algoritmos superan ampliamente la capacidad humana en velocidad y escala.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'h2-2',
        style: 'h2',
        markDefs: [],
        children: [{_type: 'span', _key: 'h2-2-span', text: 'El riesgo de delegar demasiado', marks: []}],
      },
      {
        _type: 'block',
        _key: 'p-2',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'p-2-span',
            text: 'El problema aparece cuando se aplica la misma lógica a posiciones ejecutivas. Algunas organizaciones están usando IA para filtrar candidatos de liderazgo con los mismos criterios que usarían para roles masivos.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'h2-3',
        style: 'h2',
        markDefs: [],
        children: [{_type: 'span', _key: 'h2-3-span', text: 'La conclusión práctica', marks: []}],
      },
      {
        _type: 'block',
        _key: 'p-3',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'p-3-span',
            text: 'La tecnología y el criterio humano no son excluyentes. La clave está en saber qué le pides a cada uno. Usa la IA para llegar más lejos y más rápido en la búsqueda. Reserva el juicio humano para lo que realmente importa: evaluar, recomendar y decidir.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: 'insight-culture-fit',
    title: 'Lo que suele equivocarse el “culture fit”',
    excerpt:
      'Contratar por semejanza no es lo mismo que contratar por contribución.',
    slug: 'culture-fit-equivocado',
    categories: ['Talento'],
    contentType: 'article',
    publishedAt: '2026-05-01T12:00:00.000Z',
    readTimeMinutes: 4,
    cover: '/assets/figma/home/insight-one.webp',
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'intro-span',
            text: 'El “culture fit” se usa a menudo como atajo para contratar personas que se parecen al equipo actual. Eso reduce fricción a corto plazo, pero también limita la diversidad de pensamiento y la capacidad de la organización para adaptarse.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: 'insight-succession',
    title: 'Sucesión sin teatro',
    excerpt:
      'Señales prácticas de que alguien está listo para el siguiente asiento.',
    slug: 'sucesion-sin-teatro',
    categories: ['Liderazgo'],
    contentType: 'article',
    publishedAt: '2026-04-10T12:00:00.000Z',
    readTimeMinutes: 4,
    cover: '/assets/figma/home/insight-two.webp',
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'intro-span',
            text: 'La sucesión real no se anuncia en un slide de comité. Se observa en decisiones concretas: cómo alguien asume responsabilidad bajo presión, cómo desarrolla a otros y si puede sostener resultados sin depender del rol anterior.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: 'insight-playbook-hiring',
    title: 'Playbook de Hiring con métricas accionables',
    excerpt:
      'cómo definir KPIs, armar tu embudo de selección y calcular Time to Hire y Quality of Hire.',
    slug: 'playbook-hiring-metricas',
    categories: ['Reclutamiento'],
    contentType: 'guide',
    publishedAt: '2026-05-15T12:00:00.000Z',
    readTimeMinutes: 5,
    cover: '/assets/figma/home/insight-one.webp',
    downloadUrl: 'https://growthlab.pe',
  },
  {
    _id: 'insight-clima',
    title: 'Clima organizacional: cómo pasar del diagnóstico a la acción sin perder el impulso.',
    excerpt:
      'Los diagnósticos de clima suelen terminar en presentaciones que nadie ejecuta. Aquí explicamos por qué pasa y cómo evitarlo.',
    slug: 'clima-organizacional-diagnostico-accion',
    categories: ['Clima'],
    contentType: 'article',
    publishedAt: '2026-04-20T12:00:00.000Z',
    readTimeMinutes: 4,
    cover: '/assets/figma/home/insight-two.webp',
  },
  {
    _id: 'insight-cultura',
    title: 'Cultura organizacional: cómo pasar del diagnóstico a la acción sin perder el impulso.',
    excerpt:
      'Cómo identificar la brecha entre cultura declarada y cultura real, y por dónde empezar a cerrarla.',
    slug: 'cultura-organizacional-diagnostico-accion',
    categories: ['Cultura'],
    contentType: 'article',
    publishedAt: '2026-03-10T12:00:00.000Z',
    readTimeMinutes: 4,
    cover: '/assets/figma/home/insight-three.webp',
  },
]

const enInsights: InsightDetailItem[] = [
  {
    _id: 'insight-ia-recruitment',
    title: 'How is AI changing executive recruitment in Peru?',
    excerpt:
      'Artificial intelligence automates screening. But the judgment to choose a CFO or General Manager is not delegated. We explain where technology ends and judgment begins.',
    slug: 'ai-executive-recruitment-peru',
    categories: ['Trends'],
    contentType: 'article',
    publishedAt: '2026-06-01T12:00:00.000Z',
    readTimeMinutes: 3,
    cover: '/assets/figma/insights/featured.webp',
    author: {
      name: '[Consultant name]',
      role: 'Partner, Growth Lab Consulting',
    },
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'intro-span',
            text: 'Artificial intelligence can find a thousand resumes in seconds. But it cannot read a room, understand executive team dynamics, or recommend with judgment. That remains human work.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'h2-1',
        style: 'h2',
        markDefs: [],
        children: [{_type: 'span', _key: 'h2-1-span', text: 'What AI does well', marks: []}],
      },
      {
        _type: 'block',
        _key: 'p-1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'p-1-span',
            text: 'High-volume candidate screening is where technology has the greatest impact. Processing resumes, identifying career patterns, and mapping the active talent market are tasks where algorithms far exceed human speed and scale.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: 'insight-culture-fit',
    title: 'What “culture fit” usually gets wrong',
    excerpt: 'Hiring for sameness is not the same as hiring for contribution.',
    slug: 'culture-fit-gets-wrong',
    categories: ['Talent'],
    contentType: 'article',
    publishedAt: '2026-05-01T12:00:00.000Z',
    readTimeMinutes: 4,
    cover: '/assets/figma/home/insight-one.webp',
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'intro-span',
            text: '“Culture fit” is often used as shorthand for hiring people who resemble the current team. That reduces short-term friction but also limits diversity of thought and the organization’s ability to adapt.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: 'insight-succession',
    title: 'Succession without the theater',
    excerpt: 'Practical signals that someone is ready for the next seat.',
    slug: 'succession-without-theater',
    categories: ['Leadership'],
    contentType: 'article',
    publishedAt: '2026-04-10T12:00:00.000Z',
    readTimeMinutes: 4,
    cover: '/assets/figma/home/insight-two.webp',
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'intro-span',
            text: 'Real succession is not announced on a committee slide. It shows up in concrete decisions: how someone takes ownership under pressure, develops others, and sustains results without relying on the previous role.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: 'insight-hiring-playbook',
    title: 'Hiring playbook with actionable metrics',
    excerpt:
      'How to define KPIs, build your selection funnel, and calculate Time to Hire and Quality of Hire.',
    slug: 'hiring-playbook-metrics',
    categories: ['Recruitment'],
    contentType: 'guide',
    publishedAt: '2026-05-15T12:00:00.000Z',
    readTimeMinutes: 5,
    cover: '/assets/figma/home/insight-one.webp',
    downloadUrl: 'https://growthlab.pe',
  },
  {
    _id: 'insight-climate',
    title: 'Organizational climate: how to move from diagnosis to action without losing momentum.',
    excerpt:
      'Climate assessments often end in presentations nobody executes. Here is why that happens and how to avoid it.',
    slug: 'organizational-climate-diagnosis-action',
    categories: ['Climate'],
    contentType: 'article',
    publishedAt: '2026-04-20T12:00:00.000Z',
    readTimeMinutes: 4,
    cover: '/assets/figma/home/insight-two.webp',
  },
  {
    _id: 'insight-culture',
    title: 'Organizational culture: how to move from diagnosis to action without losing momentum.',
    excerpt:
      'How to identify the gap between declared culture and real culture, and where to start closing it.',
    slug: 'organizational-culture-diagnosis-action',
    categories: ['Culture'],
    contentType: 'article',
    publishedAt: '2026-03-10T12:00:00.000Z',
    readTimeMinutes: 4,
    cover: '/assets/figma/home/insight-three.webp',
  },
]

function attachRelated(items: InsightDetailItem[]): InsightDetailItem[] {
  return items.map((item) => ({
    ...item,
    related: items.filter((other) => other.slug !== item.slug).slice(0, 3),
  }))
}

export function insightsFixtures(locale: Locale): InsightDetailItem[] {
  const items = locale === 'en' ? enInsights : esInsights
  return attachRelated(items)
}

export function insightFixtureBySlug(locale: Locale, slug: string): InsightDetailItem | undefined {
  return insightsFixtures(locale).find((item) => item.slug === slug)
}
