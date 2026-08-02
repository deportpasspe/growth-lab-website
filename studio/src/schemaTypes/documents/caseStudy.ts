import {BarChartIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case study',
  type: 'document',
  icon: BarChartIcon,
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
    defineField({name: 'industry', title: 'Industry', type: 'string'}),
    defineField({name: 'service', title: 'Service', type: 'string'}),
    defineField({name: 'summary', title: 'Summary', type: 'text', rows: 3}),
    defineField({name: 'challengeHeadline', title: 'Challenge headline', type: 'string'}),
    defineField({name: 'challenge', title: 'Challenge', type: 'text', rows: 4}),
    defineField({name: 'interventionHeadline', title: 'Intervention headline', type: 'string'}),
    defineField({name: 'intervention', title: 'Intervention', type: 'text', rows: 4}),
    defineField({name: 'result', title: 'Result', type: 'text', rows: 4}),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Calendar', value: 'calendar'},
                  {title: 'Process', value: 'process'},
                  {title: 'Cost', value: 'cost'},
                ],
              },
            }),
          ],
          preview: {select: {title: 'label', subtitle: 'value'}},
        }),
      ],
    }),
    defineField({
      name: 'relatedService',
      title: 'Related service',
      type: 'reference',
      to: [{type: 'service'}],
    }),
    defineField({
      name: 'relatedCases',
      title: 'Related cases',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'caseStudy'}]}],
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
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', language: 'language', subtitle: 'industry'},
    prepare: ({title, language, subtitle}) => ({
      title: title || 'Case study',
      subtitle: [language?.toUpperCase(), subtitle].filter(Boolean).join(' · '),
    }),
  },
})
