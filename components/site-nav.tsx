'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full border border-border/60 bg-background/70 px-3 sm:mx-6 sm:px-4 lg:mx-auto">
        <a href="#top" className="flex items-center gap-2.5 pl-2 font-mono text-sm font-semibold tracking-tight">
          <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
            <svg viewBox="0 0 24 24" className="size-3.5 fill-none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6L16 12L9 18" />
            </svg>
          </span>
          <span className="hidden sm:inline">kanishk.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button render={<a href="#contact" />} nativeButton={false} className="font-mono" size="sm">
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-8 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-6 mt-2 overflow-hidden rounded-2xl border border-border/60 bg-background/95 p-2 backdrop-blur-md md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-mono text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="p-1">
              <Button render={<a href="#contact" onClick={() => setOpen(false)} />} nativeButton={false} className="w-full font-mono">
                Hire Me
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}