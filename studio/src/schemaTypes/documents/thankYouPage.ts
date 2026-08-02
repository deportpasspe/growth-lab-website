import {CheckmarkCircleIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'thankYouPage',
  title: 'Thank you page',
  type: 'document',
  icon: CheckmarkCircleIcon,
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'message', title: 'Message', type: 'text', rows: 3}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', language: 'language'},
    prepare: ({title, language}) => ({
      title: title || 'Thank you',
      subtitle: language?.toUpperCase(),
    }),
  },
})
