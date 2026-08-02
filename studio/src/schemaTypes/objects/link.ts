import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal', value: 'internal'},
          {title: 'External', value: 'external'},
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internal',
      title: 'Internal document',
      type: 'reference',
      to: [
        {type: 'homePage'},
        {type: 'aboutPage'},
        {type: 'methodologyPage'},
        {type: 'recruitmentPage'},
        {type: 'servicesIndexPage'},
        {type: 'contactPage'},
        {type: 'thankYouPage'},
        {type: 'service'},
        {type: 'insight'},
        {type: 'caseStudy'},
        {type: 'legalPage'},
      ],
      hidden: ({parent}) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']}),
      hidden: ({parent}) => parent?.linkType !== 'external',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in new tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
