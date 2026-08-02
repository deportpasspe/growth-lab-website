import {CogIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
      initialValue: 'Growth Lab',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp URL',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['https', 'http']}),
    }),
    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'link', title: 'Link', type: 'link'}),
          ],
          preview: {select: {title: 'label'}},
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({name: 'tagline', title: 'Tagline', type: 'text', rows: 2}),
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'link', title: 'Link', type: 'link'}),
              ],
              preview: {select: {title: 'label'}},
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Site settings'}),
  },
})
