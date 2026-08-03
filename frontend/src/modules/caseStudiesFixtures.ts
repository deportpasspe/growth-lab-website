import type {Locale} from '../i18n/routes'
import type {CaseStudyDetail, CaseStudyListItem} from '../lib/caseStudies'

const esList: CaseStudyListItem[] = [
  {
    title: 'Cubrir una Gerencia de Transformación Digital tras cuatro meses de búsqueda interna sin resultado.',
    slug: 'reclutamiento-ejecutivo-banca',
    industry: 'Banca y servicios financieros',
    service: 'Reclutamiento ejecutivo',
    challenge:
      'Cubrir una Gerencia de Transformación Digital tras cuatro meses de búsqueda interna sin resultado.',
    result: 'Proceso cerrado en 28 días. Candidato activo catorce meses después.',
    cover: '/assets/figma/home/case-one.webp',
  },
  {
    title: 'Rotación de mandos medios al 23% sin claridad sobre la causa raíz.',
    slug: 'clima-organizacional-manufactura',
    industry: 'Industria y manufactura',
    service: 'Clima organizacional',
    challenge: 'Rotación de mandos medios al 23% sin claridad sobre la causa raíz.',
    result: 'Rotación redujo a 14% en seis meses.',
    cover: '/assets/figma/home/case-two.webp',
  },
  {
    title: 'Fusión de dos unidades de negocio con culturas distintas y alta tensión interna.',
    slug: 'cultura-organizacional-consumo',
    industry: 'Consumo masivo',
    service: 'Cultura organizacional',
    challenge: 'Fusión de dos unidades de negocio con culturas distintas y alta tensión interna.',
    result: 'Conflictos entre equipos reducidos en 40% en los primeros cuatro meses.',
    cover: '/assets/figma/home/insight-three.webp',
  },
  {
    title: 'Sistema de evaluación anual con baja adopción y sin conexión con los objetivos estratégicos.',
    slug: 'gestion-desempeno-energia',
    industry: 'Energía',
    service: 'Gestión del desempeño',
    challenge:
      'Sistema de evaluación anual con baja adopción y sin conexión con los objetivos estratégicos.',
    result: 'Adopción del sistema subió de 45% a 91% en el primer ciclo.',
    cover: '/assets/figma/home/case-one.webp',
  },
  {
    title: 'Alta dependencia de tres líderes clave sin planes de sucesión definidos.',
    slug: 'potencial-talento-banca',
    industry: 'Banca y servicios financieros',
    service: 'Potencial y mapeo de talento',
    challenge:
      'Alta dependencia de tres líderes clave sin planes de sucesión definidos y riesgo real de pérdida de conocimiento crítico.',
    result:
      'Dos posiciones de segunda línea cubiertas internamente en los siguientes ocho meses. Plan de sucesión activo para el 100% de los roles críticos identificados.',
    cover: '/assets/figma/services/case-potencial.jpg',
  },
  {
    title: 'Mandos medios con alta expertise técnica pero sin competencias de liderazgo.',
    slug: 'liderazgo-coaching-manufactura',
    industry: 'Industria y manufactura',
    service: 'Liderazgo y coaching',
    challenge:
      'Mandos medios con alta expertise técnica pero sin competencias de liderazgo para gestionar equipos en crecimiento.',
    result:
      'NPS interno del equipo subió 22 puntos en seis meses. Rotación en las áreas intervenidas redujo en un 30%.',
    cover: '/assets/figma/services/case-liderazgo.jpg',
  },
]

const enList: CaseStudyListItem[] = [
  {
    title: 'Fill a Digital Transformation Manager role after four months of internal search with no result.',
    slug: 'executive-recruitment-banking',
    industry: 'Banking and financial services',
    service: 'Executive recruitment',
    challenge:
      'Fill a Digital Transformation Manager role after four months of internal search with no result.',
    result: 'Process closed in 28 days. Candidate still active fourteen months later.',
    cover: '/assets/figma/home/case-one.webp',
  },
  {
    title: 'Middle management turnover at 23% with no clarity on the root cause.',
    slug: 'organizational-climate-manufacturing',
    industry: 'Industry and manufacturing',
    service: 'Organizational climate',
    challenge: 'Middle management turnover at 23% with no clarity on the root cause.',
    result: 'Turnover dropped to 14% in six months.',
    cover: '/assets/figma/home/case-two.webp',
  },
  {
    title: 'Merger of two business units with distinct cultures and high internal tension.',
    slug: 'organizational-culture-consumer',
    industry: 'Consumer goods',
    service: 'Organizational culture',
    challenge: 'Merger of two business units with distinct cultures and high internal tension.',
    result: 'Conflicts between teams reduced by 40% in the first four months.',
    cover: '/assets/figma/home/insight-three.webp',
  },
  {
    title: 'Annual evaluation system with low adoption and no link to strategic goals.',
    slug: 'performance-management-energy',
    industry: 'Energy',
    service: 'Performance management',
    challenge: 'Annual evaluation system with low adoption and no link to strategic goals.',
    result: 'System adoption rose from 45% to 91% in the first cycle.',
    cover: '/assets/figma/home/case-one.webp',
  },
  {
    title: 'High dependence on three key leaders with no defined succession plans.',
    slug: 'talent-mapping-banking',
    industry: 'Banking and financial services',
    service: 'Talent mapping',
    challenge:
      'High dependence on three key leaders with no defined succession plans and real risk of losing critical knowledge.',
    result:
      'Two second-line positions filled internally within eight months. Active succession plan for 100% of identified critical roles.',
    cover: '/assets/figma/services/case-potencial.jpg',
  },
  {
    title: 'Middle managers with strong technical expertise but no leadership competencies.',
    slug: 'leadership-coaching-manufacturing',
    industry: 'Industry and manufacturing',
    service: 'Leadership and coaching',
    challenge:
      'Middle managers with strong technical expertise but no leadership competencies to manage growing teams.',
    result:
      'Team internal NPS rose 22 points in six months. Turnover in the intervened areas dropped by 30%.',
    cover: '/assets/figma/services/case-liderazgo.jpg',
  },
]

