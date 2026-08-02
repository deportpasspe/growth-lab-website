import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Content treatment',
      type: 'string',
      initialValue: 'home',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'Recruitment', value: 'recruitment'},
          {title: 'Services index', value: 'services'},
          {title: 'Service page', value: 'servicePage'},
          {title: 'About page', value: 'about'},
          {title: 'Methodology page', value: 'methodology'},
          {title: 'Insights index', value: 'insights'},
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
    defineField({name: 'subheading', title: 'Subheading', type: 'text', rows: 3}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alt text'})],
    }),
    defineField({name: 'primaryCta', title: 'Primary CTA', type: 'cta'}),
    defineField({name: 'secondaryCta', title: 'Secondary CTA', type: 'cta'}),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'eyebrow'},
    prepare: ({title, subtitle}) => ({title: title || 'Hero', subtitle: subtitle || 'Hero'}),
  },
})
