import React from 'react'
import { cn } from '@/utilities/ui'


type Column = {
  size: 'oneFourth' | 'half'
  icon: 'info' | 'phone' | 'code' | 'chip' | 'hand'
  title: string
  content: string
}

type Props = {
  columns: Column[]
}

export const InfoBlock: React.FC<Props> = ({ columns }) => {
  return (
    <></>
  )
}
