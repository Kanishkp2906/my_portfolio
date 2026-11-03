'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(
        'motion-spring',
        className
      )}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0, 0, 0)' : `translate3d(0, ${y}px, 0)`,
        transitionDelay: `${delay}ms`,
        willChange: visible ? 'auto' : 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}

type ScaleFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: number;
  once?: boolean;
};

export function ScaleFade({
  children,
  className,
  delay = 0,
  from = 0.92,
  once = true,
}: ScaleFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn('motion-spring-slow', className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : `scale(${from})`,
        transitionDelay: `${delay}ms`,
        willChange: visible ? 'auto' : 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  baseDelay?: number;
  stagger?: number;
};

export function Stagger({ children, className, baseDelay = 0, stagger = 80 }: StaggerProps) {
  const childArray = Array.isArray(children) ? children : [children];
  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <Reveal key={index} delay={baseDelay + index * stagger} y={20}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}