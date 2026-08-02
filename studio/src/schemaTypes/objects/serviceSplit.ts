import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceSplit',
  title: 'Service split',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'intro', title: 'Intro', type: 'text', rows: 3}),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}]}],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Service split'}),
  },
})
