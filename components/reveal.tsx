'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 32 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn('transition-all duration-[900ms] ease-out', className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translate3d(0, ${y}px, 0)`,
        transitionDelay: `${delay}ms`,
        willChange: visible ? 'auto' : 'transform, opacity',
      }}
    >
      {children}
    </div>
  )
}

type ScaleFadeProps = {
  children: ReactNode
  className?: string
  delay?: number
  from?: number
}

export function ScaleFade({ children, className, delay = 0, from = 0.82 }: ScaleFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn('overflow-visible', className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : `scale(${from})`,
        transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1), opacity 0.8s ease',
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  )
}