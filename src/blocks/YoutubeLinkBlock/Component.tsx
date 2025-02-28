import React from 'react'

interface YoutubeLinkBlockProps {
  config: {
    link: string
    width?: 'full' | 'half'
    height?: string
  }
}

export const YoutubeLinkBlock: React.FC<YoutubeLinkBlockProps> = ({ config }) => {
  const { link, width = '560', height = '315' } = config

  return (
    <div className="relative grid lg:grid-cols-12 gap-y-10">
      <iframe
        width={100}
        height={height}
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
        className="rounded-xl aspect-video w-full col-span-10 col-start-2"
      ></iframe>
    </div>
  )
}
