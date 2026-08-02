import {BulbOutlineIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: BulbOutlineIcon,
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
    defineField({name: 'summary', title: 'Summary', type: 'text', rows: 3}),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'pageBuilder',
    }),
    defineField({
      name: 'hero',
      title: 'Hero (legacy)',
      type: 'object',
      hidden: true,
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'subheading', title: 'Subheading', type: 'text', rows: 3}),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      name: 'pains',
      title: 'Pain points (legacy)',
      type: 'array',
      hidden: true,
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'processSteps',
      title: 'Process steps (legacy)',
      type: 'array',
      hidden: true,
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ (legacy)',
      type: 'array',
      hidden: true,
      of: [{type: 'faqItem'}],
    }),
    defineField({
      name: 'relatedCases',
      title: 'Related cases (legacy)',
      type: 'array',
      hidden: true,
      of: [{type: 'reference', to: [{type: 'caseStudy'}]}],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', language: 'language'},
    prepare: ({title, language}) => ({
      title: title || 'Service',
      subtitle: language?.toUpperCase(),
    }),
  },
})
