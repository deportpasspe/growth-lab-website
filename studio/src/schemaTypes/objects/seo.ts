import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      validation: (Rule) =>
        Rule.max(60).warning('Meta titles over 60 characters may be truncated.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.max(160).warning('Meta descriptions over 160 characters may be truncated.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social share image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
})
