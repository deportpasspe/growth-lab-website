import {sanityClient} from 'sanity:client'

const visualEditingEnabled =
  import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true'
const token = import.meta.env.SANITY_API_READ_TOKEN
const projectId = import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID

function hasSanityConfig() {
  return Boolean(
    projectId &&
      projectId !== '<your-project-id>' &&
      projectId !== 'your-projectID' &&
      projectId !== 'placeholder',
  )
}

/**
 * visualEditingEnabled=true: fetch draft content with stega encoding
 * visualEditingEnabled=false: fetch published content from CDN
 * Returns null when Sanity env is not configured (fixtures take over).
 */
export async function loadQuery<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  if (!hasSanityConfig()) {
    return null
  }

  return sanityClient.fetch<T>(query, params, {
    perspective: visualEditingEnabled ? 'drafts' : 'published',
    useCdn: !visualEditingEnabled,
    ...(visualEditingEnabled && token ? {token, stega: true} : {}),
  })
}
