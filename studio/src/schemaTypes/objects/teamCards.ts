import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamCards',
  title: 'Team cards',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'intro', title: 'Introduction', type: 'text', rows: 3}),
    defineField({
      name: 'members',
      title: 'Team members',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'bio',
              title: 'Bio',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'alt', type: 'string', title: 'Alt text'})],
            }),
            defineField({
              name: 'linkedInUrl',
              title: 'LinkedIn URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({scheme: ['http', 'https']}).warning('Use a full https:// URL'),
            }),
          ],
          preview: {
            select: {title: 'name', subtitle: 'role', media: 'photo'},
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'Team cards'}),
  },
})
