import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'methodSteps',
  title: 'Method steps',
  type: 'object',
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      initialValue: 'diagram',
      options: {
        list: [
          {title: 'Diagram', value: 'diagram'},
          {title: 'Grid', value: 'grid'},
        ],
        layout: 'radio',
      },
    }),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'intro', title: 'Intro', type: 'text', rows: 3}),
    defineField({
      name: 'featuredTitle',
      title: 'Featured card title',
      type: 'string',
      hidden: ({parent}) => parent?.layout !== 'grid',
    }),
    defineField({
      name: 'featuredDescription',
      title: 'Featured card description',
      type: 'text',
      rows: 4,
      hidden: ({parent}) => parent?.layout !== 'grid',
    }),
    defineField({
      name: 'showCta',
      title: 'Show CTA button',
      type: 'boolean',
      initialValue: true,
      hidden: ({parent}) => parent?.layout !== 'diagram',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
          ],
          preview: {select: {title: 'title'}},
        }),
      ],
      validation: (Rule) =>
        Rule.custom((steps, context) => {
          const layout = (context.parent as {layout?: string} | undefined)?.layout
          if (layout === 'grid' && steps?.length !== 7) {
            return 'Grid layout requires exactly seven steps'
          }
          return true
        }),
    }),
  ],
  preview: {
    select: {title: 'title', layout: 'layout'},
    prepare: ({title, layout}) => ({
      title: title || 'Method steps',
      subtitle: layout === 'grid' ? 'Grid layout' : 'Diagram layout',
    }),
  },
})
