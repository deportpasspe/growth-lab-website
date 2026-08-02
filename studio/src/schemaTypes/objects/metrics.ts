import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'metrics',
  title: 'Metrics',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      initialValue: 3,
      options: {
        list: [
          {title: '3 columns', value: 3},
          {title: '4 columns', value: 4},
        ],
      },
    }),
    defineField({
      name: 'items',
      title: 'Metrics',
      type: 'array',
      validation: (Rule) =>
        Rule.custom((items, context) => {
          const columns = (context.parent as {columns?: number} | undefined)?.columns ?? 3
          const max = columns === 4 ? 4 : 3
          if ((items?.length ?? 0) > max) {
            return `This layout supports up to ${max} metrics`
          }
          return true
        }),
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Calendar', value: 'calendar'},
                  {title: 'Process', value: 'process'},
                  {title: 'Cost', value: 'cost'},
                ],
              },
            }),
          ],
          preview: {select: {title: 'value', subtitle: 'label'}},
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Metrics'}),
  },
})
