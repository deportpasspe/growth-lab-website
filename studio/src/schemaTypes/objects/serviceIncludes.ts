import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceIncludes',
  title: 'Service includes',
  type: 'object',
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      initialValue: 'splitImage',
      options: {
        list: [
          {title: 'Dual columns', value: 'dualColumns'},
          {title: 'Split with image', value: 'splitImage'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Lo que incluye el proceso.',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'secondaryHeading',
      title: 'Secondary heading',
      type: 'string',
      hidden: ({parent}) => parent?.layout !== 'dualColumns',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const layout = (context.parent as {layout?: string} | undefined)?.layout
          if (layout === 'dualColumns' && !value) {
            return 'Secondary heading is required for dual columns layout'
          }
          return true
        }),
    }),
    defineField({
      name: 'secondaryItems',
      title: 'Secondary items',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      hidden: ({parent}) => parent?.layout !== 'dualColumns',
      validation: (Rule) =>
        Rule.custom((items, context) => {
          const layout = (context.parent as {layout?: string} | undefined)?.layout
          if (layout === 'dualColumns' && (!items || items.length < 1)) {
            return 'At least one secondary item is required for dual columns layout'
          }
          return true
        }),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      hidden: ({parent}) => parent?.layout !== 'splitImage',
      fields: [defineField({name: 'alt', type: 'string', title: 'Alt text'})],
    }),
  ],
  preview: {
    select: {title: 'heading', layout: 'layout'},
    prepare: ({title, layout}) => ({title: title || 'Service includes', subtitle: layout}),
  },
})
