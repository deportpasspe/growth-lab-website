/**
 * Scroll motion runtime.
 *
 * - `data-reveal`            → fade + rise when the element enters the viewport.
 * - `data-reveal="text"`     → words are wrapped in masks and slide up one by one.
 * - `data-reveal-group="ms"` → reveals every nested `data-reveal` at once, staggered.
 * - `data-reveal-on="load"`  → skips the observer and plays right after hydration.
 * - `data-parallax="0.15"`   → translates the element against scroll direction.
 *
 * Reveal animates `transform` and parallax animates `translate`, so Tailwind's
 * own `translate-*` / `scale-*` utilities keep working on the same elements.
 */

import {animateMetric, setupMetrics} from './metrics-motion'

const MOTION_CLASS = 'motion-ready'
const REVEALED_CLASS = 'is-revealed'
const DEFAULT_GROUP_STAGGER = 90
const DEFAULT_PARALLAX_SPEED = 0.12
const MAX_PARALLAX_PROGRESS = 1.5

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

function splitIntoWords(element: HTMLElement): number {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT)
  const textNodes: Text[] = []

  let current = walker.nextNode()
  while (current) {
    textNodes.push(current as Text)
    current = walker.nextNode()
  }

  let index = 0

  for (const textNode of textNodes) {
    const chunks = (textNode.textContent ?? '').split(/(\s+)/).filter(Boolean)
    if (!chunks.some((chunk) => chunk.trim())) continue

    const fragment = document.createDocumentFragment()

    for (const chunk of chunks) {
      if (!chunk.trim()) {
        fragment.append(chunk)
        continue
      }

      const mask = document.createElement('span')
      mask.className = 'reveal-word'

      const inner = document.createElement('span')
      inner.className = 'reveal-word__inner'
      inner.style.setProperty('--word-index', String(index))
      inner.textContent = chunk

      mask.append(inner)
      fragment.append(mask)
      index += 1
    }

    textNode.replaceWith(fragment)
  }

  return index
}

function prepare(element: HTMLElement) {
  if (element.dataset.reveal !== 'text' || element.dataset.revealSplit !== undefined) return

  if (splitIntoWords(element) > 0) {
    element.dataset.revealSplit = ''
  } else {
    element.dataset.reveal = ''
  }
}

function collectTargets(): Map<Element, HTMLElement[]> {
  const targets = new Map<Element, HTMLElement[]>()

  for (const group of document.querySelectorAll<HTMLElement>('[data-reveal-group]')) {
    const members = Array.from(group.querySelectorAll<HTMLElement>('[data-reveal]')).filter(
      (element) => element.closest('[data-reveal-group]') === group,
    )
    if (!members.length) continue

    const stagger = Number(group.dataset.revealGroup) || DEFAULT_GROUP_STAGGER
    members.forEach((element, index) => {
      if (!element.style.getPropertyValue('--reveal-delay')) {
        element.style.setProperty('--reveal-delay', `${index * stagger}ms`)
      }
    })

    targets.set(group, members)
  }

  for (const element of document.querySelectorAll<HTMLElement>('[data-reveal]')) {
    if (element.closest('[data-reveal-group]')) continue
    targets.set(element, [element])
  }

  return targets
}

function setupReveal() {
  const targets = collectTargets()
  if (!targets.size) return

  for (const members of targets.values()) members.forEach(prepare)

  const reveal = (trigger: Element) => {
    targets.get(trigger)?.forEach((element) => {
      element.classList.add(REVEALED_CLASS)
      if (element.hasAttribute('data-metric')) animateMetric(element)
    })
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observer.unobserve(entry.target)
        reveal(entry.target)
      }
    },
    {rootMargin: '0px 0px -10% 0px', threshold: 0.12},
  )

  for (const trigger of targets.keys()) {
    if ((trigger as HTMLElement).dataset.revealOn === 'load') {
      requestAnimationFrame(() => reveal(trigger))
      continue
    }

    observer.observe(trigger)
  }
}

function setupParallax() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]')).map(
    (element) => ({
      element,
      speed: Number(element.dataset.parallax) || DEFAULT_PARALLAX_SPEED,
      visible: false,
    }),
  )
  if (!items.length) return

  let queued = false

  const update = () => {
    queued = false
    const viewport = window.innerHeight || 1

    for (const item of items) {
      if (!item.visible) continue

      const rect = item.element.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - viewport / 2
      const progress = center / (viewport / 2 + rect.height / 2)
      const clamped = Math.max(-MAX_PARALLAX_PROGRESS, Math.min(MAX_PARALLAX_PROGRESS, progress))

      item.element.style.setProperty('translate', `0 ${(clamped * item.speed * 100).toFixed(2)}px`)
    }
  }

  const schedule = () => {
    if (queued) return
    queued = true
    requestAnimationFrame(update)
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const item = items.find(({element}) => element === entry.target)
        if (item) item.visible = entry.isIntersecting
      }
      schedule()
    },
    {rootMargin: '20% 0px'},
  )

  for (const item of items) observer.observe(item.element)

  window.addEventListener('scroll', schedule, {passive: true})
  window.addEventListener('resize', schedule)
  schedule()
}

function disableMotion() {
  document.documentElement.classList.remove(MOTION_CLASS)
  for (const element of document.querySelectorAll<HTMLElement>('[data-parallax]')) {
    element.style.removeProperty('translate')
  }
}

let initialized = false

function start() {
  if (reduceMotion.matches) {
    disableMotion()
    return
  }

  document.documentElement.classList.add(MOTION_CLASS)
  if (initialized) return

  initialized = true
  setupReveal()
  setupParallax()
  setupMetrics()
}

reduceMotion.addEventListener('change', () => {
  if (reduceMotion.matches) disableMotion()
  else start()
})

start()
