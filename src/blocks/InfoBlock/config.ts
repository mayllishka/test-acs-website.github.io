import type { Block, Field } from 'payload'

import { link } from '@/fields/link'

const columnFields: Field[] = [
  {
    name: 'size',
    label: 'Größe',
    type: 'select',
    defaultValue: 'oneFourth',
    options: [
      {
        label: '1/4',
        value: 'oneFourth',
      },
      {
        label: '1/2',
        value: 'half',
      },
    ],
  },
  {
    name: 'icon',
    type: 'radio',
    label: 'Icon',
    options: [
      { label: 'Info', value: 'info' },
      { label: 'Würfel', value: 'phone' },
      { label: 'Code', value: 'code' },
      { label: 'Chip', value: 'chip' },
      { label: 'Hand', value: 'hand' },
    ],
    defaultValue: 'cube',
  },
  {
    name: 'title',
    type: 'text',
    label: 'Titel',
    maxLength: 25,
  },
  {
    name: 'content',
    type: 'text',
    label: 'Inhalt',
    maxLength: 150,
  },
]

export const InfoBlock: Block = {
  slug: 'infoBlock',
  interfaceName: 'infoBlock',
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