const esDetail: CaseStudyDetail = {
  ...esList[0],
  summary:
    'Entidad financiera de primer nivel con operaciones a nivel nacional y más de dos mil colaboradores. En un momento de transformación digital acelerada con necesidad urgente de incorporar liderazgo tecnológico al equipo directivo.',
  challengeHeadline: 'Cuatro meses buscando sin resultado.',
  challenge:
    'La organización necesitaba incorporar a un Gerente de Transformación Digital con experiencia en migración de core bancario y gestión de equipos multidisciplinarios. Después de cuatro meses de búsqueda interna los candidatos que llegaban por portales no tenían el seniority ni el fit cultural que el rol exigía.',
  interventionHeadline: 'Primero entendimos la organización. Después salimos a buscar.',
  intervention:
    'Activamos el Growth Talent Method™. Antes de mapear el mercado dedicamos dos semanas a entender el momento de la organización, el estilo de liderazgo del equipo directivo y las competencias críticas del rol más allá del CV. Identificamos 47 perfiles pasivos en el mercado financiero y tecnológico peruano y los evaluamos en múltiples capas. Presentamos una terna con recomendación fundada.',
  result: 'Proceso cerrado en 28 días. Candidato activo catorce meses después.',
  metrics: [
    {
      value: '28',
      label: 'días desde el kick-off hasta la incorporación',
      icon: 'calendar',
    },
    {
      value: '0',
      label: 'fricciones durante el periodo de garantía',
      icon: 'process',
    },
    {
      value: '14',
      label: 'meses lleva el candidato activo en el rol',
      icon: 'cost',
    },
  ],
  relatedService: {title: 'Reclutamiento', slug: 'reclutamiento'},
  relatedCases: [esList[1], esList[4]],
}

const enDetail: CaseStudyDetail = {
  ...enList[0],
  summary:
    'A top-tier financial institution with nationwide operations and more than two thousand employees. At a moment of accelerated digital transformation with an urgent need to bring technology leadership into the executive team.',
  challengeHeadline: 'Four months searching with no result.',
  challenge:
    'The organization needed to hire a Digital Transformation Manager with experience in core banking migration and multidisciplinary team leadership. After four months of internal search, candidates from job boards lacked the seniority and cultural fit the role required.',
  interventionHeadline: 'First we understood the organization. Then we searched.',
  intervention:
    'We activated the Growth Talent Method™. Before mapping the market we spent two weeks understanding the organization’s moment, the executive team’s leadership style, and the role’s critical competencies beyond the CV. We identified 47 passive profiles in Peru’s financial and technology market and evaluated them across multiple layers. We presented a shortlist with a grounded recommendation.',
  result: 'Process closed in 28 days. Candidate still active fourteen months later.',
  metrics: [
    {
      value: '28',
      label: 'days from kick-off to hire',
      icon: 'calendar',
    },
    {
      value: '0',
      label: 'issues during the guarantee period',
      icon: 'process',
    },
    {
      value: '14',
      label: 'months the candidate has been active in the role',
      icon: 'cost',
    },
  ],
  relatedService: {title: 'Recruitment', slug: 'recruitment'},
  relatedCases: [enList[1], enList[4]],
}

export function caseStudiesFixtures(locale: Locale): CaseStudyListItem[] {
  return locale === 'en' ? enList : esList
}

export function caseStudyFixtureBySlug(locale: Locale, slug: string): CaseStudyDetail | null {
  const list = caseStudiesFixtures(locale)
  const item = list.find((entry) => entry.slug === slug)
  if (!item) return null

  const detail = locale === 'en' ? enDetail : esDetail
  if (detail.slug === slug) return detail

  return {
    ...item,
    summary: item.summary,
    metrics: [],
    relatedCases: list.filter((entry) => entry.slug !== slug).slice(0, 2),
  }
}

export function caseStudyDetailFixtures(locale: Locale): Record<string, CaseStudyDetail> {
  const detail = locale === 'en' ? enDetail : esDetail
  return {[detail.slug]: detail}
}
