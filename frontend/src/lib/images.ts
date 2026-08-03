import type {SanityImageSource} from '@sanity/image-url'
import {urlFor} from './sanity/image'

const STATIC_IMAGE_EXT = /\.(avif|gif|jpe?g|png|webp)$/i

export function staticResponsiveUrl(path: string, width: number): string {
  return path.replace(STATIC_IMAGE_EXT, `-${width}$1`)
}

export function staticSrcset(path: string, widths: number[]): string {
  return widths.map((width) => `${staticResponsiveUrl(path, width)} ${width}w`).join(', ')
}

export function staticLcpPreloadUrl(path: string, width = 640): string {
  return staticResponsiveUrl(path, width)
}

export function sanityHeroSrcset(
  source: SanityImageSource,
  widths: number[] = [640, 1024, 1920],
): string {
  return widths
    .map((width) => {
      const height = Math.round(width * (9 / 16))
      return `${urlFor(source).width(width).height(height).fit('crop').auto('format').url()} ${width}w`
    })
    .join(', ')
}

export function sanityHeroUrl(source: SanityImageSource, width = 1024): string {
  const height = Math.round(width * (9 / 16))
  return urlFor(source).width(width).height(height).fit('crop').auto('format').url()
}

export function sanityLcpPreloadUrl(source: SanityImageSource): string {
  return sanityHeroUrl(source, 640)
}

export function resolveHeroImage(image: string | SanityImageSource | undefined, fallback: string) {
  if (typeof image === 'string') {
    return {
      src: image,
      srcset: staticSrcset(image, [640, 1024]),
      lcpPreload: staticLcpPreloadUrl(image),
      width: 1024,
      height: 572,
    }
  }

  if (image) {
    return {
      src: sanityHeroUrl(image),
      srcset: sanityHeroSrcset(image),
      lcpPreload: sanityLcpPreloadUrl(image),
      width: 1024,
      height: 576,
    }
  }

  return {
    src: fallback,
    srcset: staticSrcset(fallback, [640, 1024]),
    lcpPreload: staticLcpPreloadUrl(fallback),
    width: 1024,
    height: 572,
  }
}
