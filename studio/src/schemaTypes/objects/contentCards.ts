import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'contentCards',
  title: 'Content cards',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Content pattern',
      type: 'string',
      initialValue: 'lists',
      options: {
        list: [
          {title: 'Lists', value: 'lists'},
          {title: 'Deliverables', value: 'deliverables'},
          {title: 'Industries', value: 'industries'},
          {title: 'Values', value: 'values'},
          {title: 'Principles', value: 'principles'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'intro', title: 'Introduction', type: 'text', rows: 3}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [defineArrayMember({type: 'contentCard'})],
      validation: (Rule) =>
        Rule.required().min(1).custom((cards, context) => {
          const variant = (context.parent as {variant?: string} | undefined)?.variant
          if (variant === 'deliverables' && cards?.length !== 7) {
            return 'Deliverables sections require exactly seven cards'
          }
          if (variant === 'lists' && cards?.length !== 2) {
            return 'List sections require exactly two cards'
          }
          if (variant === 'industries' && cards?.length !== 5) {
            return 'Industry sections require exactly five cards'
          }
          if (variant === 'values' && cards?.length !== 4) {
            return 'Values sections require exactly four cards'
          }
          if (variant === 'principles' && cards?.length !== 3) {
            return 'Principles sections require exactly three cards'
          }
          return true
        }),
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'eyebrow'},
  },
})
