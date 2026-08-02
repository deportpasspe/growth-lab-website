/** Shared GROQ projections — import into query files only */

export const imageProjection = /* groq */ `{
  ...,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  "lqip": asset->metadata.lqip
}`

export const seoProjection = /* groq */ `{
  metaTitle,
  metaDescription,
  ogImage ${imageProjection}
}`

export const linkProjection = /* groq */ `{
  _type,
  label,
  linkType,
  href,
  openInNewTab,
  "internal": internal->{
    _type,
    "slug": slug.current,
    language
  }
}`

export const ctaProjection = /* groq */ `{
  label,
  variant,
  link ${linkProjection}
}`

export const pageBuilderProjection = /* groq */ `{
  _key,
  _type,
  ...,
  image ${imageProjection},
  logos[] {
    name,
    image ${imageProjection}
  },
  cards[] {
    ...,
    cta ${ctaProjection}
  },
  services[]->{
    _id,
    title,
    "slug": slug.current,
    summary,
    language
  },
  cases[]->{
    _id,
    title,
    "slug": slug.current,
    industry,
    summary,
    challenge,
    intervention,
    result,
    cover ${imageProjection},
    language
  },
  insights[]->{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    categories,
    cover ${imageProjection},
    language
  },
  primaryCta ${ctaProjection},
  secondaryCta ${ctaProjection},
  cta ${ctaProjection},
  categories[] {
    _key,
    title,
    summary,
    cta ${ctaProjection},
    items[] {
      _key,
      title,
      description,
      icon,
      cta ${ctaProjection}
    }
  },
  steps[] {
    title,
    description
  },
  items[] {
    ...,
    cta ${ctaProjection}
  },
  markers[] {
    _key,
    country,
    countryPreset,
    organizations,
    top,
    left,
    active,
    flag ${imageProjection}
  },
  mapImage ${imageProjection},
  members[] {
    _key,
    name,
    role,
    bio,
    linkedInUrl,
    photo ${imageProjection}
  }
}`
