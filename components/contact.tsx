'use client'

import { Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'

const socials = [
  { icon: GithubIcon, label: 'GitHub', handle: 'Kanishkp2906', href: 'https://github.com/Kanishkp2906' },
  { icon: XIcon, label: 'X (Twitter)', handle: '@KanishkPra65580', href: 'https://x.com/KanishkPra65580' },
  { icon: LinkedinIcon, label: 'LinkedIn', handle: 'in/kanishk-prasad', href: 'https://linkedin.com/in/kanishk-prasad-595b65312' },
  { icon: Mail, label: 'Email', handle: 'kanishkprasad6@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kanishkprasad6@gmail.com' },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-28 md:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="flex max-w-3xl flex-col gap-6">
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
                Let&apos;s build something{' '}
                <span className="font-[family-name:var(--font-accent)] text-primary">fast</span>
              </h2>
              <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                Have a backend to scale or an AI workflow to ship? I&apos;m open to freelance
                projects and full-time roles. Drop a message and I&apos;ll get back within a day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Button
              render={
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kanishkprasad6@gmail.com" target="_blank" rel="noreferrer" />
              }
              nativeButton={false}
              size="lg"
              className="group/btn font-mono"
            >
              Start a conversation
              <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {socials.map(({ icon: Icon, label, handle, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col justify-between gap-6 bg-background p-6 transition-colors duration-500 hover:bg-muted/40"
                >
                  <Icon className="size-5 text-primary transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  <div>
                    <p className="mb-1 text-sm">{label}</p>
                    <p className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                      {handle}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}