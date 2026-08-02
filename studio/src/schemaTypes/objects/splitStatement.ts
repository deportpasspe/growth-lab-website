import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'splitStatement',
  title: 'Split statement',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Layout',
      type: 'string',
      initialValue: 'default',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Method intro', value: 'methodIntro'},
          {title: 'Success banner', value: 'successBanner'},
        ],
        layout: 'radio',
      },
    }),
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'decoration',
      title: 'Decoration',
      type: 'string',
      options: {list: [{title: 'Magenta glow', value: 'magentaGlow'}]},
      hidden: ({parent}) => parent?.variant !== 'default',
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'eyebrow'},
  },
})
