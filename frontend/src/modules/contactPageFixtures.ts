import type {Locale} from '../i18n/routes'
import {t} from '../i18n'

export function contactHero(locale: Locale) {
  return {
    heading: t(locale, 'contact.heroHeading'),
    subheading: t(locale, 'contact.heroSubheading'),
    image: '/assets/figma/contact/hero.webp',
  }
}

export function contactFaqItems(locale: Locale) {
  return [
    {
      question: t(locale, 'contact.faq.q1'),
      answer: t(locale, 'contact.faq.a1'),
    },
    {
      question: t(locale, 'contact.faq.q2'),
      answer: t(locale, 'contact.faq.a2'),
    },
    {
      question: t(locale, 'contact.faq.q3'),
      answer: t(locale, 'contact.faq.a3'),
    },
    {
      question: t(locale, 'contact.faq.q4'),
      answer: t(locale, 'contact.faq.a4'),
    },
  ]
}

export function contactChannels(locale: Locale) {
  return [
    {
      icon: '/assets/figma/contact/icon-email.svg',
      title: t(locale, 'contact.channels.emailTitle'),
      value: t(locale, 'contact.channels.emailValue'),
      href: `mailto:${t(locale, 'contact.channels.emailValue')}`,
    },
    {
      icon: '/assets/figma/contact/icon-whatsapp.svg',
      title: t(locale, 'contact.channels.whatsappTitle'),
      value: t(locale, 'contact.channels.whatsappValue'),
      href: t(locale, 'contact.channels.whatsappHref'),
    },
    {
      icon: '/assets/figma/contact/icon-linkedin.svg',
      title: t(locale, 'contact.channels.linkedinTitle'),
      value: t(locale, 'contact.channels.linkedinValue'),
      href: t(locale, 'contact.channels.linkedinHref'),
    },
    {
      icon: '/assets/figma/contact/icon-address.svg',
      title: t(locale, 'contact.channels.addressTitle'),
      value: t(locale, 'contact.channels.addressValue'),
    },
  ]
}

export function contactReasons(locale: Locale) {
  return [
    {
      image: '/assets/figma/contact/value-prop-1.webp',
      title: t(locale, 'contact.reasons.r1Title'),
      description: t(locale, 'contact.reasons.r1Body'),
    },
    {
      image: '/assets/figma/contact/value-prop-2.webp',
      title: t(locale, 'contact.reasons.r2Title'),
      description: t(locale, 'contact.reasons.r2Body'),
    },
    {
      image: '/assets/figma/contact/value-prop-3.webp',
      title: t(locale, 'contact.reasons.r3Title'),
      description: t(locale, 'contact.reasons.r3Body'),
    },
  ]
}

export function contactInterestOptions(locale: Locale) {
  return [
    {value: 'executive-recruitment', label: t(locale, 'contact.form.interestExecutive')},
    {value: 'organizational-development', label: t(locale, 'contact.form.interestDevelopment')},
    {value: 'other', label: t(locale, 'contact.form.interestOther')},
  ]
}
