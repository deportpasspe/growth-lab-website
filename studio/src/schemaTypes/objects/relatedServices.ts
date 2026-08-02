import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'relatedServices',
  title: 'Related services',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Calendar', value: 'calendar'},
                  {title: 'Planning', value: 'planning'},
                  {title: 'Money', value: 'money'},
                ],
              },
            }),
            defineField({name: 'cta', title: 'Link', type: 'cta'}),
          ],
          preview: {select: {title: 'title', subtitle: 'description'}},
        }),
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    select: {title: 'heading'},
  },
})
