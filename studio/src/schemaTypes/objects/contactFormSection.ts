import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactFormSection',
  title: 'Contact form',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'intro', title: 'Intro', type: 'text', rows: 3}),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Contact form'}),
  },
})
