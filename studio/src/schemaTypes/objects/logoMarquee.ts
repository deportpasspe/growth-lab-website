import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'logoMarquee',
  title: 'Logo marquee',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
          preview: {select: {title: 'name', media: 'image'}},
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Logo marquee'}),
  },
})
