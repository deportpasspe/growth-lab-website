import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ctaBanner',
  title: 'CTA banner',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Content treatment',
      type: 'string',
      initialValue: 'default',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Recruitment', value: 'recruitment'},
          {title: 'Services', value: 'services'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'subheading', title: 'Subheading', type: 'text', rows: 3}),
    defineField({name: 'cta', title: 'CTA', type: 'cta'}),
    defineField({name: 'secondaryCta', title: 'Secondary CTA', type: 'cta'}),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'CTA banner'}),
  },
})
