'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function ProjectCarousel({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-lg border border-border bg-black">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`${title} preview ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Show screenshot ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`size-1.5 rounded-full transition-colors ${
                i === index ? 'bg-primary' : 'bg-primary/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}