import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqSection',
  title: 'FAQ section',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Spacing',
      type: 'string',
      initialValue: 'default',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Roomy', value: 'roomy'},
        ],
        layout: 'radio',
      },
    }),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'faqItem'}],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'FAQ'}),
  },
})
