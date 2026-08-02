import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutStory',
  title: 'About story',
  type: 'object',
  fields: [
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
      name: 'purposeTitle',
      title: 'Purpose title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'purposeBody',
      title: 'Purpose body',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alt text'})],
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'About story'}),
  },
})
