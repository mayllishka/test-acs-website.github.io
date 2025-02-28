import type { Block, Field } from 'payload'

import { link } from '@/fields/link'

const columnFields: Field[] = [
  {
    name: 'size',
    label: 'Größe',
    type: 'select',
    defaultValue: 'full',
    options: [
        {
            label: 'Groß',
            value: 'full',
        },
        {
            label: 'Halb',
            value: 'half',
        },
    ]  // Field name
  },
  {
    name: 'link',
    type: 'text',
    label: 'Link',
    required: true,
  }
]

  export const YoutubeLinkBlock: Block = {
    slug: 'youtubeLinkBlock',
    interfaceName: 'youtubeLinkBlock',
    fields: [
      {
        name: 'columns',
        type: 'array',
        admin: {
          initCollapsed: false,
        },
        fields: columnFields,
      },
    ],
  }

