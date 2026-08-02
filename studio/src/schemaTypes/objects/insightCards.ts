import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'insightCards',
  title: 'Insight cards',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'intro', title: 'Intro', type: 'text', rows: 3}),
    defineField({
      name: 'insights',
      title: 'Insights',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'insight'}]}],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Insight cards'}),
  },
})
