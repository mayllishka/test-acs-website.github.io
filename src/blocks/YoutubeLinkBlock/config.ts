import type { Block, Field } from 'payload'

const columnFields: Field[] = [
  {
    name: 'size',
    label: 'Größe',
    type: 'select',
    defaultValue: 'full', // Ensure this matches one of the options values
    options: [
      {
        label: 'Groß',
        value: 'full',
      },
      {
        label: 'Halb',
        value: 'half',
      },
    ],
  },
  {
    name: 'link',
    type: 'text',
    label: 'Link',
    required: true,
    index: true,
    validate: (value: any) => {
      console.log(value)
      if (!value) {
        return 'Ein Link ist erforderlich.' // Custom validation message
      }
      return true
    },
  },
]

export const YoutubeLinkBlock: Block = {
  slug: 'youtubeLinkBlock',
  interfaceName: 'YoutubeLinkBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      required: true,
      admin: {
        initCollapsed: false,
      },
      fields: columnFields,
    },
  ],
}
