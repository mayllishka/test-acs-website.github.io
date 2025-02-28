import React from 'react'

interface YoutubeLinkBlockProps {
  link: string
  width?: 'full' | 'half'
}
export const YoutubeLinkBlock: React.FC<YoutubeLinkBlockProps> = ({ link, width = 'full' }) => {

  const embedUrl = `https://www.youtube.com/embed/${link}?si=XszXFNzRFgEZCpF9`
  const widthClass = width === 'full' ? 'w-full' : 'w-1/2'
    console.log('Rendering YoutubeLinkBlock:', link)
  return (
    <div className="youtube-link-block relative grid lg:grid-cols-12 gap-y-10">
      <div
        className={`relative ${widthClass} col-span-10 col-start-2`}
        style={{ paddingTop: '56.25%' }} // 16:9 Aspect Ratio (9/16=56.25%)
      >
        <iframe
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
          className="absolute top-0 left-0 w-full h-full rounded-xl"
        ></iframe>
      </div>
    </div>
  )
}
