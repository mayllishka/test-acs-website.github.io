import React, { FC } from 'react'
import { cn } from '@/utilities/ui'
import {
  CpuChipIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
  HandRaisedIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid'

type Column = {
  size: 'oneFourth' | 'half'
  icon: 'info' | 'cube' | 'code' | 'chip' | 'hand'
  title: string
  content: string
}

type Props = {
  columns: Column[]
}

const iconMap = {
  info: InformationCircleIcon,
  cube: CubeTransparentIcon,
  code: CodeBracketIcon,
  chip: CpuChipIcon,
  hand: HandRaisedIcon,
}

interface IconWithCircleProps {
  Icon: FC<React.SVGProps<SVGSVGElement>>
}

const IconWithCircle: FC<IconWithCircleProps> = ({ Icon }) => {
  return (
    <div className="rounded-full bg-[#213300] bg-blend-saturation aspect-square w-fit h-fit p-1 justify-center items-center flex">
      <Icon className="w-5 text-[#82b500] m-1" />
    </div>
  )
}

export const InfoBlock: React.FC<Props> = ({ columns }) => {

  return (
    <div className="container my-16">
      <div className="info-block grid grid-cols-4 gap-4">
        {columns.map((column, index) => {
          console.log('Rendering column:', column)
          const IconComponent = iconMap[column.icon]
          if (!IconComponent) {
            console.error('Invalid icon:', column.icon)
            return null
          }

          const colSpanClass = column.size === 'half' ? 'col-span-2' : 'col-span-1'

          return (
            <div
              key={index}
              className={cn('flex flex-col column p-10 hover:bg-slate-800 rounded-xl gap-y-5', colSpanClass)}
            >
              <IconWithCircle Icon={IconComponent} />
              <h3 className="title">{column.title}</h3>
              <p className="content">{column.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
