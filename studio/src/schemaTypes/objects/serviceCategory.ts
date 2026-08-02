import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceCategory',
  title: 'Service category',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'cta', title: 'Category call to action', type: 'cta'}),
    defineField({
      name: 'items',
      title: 'Services',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'serviceCatalogItem',
          title: 'Service',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              initialValue: 'calendar',
              options: {
                list: [
                  {title: 'Calendar', value: 'calendar'},
                  {title: 'Planning', value: 'planning'},
                  {title: 'Finance', value: 'money'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({name: 'cta', title: 'Call to action', type: 'cta'}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'summary'},
  },
})
