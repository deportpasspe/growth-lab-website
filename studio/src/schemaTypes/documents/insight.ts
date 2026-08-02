import {BookIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'insight',
  title: 'Insight',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3}),
    defineField({
      name: 'contentType',
      title: 'Content type',
      type: 'string',
      initialValue: 'article',
      options: {
        list: [
          {title: 'Article', value: 'article'},
          {title: 'Downloadable guide', value: 'guide'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        defineField({name: 'name', title: 'Name', type: 'string'}),
        defineField({name: 'role', title: 'Role', type: 'string'}),
      ],
    }),
    defineField({
      name: 'readTimeMinutes',
      title: 'Read time (minutes)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(60),
    }),
    defineField({
      name: 'downloadUrl',
      title: 'Download URL',
      type: 'url',
      description: 'Optional link for downloadable guides',
      hidden: ({parent}) => parent?.contentType !== 'guide',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alt text'})],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableText',
    }),
    defineField({
      name: 'related',
      title: 'Related insights',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'insight'}]}],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', language: 'language', media: 'cover'},
    prepare: ({title, language, media}) => ({
      title: title || 'Insight',
      subtitle: language?.toUpperCase(),
      media,
    }),
  },
})
