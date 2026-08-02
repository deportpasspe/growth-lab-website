import type {SanityImageSource} from '@sanity/image-url'
import {urlFor} from '../../lib/sanity/image'

export const WORLD_MAP_PRESET_KEYS = [
  'us',
  'mx',
  'co',
  'ec',
  'br',
  'uy',
  'cl',
  'es',
  'it',
  'custom',
] as const

export type WorldMapCountryPreset = (typeof WORLD_MAP_PRESET_KEYS)[number]

export type WorldMapMarkerInput = {
  _key?: string
  country: string
  organizations: string[]
  countryPreset?: WorldMapCountryPreset
  flag?: SanityImageSource | string
  top?: number
  left?: number
  active?: boolean
}

export type ResolvedWorldMapMarker = {
  _key?: string
  country: string
  organizations: string[]
  flag?: string
  top: number
  left: number
  active?: boolean
}

const PRESETS: Record<
  Exclude<WorldMapCountryPreset, 'custom'>,
  {top: number; left: number; flag: string}
> = {
  us: {top: 28.45, left: 19.38, flag: '/assets/figma/about/flag-us.png'},
  mx: {top: 41.14, left: 21.88, flag: '/assets/figma/about/flag-mx.png'},
  co: {top: 63.49, left: 34.46, flag: '/assets/figma/about/flag-co.png'},
  ec: {top: 60.62, left: 28.09, flag: '/assets/figma/about/flag-ec.png'},
  br: {top: 73.45, left: 34.96, flag: '/assets/figma/about/flag-br.png'},
  uy: {top: 81.23, left: 29.68, flag: '/assets/figma/about/flag-uy.png'},
  cl: {top: 57.61, left: 30.78, flag: '/assets/figma/about/flag-cl.png'},
  es: {top: 35.42, left: 49.49, flag: '/assets/figma/about/flag-es.png'},
  it: {top: 26.2, left: 52.8, flag: '/assets/figma/about/flag-it.png'},
}

function resolveFlag(flag?: SanityImageSource | string, fallback?: string): string | undefined {
  if (typeof flag === 'string') return flag
  if (flag) return urlFor(flag).width(48).height(48).fit('crop').auto('format').url()
  return fallback
}

export function resolveWorldMapMarker(marker: WorldMapMarkerInput): ResolvedWorldMapMarker {
  const presetKey =
    marker.countryPreset && marker.countryPreset !== 'custom' ? marker.countryPreset : undefined
  const preset = presetKey ? PRESETS[presetKey] : undefined

  const top = presetKey ? preset!.top : marker.top ?? 0
  const left = presetKey ? preset!.left : marker.left ?? 0

  return {
    _key: marker._key,
    country: marker.country,
    organizations: marker.organizations,
    flag: resolveFlag(marker.flag, preset?.flag),
    top,
    left,
    active: marker.active,
  }
}

export function resolveWorldMapMarkers(markers: WorldMapMarkerInput[]): ResolvedWorldMapMarker[] {
  return markers.map(resolveWorldMapMarker)
}
