import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contentCard',
  title: 'Content card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
    defineField({
      name: 'emphasis',
      title: 'Emphasized phrase',
      description: 'Optional exact phrase from the title to highlight.',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'List items',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'tone',
      title: 'Semantic tone',
      type: 'string',
      options: {
        list: [
          {title: 'Dark', value: 'dark'},
          {title: 'Teal', value: 'teal'},
          {title: 'Brand', value: 'magenta'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Arrow', value: 'arrow'},
          {title: 'Calendar', value: 'calendar'},
          {title: 'Process', value: 'process'},
          {title: 'Market map', value: 'market'},
          {title: 'Market map on brand surface', value: 'marketBrand'},
          {title: 'Industry calendar', value: 'industryCalendar'},
          {title: 'Industry planning', value: 'industryPlanning'},
          {title: 'Industry finance', value: 'industryMoney'},
          {title: 'Planning', value: 'planning'},
          {title: 'Money', value: 'money'},
          {title: 'Relationship', value: 'relationship'},
        ],
      },
    }),
    defineField({name: 'cta', title: 'Call to action', type: 'cta'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
})
