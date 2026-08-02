import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseCards',
  title: 'Case cards',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Content treatment',
      type: 'string',
      initialValue: 'carousel',
      options: {
        list: [
          {title: 'Carousel', value: 'carousel'},
          {title: 'Featured case', value: 'featured'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'showHeader',
      title: 'Show section header',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'intro', title: 'Intro', type: 'text', rows: 3}),
    defineField({
      name: 'cases',
      title: 'Cases',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'caseStudy'}]}],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Case cards'}),
  },
})
